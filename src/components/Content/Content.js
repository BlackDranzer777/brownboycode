import styles from "./Content.module.css";
import { IconFootball, IconBook, IconCamera, IconPlane } from "@/components/Icons/Icons";

const categories = [
  {
    icon: <IconFootball color="var(--bg)" size={40} />,
    title: "Football",
    desc: "Hot takes, match breakdowns, and an unhealthy love for CR7.",
    tag: "#football",
    rotate: "-1.5deg",
  },
  {
    icon: <IconBook color="var(--bg)" size={40} />,
    title: "Books",
    desc: "Reviews, recommendations, and what I couldn't finish.",
    tag: "#books",
    rotate: "1deg",
  },
  {
    icon: <IconCamera color="var(--bg)" size={40} />,
    title: "Day-to-day Life",
    desc: "Honest moments. No filter, no performance.",
    tag: "#life",
    rotate: "-0.8deg",
  },
  {
    icon: <IconPlane color="var(--bg)" size={40} />,
    title: "Experiences",
    desc: "Places, food, people — things worth sharing.",
    tag: "#experiences",
    rotate: "1.5deg",
  },
];

export default function Content() {
  return (
    <section className={`${styles.content} dark-section`} id="content">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>what I make</h2>
          <a
            href="https://www.instagram.com/brownboycode"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.igLink}
          >
            see it all on instagram →
          </a>
        </div>

        <div className={styles.grid}>
          {categories.map((c) => (
            <div
              key={c.title}
              className={styles.card}
              style={{ "--rotate": c.rotate }}
            >
              <span className={styles.iconWrap}>{c.icon}</span>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
              <span className={styles.tag}>{c.tag}</span>
            </div>
          ))}
        </div>

        <div className={styles.igCta}>
          <svg viewBox="0 0 80 40" className={styles.arrow}>
            <path d="M5,20 Q25,5 55,15 Q65,18 72,25"
              stroke="var(--bg)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M68,20 L72,25 L66,27" stroke="var(--bg)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
          <p className={styles.igNote}>100K+ people can&apos;t be wrong</p>
        </div>
      </div>
    </section>
  );
}
