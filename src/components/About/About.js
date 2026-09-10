import styles from "./About.module.css";
import { IconPlane, IconCamera, IconFootball, IconHandshake } from "@/components/Icons/Icons";

// The credibility markers. Edit the label/note pairs freely.
const pillars = [
  { icon: <IconPlane />,     label: "10 yrs in Europe", note: "the market, first-hand" },
  { icon: <IconCamera />,    label: "100K+ audience",   note: "built from zero" },
  { icon: <IconFootball />,  label: "World Cup 2026",   note: "the only Indian creator there" },
  { icon: <IconHandshake />, label: "7 industries",     note: "fintech to sportswear" },
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
          {/* ---- The bio. This is the positioning copy — edit carefully. ---- */}
          <div className={styles.bioBlock}>
            <p className={styles.bio}>
              I&apos;m Kunal. I&apos;ve spent <span className={styles.mark}>10 years living in Europe</span> and
              the last few building an audience of 100K+ from scratch — with no niche,
              which turns out to be the whole point.
            </p>
            <p className={styles.bio}>
              No niche means I&apos;ve had to make people care about football, books,
              fintech, study-abroad apps and phone cases. Same skill every time:{" "}
              <span className={styles.mark}>find the story, tell it so people actually move</span>.
            </p>
            <p className={styles.bio}>
              In 2026 I was the only Indian creator at the FIFA World Cup. That&apos;s not a
              flex — it&apos;s the proof. I get into the room, and I bring an audience with me.
            </p>
            <p className={styles.bio}>
              Now I do it for founders and brands who know their product is good
              and can&apos;t work out why nobody is listening.
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
