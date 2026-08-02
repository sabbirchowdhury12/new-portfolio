"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-['Modern_Antiqua'] leading-tight mb-4 sm:mb-6">
          Tech Lead &<br />
          Full-Stack Developer
        </h2>
        <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
          Currently leading a development team at{" "}
          <a
            href="https://ewynk.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" font-semibold underline underline-offset-4 decoration-2  hover:text-[#81D4FA] hover:decoration-[#81D4FA] transition-all"
          >
            ewynk
          </a>
          , I build scalable, performant web applications using React, Next.js,
          and Node.js. I love transforming complex problems into clean,
          maintainable solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/cv.pdf"
            download="sabbir-chowdhury-resume.pdf"
            className="bg-[#264653] text-white px-8 py-3 rounded-full hover:opacity-90 transition text-center font-['Modern_Antiqua']"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="bg-white text-[#BE5F47] px-8 py-3 rounded-full hover:opacity-90 transition text-center font-['Modern_Antiqua']"
          >
            Contact me
          </a>
        </div>
      </motion.div>

      {/* Right Illustration */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative order-first lg:order-last"
      >
        <Image
          src="/hero-me.png"
          alt="Developer illustration"
          width={600}
          height={600}
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </div>
  );
}
