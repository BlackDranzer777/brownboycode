"use client";
import { useEffect, useRef } from "react";
import styles from "./ReelsWall.module.css";

const IG_PROFILE = "https://www.instagram.com/brownboycode";

function shortcode(url) {
  const m = /\/(?:reel|reels|p)\/([A-Za-z0-9_-]+)/.exec(url || "");
  return m ? m[1] : null;
}

export default function ReelCard({ reel, rotate }) {
  const videoRef = useRef(null);

  // Play the clip only while it's actually on screen.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => video.play().catch(() => {});

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.4) {
          tryPlay();
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.4] }
    );
    observer.observe(video);

    // If play() fired before the file buffered, try again once it has.
    video.addEventListener("canplay", () => {
      if (video.paused) observer.takeRecords();
      const rect = video.getBoundingClientRect();
      const visible =
        rect.top < window.innerHeight && rect.bottom > 0 &&
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0) >= rect.height * 0.4;
      if (visible && video.paused) tryPlay();
    });

    return () => observer.disconnect();
  }, []);

  const code = shortcode(reel.url);

  let screen;
  if (reel.video) {
    screen = (
      <a
        href={reel.url || IG_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.videoLink}
        aria-label={`${reel.note} — watch on Instagram`}
      >
        <video
          ref={videoRef}
          src={reel.video}
          poster={reel.poster || undefined}
          className={styles.video}
          muted
          loop
          playsInline
          preload="metadata"
        />
        <span className={styles.videoHint} aria-hidden="true">
          watch on IG ↗
        </span>
      </a>
    );
  } else if (code) {
    screen = (
      <iframe
        src={`https://www.instagram.com/reel/${code}/embed/`}
        className={styles.iframe}
        loading="lazy"
        allowFullScreen
        title={reel.note}
      />
    );
  } else {
    screen = (
      <a
        href={IG_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.placeholder}
      >
        <svg viewBox="0 0 64 64" className={styles.playBtn} aria-hidden="true">
          <circle
            cx="32" cy="32" r="26"
            fill="none" stroke="currentColor" strokeWidth="3"
            strokeDasharray="6 4" strokeLinecap="round"
          />
          <path d="M26 21 L46 32 L26 43 Z" fill="var(--accent-yellow)" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <span className={styles.placeholderText}>fresh reel<br />dropping here</span>
        <span className={styles.placeholderHandle}>@brownboycode</span>
      </a>
    );
  }

  // The iframe embed serves reels at 4:5; native video and the
  // placeholder get the true phone-screen 9:16.
  const screenShape = !reel.video && code ? styles.screenEmbed : styles.screenTall;

  return (
    <figure className={styles.phone} style={{ "--rotate": rotate }}>
      <span className={styles.tape} aria-hidden="true" />
      <span className={styles.notch} aria-hidden="true" />
      <div className={`${styles.screen} ${screenShape}`}>{screen}</div>
      <figcaption className={styles.note}>{reel.note}</figcaption>
    </figure>
  );
}
