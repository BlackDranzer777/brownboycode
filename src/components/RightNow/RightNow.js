import styles from "./RightNow.module.css";
import status from "@/data/status";

export default function RightNow() {
  const items = [
    `📍 right now: in ${status.location}`,
    `⚽ ${status.mission}`,
    ...status.tickerExtras,
  ];

  if (status.live.isLive) {
    items.push(`🔴 LIVE NOW on YouTube — ${status.live.label}`);
  } else if (status.nextStream) {
    items.push(status.nextStream);
  }

  const group = (hidden) => (
    <span className={styles.group} aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={item} className={styles.item}>
          {item}
          <svg className={styles.star} viewBox="0 0 20 20" aria-hidden="true">
            <path
              d="M10 2 L11.5 8 L18 8.5 L12.5 12 L14.5 18 L10 14 L5.5 18 L7.5 12 L2 8.5 L8.5 8 Z"
              fill="var(--accent)"
              stroke="var(--ink)"
              strokeWidth="1"
            />
          </svg>
        </span>
      ))}
    </span>
  );

  return (
    <aside className={styles.strip} aria-label="What Kunal is up to right now">
      <div className={styles.track}>
        {group(false)}
        {group(true)}
      </div>
    </aside>
  );
}
