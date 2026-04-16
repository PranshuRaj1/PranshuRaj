// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
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
    url: "https://pranshuraj.vercel.app",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pranshu Raj",
  url: "https://pranshuraj.vercel.app",
  jobTitle: "Software & Full Stack Developer",
  knowsAbout: ["Next.js", "React", "JavaScript", "Web Development", "Backend Engineering", "Frontend Engineering", "Full Stack Development", "Databases"],
  image: "https://pranshuraj.vercel.app/images/profile.jpg",
  sameAs: [
    "https://github.com/PranshuRaj1",
    "https://leetcode.com/u/Rpranshu/",
    "https://codeforces.com/profile/Rpranshu/",
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={personSchema} id="person-jsonld-home" />
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
