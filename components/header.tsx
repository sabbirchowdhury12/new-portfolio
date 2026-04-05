"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Background glass pill */}
      <motion.div
        className="fixed top-4 left-1/2 -translate-x-1/2 h-[3.5rem] w-full max-w-[90%] sm:max-w-[38rem] sm:h-[3.25rem] 
                   rounded-full border border-gray-200/50 dark:border-gray-700/50
                   bg-white/80 dark:bg-gray-900/80 
                   shadow-lg shadow-black/[0.05] backdrop-blur-xl
                   sm:top-6"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Navigation */}
      <nav className="flex fixed top-[0.35rem] left-1/2 -translate-x-1/2 h-14 sm:top-[1.65rem] sm:h-[3.25rem] w-full max-w-[90%] sm:max-w-[38rem]">
        <ul className="flex items-center justify-center gap-1 sm:gap-3 w-full h-full text-[0.85rem] font-medium text-gray-500 dark:text-gray-400">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative flex items-center h-full"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "relative flex items-center justify-center px-3 sm:px-4  py-1.5 w-full",
                  "hover:text-gray-900 dark:hover:text-white transition-colors duration-200",
                  {
                    "text-emerald-600 dark:text-emerald-400 font-semibold":
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  if (!link.hash.startsWith("/")) {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }
                }}
              >
                {link.name}

                {/* Active section pill indicator */}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-emerald-100 dark:bg-emerald-900/30 
                                border border-emerald-300/50 dark:border-emerald-700/50
                                -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
