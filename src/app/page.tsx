import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Values from "@/components/Values";
import Passions from "@/components/Passions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Values />
      <Passions />
      <Contact />
      <Footer />
    </main>
  );
}
