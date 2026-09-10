import styles from "./Brands.module.css";
import brands from "@/data/brands";

export default function Brands() {
  return (
    <section className={styles.section} id="brands">
      <h2 className={styles.title}>{brands.title}</h2>
      <p className={styles.sub}>{brands.sub}</p>

      <div className={styles.track}>
        <div className={styles.marquee}>
          {[...brands.list, ...brands.list].map((brand, i) => (
            <span key={i} className={styles.pill}>
              <span className={styles.pillName}>{brand.name}</span>
              <span className={styles.pillCategory}>{brand.category}</span>
            </span>
          ))}
        </div>
      </div>

      <p className={styles.closer}>{brands.closer}</p>
    </section>
  );
}
