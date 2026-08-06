import "./Turntable.css";
import { useMusic } from "../MusicPlayer/MusicPlayer";

export default function Turntable({ song, phase = "idle" }) {
  const { play, pause, isPlaying, currentTrack, duration } = useMusic();
  const isActive = currentTrack === song.audio;
  const playing = isActive && isPlaying;
  const loaded = isActive;
  const transitioning = phase !== "idle";

  const vinylState = transitioning
    ? phase === "lift" ? "spinning"
      : phase === "slow" ? "slow"
      : "settled"
    : (playing ? "spinning" : "settled");

  const armDown = loaded && !transitioning;
  const trackTime = duration > 0 ? duration : 240;

  const handleVinylClick = () => {
    if (transitioning) return;
    if (isActive && isPlaying) {
      pause();
    } else {
      play(song.audio);
    }
  };

  return (
    <div className={`turntable ${playing ? "is-on" : ""}`}>
      <div className="turntable-base">
        <div className="platter-area">
          <div className="platter" />
          <div className={`vinyl-rail ${phase === "swap-out" ? "swap-out" : ""} ${phase === "swap-in" ? "swap-in" : ""}`}>
            <div
              className={`vinyl ${vinylState}`}
              onClick={handleVinylClick}
              role="button"
              aria-label={`Play ${song.title}`}
            >
              <div className="vinyl-grooves" />
              <div className="vinyl-grooves grooves-two" />
              <div className="vinyl-highlight" />
              <div className="vinyl-reflection" />
              <div className="centre-label" style={{ background: song.label }}>
                <span className="label-text">Side A</span>
              </div>
              <div className="vinyl-spindle-hole" />
            </div>
          </div>
          <div className="platter-spindle" />
        </div>

        <div
          className={`tonearm ${armDown ? "down" : "up"} ${armDown ? "tracking" : ""} ${loaded && !isPlaying && !transitioning ? "paused" : ""}`}
          style={armDown ? { "--track-dur": `${trackTime}s` } : undefined}
        >
          <div className="tonearm-arm" />
          <div className="tonearm-counterweight" />
          <div className="tonearm-headshell" />
          <div className="tonearm-stylus" />
          <div className="tonearm-contact" />
          <div className="tonearm-pivot" />
        </div>

        <div className="turntable-power" />
      </div>
    </div>
  );
}