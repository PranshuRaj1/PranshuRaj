// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Pranshu Raj — Full Stack Developer | Next.js & React",
  description:
    "Full-stack developer with deep expertise in Next.js, React, TypeScript, and LLM integrations. I build end-to-end web products — from pixel-perfect UIs to real-time systems.",
  keywords:
    "Pranshu Raj, Next.js developer, React developer, TypeScript, full-stack, software developer in delhi, backend engineer, frontend engineer, database, web developer, portfolio",
  openGraph: {
    title: "Pranshu Raj — Full Stack Developer | Next.js & React",
    description:
      "Full-stack developer with deep expertise in Next.js, React, TypeScript, and LLM integrations.",
    url: "https://www.pranshuraj.info",
  },
};
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
