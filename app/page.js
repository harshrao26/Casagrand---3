import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Amenities from "@/components/Amenities";
import Clubhouse from "@/components/Clubhouse";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
import FloorPlan from "@/components/FloorPlan";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Header />
        <Hero />
        <Overview />
        <Amenities />
        <Clubhouse />
        <Gallery />
        <Videos />
        <FloorPlan />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
