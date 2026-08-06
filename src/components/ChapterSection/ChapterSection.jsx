import "./ChapterSection.css";

export default function ChapterSection({ id, className = "", children }) {
  return (
    <section id={id} className={`chapter-section ${className}`}>
      {children}
    </section>
  );
}
