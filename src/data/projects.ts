import QuickGrab from "@/assets/projectImages/QuickGrab.png";
import shell from "@/assets/projectImages/shell.png";
import Bank from "@/assets/projectImages/Bank.webp";
import eazze from "@/assets/projectImages/eazze.png";
import quizVerse from "@/assets/projectImages/quizVerse.png";

const projects = [

  {
    title: "QuizVerse",
    description:
      "Engineered a full-stack, real-time quiz platform using Node.js and Next.js, architecting a WebSocket server to support live gameplay, chat, and score updates for up to 100 concurrent players per room.",
    thumbnail: quizVerse,
    githubLink: "https://github.com/Dinesht04/Quiz-App-Frontend",
    demoLink: "https://quizverse-sigma.vercel.app/",
  },
  
  {
    title: "Eazze",
    description:
      "The 'eazze' npm package streamlines Next.js project setup with Tailwind CSS, offering easy integration of UI libraries like Chakra UI, Shadcn, and PrimeReact.",
    thumbnail: eazze,
    githubLink: "https://github.com/PranshuRaj1/automation",
    demoLink: "https://www.npmjs.com/package/eazze",
  },
  {
    title: "QuickGrab",
    description:
      "QuickGrab is a web application designed to help users learn complex concepts quickly and efficiently. Frontend - React, LLM - Groq API",
    thumbnail: QuickGrab,
    githubLink: "https://github.com/PranshuRaj1/theLLM",
    demoLink: "https://the-llm.vercel.app/",
  },
  {
    title: "Command Shell",
    description:
      "Designed and implemented a custom shell in C for Linux using WSL, providing an interactive command-line interface. Technologies - C, WSL (Windows Subsystem for Linux)",
    thumbnail: shell,
    githubLink: "https://github.com/PranshuRaj1/CommandShell",
    demoLink: "https://github.com/PranshuRaj1/CommandShell",
  },
  {
    title: "SmartBank",
    description:
      "Implemented React Router DOM for seamless navigation between different pages within the application. ",
    thumbnail: Bank,
    githubLink: "https://github.com/PranshuRaj1/Bank",
    demoLink: "https://github.com/PranshuRaj1/Bank",
  },
  
];

export default projects;
