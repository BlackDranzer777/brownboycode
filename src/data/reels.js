// ============================================================
// THE REELS WALL
// Each slot can be filled two ways (best → worst looking):
//
// 1. `video` — a self-hosted MP4 (LOOKS BEST: full-bleed, autoplays).
//    Get the file: it's your own reel — use the original from your
//    phone/drafts, or download it from Instagram (⋯ → Save).
//    Drop it in  portfolio/public/reels/  and set e.g.
//    video: "/reels/wc-vip.mp4"
//    Keep files small: 1080x1920, ~10-20s, a few MB.
//
// 2. `url` only — the reel's share link (Share → Copy link).
//    Renders Instagram's embed. Works, but looks like Instagram.
//
// `url` is ALSO where a tap on a self-hosted video sends people,
// so keep it filled in either way. Empty slot = placeholder phone.
// ============================================================

const reels = [
  {
    video: "/reels/wc-scenes-web.mp4",
    poster: "/reels/wc-scenes-poster.jpg", // optional: first-frame image shown before playback
    url: "https://www.instagram.com/reel/DabK0ZSpipi/?igsh=MXFpamp2aXcwd3BlNA==",
    note: "scenes from the FIFA World Cup 🏟️",
  },
  {
    video: "",
    url: "",
    note: "matchday with the fans",
  },
  {
    video: "",
    url: "",
    note: "the one that blew up",
  },
];

export default reels;
