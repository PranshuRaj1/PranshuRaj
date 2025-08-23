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
    <div className="w-full px-32 py-8 font-medium flex items-center justify-between">
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
          <GithubIcon className="w-6" />
        </motion.a>
         <motion.a
          href="https://leetcode.com/u/Rpranshu/"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <LeetCodeIcon className="w-6" />
        </motion.a>
        
        
      </nav>
    </div>
  );
};

export default NavbarDesk;
