import "./MemoryPolaroid.css";
import polaroidFrame from "../../assets/Image Frames/Polaroid Draft 1.png";

export default function MemoryPolaroid({ image, drifting, initialTilt = -3, swayDuration = 8 }) {
  // Use a slight variation on the tilt to create the sway effect dynamically
  const targetTilt = initialTilt > 0 ? initialTilt - 2 : initialTilt + 2;

  return (
    <div 
      className={`memory-polaroid ${drifting ? 'sway' : ''}`}
      style={{
        '--start-tilt': `${initialTilt}deg`,
        '--mid-tilt': `${targetTilt}deg`,
        animationDuration: `${swayDuration}s`,
        transform: drifting ? undefined : `rotate(${initialTilt}deg)`
      }}
    >
      <img className="polaroid-photo" src={image} alt="Memory" />
      <img className="polaroid-frame" src={polaroidFrame} alt="Polaroid frame" />
    </div>
  );
}
