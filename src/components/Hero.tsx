"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BSTAnimation from "./BSTAnimation";

const Hero = () => {
  const router = useRouter();
  
  const letterContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const letterAnimation = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between h-screen w-full px-4 md:px-20 overflow-hidden perspective-1000">
      
      <div className="relative z-10 max-w-4xl w-full lg:w-1/2 text-left pt-20 lg:pt-0">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-neutral-500 dark:text-neutral-400 text-sm md:text-lg mb-6 tracking-[0.2em] uppercase font-semibold pl-1"
        >
          Software Developer
        </motion.p>
        
        <motion.h1 
          variants={letterContainer}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white leading-tight mb-8 tracking-tight"
        >
          <motion.span className="block" variants={letterAnimation}>I'm Pranshu Raj,</motion.span>
          <motion.span className="block text-neutral-500 dark:text-neutral-400" variants={letterAnimation}>
            Building the <span className="text-black dark:text-white">Future</span>
          </motion.span>
          <motion.span className="block" variants={letterAnimation}>of the Web.</motion.span>
          <span className="sr-only">Full Stack Developer specializing in Next.js, React, and TypeScript. Software Engineer available for hire in Delhi, India. Building modern web applications with Node.js, PostgreSQL, and LLM integrations.</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
          className="flex flex-row justify-start space-x-8 mt-8"
        >
          <button
            onClick={() => {
              const element = document.getElementById('projects');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-lg font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-neutral-800 dark:bg-neutral-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 text-neutral-900 dark:text-white text-lg font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* BST Animation Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="hidden lg:flex relative z-10 w-full lg:w-1/2 h-[40vh] lg:h-full items-center justify-center lg:justify-end pointer-events-none"
      >
        <div className="w-full h-full max-w-lg">
          <BSTAnimation />
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-neutral-400 dark:border-neutral-600 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-neutral-400 dark:bg-neutral-600 rounded-full" 
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
