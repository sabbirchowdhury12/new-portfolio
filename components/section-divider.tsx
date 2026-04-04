"use client";

import React from "react";
import { motion } from "framer-motion";
import { CgArrowDown } from "react-icons/cg";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";

export default function SectionDivider() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <Link
      href="#about"
      onClick={() => {
        setActiveSection("About");
        setTimeOfLastClick(Date.now());
      }}
    >
      <motion.div
        className="animate-bounce mt-0 sm:mt-32 md:mt-40 mb-52 md:mb-44 h-16 w-16 rounded-full dark:bg-opacity-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      >
        <CgArrowDown className="border border-black dark:border-white h-6 w-6 rounded-full" />
      </motion.div>
    </Link>
  );
}
