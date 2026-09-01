"use client";

import { motion } from "framer-motion";

const OpenSource = () => {
  return (
    <section id="opensource" className="w-full py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-xl border border-white/20 bg-white/20 p-6 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/50"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                Open source
              </p>
              <h2 className="mt-2 text-xl font-bold text-neutral-800 dark:text-neutral-100">
                Merged contributions to OpenCode
              </h2>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Two merged pull requests to anomalyco/opencode.
              </p>
            </div>
            <div className="flex gap-3 text-sm font-medium">
              <a className="text-blue-600 hover:underline dark:text-blue-300" href="https://github.com/anomalyco/opencode/pull/3882" target="_blank" rel="noopener noreferrer">
                PR #3882
              </a>
              <a className="text-blue-600 hover:underline dark:text-blue-300" href="https://github.com/anomalyco/opencode/pull/3807" target="_blank" rel="noopener noreferrer">
                PR #3807
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
