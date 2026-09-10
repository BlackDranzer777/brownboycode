import styles from "./Ebook.module.css";
import ebook from "@/data/ebook";

export default function Ebook() {
  // Flip `live` to false in src/data/ebook.js to hide this entirely.
  if (!ebook.live) return null;

  const hasLink = Boolean(ebook.url);

  return (
    <section className={styles.section} id="ebook">
      <div className={styles.inner}>
        {/* The book itself */}
        <div className={styles.bookWrap}>
          <div className={styles.book}>
            <span className={styles.spine} aria-hidden="true" />
            <div className={styles.cover}>
              <span className={styles.coverEyebrow}>{ebook.eyebrow}</span>
              <h3 className={styles.coverTitle}>{ebook.title}</h3>
              <span className={styles.coverHandle}>@brownboycode</span>
            </div>
          </div>
          <span className={styles.priceTag}>{ebook.price}</span>
        </div>

        {/* The pitch */}
        <div className={styles.copy}>
          <h2 className={styles.title}>{ebook.title}</h2>
          <svg viewBox="0 0 200 12" className={styles.underline} aria-hidden="true">
            <path d="M2,8 Q40,2 80,8 Q120,14 160,5 Q180,2 198,7"
              stroke="var(--accent)" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>

          <p className={styles.sub}>{ebook.sub}</p>

          <ul className={styles.chapters}>
            {ebook.chapters.map((c) => (
              <li key={c} className={styles.chapter}>
                <svg viewBox="0 0 20 20" className={styles.tick} aria-hidden="true">
                  <path d="M3,11 L8,16 L17,4" stroke="var(--accent)" strokeWidth="2.5"
                    fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {c}
              </li>
            ))}
          </ul>

          {hasLink ? (
            <a
              href={ebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btn}
            >
              get the book — {ebook.price} →
            </a>
          ) : (
            <span className={styles.btnSoon}>coming soon</span>
          )}

          <p className={styles.note}>{ebook.note}</p>
        </div>
      </div>
    </section>
  );
}
