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
            <li><a href="#services">what you get</a></li>
            <li><a href="#proof">proof</a></li>
            <li><a href="#brands">brands</a></li>
            <li><a href="#collab" className={styles.cta}>work with me</a></li>
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
          <li><a href="#services" onClick={() => setOpen(false)}>what you get</a></li>
          <li><a href="#proof" onClick={() => setOpen(false)}>proof</a></li>
          <li><a href="#brands" onClick={() => setOpen(false)}>brands</a></li>
          <li><a href="#collab" onClick={() => setOpen(false)} className={styles.drawerCta}>work with me</a></li>
        </ul>
      </div>
    </>
  );
}
