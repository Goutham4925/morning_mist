import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Connectivity from "@/components/Connectivity";
import Architecture from "@/components/Architecture";
import Gallery from "@/components/Gallery";
import Forest from "@/components/Forest";
import Lifestyle from "@/components/Lifestyle";
import Amenities from "@/components/Amenities";
import Projects from "@/components/Projects";
import Invest from "@/components/Invest";
import Calculator from "@/components/Calculator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Overview />
      <Connectivity />
      <Architecture />
      <Forest />
      <Lifestyle />
      <Gallery />
      <Amenities />
      <Projects />
      <Invest />
      <Calculator />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
