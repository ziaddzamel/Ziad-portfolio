import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";


export default function Home() {
  return (
    <>

      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
    </>
  );
}
