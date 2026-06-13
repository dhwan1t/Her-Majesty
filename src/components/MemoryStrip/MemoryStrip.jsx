import "./MemoryStrip.css";
import MemoryVinyl from "../MemoryVinyl/MemoryVinyl";
import MemoryPolaroid from "../MemoryPolaroid/MemoryPolaroid";
import { photos } from "../../data/photoRegistry";

export default function MemoryStrip({ strip, isVisible }) {
  const { direction, speed, delay, items, left, right } = strip;
  const doubledItems = [...items, ...items];

  return (
    <div 
      className={`memory-strip-container ${isVisible ? 'fade-in' : ''}`} 
      style={{ 
        transitionDelay: `${Math.abs(delay) * 0.1}s`,
        left: left,
        right: right
      }}
    >
      <div
        className={`memory-strip ${isVisible ? 'drifting' : ''}`}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "up" ? "normal" : "reverse",
          animationDelay: `${delay}s`
        }}
      >
        {doubledItems.map((item, index) => {
          const Component = item.type === "vinyl" ? MemoryVinyl : MemoryPolaroid;
          const imageSrc = photos[item.image];

          return (
            <div 
              className="memory-item-wrapper" 
              key={`${item.id}-${index}`}
              style={{ transform: `translateX(${item.offsetX || 0}px)` }}
            >
              <Component 
                image={imageSrc} 
                rotating={isVisible} 
                drifting={isVisible} 
                initialRotation={item.rot}
                spinDuration={item.spinDur}
                initialTilt={item.tilt}
                swayDuration={item.swayDur}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
