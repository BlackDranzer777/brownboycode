import Hero from "@/components/Hero/Hero";
import RightNow from "@/components/RightNow/RightNow";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Proof from "@/components/Proof/Proof";
import Content from "@/components/Content/Content";
import ReelsWall from "@/components/ReelsWall/ReelsWall";
import Brands from "@/components/Brands/Brands";
import Stadiums from "@/components/Stadiums/Stadiums";
import WCDiary from "@/components/WCDiary/WCDiary";
import BrandCollab from "@/components/BrandCollab/BrandCollab";
import Ebook from "@/components/Ebook/Ebook";
import BookCall from "@/components/BookCall/BookCall";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TornEdge from "@/components/TornEdge/TornEdge";
import LiveBanner from "@/components/LiveBanner/LiveBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* cream — the pitch: what he does, what you get, why him */}
        <Hero />
        <RightNow />
        <Services />
        <About />

        {/* cream → dark: torn dark edge */}
        <TornEdge fromDark={false} />

        {/* dark — the receipts */}
        <Proof />
        <Content />
        <ReelsWall />

        {/* dark → cream: torn cream edge */}
        <TornEdge fromDark={true} />

        {/* cream — range, credibility, then the ask */}
        <Brands />
        <Stadiums />
        <WCDiary />
        <BrandCollab />

        {/* secondary offers, for readers who aren't a brand */}
        <Ebook />
        <BookCall />

        {/* cream → dark (footer): torn dark edge */}
        <TornEdge fromDark={false} />
      </main>
      <Footer />
      <LiveBanner />
    </>
  );
}
