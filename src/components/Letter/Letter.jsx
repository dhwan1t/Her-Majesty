import { useEffect, useRef, useState } from "react";
import "./Letter.css";
import ChapterSection from "../ChapterSection/ChapterSection";

export default function Letter() {
  const sectionRef = useRef(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handlePressPlay = () => {
    const ch3 = document.getElementById("chapter-three");
    if (ch3) ch3.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ChapterSection id="chapter-two-half" className="letter-chapter">
      <div className={`letter-container ${entered ? "entered" : ""}`} ref={sectionRef}>

        <p className="letter-eyebrow">Chapter II½</p>
        <h2 className="letter-title">A Letter.</h2>
        <span className="letter-star" aria-hidden="true">✦</span>

        <article className="letter-paper">
          <p className="letter-body">My dearest Bubba,</p>

          <p className="letter-body">
            It still amazes me how quickly six months became filled with memories that now feel like
            they have always belonged to me. Somewhere between our late-night conversations, the
            little jokes only we understand, and the countless ordinary moments that somehow became
            extraordinary because you were there, you quietly became one of the most important parts
            of my life. Looking back, I don&apos;t think I could have imagined someone who would make
            even the simplest days feel so much warmer.
          </p>

          <p className="letter-body">
            We&apos;ve had our fair share of highs and lows. We&apos;ve laughed until nothing else
            mattered, we&apos;ve misunderstood each other, we&apos;ve grown, stumbled, apologized, and
            learned together. None of it makes me wish for a different story—it only makes me
            appreciate ours even more. Every challenge we&apos;ve faced has reminded me that what we
            have is worth choosing again and again. Through every version of us, I&apos;ve never
            stopped wanting to be on your side.
          </p>

          <p className="letter-body">
            So today isn&apos;t just about wishing you a happy birthday. It&apos;s about celebrating
            you—the kindness you carry, the joy you bring into every room, and the comfort you&apos;ve
            unknowingly become in my own life. Thank you for letting me be part of your story. I
            don&apos;t know what the future has written for us, but if I have any say in it, I&apos;d
            love to keep walking beside you for a very, very long time.
          </p>

          <p className="letter-body">Happy Birthday, Bubba.</p>

          <p className="letter-signoff">
            With all my love,
            <br />
            <span className="letter-signature">Dhwanit</span>
          </p>
        </article>

        <button className="letter-next" onClick={handlePressPlay}>
          <span className="letter-next-star" aria-hidden="true">✦</span>
          <span>Let&apos;s press play.</span>
          <span className="letter-next-arrow" aria-hidden="true">↓</span>
        </button>

      </div>
    </ChapterSection>
  );
}
