"use client";

import React from "react";
import { motion } from "framer-motion";
import experiences from "@/data/experiences";

const Experience = () => {
  return (
    <section id="experience" className="py-20 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
            Skills & Experience
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-neutral-200 dark:border-neutral-700 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-black" />
              
              <div className="bg-white/30 dark:bg-neutral-900/50 backdrop-blur-md border border-white/20 dark:border-neutral-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
                    {exp.role}
                  </h3>
                  <div className="text-lg font-medium text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </div>
                </div>

                <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-700 dark:text-neutral-300">
                  {exp.work.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
