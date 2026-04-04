"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const social = (
  <div className="flex md:flex-col gap-4">
    <a
      className="icon"
      href="https://www.linkedin.com/in/sabbir-chowdhury12"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsLinkedin />
    </a>
    <a
      className="icon"
      href="https://github.com/sabbirchowdhury12"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsGithub />
    </a>
    <a
      className="icon"
      target="_blank"
      href="https://www.facebook.com/profile.php?id=100075403486886"
      rel="noopener noreferrer"
    >
      <BsFacebook />
    </a>
  </div>
);

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mt-10 md:mt-24 h-full flex flex-col-reverse justify-center md:flex-row gap-2 items-center mb-28 text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            {social}
          </motion.div>
        </div>
      </div>

      <div>
        <motion.span
          className="font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-bold tracking-widest">SABBIR CHOWDHURY</p>
          <p className="font-bold text-sm sm:text-lg tracking-widest">
            Full-Stack Developer
          </p>
          <p className="text-sm leading-8 my-4 mx-auto md:w-2/3 tracking-wider">
            I am Sabbir Chowdhury from Bangladesh. I am Learning Programming
            every single day. I always like to learn new technology and ensure
            my skills. I am passionate about creating efficient and
            user-friendly applications using modern technologies.
          </p>
        </motion.span>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium mb-2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me
            <BsArrowRight className="group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/CV.pdf"
            download
          >
            Download CV
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
