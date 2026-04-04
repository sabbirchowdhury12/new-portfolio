"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";

export default function Project({ project }: { project: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "0.8 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="group mb-6 sm:mb-8 last:mb-0"
    >
      <motion.div
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
        className="shadow-lg p-4 rounded-lg dark:bg-[#1D2432] bg-white/80 border border-gray-200 dark:border-gray-700 transition-all"
      >
        <p className="text-xl font-bold text-center my-3 dark:text-white/80">
          {project.title}
        </p>

        {/* Image container with smooth vertical scroll movement on hover */}
        <div className="projects_img w-full h-[350px] overflow-hidden cursor-pointer">
          <Image
            src={project.imgUrl}
            alt={project.title}
            height={500}
            width={500}
            className="object-cover w-full transition-transform ease-out duration-[5000ms] rounded-[1rem]"
          />
        </div>
        {/* Technology tags */}
        <ul className="flex flex-wrap justify-center pt-4 my-4 gap-2">
          {project.tags.map((tag: string, i: number) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="px-3 py-1 bg-gray-900/80 text-[0.7rem] text-white uppercase tracking-wider 
                         rounded-full dark:bg-white/15 dark:text-white/70"
            >
              {tag}
            </motion.li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex justify-center items-center gap-5 text-2xl text-gray-700 dark:text-white/80 mt-4">
          {project.client && (
            <a
              href={project.client}
              target="_blank"
              rel="noopener noreferrer"
              title="Client Repository"
              className="hover:text-indigo-500 transition-colors"
            >
              <FaGithubSquare />
            </a>
          )}
          {project.server && (
            <a
              href={project.server}
              target="_blank"
              rel="noopener noreferrer"
              title="Server Repository"
              className="hover:text-indigo-500 transition-colors"
            >
              <FaGithubSquare />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Site"
              className="hover:text-indigo-500 transition-colors"
            >
              <BsBoxArrowUpRight />
            </a>
          )}
          {project.dashboard && (
            <a
              href={project.dashboard.link}
              target="_blank"
              rel="noopener noreferrer"
              title="Admin Dashboard"
              className="hover:text-indigo-500 transition-colors"
            >
              <MdDashboard />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
