import QuickGrab from "@/assets/projectImages/QuickGrab.png";
import eazze from "@/assets/projectImages/eazze.png";
import quizVerse from "@/assets/projectImages/quizVerse.png";
import shell from "@/assets/projectImages/shell.png";
import Bank from "@/assets/projectImages/Bank.webp";
import connected from "@/assets/projectImages/connected.png";
import { StaticImageData } from "next/image";
import nextflow from "@/assets/projectImages/nextflow.png";
import xeno from "@/assets/projectImages/xeno.png";
import dodge from "@/assets/projectImages/dodge.png";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail?: StaticImageData;
  githubLink?: string;
  demoLink?: string;
  demoLabel?: string;
  detailPage?: boolean;
  category: 'Full Stack' | 'CLI' | 'NPM Package' | 'Frontend';
};

const projects: Project[] = [
  {
    slug: "parakh",
    title: "Parakh",
    description: "An AI-powered GitHub PR review bot with an LLM-as-a-Judge architecture, severity-gated feedback, durable Redis state, watchdog queues, and per-organization GitHub App installs.",
    tags: ["Cloudflare Workers", "Gemini", "Upstash Redis", "Neon Postgres", "GitHub App", "AI"],
    githubLink: "https://github.com/PranshuRaj1/Parakh",
    demoLink: "https://github.com/PranshuRaj1/Parakh/pull/36",
    demoLabel: "PR #36",
    detailPage: true,
    category: "Full Stack",
  },
  {
    slug: "ira",
    title: "IRA",
    description: "A memory-augmented AI agent built around an eight-layer guardrail pipeline, spaced repetition decay, memory archiving, consolidation sleep cycles, and circuit breakers.",
    tags: ["AI Agents", "Memory Systems", "Guardrails", "Red Teaming"],
    githubLink: "https://github.com/PranshuRaj1/ira",
    demoLink: "https://t.me/ira_memory_bot",
    demoLabel: "Telegram",
    detailPage: true,
    category: "Full Stack",
  },
  {
    slug: "real-answers",
    title: "real-answer",
    description: "A voice-first AI agent designed for natural, real-time conversations with a focused interface and live deployment.",
    tags: ["AI Agent", "Voice", "Next.js", "Vercel"],
    githubLink: "https://github.com/PranshuRaj1/real-answers",
    demoLink: "https://real-answers.vercel.app/",
    demoLabel: "Live",
    detailPage: true,
    category: "Full Stack",
  },
  {
    slug: "nextflow-llm-workflow",
    title: "NextFlow - LLM Workflow",
    description: "A Krea.ai-inspired visual AI pipeline builder. Drag typed nodes onto a canvas, wire them together, and execute entire LLM workflows via Trigger.dev and Gemini.",
    tags: ["Next.js", "React Flow", "Gemini API", "Trigger.dev", "Prisma", "Full Stack"],
    thumbnail: nextflow,
    githubLink: "https://github.com/PranshuRaj1/nextflow",
    demoLink: "https://nextflow-orcin.vercel.app/workflow",
    demoLabel: "Live",
    category: "Full Stack",
  },
  {
    slug: "xeno-shopify-analytics",
    title: "Xeno",
    description: "A multi-tenant Shopify analytics dashboard application using Next.js 16, Drizzle ORM, and PostgreSQL. Ingests data via GraphQL API and Webhooks.",
    tags: ["Next.js", "PostgreSQL", "Drizzle ORM", "RabbitMQ", "Full Stack"],
    thumbnail: xeno,
    githubLink: "https://github.com/PranshuRaj1/xeno",
    demoLink: "https://xeno-ecru.vercel.app/",
    demoLabel: "Live",
    category: "Full Stack",
  },
  {
    slug: "dodge-o2c-graph",
    title: "Dodge (O2C Graph Intelligence)",
    description: "A natural-language query interface over a Supply Chain Order-to-Cash graph database. Ask business questions in English, get SQL-backed answers, and visualize relationships.",
    tags: ["Next.js", "Neon Postgres", "Groq LLM", "Graph Viz", "Full Stack"],
    thumbnail: dodge,
    githubLink: "https://github.com/PranshuRaj1/dodge",
    demoLink: "https://dodge-drab.vercel.app/",
    demoLabel: "Live",
    category: "Full Stack",
  },
  {
    slug: "connected-video-call",
    title: "Connected",
    description: 
      "A multi-party video call application enabling real-time, low-latency interaction using Mediasoup's SFU architecture for efficient media routing.",
    tags: ["Next.js", "React", "Node.js", "WebSocket", "Redis", "Mediasoup", "Full Stack"],
    thumbnail: connected,
    githubLink: "https://github.com/PranshuRaj1/connected",
    category: "Full Stack",
  },
  {
    slug: "quizverse",
    title: "QuizVerse",
    description:
      "A real-time, full-stack quiz platform supporting live gameplay, chat, and score updates for 100+ concurrent players.",
    tags: ["Next.js", "Node.js", "WebSocket", "React", "Full Stack", "Real-Time","socket.io"],
    thumbnail: quizVerse,
    githubLink: "https://github.com/Dinesht04/Quiz-App-Frontend",
    category: "Full Stack",
  },
  {
    slug: "eazze-npm-package",
    title: "Eazze",
    description:
      "An npm package that automates and streamlines Next.js project setup with various UI libraries and Tailwind CSS, with 2,000+ downloads.",
    tags: ["NPM", "2,000+ downloads", "Automation", "CLI", "Developer Tool"],
    thumbnail: eazze,
    githubLink: "https://github.com/PranshuRaj1/automation",
    category: "NPM Package",
  },
  {
    slug: "quickgrab-llm-app",
    title: "QuickGrab",
    description:
      "A web application that leverages the Groq LLM API to help users learn and summarize complex concepts quickly.",
    tags: ["React", "LLM", "Groq API", "AI", "Frontend"],
    thumbnail: QuickGrab,
    githubLink: "https://github.com/PranshuRaj1/theLLM",
    category: "Frontend",
  },
  {
    slug: "custom-command-shell",
    title: "Command Shell",
    description:
      "A custom command-line shell for Linux, built from scratch in C, providing an interactive CLI experience.",
    tags: ["C", "Linux", "WSL", "Systems Programming", "CLI"],
    thumbnail: shell,
    githubLink: "https://github.com/PranshuRaj1/CommandShell",
    category: "CLI",
  },
  {
    slug: "smartbank-react-app",
    title: "SmartBank",
    description: 
      "A responsive frontend concept for a modern banking application, built to practice client-side routing and state management in React.",
    tags: ["React", "React Router", "JavaScript", "Frontend", "UI/UX Concept"],
    thumbnail: Bank,
    githubLink: "https://github.com/PranshuRaj1/Bank",
    category: "Frontend",
  },
];

export default projects;
