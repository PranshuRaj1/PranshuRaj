// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/Hero";

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

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
