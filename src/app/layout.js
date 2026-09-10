import { Caveat, Special_Elite, Luckiest_Guy, Playfair_Display, Space_Mono, Bangers } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: "400",
});

// Chunky comic display font — used by the "loud-house" theme to echo the
// Nickelodeon logo lettering.
const luckiestGuy = Luckiest_Guy({
  variable: "--font-luckiest",
  subsets: ["latin"],
  weight: "400",
});

// Serif headlines for the "daily-dutt" newspaper theme.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
});

// Technical monospace for the "blueprint" theme.
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Action-comic display for the "comic" pop-art theme.
const bangers = Bangers({
  variable: "--font-bangers-src",
  subsets: ["latin"],
  weight: "400",
});

const SITE = "https://brownboycode.com";
const DESCRIPTION =
  "I help founders and brands sell through storytelling. 100K+ followers, 10+ brands across 7 industries, and the only Indian creator at the FIFA World Cup 2026.";

export const metadata = {
  metadataBase: new URL(SITE),
  title: "Kunal Dutt — storytelling that sells",
  description: DESCRIPTION,
  keywords: [
    "storytelling for founders",
    "brand collaborations",
    "content creator India",
    "video marketing",
    "Kunal Dutt",
    "brownboycode",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kunal Dutt — storytelling that sells",
    description: DESCRIPTION,
    url: SITE,
    siteName: "@brownboycode",
    type: "website",
    locale: "en_US",
    images: [
      {
        // TODO: swap for a purpose-built 1200x630 OG card — this portrait
        // photo gets centre-cropped by most link previews.
        url: "/wc_photo.jpeg",
        width: 1170,
        height: 1412,
        alt: "Kunal Dutt at the FIFA World Cup 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal Dutt — storytelling that sells",
    description: DESCRIPTION,
    images: ["/wc_photo.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="kleon" className={`${caveat.variable} ${specialElite.variable} ${luckiestGuy.variable} ${playfair.variable} ${spaceMono.variable} ${bangers.variable}`}>
      <body>
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
