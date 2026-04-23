import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} dark-section`}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.name}>kunal dutt</span>
          <p className={styles.handle}>@brownboycode</p>
        </div>

        <div className={styles.links}>
          <a href="https://www.instagram.com/brownboycode" target="_blank" rel="noopener noreferrer">instagram</a>
          <a href="https://topmate.io/brownboycode" target="_blank" rel="noopener noreferrer">topmate</a>
          <a href="#collab">work with me</a>
        </div>

        <p className={styles.copy}>made with ✏️ — {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
