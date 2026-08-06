import { createContext, useContext, useRef, useState, useEffect } from "react";

const MusicContext = createContext(null);

export function MusicPlayerProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(null);

  const play = (trackSrc) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (trackSrc && trackSrc !== currentTrack) {
      audio.src = trackSrc;
      setCurrentTrack(trackSrc);
      audio.load();
    }
    
    audio.play().then(() => setIsPlaying(true)).catch(err => console.error("Audio playback failed:", err));
  };

  const pause = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const stop = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const seek = (time) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = time;
      setCurrentTime(time);
    }
  };

  useEffect(() => {
     const audio = audioRef.current;
     if (!audio) return;

     const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
     const handleDurationChange = () => setDuration(audio.duration);
     const handleEnded = () => {
        setIsPlaying(false);
        // Dispatch global event so non-context or decoupled listeners can respond
        window.dispatchEvent(new Event('music-ended'));
     };

     audio.addEventListener("timeupdate", handleTimeUpdate);
     audio.addEventListener("durationchange", handleDurationChange);
     audio.addEventListener("ended", handleEnded);

     return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("durationchange", handleDurationChange);
        audio.removeEventListener("ended", handleEnded);
     };
  }, []);

  const progress = duration > 0 ? currentTime / duration : 0;

  const value = {
    play, pause, stop, seek, isPlaying, duration, currentTime, progress, currentTrack
  };

  return (
    <MusicContext.Provider value={value}>
      <audio ref={audioRef} style={{ display: 'none' }} />
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}
