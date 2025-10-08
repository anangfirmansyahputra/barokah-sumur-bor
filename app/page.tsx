import About from "@/components/about";
import ClassicHero from "@/components/classic";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Navbar from "@/components/navbar";
import Services from "@/components/services";

export const metadata = {
  title: "Jasa Sumur Bor Profesional | Anang Water Tech",
  description:
    "Jasa pembuatan sumur bor terpercaya di Indonesia. Proyek dijamin rapi, cepat, dan berkualitas.",
  keywords: [
    "sumur bor",
    "jasa pengeboran air",
    "proyek air bersih",
    "bor air",
  ],
  openGraph: {
    title: "Jasa Sumur Bor Profesional",
    description: "Pengerjaan cepat, hasil maksimal — Hubungi kami sekarang!",
    siteName: "Anang Water Tech",
    locale: "id_ID",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ClassicHero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
