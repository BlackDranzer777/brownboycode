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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* cream */}
        <Hero />
        <About />

        {/* cream → dark: torn dark edge */}
        <TornEdge fromDark={false} />

        {/* dark */}
        <Content />

        {/* dark → cream: torn cream edge */}
        <TornEdge fromDark={true} />

        {/* cream */}
        <Brands />
        <Stadiums />
        <BrandCollab />
        <BookCall />

        {/* cream → dark (footer): torn dark edge */}
        <TornEdge fromDark={false} />
      </main>
      <Footer />
    </>
  );
}
