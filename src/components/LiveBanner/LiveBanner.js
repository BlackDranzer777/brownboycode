"use client";
import { useState } from "react";
import styles from "./LiveBanner.module.css";
import status from "@/data/status";

export default function LiveBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (!status.live.isLive || dismissed) return null;

  return (
    <div className={styles.banner} role="status">
      <span className={styles.dot} aria-hidden="true" />
      <a
        href={status.live.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <strong className={styles.liveWord}>LIVE NOW</strong>
        <span className={styles.label}>{status.live.label}</span>
        <span className={styles.watch}>watch on YouTube →</span>
      </a>
      <button
        className={styles.close}
        onClick={() => setDismissed(true)}
        aria-label="Dismiss live notification"
      >
        ✕
      </button>
    </div>
  );
}
