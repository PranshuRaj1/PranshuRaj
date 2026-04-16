"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import projects from "@/data/projects";
import { GithubIcon } from "@/components/Icons";

const Projects = () => {
  return (
    <section id="projects" className="py-20 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
            Projects
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Some of the cool things I've built
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/30 dark:bg-neutral-900/50 backdrop-blur-md border border-white/20 dark:border-neutral-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} — ${project.category} project by Pranshu Raj`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source on GitHub`}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
