// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Pranshu Raj - Web Developer Portfolio",
  description:
    "Welcome to the portfolio of Pranshu Raj—Next.js & React specialist showcasing projects, skills, and competitive programming achievements.",
  keywords:
    "Pranshu Raj, portfolio, web developer, Next.js, React, projects, skills, competitive programming",
  openGraph: {
    title: "Pranshu Raj - Web Developer Portfolio",
    description:
      "Showcasing Next.js & React projects, skills, and competitive programming milestones.",
    url: "https://pranshuraj.vercel.app",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pranshu Raj",
  url: "https://pranshuraj.vercel.app",
  jobTitle: "Web Developer",
  knowsAbout: ["Next.js", "React", "JavaScript", "Web Development"],
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
