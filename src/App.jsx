import { useRef, useState, useEffect } from "react";
import "./App.css";
import Cursor from "./components/Cursor/Cursor";
import MemoryWall from "./components/MemoryWall/MemoryWall";
import Hero from "./components/Hero/Hero";
import IntroSequence from "./components/IntroSequence/IntroSequence";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import ScrollPrompt from "./components/ScrollPrompt/ScrollPrompt";
import ChapterThree from "./components/ChapterThree/ChapterThree";
import introSong from "./assets/songs/using/hermaj-introfadein_[cut_27sec].mp3";

export default function App() {
  const musicPlayerRef = useRef(null);

  // State progression: 
  // "gift" -> "opening" -> "landing-entering" -> "landing" -> "music-playing" -> "music-finished" -> "scroll-prompt" -> "scroll-unlocked"
  const [storyState, setStoryState] = useState("gift");

  const handleAudioStart = () => {
    musicPlayerRef.current?.play();
    setStoryState("landing-entering");
  };

  const handleIntroComplete = () => {
    // Intro unmounts, hero prepares to fade in
    setStoryState("landing");
    setTimeout(() => {
      setStoryState("music-playing");
    }, 2500);
  };

  const handleMusicEnded = () => {
    setStoryState("music-finished");
    
    // Wait 1 second before showing the prompt
    setTimeout(() => {
      setStoryState("scroll-prompt");
      
      // Wait for the prompt to softly fade in before unlocking scroll
      setTimeout(() => {
        setStoryState("scroll-unlocked");
      }, 4000); 
    }, 1000);
  };

  // Only allow scrolling once we have reached the end of Chapter Two
  useEffect(() => {
    if (storyState === "scroll-unlocked") {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
    
    return () => {
      document.body.style.overflowY = "auto"; // Clean up just in case
    };
  }, [storyState]);

  // Derived states to maintain component cleanliness
  const isIntroActive = storyState === "gift" || storyState === "opening" || storyState === "landing-entering";
  const isWallVisible = storyState !== "gift" && storyState !== "opening";
  const isHeroVisible = storyState === "music-playing" || storyState === "music-finished" || storyState === "scroll-prompt" || storyState === "scroll-unlocked";
  const isPromptVisible = storyState === "scroll-prompt" || storyState === "scroll-unlocked";
  const isChapterThreeVisible = storyState === "scroll-unlocked" || storyState === "scroll-prompt"; // Pre-render underneath early

  return (
    <main className="app-root">
      <Cursor visible={!isIntroActive} />
      
      <MusicPlayer 
        ref={musicPlayerRef} 
        src={introSong} 
        onEnded={handleMusicEnded} 
      />

      <section className="chapter-two-landing">
        {isIntroActive && (
          <IntroSequence 
            onAudioStart={handleAudioStart} 
            onComplete={handleIntroComplete} 
          />
        )}

        <MemoryWall visible={isWallVisible} />
        <Hero visible={isHeroVisible} />
        <ScrollPrompt visible={isPromptVisible} />
      </section>

      {/* Chapter 3 will sit below Chapter 2, revealed only when the user chooses to scroll */}
      {isChapterThreeVisible && <ChapterThree />}
      
    </main>
  );
}
