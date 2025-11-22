"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-800 dark:text-neutral-100">
            About Me
          </h2>
          <div className="bg-white/30 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 shadow-xl">
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              I am Pranshu Raj, a passionate Software Developer with a knack for building robust and scalable web applications. 
              With expertise in Next.js, React, and Node.js, I love transforming complex problems into elegant solutions.
            </p>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              When I'm not coding, you can find me exploring the latest tech trends, solving competitive programming challenges, 
              or gazing at the stars—drawing inspiration from the infinite possibilities of the universe.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
