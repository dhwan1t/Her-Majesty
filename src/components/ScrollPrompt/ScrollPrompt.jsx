import "./ScrollPrompt.css";

export default function ScrollPrompt({ visible, onClick }) {
  return (
    <div 
      className={`scroll-prompt ${visible ? 'visible' : ''}`}
      onClick={onClick}
    >
      <p>Shall we walk through?</p>
      <div className="scroll-indicator">↓</div>
    </div>
  );
}
