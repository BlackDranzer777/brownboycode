import styles from "./Stadiums.module.css";

const visits = [
  {
    club: "Real Madrid",
    stadium: "Santiago Bernabéu",
    city: "Madrid, Spain",
    date: "04 NOV 2023",
    section: "SECT. A",
    gate: "GATE 3",
    row: "ROW 12",
    seat: "SEAT 7",
    ticketNo: "RM-231104",
    color: "#C8A951",
    rotate: "-1.5deg",
  },
  {
    club: "FC Barcelona",
    stadium: "Estadi Olímpic",
    city: "Barcelona, Spain",
    date: "15 MAR 2024",
    section: "SECT. B",
    gate: "GATE 7",
    row: "ROW 8",
    seat: "SEAT 14",
    ticketNo: "FCB-240315",
    color: "#004D98",
    rotate: "1.2deg",
  },
  {
    club: "AC Milan",
    stadium: "San Siro",
    city: "Milan, Italy",
    date: "20 JAN 2024",
    section: "SECT. C",
    gate: "GATE 5",
    row: "ROW 15",
    seat: "SEAT 3",
    ticketNo: "ACM-240120",
    color: "#CC0000",
    rotate: "-0.6deg",
  },
  {
    club: "SSC Napoli",
    stadium: "Stadio Maradona",
    city: "Naples, Italy",
    date: "28 FEB 2024",
    section: "SECT. D",
    gate: "GATE 2",
    row: "ROW 6",
    seat: "SEAT 11",
    ticketNo: "NAP-240228",
    color: "#0A7BC4",
    rotate: "1.8deg",
  },
];

const barcodeWidths = [2,1,3,1,2,1,1,3,2,1,2,1,3,1,2,2,1,3,1,2,1,1,3,2,1];

function Barcode() {
  let x = 0;
  const rects = [];
  barcodeWidths.forEach((w, i) => {
    if (i % 2 === 0) {
      rects.push(<rect key={i} x={x} y={0} width={w} height={22} fill="var(--ink)" />);
    }
    x += w + 1;
  });
  return (
    <svg viewBox={`0 0 ${x} 22`} className={styles.barcode}>
      {rects}
    </svg>
  );
}

/* torn path: zigzags from ~x=12 to x=0 (body shadow) and fills stub side */
const TORN_PATH = "M12,0 L7,24 L15,46 L4,70 L13,92 L6,115 L16,138 L3,160 L14,183 L7,205 L15,228 L5,250 L13,272 L8,295 L12,300";
const TORN_FILL = `${TORN_PATH} L24,300 L24,0 Z`;

export default function Stadiums() {
  return (
    <section className={styles.section} id="stadiums">
      <div className={styles.inner}>
        <h2 className={styles.title}>stadiums I&apos;ve been to</h2>
        <p className={styles.sub}>collecting grounds, one match at a time</p>

        <div className={styles.grid}>
          {visits.map((v) => (
            <article
              key={v.club}
              className={styles.ticket}
              style={{ "--rotate": v.rotate, "--club-color": v.color }}
            >
              {/* Club color strip */}
              <div className={styles.strip} />

              {/* Main body */}
              <div className={styles.body}>
                <div className={styles.topRow}>
                  <span className={styles.passLabel}>match day pass</span>
                  <span className={styles.ticketNo}>{v.ticketNo}</span>
                </div>

                <h3 className={styles.club}>{v.club}</h3>
                <p className={styles.stadium}>{v.stadium}</p>
                <p className={styles.city}>{v.city}</p>

                <hr className={styles.rule} />

                <div className={styles.infoRow}>
                  <div className={styles.meta}>
                    <span className={styles.metaLabel}>date</span>
                    <span className={styles.metaVal}>{v.date}</span>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.metaLabel}>section</span>
                    <span className={styles.metaVal}>{v.section}</span>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.metaLabel}>gate</span>
                    <span className={styles.metaVal}>{v.gate}</span>
                  </div>
                </div>

                <div className={styles.barcodeRow}>
                  <Barcode />
                  <span className={styles.stamp}>attended</span>
                </div>
              </div>

              {/* Torn paper divider */}
              <div className={styles.tornWrap}>
                <svg
                  viewBox="0 0 24 300"
                  preserveAspectRatio="none"
                  className={styles.tornSvg}
                >
                  {/* stub fill with torn left edge */}
                  <path d={TORN_FILL} fill={v.color} opacity="0.12" />
                  {/* shadow on the tear line for depth */}
                  <path
                    d={TORN_PATH}
                    stroke="rgba(0,0,0,0.18)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Stub */}
              <div className={styles.stub}>
                <span className={styles.admitOne}>admit one</span>

                <svg viewBox="0 0 48 48" className={styles.ball} fill="none">
                  <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="2" />
                  <polygon points="24,17 29,21 27,27 21,27 19,21" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.35" />
                  <line x1="24" y1="17" x2="24" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="29" y1="21" x2="41" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="27" y1="27" x2="36" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="21" y1="27" x2="12" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="19" y1="21" x2="7" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>

                <div className={styles.seatInfo}>
                  <span>{v.row}</span>
                  <span>{v.seat}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
