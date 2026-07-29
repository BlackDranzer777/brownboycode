// ============================================================
// THE WORLD CUP DIARY
// The story of the current trip — update stops, sponsors, and
// captions here as the journey moves on.
// ============================================================

const diary = {
  eyebrow: "summer 2026, somewhere in america",
  title: "the world cup diary",
  sub: "one creator, one summer, the biggest tournament on earth — with brands riding along.",

  // The route so far. `state` is "done", "now" or "next".
  route: [
    { place: "USA 🇺🇸", label: "FIFA World Cup 2026", state: "now" },
    { place: "Warsaw 🇵🇱", label: "up next — my favourite city", state: "next" },
  ],

  // The proof photo (drop new ones in portfolio/public/)
  photo: {
    src: "/wc_photo.jpeg",
    alt: "Kunal in the stands at the FIFA World Cup 2026",
    caption: "actually there. still not over it.",
  },

  // The Nivia boarding pass
  flight: {
    sponsor: "NIVIA AIR",
    from: "JFK",
    to: "WAW",
    passenger: "DUTT / KUNAL",
    seat: "7A",
    gate: "22",
    flightClass: "CREATOR",
    passNo: "NV-260614",
    note: "*ok, Nivia sponsors the flights, not the whole airline. US now, Warsaw next.",
  },

  // The FanUp season pass
  tickets: {
    sponsor: "FanUp",
    title: "all-matches pass",
    note: "every match ticket this World Cup — sponsored by FanUp.",
    stamp: "sponsored",
  },

  punchline: "brands don't just work with me — they travel with me.",
};

export default diary;
