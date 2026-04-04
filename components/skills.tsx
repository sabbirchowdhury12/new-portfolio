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
      <SectionHeading title="skills" sub_title="MY TECHNICAL SKILLS" />
      <div className="flex justify-between items-center flex-col gap-4 w-full">
        <ul className="flex flex-wrap items-center justify-center shadow border p-4 rounded gap-2 text-gray-800">
          <h1 className="flex-1 basis-96 my-2 font-bold dark:text-white/80">
            Frontend Technology
          </h1>
          {frontendSkillsData.map((skill, index) => (
            <motion.li
              className="bg-white borderBlack rounded-xl p-3 dark:bg-white/10 dark:text-white/80"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center shadow border p-4 rounded gap-2 text-gray-800">
          <h1 className="flex-1 basis-96 my-2 font-bold dark:text-white/80">
            Backend Technology
          </h1>
          {backendSkillsData.map((skill, index) => (
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
