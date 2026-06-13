import "./MemoryWall.css";
import MemoryStrip from "../MemoryStrip/MemoryStrip";
import { memoryStrips } from "../../data/memoryData";

export default function MemoryWall({ visible }) {
  return (
    <div className="memory-wall">
      <div className="memory-wall-overlay" />
      {memoryStrips.map((strip) => (
        <MemoryStrip
          key={strip.id}
          strip={strip}
          isVisible={visible}
        />
      ))}
    </div>
  );
}
