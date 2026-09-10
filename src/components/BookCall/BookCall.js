import styles from "./BookCall.module.css";
import { IconPlane, IconCamera, IconBook, IconHandshake } from "@/components/Icons/Icons";

// What people actually book me for. Edit freely.
const perks = [
  { icon: <IconPlane color="var(--accent)" size={22} />,     text: "Where to take your life next" },
  { icon: <IconCamera color="var(--accent)" size={22} />,    text: "Content creation, end to end" },
  { icon: <IconBook color="var(--accent)" size={22} />,      text: "Mindset — the unglamorous part" },
  { icon: <IconHandshake color="var(--accent)" size={22} />, text: "Webinars for your team" },
];

export default function BookCall() {
  return (
    <section className={styles.section} id="call">
      <div className={styles.inner}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>let&apos;s talk,<br />just us.</h2>
          <svg viewBox="0 0 180 12" className={styles.underline}>
            <path d="M2,8 Q35,2 70,9 Q110,15 145,5 Q160,2 178,7"
              stroke="var(--accent-yellow)" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
          <p className={styles.desc}>
            Not every conversation needs a contract. Book a 1-on-1 and we can go
            into content, mindset, what to do next — or bring me in to run a
            webinar for your whole team.
          </p>

          <ul className={styles.perks}>
            {perks.map((p) => (
              <li key={p.text} className={styles.perkItem}>
                <span className={styles.perkIcon}>{p.icon}</span>
                {p.text}
              </li>
            ))}
          </ul>

          <a
            href="https://topmate.io/brownboycode"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            book on topmate.io →
          </a>
        </div>

        <div className={styles.visual}>
          <svg viewBox="0 0 300 260" className={styles.bubble}>
            <path
              d="M20,20 Q20,10 30,10 L270,10 Q280,10 280,20 L280,180 Q280,190 270,190 L160,190 L140,220 L120,190 L30,190 Q20,190 20,180 Z"
              fill="var(--accent-yellow)"
              stroke="var(--ink)"
              strokeWidth="3"
            />
            <text x="50%" y="80" textAnchor="middle" fontFamily="var(--font-hand)" fontSize="28" fontWeight="700" fill="var(--ink)">got something</text>
            <text x="50%" y="115" textAnchor="middle" fontFamily="var(--font-hand)" fontSize="28" fontWeight="700" fill="var(--ink)">on your mind?</text>
            <text x="50%" y="160" textAnchor="middle" fontFamily="var(--font-hand)" fontSize="20" fill="var(--ink)">let&apos;s talk.</text>
          </svg>

          <div className={styles.tomateBadge}>
            <span>via</span>
            <strong>topmate.io</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
