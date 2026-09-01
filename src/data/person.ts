export const personId = "https://pranshuraj.vercel.app/#person";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: "Pranshu Raj",
  url: "https://pranshuraj.vercel.app/",
  jobTitle: "Software Engineer",
  description:
    "Software engineer focused on backend systems, AI developer tools, and production LLM applications.",
  sameAs: ["https://github.com/PranshuRaj1"],
  knowsAbout: [
    "Backend Engineering",
    "Cloudflare Workers",
    "Large Language Models",
    "AI Agent Architecture",
    "Distributed Systems",
    "GitHub App Development",
  ],
};

export default person;
