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
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div
        key={project?.title}
        className="shadow-lg p-4 rounded-lg dark:bg-[#1D2432]"
      >
        <p className="text-sm md:text-2xl text-center my-2 font-bold">
          {project.title}
        </p>
        <div className="projects_img w-full h-[350px] overflow-hidden cursor-pointer">
          <Image
            src={project.imgUrl}
            alt={project.title}
            height={500}
            width={500}
            className="object-cover w-full transition-transform ease-out duration-[5000ms] rounded-[1rem]"
          />
        </div>

        <ul className="flex flex-wrap justify-center items-center pt-4 my-4 gap-2 sm:mt-auto">
          {project.tags.map((tag: string, index: number) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-4">
          <a
            className="icon"
            href={project.client}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            className="icon"
            href={project.server}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            className="icon"
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsBoxArrowUpRight />
          </a>

          {project?.dashboard && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="admin account"
              href={project?.dashboard?.link}
              className="icon"
            >
              <MdDashboard />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
