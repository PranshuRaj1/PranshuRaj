import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Experience />
        <OpenSource />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
