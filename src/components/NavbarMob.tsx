"use client";

import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import Link from "next/link";
import {
  GithubIcon,
  
  LeetCodeIcon,
  
  LinkedInIcon,
  TwitterIcon,
} from "@/components/Icons";


interface INavItem {
  name: string;
  link: string;
}

const NavbarMob = ({ navItems }: { navItems: INavItem[] }) => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="sticky top-0 inset-x-0 p-6 z-50 bg-white/30 dark:bg-black/20 backdrop-blur-md border-b border-white/20 dark:border-white/10 transition-all duration-300">
      <div className="container mx-auto">
        <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-1 relative z-10"
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 5,
              },
            }}
            className="w-6 bg-white h-px block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className="w-6 bg-white h-px block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -5,
              },
            }}
            className="w-6 bg-white h-px block"
          ></motion.span>
        </motion.button>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: "-100%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "afterChildren",
                      staggerChildren: 0.25,
                    },
                  },
                  show: {
                    x: "0%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "beforeChildren",
                      staggerChildren: 0.25,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0 bg-black/80 p-6 flex flex-col justify-center space-y-10 lg:hidden"
              >
                <motion.div
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none space-y-6 flex flex-col ml-10"
                >
                  {navItems.map((item, key) => (
                    <Link key={key} href={item.link} onClick={toggleMobileNav}>
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
                <motion.div
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="w-full h-px bg-white/30"
                ></motion.div>
                <motion.div
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none flex justify-center gap-x-4"
                >
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
                            <LeetCodeIcon className="w-6 dark:text-white" />
                          </motion.a>
                  

                  <motion.a
                    href="/resume.pdf"
                    download="Pranshu_Raj_Resume.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-sm font-medium text-white border border-white/20 rounded-md hover:bg-white/10 transition-all"
                  >
                    Resume
                  </motion.a>
                </motion.div>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavbarMob;
