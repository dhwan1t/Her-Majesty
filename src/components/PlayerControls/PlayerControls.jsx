import "./PlayerControls.css";
import { useMusic } from "../MusicPlayer/MusicPlayer";

const formatTime = (time) => {
  if (!time || isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export default function PlayerControls({ song, onPrev, onNext }) {
  const { play, pause, isPlaying, currentTime, duration, progress, currentTrack } = useMusic();
  const isActive = currentTrack === song.audio;
  const playing = isActive && isPlaying;

  const togglePlay = () => {
    if (playing) {
      pause();
    } else {
      play(song.audio);
    }
  };

  return (
    <div className="player-controls">
      <div className="now-playing">
        <span className="now-playing-label">Now Playing</span>
        <span className="player-title">{song.title}</span>
        <span className="player-artist">{song.artist}</span>
      </div>

      <div className="controls-row">
        <button className="control-btn prev" onClick={onPrev} aria-label="Previous song">&#8249;</button>
        <button className="control-btn play" onClick={togglePlay} aria-label="Play or pause">
          {playing ? "❚❚" : "▶"}
        </button>
        <button className="control-btn next" onClick={onNext} aria-label="Next song">&#8250;</button>
      </div>

      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="time-row">
        <span className="time-elapsed">Elapsed {formatTime(currentTime)}</span>
        <span className="time-duration">Duration {formatTime(duration)}</span>
      </div>
    </div>
  );
}