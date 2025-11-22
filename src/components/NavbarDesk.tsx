"use client";

import { CustomLink } from "@/components/ui/CustomNavLink";
import {
  GithubIcon,
  LeetCodeIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/Icons";
import { motion } from "framer-motion";


interface INavItem {
  name: string;
  link: string;
}

const NavbarDesk = ({ navItems }: { navItems: INavItem[] }) => {
  return (
    <div className="sticky top-0 z-50 w-full px-32 py-6 font-medium flex items-center justify-between bg-white/30 dark:bg-black/20 backdrop-blur-md border-b border-white/20 dark:border-white/10 transition-all duration-300">
      <div>
        {navItems.map((item, key) => (
          <CustomLink key={key} name={item.name} link={item.link} />
        ))}
      </div>
      <nav className="flex justify-center items-center flex-wrap gap-8">

        <motion.a
          href="https://github.com/PranshuRaj1"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <GithubIcon className="w-6 dark:text-white" />
        </motion.a>
         <motion.a
          href="https://leetcode.com/u/Rpranshu/"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <LeetCodeIcon className="w-6 dark:text-white" />
        </motion.a>
        <motion.a
          href="/resume.pdf"
          download="Pranshu_Raj_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 text-sm font-medium text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-sm"
        >
          Resume
        </motion.a>
      </nav>
    </div>
  );
};

export default NavbarDesk;
