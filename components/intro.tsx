"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { trackCVDownload } from "@/lib/analytics";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mt-10 md:mt-32 flex flex-col-reverse md:flex-row items-center justify-center w-full text-center relative md:text-left gap-12 px-6   mb-28 scroll-mt-[100rem]"
    >
      {/* --- Left: Social Icons --- */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex md:flex-col md:absolute left-0 justify-center items-center md:items-start gap-5 md:gap-6"
      >
        {[
          {
            href: "https://www.linkedin.com/in/sabbir-chowdhury12",
            Icon: BsLinkedin,
          },
          { href: "https://github.com/sabbirchowdhury12", Icon: BsGithub },
          {
            href: "https://www.facebook.com/profile.php?id=100075403486886",
            Icon: BsFacebook,
          },
        ].map(({ href, Icon }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20
                       text-gray-700 dark:text-white/80 hover:scale-110 hover:text-emerald-500 dark:hover:text-emerald-400
                       transition-all"
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </motion.div>

      {/* --- Right: Text content --- */}
      <div className="flex flex-col items-center md:items-start max-w-2xl space-y-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="space-y-2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-gray-900 dark:text-white">
            SABBIR CHOWDHURY
          </h1>
          <h2 className="text-base sm:text-lg font-semibold uppercase tracking-[0.25em] text-emerald-500 dark:text-emerald-400">
            Tech Lead & Full‑Stack Developer
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl text-sm sm:text-base md:text-[1.05rem]"
        >
          I&apos;m{" "}
          <span className="font-semibold text-emerald-500 dark:text-emerald-400">
            Sabbir Chowdhury
          </span>
          , a Tech Lead & Full‑Stack Developer from Bangladesh. Currently
          leading a development team at{" "}
          <a
            href="https://ewynk.com"
            target="_blank"
            className="font-semibold underline text-emerald-500 dark:text-emerald-400"
          >
            ewynk
          </a>
          , I build scalable, performant web applications using{" "}
          <span className="font-medium">React</span>,{" "}
          <span className="font-medium">Next.js</span>, and{" "}
          <span className="font-medium">Node.js</span>. I love transforming
          complex problems into clean, maintainable solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          className="flex flex-col sm:flex-row items-center md:items-start gap-4 pt-2"
        >
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="group bg-gray-900 text-white px-7 py-3 rounded-full flex items-center gap-2
                       hover:bg-emerald-600 active:scale-95 focus:scale-105 transition-all"
          >
            Contact me
            <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          <a
            href="/CV.pdf"
            download
            onClick={trackCVDownload}
            className="group bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20
                       text-gray-800 dark:text-white/80 px-7 py-3 rounded-full flex items-center gap-2
                       hover:border-emerald-500 hover:scale-105 active:scale-95 transition-all"
          >
            Download CV
            <HiDownload className="opacity-70 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:translate-y-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
