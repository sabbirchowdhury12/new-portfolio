"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { backendSkillsData, frontendSkillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 mx-auto scroll-mt-28 text-center sm:mb-40 uppercase"
    >
      <SectionHeading title="Skills" sub_title="My Technical Skills" />
      <div className="flex justify-between items-center flex-col gap-4 w-full">
        <ul className="flex flex-wrap items-center justify-center shadow border p-6 rounded gap-2 text-gray-800">
          <h1 className="flex-1 basis-96 my-2 font-bold text-indigo-600 dark:text-indigo-400 dark:text-white/80">
            Frontend Technology
          </h1>
          {frontendSkillsData.map((skill, index) => (
            <motion.li
              key={index}
              className="px-5 py-2 rounded-xl border border-gray-300 dark:border-white/20 shadow-sm 
                           bg-gradient-to-br from-white to-gray-50 dark:from-white/10 dark:to-white/5
                           text-gray-800 dark:text-gray-200 
                           hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center shadow border p-6 rounded gap-2 text-gray-800">
          <h1 className="flex-1 text-emerald-600 dark:text-emerald-400 basis-96 my-2 font-bold dark:text-white/80">
            Backend Technology
          </h1>
          {backendSkillsData.map((skill, index) => (
            <motion.li
              key={index}
              className="px-5 py-2 rounded-xl border border-gray-300 dark:border-white/20 shadow-sm 
                           bg-gradient-to-br from-white to-gray-50 dark:from-white/10 dark:to-white/5
                           text-gray-800 dark:text-gray-200 
                           hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
