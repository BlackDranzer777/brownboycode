import styles from "./Proof.module.css";
import proof from "@/data/proof";

export default function Proof() {
  return (
    <section className={`${styles.section} dark-section`} id="proof">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{proof.eyebrow}</p>
          <h2 className={styles.title}>{proof.title}</h2>
          <p className={styles.sub}>{proof.sub}</p>
        </div>

        {/* Headline numbers */}
        <div className={styles.stats}>
          {proof.stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
              <span className={styles.statNote}>{s.note}</span>
            </div>
          ))}
        </div>

        {/* Individual posts that did numbers */}
        <div className={styles.posts}>
          {proof.posts.map((p, i) => {
            const inner = (
              <>
                <span className={styles.postHeadline}>{p.headline}</span>
                <span className={styles.postWhat}>{p.what}</span>
                <span className={styles.postDetail}>{p.detail}</span>
                {p.url && <span className={styles.postLink}>see the post ↗</span>}
              </>
            );

            return p.url ? (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.post}
                style={{ "--rotate": p.rotate }}
              >
                {inner}
              </a>
            ) : (
              <div key={i} className={styles.post} style={{ "--rotate": p.rotate }}>
                {inner}
              </div>
            );
          })}
        </div>

        {/* The turn: my numbers → your product */}
        <div className={styles.punchWrap}>
          <p className={styles.punchOne}>{proof.punchline}</p>
          <p className={styles.punchTwo}>{proof.punchlineTwo}</p>
          <a href="#collab" className={styles.punchCta}>{proof.cta}</a>
        </div>
      </div>
    </section>
  );
}
