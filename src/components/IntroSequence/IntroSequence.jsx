import { useState, useEffect } from "react";
import "./IntroSequence.css";
import vinylFrame from "../../assets/Image Frames/Vinyl Draft 4.png";

export default function IntroSequence({ onAudioStart, onComplete }) {
  const [phase, setPhase] = useState("closed"); 
  // phases: 'closed' -> 'opening' -> 'sleeve-rising' -> 'vinyl-sliding' -> 'vinyl-rotating' -> 'fade-out'

  const handleOpen = () => {
    if (phase !== "closed") return;
    
    setPhase("opening");

    // Timeline matches CSS animations
    setTimeout(() => {
      setPhase("sleeve-rising");
    }, 1500);

    setTimeout(() => {
      setPhase("vinyl-sliding");
    }, 3500);

    setTimeout(() => {
      setPhase("vinyl-rotating");
      onAudioStart();
    }, 5000);

    setTimeout(() => {
      setPhase("fade-out");
      onComplete();
    }, 6000); // Trigger landing page crossfade
  };

  return (
    <div className={`intro-container ${phase === 'fade-out' ? 'hidden' : ''}`}>
      
      {/* Warm Golden Light */}
      <div className={`golden-light ${phase !== 'closed' ? 'glowing' : ''}`} />

      {/* The Gift Box */}
      <div className={`gift-box ${phase !== 'closed' ? 'open' : ''}`} onClick={handleOpen}>
        
        <div className={`gift-lid ${phase !== 'closed' ? 'lifted' : ''}`}>
          <div className={`ribbon-vertical ${phase !== 'closed' ? 'loose' : ''}`} />
          <div className={`ribbon-horizontal ${phase !== 'closed' ? 'loose' : ''}`} />
        </div>
        
        <div className="gift-base">
          <div className="ribbon-vertical-base" />
        </div>

        {/* Gift Tag */}
        <div className={`gift-tag ${phase !== 'closed' ? 'falling' : ''}`}>
          <p className="handwritten">To,</p>
          <p className="handwritten name">Her Majesty</p>
          <p className="handwritten">With love.</p>
        </div>

        {/* Contents inside the box */}
        <div className="box-contents">
          
          <div className={`record-sleeve ${
            phase === 'sleeve-rising' || phase === 'vinyl-sliding' || phase === 'vinyl-rotating' || phase === 'fade-out' ? 'rising' : ''
          }`}>
            <div className="sleeve-label">APPLE CORPS LTD.</div>
            <div className="sleeve-hole">
              <div className={`intro-vinyl ${
                phase === 'vinyl-sliding' || phase === 'vinyl-rotating' || phase === 'fade-out' ? 'sliding' : ''
              } ${phase === 'vinyl-rotating' || phase === 'fade-out' ? 'rotating' : ''}`}>
                <img src={vinylFrame} alt="Intro Vinyl" />
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}
