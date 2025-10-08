import About from "@/components/about";
import ClassicHero from "@/components/classic";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* <Hero /> */}
      <ClassicHero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
