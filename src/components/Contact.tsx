"use client";

import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, TwitterIcon, LeetCodeIcon } from "@/components/Icons";

const Contact = () => {
  return (
    <section id="contact" className="py-20 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-white/30 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-800 dark:text-neutral-100">
              Get In Touch
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-12">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            
            
            
            <div className="mt-12">
               <a 
                  href="mailto:rpranshu52@gmail.com"
                  className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
               >
                  Say Hello
               </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
