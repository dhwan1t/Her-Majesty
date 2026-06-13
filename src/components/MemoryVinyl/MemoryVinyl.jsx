import "./MemoryVinyl.css";
import vinylFrame from "../../assets/Image Frames/Vinyl Draft 4.png";

export default function MemoryVinyl({ image, rotating, initialRotation = 0, spinDuration = 20 }) {
  return (
    <div className="memory-vinyl">
      <div 
        className={`vinyl-rotating ${rotating ? 'spin' : ''}`}
        style={{
          '--start-deg': `${initialRotation}deg`,
          '--end-deg': `${initialRotation + 360}deg`,
          animationDuration: `${spinDuration}s`,
          transform: rotating ? undefined : `rotate(${initialRotation}deg)`
        }}
      >
        <img className="vinyl-frame" src={vinylFrame} alt="Vinyl frame" />
      </div>
      <img className="vinyl-photo" src={image} alt="Memory" />
      <div className="vinyl-reflection" />
      <div className="vinyl-dust" />
    </div>
  );
}
