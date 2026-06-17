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

export const metadata = {
  title: "Kunal Dutt — @brownboycode",
  description: "Content creator. Football. Books. Life. 100K+ on Instagram.",
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
