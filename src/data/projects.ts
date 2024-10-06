import QuickGrab from "@/assets/projectImages/QuickGrab.png";
import shell from "@/assets/projectImages/shell.png";
import Bank from "@/assets/projectImages/Bank.webp";
import eazze from "@/assets/projectImages/eazze.png";

const projects = [
  {
    title: "QuickGrab",
    description:
      "QuickGrab is a web application designed to help users learn complex concepts quickly and efficiently. Frontend - React, LLM - Groq API",
    thumbnail: QuickGrab,
    githubLink: "https://github.com/PranshuRaj1/theLLM",
    demoLink: "https://the-llm.vercel.app/", // Replace with actual demo link
  },
  {
    title: "Command Shell",
    description:
      "Designed and implemented a custom shell in C for Linux using WSL, providing an interactive command-line interface. Technologies - C, WSL (Windows Subsystem for Linux)",
    thumbnail: shell,
    githubLink: "https://github.com/PranshuRaj1/CommandShell",
    demoLink: "https://commandshell-demo.example.com", // Replace with actual demo link or remove if not applicable
  },
  {
    title: "SmartBank",
    description:
      "Implemented React Router DOM for seamless navigation between different pages within the application. Implements transaction property of database. Frontend - React, Tailwind, Backend - Nodejs, Express Database - MongoDb",
    thumbnail: Bank,
    githubLink: "https://github.com/PranshuRaj1/Bank",
    demoLink: "https://smartbank-demo.example.com", // Replace with actual demo link
  },
  {
    title: "Eazze",
    description:
      "The 'eazze' npm package streamlines Next.js project setup with Tailwind CSS, offering easy integration of UI libraries like Chakra UI, Shadcn, and PrimeReact. It allows developers to create fully-configured projects with minimal commands, simplifying the entire process into a single command setup.",
    thumbnail: eazze,
    githubLink: "https://www.npmjs.com/package/eazze",
    demoLink: "https://eazze-demo.example.com", // Replace with actual demo link
  },
];

export default projects;
