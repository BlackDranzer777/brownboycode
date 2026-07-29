import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Content from "@/components/Content/Content";
import BrandCollab from "@/components/BrandCollab/BrandCollab";
import BookCall from "@/components/BookCall/BookCall";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TornEdge from "@/components/TornEdge/TornEdge";
import Brands from "@/components/Brands/Brands";
import Stadiums from "@/components/Stadiums/Stadiums";
import RightNow from "@/components/RightNow/RightNow";
import LiveBanner from "@/components/LiveBanner/LiveBanner";
import ReelsWall from "@/components/ReelsWall/ReelsWall";
import WCDiary from "@/components/WCDiary/WCDiary";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* cream */}
        <Hero />
        <RightNow />
        <About />

        {/* cream → dark: torn dark edge */}
        <TornEdge fromDark={false} />

        {/* dark */}
        <Content />
        <ReelsWall />

        {/* dark → cream: torn cream edge */}
        <TornEdge fromDark={true} />

        {/* cream */}
        <Brands />
        <Stadiums />
        <WCDiary />
        <BrandCollab />
        <BookCall />

        {/* cream → dark (footer): torn dark edge */}
        <TornEdge fromDark={false} />
      </main>
      <Footer />
      <LiveBanner />
    </>
  );
}
