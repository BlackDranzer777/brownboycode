import styles from "./Brands.module.css";

const brands = [
  "Nivia Sports",
  "Leap Scholar",
  "Torras Global",
  "FanCode",
  "Stepout.ai",
  "LemFi",
  "Masai School",
  "Tap Tap Send",
  "Shiksha Study Abroad",
  "FRND App",
];

export default function Brands() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>brands I&apos;ve worked with</h2>
      <p className={styles.sub}>10+ collaborations and counting</p>

      <div className={styles.track}>
        <div className={styles.marquee}>
          {[...brands, ...brands].map((brand, i) => (
            <span key={i} className={styles.pill}>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
