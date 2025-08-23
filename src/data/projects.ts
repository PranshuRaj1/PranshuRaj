// file: /lib/projects.ts or /data/projects.ts

import QuickGrab from "@/assets/projectImages/QuickGrab.png";
import eazze from "@/assets/projectImages/eazze.png";
import quizVerse from "@/assets/projectImages/quizVerse.png";
import shell from "@/assets/projectImages/shell.png";
import Bank from "@/assets/projectImages/Bank.webp";
import { StaticImageData } from "next/image";


// Define a type for cleaner code
export type Project = {
  slug: string; // For URL: /projects/quizverse
  title: string;
  description: string; // Keep this as a short summary for cards
  tags: string[]; // Crucial for keywords and filtering
  thumbnail: StaticImageData; // Or string if using URLs
  githubLink: string;
  demoLink: string; // Optional if no live demo exists
  category: 'Full Stack' | 'CLI' | 'NPM Package' | 'Frontend'; // For categorization
};

const projects: Project[] = [
  {
    slug: "quizverse",
    title: "QuizVerse",
    description:
      "A real-time, full-stack quiz platform supporting live gameplay, chat, and score updates for 100+ concurrent players.",
    tags: ["Next.js", "Node.js", "WebSocket", "React", "Full Stack", "Real-Time","socket.io"],
    thumbnail: quizVerse,
    githubLink: "https://github.com/Dinesht04/Quiz-App-Frontend",
    demoLink: "https://quizverse-sigma.vercel.app/",
    category: "Full Stack",
  },
  {
    slug: "eazze-npm-package",
    title: "Eazze",
    description:
      "An npm package that automates and streamlines Next.js project setup with various UI libraries and Tailwind CSS.",
    tags: ["NPM", "Node.js", "Automation", "CLI", "Developer Tool"],
    thumbnail: eazze,
    githubLink: "https://github.com/PranshuRaj1/automation",
    demoLink: "https://www.npmjs.com/package/eazze",
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
    demoLink: "https://the-llm.vercel.app/",
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
    // No live demo for this, so the link points to GitHub again
    demoLink: "https://github.com/PranshuRaj1/CommandShell",
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
  // No live demo, so demoLink can be omitted or point to GitHub
  demoLink: "https://github.com/PranshuRaj1/Bank", 
  category: "Frontend",
},
  
];

export default projects;