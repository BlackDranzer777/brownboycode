import styles from "./About.module.css";
import { IconFootball, IconBook, IconCamera, IconHandshake } from "@/components/Icons/Icons";

const pillars = [
  { icon: <IconFootball />, label: "Football", note: "CR7 only" },
  { icon: <IconBook />, label: "Books", note: "always reading" },
  { icon: <IconCamera />, label: "Life", note: "real & raw" },
  { icon: <IconHandshake />, label: "Collabs", note: "brands & people" },
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>who is this guy?</h2>
          <svg viewBox="0 0 220 12" className={styles.underline}>
            <path d="M2,8 Q30,2 60,8 Q90,14 120,6 Q150,0 180,7 Q200,11 218,6"
              stroke="var(--accent)" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className={styles.body}>
          <div className={styles.bioBlock}>
            <p className={styles.bio}>
              Hey, I&apos;m Kunal — a content creator from India with <span className={styles.mark}>100K+</span> followers
              on Instagram. I don&apos;t have a niche, and that&apos;s the point.
            </p>
            <p className={styles.bio}>
              I make stuff about <span className={styles.mark}>football</span> (Ronaldo is the GOAT, not up for debate),
              the <span className={styles.mark}>books</span> I can&apos;t put down, and just honest
              slices of <span className={styles.mark}>everyday life</span>.
            </p>
            <p className={styles.bio}>
              Real. Unfiltered. Sometimes chaotic. Always me.
            </p>
          </div>

          <div className={styles.pillars}>
            {pillars.map((p) => (
              <div key={p.label} className={styles.pillar}>
                <span className={styles.icon}>{p.icon}</span>
                <span className={styles.pillarLabel}>{p.label}</span>
                <span className={styles.pillarNote}>{p.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
