import "./App.css";
import { useEffect, useState, useRef } from "react";
import introSong from "./assets/songs/using/hermaj-introfadein_[cut_27sec].mp3";
import vinylFrame from "./assets/Image Frames/Vinyl Draft 4.png";
import testPhoto1 from "./assets/Image Majesty/test1.jpg";

import polaroidFrame from "./assets/Image Frames/Polaroid Draft 1.png";
import testPhoto2 from "./assets/Image Majesty/test1.jpg";


export default function App() {
  const audioRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMove = (e) => {
      // setPosition({
      //   x: e.clientX,
      //   y: e.clientY,
      // });
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
      if (!hasStarted && audioRef.current) {
        setHasStarted(true);
        audioRef.current.play();
      }
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  useEffect(() => {
    let frameId;

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.08,
        y: prev.y + (mouse.y - prev.y) * 0.08,
      }));

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, [mouse]);

  return (
    <main
      className="landing"
      onClick={() => {
        audioRef.current.play();
      }}
    >
      <div
        className="cursor-star"
        style={{ top: position.y, left: position.x }}
      >
        ✦
      </div>

      <div className="test-vinyl">
      
        <div className="vinyl-rotating">
          <img
            className="vinyl-frame"
            src={vinylFrame}
            alt=""
          />
        </div>
      
        <img
          className="vinyl-photo"
          src={testPhoto1}
          alt=""
        />
      </div>

      <div className="test-polaroid">
      
        <img
          className="polaroid-photo"
          src={testPhoto2}
          alt=""
        />
      
        <img
          className="polaroid-frame"
          src={polaroidFrame}
          alt=""
        />
      
      </div>

      <section className="landing-content">
        <p className="eyebrow">A place built for</p>

        <h1 className="title">Her Majesty</h1>

        <p className="subtitle">Somewhere between memory and music</p>
      </section>

      <audio ref={audioRef} src={introSong} />
    </main>
  );
}
