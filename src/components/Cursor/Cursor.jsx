import { useEffect, useState } from "react";
import "./Cursor.css";

export default function Cursor({ visible }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
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

  if (!visible) return null;

  return (
    <div
      className="cursor-star"
      style={{ top: position.y, left: position.x }}
    >
      ✦
    </div>
  );
}
