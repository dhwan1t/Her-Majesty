import { useState, useEffect, useRef, useCallback } from "react";
import "./ChapterThree.css";
import ChapterSection from "../ChapterSection/ChapterSection";
import Turntable from "../Turntable/Turntable";
import PlayerControls from "../PlayerControls/PlayerControls";
import Playlist from "../Playlist/Playlist";
import { songs } from "../../data/songs";
import { useMusic } from "../MusicPlayer/MusicPlayer";

const SWAP_IN_MS = 250;
const SLIDE_MS = 450;
const AUTO_LIFT_MS = 250;

export default function ChapterThree() {
  const { play, pause } = useMusic();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState("idle");

  const indexRef = useRef(0);
  const transitioningRef = useRef(false);
  const timeoutsRef = useRef([]);
  const playRef = useRef(play);
  const pauseRef = useRef(pause);

  useEffect(() => {
    playRef.current = play;
  }, [play]);

  useEffect(() => {
    pauseRef.current = pause;
  }, [pause]);

  useEffect(() => () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const runTrackTransition = useCallback((nextIndex, auto = false) => {
    if (transitioningRef.current) return;
    transitioningRef.current = true;

    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    if (!auto) pauseRef.current();

    if (auto) setPhase("lift");

    const offset = auto ? AUTO_LIFT_MS : 0;

    timeoutsRef.current.push(
      setTimeout(() => setPhase("swap-out"), offset),
      setTimeout(() => {
        setPhase("swap-in");
        indexRef.current = nextIndex;
        setCurrentIndex(nextIndex);
      }, offset + SWAP_IN_MS),
      setTimeout(() => {
        setPhase("idle");
        transitioningRef.current = false;
        playRef.current(songs[nextIndex].audio);
      }, offset + SWAP_IN_MS + SLIDE_MS),
    );
  }, []);

  const handleMusicEnded = useCallback(() => {
    if (songs.length < 2) return;
    const nextIndex = (indexRef.current + 1) % songs.length;
    runTrackTransition(nextIndex, true);
  }, [runTrackTransition]);

  useEffect(() => {
    window.addEventListener("music-ended", handleMusicEnded);
    return () => window.removeEventListener("music-ended", handleMusicEnded);
  }, [handleMusicEnded]);

  const handleSelect = (index) => {
    if (index === indexRef.current) return;
    runTrackTransition(index, false);
  };

  const handlePrev = () => {
    runTrackTransition((indexRef.current - 1 + songs.length) % songs.length, false);
  };

  const handleNext = () => {
    runTrackTransition((indexRef.current + 1) % songs.length, false);
  };

  const currentSong = songs[currentIndex];

  return (
    <ChapterSection id="chapter-three" className="chapter-three">
      <div className="chapter-three-content">

        <div className="soundtrack-header">
          <h2 className="chapter-title">Chapter III</h2>
          <p className="chapter-subtitle">Your Soundtrack</p>
        </div>

        <div className="soundtrack-body">
          <div className="player-column">
            <Turntable song={currentSong} phase={phase} />
            <PlayerControls
              song={currentSong}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </div>

          <div className="playlist-panel">
            <Playlist
              songs={songs}
              currentIndex={currentIndex}
              onSelect={handleSelect}
            />
          </div>
        </div>

      </div>
    </ChapterSection>
  );
}