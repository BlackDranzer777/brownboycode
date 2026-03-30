import { Caveat, Special_Elite } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";

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

export const metadata = {
  title: "Kunal Dutt — @brownboycode",
  description: "Content creator. Football. Books. Life. 100K+ on Instagram.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${caveat.variable} ${specialElite.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
