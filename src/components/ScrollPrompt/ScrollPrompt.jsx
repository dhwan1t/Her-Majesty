import "./ScrollPrompt.css";

export default function ScrollPrompt({ visible }) {
  return (
    <div className={`scroll-prompt ${visible ? 'visible' : ''}`}>
      <p>Shall we walk through our memories?</p>
      <div className="scroll-indicator">↓</div>
    </div>
  );
}
