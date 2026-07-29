import Image from "next/image";
import styles from "./WCDiary.module.css";
import diary from "@/data/diary";

const barcodeWidths = [2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 2, 1, 3, 1, 2, 2, 1, 3, 1, 2];

function Barcode() {
  let x = 0;
  const rects = [];
  barcodeWidths.forEach((w, i) => {
    if (i % 2 === 0) {
      rects.push(<rect key={i} x={x} y={0} width={w} height={20} fill="var(--ink)" />);
    }
    x += w + 1;
  });
  return (
    <svg viewBox={`0 0 ${x} 20`} className={styles.barcode} aria-hidden="true">
      {rects}
    </svg>
  );
}

export default function WCDiary() {
  const { route, photo, flight, tickets } = diary;

  return (
    <section className={styles.section} id="diary">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{diary.eyebrow}</p>
        <h2 className={styles.title}>{diary.title}</h2>
        <p className={styles.sub}>{diary.sub}</p>

        {/* The route so far */}
        <div className={styles.route}>
          {route.map((stop, i) => (
            <div key={stop.place} className={styles.routeStep}>
              <div
                className={`${styles.stop} ${styles[stop.state] || ""}`}
              >
                <span className={styles.stopPlace}>{stop.place}</span>
                <span className={styles.stopLabel}>{stop.label}</span>
              </div>
              {i < route.length - 1 && (
                <svg viewBox="0 0 90 30" className={styles.leg} aria-hidden="true">
                  <path
                    d="M4,22 Q45,2 86,20"
                    fill="none"
                    stroke="var(--ink)"
                    strokeWidth="2"
                    strokeDasharray="5 6"
                    strokeLinecap="round"
                  />
                  <text x="38" y="12" fontSize="13">✈️</text>
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className={styles.collage}>
          {/* Proof polaroid */}
          <figure className={styles.polaroid}>
            <span className={styles.tape} aria-hidden="true" />
            <div className={styles.photoWrap}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 90vw, 420px"
              />
            </div>
            <figcaption className={styles.polaroidCaption}>{photo.caption}</figcaption>
          </figure>

          <div className={styles.stack}>
            {/* Nivia boarding pass */}
            <article className={styles.pass}>
              <div className={styles.passHeader}>
                <span className={styles.passAirline}>{flight.sponsor} ✈</span>
                <span className={styles.passType}>boarding pass</span>
              </div>
              <div className={styles.passBody}>
                <div className={styles.passMain}>
                  <div className={styles.legRow}>
                    <span className={styles.airport}>{flight.from}</span>
                    <svg viewBox="0 0 70 20" className={styles.legArrow} aria-hidden="true">
                      <path d="M4,12 Q35,2 66,11" fill="none" stroke="var(--ink)" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                      <path d="M60,7 L66,11 L59,14" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={styles.airport}>{flight.to}</span>
                  </div>
                  <div className={styles.passMeta}>
                    <div className={styles.meta}>
                      <span className={styles.metaLabel}>passenger</span>
                      <span className={styles.metaVal}>{flight.passenger}</span>
                    </div>
                    <div className={styles.meta}>
                      <span className={styles.metaLabel}>seat</span>
                      <span className={styles.metaVal}>{flight.seat}</span>
                    </div>
                    <div className={styles.meta}>
                      <span className={styles.metaLabel}>gate</span>
                      <span className={styles.metaVal}>{flight.gate}</span>
                    </div>
                    <div className={styles.meta}>
                      <span className={styles.metaLabel}>class</span>
                      <span className={styles.metaVal}>{flight.flightClass}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.passStub}>
                  <span className={styles.passNo}>{flight.passNo}</span>
                  <Barcode />
                </div>
              </div>
              <p className={styles.passNote}>{flight.note}</p>
            </article>

            {/* FanUp all-matches pass */}
            <article className={styles.fanup}>
              <div className={styles.fanupStrip} aria-hidden="true" />
              <div className={styles.fanupBody}>
                <span className={styles.fanupSponsor}>{tickets.sponsor} 🎟️</span>
                <h3 className={styles.fanupTitle}>{tickets.title}</h3>
                <p className={styles.fanupNote}>{tickets.note}</p>
                <span className={styles.stamp}>{tickets.stamp}</span>
              </div>
            </article>
          </div>
        </div>

        <div className={styles.punchlineRow}>
          <p className={styles.punchline}>{diary.punchline}</p>
          <a href="#collab" className={styles.punchCta}>your brand could be on this page →</a>
        </div>
      </div>
    </section>
  );
}
