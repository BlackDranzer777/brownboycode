import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <svg className={styles.doodleStar} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 5 L33 25 L53 25 L37 37 L43 57 L30 45 L17 57 L23 37 L7 25 L27 25 Z"
          fill="var(--accent-yellow)" stroke="var(--ink)" strokeWidth="2" />
      </svg>

      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p className={styles.handle}>@brownboycode</p>
          <h1 className={styles.name}>Kunal<br />Dutt</h1>
          <p className={styles.tagline}>
            Football. Books. Life.<br />
            <span className={styles.highlight}>& everything in between.</span>
          </p>
          <div className={styles.badge}>
            <svg viewBox="0 0 100 30" className={styles.badgeSvg}>
              <path d="M5,15 Q10,5 20,8 Q30,2 40,10 Q50,4 60,9 Q70,3 80,8 Q90,5 95,15 Q90,25 80,22 Q70,28 60,21 Q50,27 40,20 Q30,27 20,22 Q10,26 5,15 Z"
                fill="var(--accent-yellow)" stroke="var(--ink)" strokeWidth="1.5" />
            </svg>
            <span>100K+ followers</span>
          </div>
          <div className={styles.ctas}>
            <a href="#call" className={styles.btnPrimary}>Book a 1-1 Call →</a>
            <a href="#collab" className={styles.btnSecondary}>Work With Me →</a>
          </div>
        </div>

        <div className={styles.imageBlock}>
          <div className={styles.imageWrapper}>
            <Image
              src="/kunal.jpeg"
              alt="Kunal Dutt"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              priority
            />
          </div>
          {/* Hand-drawn annotation */}
          <svg className={styles.annotation} viewBox="0 0 110 55" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="20" fontFamily="var(--font-hand)" fontSize="16" fill="var(--ink)" transform="rotate(-6 5 20)">that&apos;s me!</text>
            {/* simple curved arrow pointing down-right toward the image */}
            <path d="M 60,24 Q 72,32 68,44" stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round"/>
            {/* hand-drawn arrowhead */}
            <path d="M 62,42 L 68,44 L 70,37" stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {/* CR7 fan badge */}
          <div className={styles.cr7Badge}>
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:16,height:16,flexShrink:0}}>
              <circle cx="8" cy="8" r="6.5" stroke="#fff" strokeWidth="1.5"/>
              <polygon points="8,5 9,6.5 8.5,8.5 7.5,8.5 7,6.5" stroke="#fff" strokeWidth="1" fill="#fff"/>
              <line x1="8" y1="5" x2="8" y2="1.5" stroke="#fff" strokeWidth="1" strokeLinecap="round"/>
              <line x1="9" y1="6.5" x2="13" y2="5" stroke="#fff" strokeWidth="1" strokeLinecap="round"/>
              <line x1="8.5" y1="8.5" x2="11" y2="12" stroke="#fff" strokeWidth="1" strokeLinecap="round"/>
              <line x1="7.5" y1="8.5" x2="5" y2="12" stroke="#fff" strokeWidth="1" strokeLinecap="round"/>
              <line x1="7" y1="6.5" x2="3" y2="5" stroke="#fff" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            CR7 fan
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <p className={styles.scrollHint}>scroll down ↓</p>
    </section>
  );
}
