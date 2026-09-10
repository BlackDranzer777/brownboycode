const SITE = "https://brownboycode.com";

// The page is a single scroll, so the anchors are the "pages".
const anchors = [
  { hash: "",          changeFrequency: "weekly",  priority: 1 },
  { hash: "#services", changeFrequency: "monthly", priority: 0.9 },
  { hash: "#proof",    changeFrequency: "weekly",  priority: 0.9 },
  { hash: "#about",    changeFrequency: "monthly", priority: 0.7 },
  { hash: "#brands",   changeFrequency: "monthly", priority: 0.8 },
  { hash: "#reels",    changeFrequency: "weekly",  priority: 0.7 },
  { hash: "#stadiums", changeFrequency: "monthly", priority: 0.5 },
  { hash: "#diary",    changeFrequency: "weekly",  priority: 0.6 },
  { hash: "#collab",   changeFrequency: "monthly", priority: 0.9 },
  { hash: "#ebook",    changeFrequency: "monthly", priority: 0.6 },
  { hash: "#call",     changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap() {
  const lastModified = new Date();
  return anchors.map(({ hash, changeFrequency, priority }) => ({
    url: `${SITE}/${hash}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
