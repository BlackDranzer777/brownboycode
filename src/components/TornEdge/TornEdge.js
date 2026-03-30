import styles from "./TornEdge.module.css";

/**
 * fromDark: the section above is dark (ink bg)
 * The torn fill color is always the color of the section BELOW
 * so it looks like the bottom section is tearing upward into the top
 */
export default function TornEdge({ fromDark = false }) {
  const tearFill = fromDark ? "var(--bg)" : "var(--ink)";
  const bgFill = fromDark ? "var(--ink)" : "var(--bg)";

  return (
    <div className={styles.wrapper} style={{ background: bgFill }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        {/* Organic, irregular torn paper — no two peaks are the same height or width */}
        <path
          d="M0,55
             L18,42 L30,58 L48,28 L63,50 L74,22 L90,48
             L108,18 L124,44 L140,30 L155,52 L168,12
             L185,46 L200,24 L218,54 L232,14 L248,40
             L265,58 L278,20 L295,50 L310,32 L325,60
             L340,16 L358,44 L374,8 L390,38 L406,56
             L420,22 L438,48 L452,18 L468,42 L485,62
             L498,24 L515,50 L530,10 L548,36 L564,54
             L578,20 L595,46 L610,28 L628,58 L642,14
             L660,40 L675,6 L692,34 L708,52 L722,22
             L740,48 L754,16 L772,44 L787,30 L802,56
             L818,12 L835,38 L850,60 L865,18 L882,46
             L897,26 L914,54 L928,10 L945,42 L960,62
             L975,24 L992,50 L1007,8 L1024,36 L1040,58
             L1054,20 L1072,46 L1087,28 L1103,52 L1118,16
             L1135,44 L1150,6 L1168,32 L1183,56 L1198,22
             L1215,48 L1230,14 L1248,40 L1263,60 L1278,18
             L1296,46 L1311,28 L1328,54 L1342,10 L1360,38
             L1375,62 L1392,24 L1408,50 L1424,20 L1440,44
             L1440,80 L0,80 Z"
          fill={tearFill}
        />
      </svg>
    </div>
  );
}
