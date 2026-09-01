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
          <div className="bg-white/30 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 shadow-xl text-left">
            <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-100">Who I Am</h3>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              I am Pranshu Raj, a Full Stack Developer and Software Engineer based in Delhi, India, with deep expertise in Next.js, React, TypeScript, and LLM integrations. I build end-to-end web products, from pixel-perfect UIs to real-time systems, with a focus on performance and developer experience.
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-800 dark:text-neutral-100">Tech Stack</h3>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              Next.js · React · TypeScript · Node.js · PostgreSQL · MongoDB · Prisma · Drizzle ORM · Tailwind CSS · WebSockets · Redis · Docker · Vercel
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-4 text-neutral-800 dark:text-neutral-100">Beyond Code</h3>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              When I&apos;m not building, you can find me solving competitive programming challenges (1000+ LeetCode, peak rating 1882, top 4.9% globally), exploring the latest AI trends, or drawing inspiration from the infinite possibilities of the universe.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
