import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ventures from "@/components/Ventures";
import Timeline from "@/components/Timeline";
import Services from "@/components/Services";
import Media from "@/components/Media";
import Proof from "@/components/Proof";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Timeline />
        <Services />
        <Media />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
