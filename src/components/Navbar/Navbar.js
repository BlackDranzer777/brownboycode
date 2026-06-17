"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { useTheme } from "@/components/ThemeProvider/ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, cycleTheme } = useTheme();

  return (
    <>
      <nav className={styles.nav}>
        <span className={styles.logo}>kunal dutt</span>

        <div className={styles.right}>
          {/* Desktop links */}
          <ul className={styles.links}>
            <li><a href="#about">about</a></li>
            <li><a href="#content">content</a></li>
            <li><a href="#collab">collabs</a></li>
            <li><a href="#call" className={styles.cta}>book a call</a></li>
          </ul>

          {/* Theme toggle */}
          <button
            className={styles.themeBtn}
            onClick={cycleTheme}
            aria-label={`Theme: ${theme}. Click to switch.`}
            title="Switch theme"
          >
            <span className={styles.themeDot} aria-hidden="true" />
            {theme}
          </button>

          {/* Mobile: hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={open ? styles.barTop_open : styles.barTop} />
            <span className={open ? styles.barMid_open : styles.barMid} />
            <span className={open ? styles.barBot_open : styles.barBot} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        <ul className={styles.drawerLinks}>
          <li><a href="#about" onClick={() => setOpen(false)}>about</a></li>
          <li><a href="#content" onClick={() => setOpen(false)}>content</a></li>
          <li><a href="#collab" onClick={() => setOpen(false)}>collabs</a></li>
          <li><a href="#call" onClick={() => setOpen(false)} className={styles.drawerCta}>book a call</a></li>
        </ul>
      </div>
    </>
  );
}
