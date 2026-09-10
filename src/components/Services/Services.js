import styles from "./Services.module.css";
import services from "@/data/services";
import { iconByName } from "@/components/Icons/Icons";

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{services.eyebrow}</p>
          <h2 className={styles.title}>{services.title}</h2>
          <svg viewBox="0 0 220 12" className={styles.underline} aria-hidden="true">
            <path d="M2,8 Q30,2 60,8 Q90,14 120,6 Q150,0 180,7 Q200,11 218,6"
              stroke="var(--accent)" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
          <p className={styles.sub}>{services.sub}</p>
        </div>

        <div className={styles.grid}>
          {services.items.map((item, i) => {
            const Icon = iconByName[item.icon];
            return (
              <article
                key={item.title}
                className={styles.card}
                style={{ "--rotate": item.rotate }}
              >
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                {Icon && (
                  <span className={styles.iconWrap}>
                    <Icon size={38} />
                  </span>
                )}
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <span className={styles.tag}>{item.tag}</span>
              </article>
            );
          })}
        </div>

        <div className={styles.closerRow}>
          <svg viewBox="0 0 80 40" className={styles.arrow} aria-hidden="true">
            <path d="M5,20 Q25,5 55,15 Q65,18 72,25"
              stroke="var(--accent)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M68,20 L72,25 L66,27" stroke="var(--accent)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
          <p className={styles.closer}>{services.closer}</p>
        </div>
      </div>
    </section>
  );
}
