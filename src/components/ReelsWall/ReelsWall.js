import styles from "./ReelsWall.module.css";
import ReelCard from "./ReelCard";
import reels from "@/data/reels";

const TILTS = ["-1.4deg", "1.2deg", "-0.8deg", "1.6deg", "-1.1deg", "0.9deg"];

export default function ReelsWall() {
  return (
    <section className={`${styles.section} dark-section`} id="reels">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>the reels wall</h2>
          <a
            href="https://www.instagram.com/brownboycode"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.igLink}
          >
            the full grid lives on instagram →
          </a>
        </div>

        <div className={styles.grid}>
          {reels.map((reel, i) => (
            <ReelCard
              key={`${reel.note}-${i}`}
              reel={reel}
              rotate={TILTS[i % TILTS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
