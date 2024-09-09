import QuickGrab from "@/assets/projectImages/QuickGrab.png";
import shell from "@/assets/projectImages/shell.png";
import Bank from "@/assets/projectImages/Bank.webp";

const projects = [
  {
    title: "QuickGrab",
    description:
      "QuickGrab is a web application designed to help users learn complex concepts quickly and efficiently. Frontend - React, LLM - Groq API",
    thumbnail: QuickGrab,
    githubLink: "https://github.com/PranshuRaj1/theLLM",
  },
  {
    title: "Command Shell",
    description:
      ": Designed and implemented a custom shell in C for Linux using WSL, providing an interactive command-line interface. Teachnologies - C, WSL(Windows Subsystem for Linux)",
    thumbnail: shell,
    githubLink: "https://github.com/PranshuRaj1/CommandShell",
  },
  {
    title: "SmartBank",
    description:
      "Implemented React Router DOM for seamless navigation between different pages within the application. Implements transaction property of database. Frontend-React, Tailwind, Backend-Nodejs, Express Database-MongoDb",
    thumbnail: Bank,
    githubLink: "https://github.com/PranshuRaj1/Bank",
  },
];

export default projects;
