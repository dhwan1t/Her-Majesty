import "./Hero.css";

export default function Hero({ visible }) {
  return (
    <section className={`landing-content ${visible ? 'visible' : ''}`}>
      <p className="eyebrow">To my dearest,</p>
      <h1 className="title">Bubba</h1>
      <p className="subtitle">A few moments, kept warm, just for you.</p>
    </section>
  );
}
