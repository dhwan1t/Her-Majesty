import "./App.css";
import { useEffect, useState } from "react";


export default function App() {
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
    <main className="landing">
      
      <div className="cursor-star" style={{ top: position.y, left: position.x }} >✦</div>
      
      <section className="landing-content">
        <p className="eyebrow">
          A place built for
        </p>

        <h1 className="title">
          Her Majesty
        </h1>

        <p className="subtitle">
          Somewhere between memory and music
        </p>
      </section>
    </main>
  );
}