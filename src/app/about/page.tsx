import type { Metadata } from "next";
import person from "@/data/person";

export const metadata: Metadata = {
  title: "About Pranshu Raj",
  description:
    "About Pranshu Raj, a software engineer focused on backend systems and applied AI engineering in Delhi, India.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Pranshu Raj",
    description:
      "Pranshu Raj is a software engineer focused on backend systems and applied AI engineering in Delhi, India.",
    url: "/about",
  },
};

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: person,
};

export default function AboutPage() {
  return (
    <article className="container mx-auto max-w-4xl px-4 py-24 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c"),
        }}
      />
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
        About
      </p>
      <h1 className="mt-3 text-4xl font-bold text-neutral-900 dark:text-white md:text-6xl">
        About Pranshu Raj
      </h1>
      <p className="mt-8 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
        Pranshu Raj is a software engineer focused on backend systems and applied AI engineering. He is a 2026 Computer Science graduate from VIT with a CGPA of 8.56, based in Delhi, India. His core stack includes TypeScript, Node.js, Cloudflare Workers, Hono, Neon Postgres, and Upstash Redis. Pranshu builds production-oriented software that combines reliable event-driven infrastructure with useful AI capabilities. His flagship projects include Parakh, an AI-powered GitHub pull request review bot built with Cloudflare Workers, Gemini, Redis, and Postgres, and IRA, a memory-augmented AI agent built around an eight-layer guardrail pipeline and lifecycle-aware memory. His work also includes developer tooling, real-time systems, voice interfaces, and natural-language database applications.
      </p>
    </article>
  );
}
