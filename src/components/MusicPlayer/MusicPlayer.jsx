import { forwardRef, useImperativeHandle, useRef, useState, useEffect } from "react";

const MusicPlayer = forwardRef(({ src, onEnded, onTimeUpdate }, ref) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  useImperativeHandle(ref, () => ({
    play: () => {
      audioRef.current?.play().catch(err => console.error("Audio playback failed:", err));
      setIsPlaying(true);
    },
    pause: () => {
      audioRef.current?.pause();
      setIsPlaying(false);
    },
    stop: () => {
      if (audioRef.current) {
         audioRef.current.pause();
         audioRef.current.currentTime = 0;
         setIsPlaying(false);
      }
    },
    seek: (time) => {
      if (audioRef.current) audioRef.current.currentTime = time;
    },
    get duration() { return duration; },
    get currentTime() { return audioRef.current?.currentTime || 0; }
  }));

  useEffect(() => {
     const audio = audioRef.current;
     if (!audio) return;

     const handleTimeUpdate = () => {
         if (onTimeUpdate) onTimeUpdate(audio.currentTime);
     };
     const handleDurationChange = () => setDuration(audio.duration);
     const handleEnded = () => {
        setIsPlaying(false);
        if (onEnded) onEnded();
     };

     audio.addEventListener("timeupdate", handleTimeUpdate);
     audio.addEventListener("durationchange", handleDurationChange);
     audio.addEventListener("ended", handleEnded);

     return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("durationchange", handleDurationChange);
        audio.removeEventListener("ended", handleEnded);
     };
  }, [onEnded, onTimeUpdate]);

  return <audio ref={audioRef} src={src} style={{ display: 'none' }} />;
});

MusicPlayer.displayName = "MusicPlayer";
export default MusicPlayer;
