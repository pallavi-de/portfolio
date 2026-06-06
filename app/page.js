import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experiance from "@/components/Experiance";
import CustomCursor from "@/components/CustomCursor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0f172a] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experiance/>
      <CustomCursor />
      <Contact />
      <Footer />
    </main>
  );
}