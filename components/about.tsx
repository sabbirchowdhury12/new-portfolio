"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { aboutCards } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading title="About me" sub_title="My introduction" />

      <div className="flex flex-wrap w-full justify-between gap-4 mb-5">
        {aboutCards.map((card) => (
          <div
            key={card?.title}
            className="flex flex-col p-4 shadow border flex-1 rounded"
          >
            <p className="text-center flex items-center justify-center text-xl">
              {card?.icon}
            </p>
            <p className="mt-2">{card?.title}</p>
            <p className="text-gray-500 dark:text-gray-300">{card?.describe}</p>
          </div>
        ))}
      </div>
      {/* Main description */}
      <div className="mx-auto mt-10 text-center text-gray-700 dark:text-gray-300 space-y-5">
        <p>
          I&apos;m{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Sabbir Chowdhury
          </span>
          , a{" "}
          <span className="font-medium text-emerald-500 dark:text-emerald-400">
            Tech Lead
          </span>{" "}
          and{" "}
          <span className="font-medium text-emerald-500 dark:text-emerald-400">
            Full-Stack Developer
          </span>{" "}
          from <span className="font-medium">Bangladesh</span> with extensive
          experience building and shipping production-grade web applications. I
          currently lead a talented development team at{" "}
          <a
            href="https://ewynk.com"
            target="_blank"
            className="font-semibold text-underline text-indigo-500 dark:text-indigo-400"
          >
            ewynk
          </a>
          , where I manage sprints, mentor developers, and shape system
          architecture.
        </p>

        <p>
          On the frontend, I specialize in{" "}
          <span className="font-medium text-indigo-500 dark:text-indigo-400">
            React.js
          </span>
          ,{" "}
          <span className="font-medium text-indigo-500 dark:text-indigo-400">
            Next.js
          </span>
          , and{" "}
          <span className="font-medium text-indigo-500 dark:text-indigo-400">
            TypeScript
          </span>
          — crafting responsive, accessible interfaces with Tailwind CSS,
          ShadCN, and Framer Motion. I&apos;ve built{" "}
          <span className="font-semibold text-emerald-500 dark:text-emerald-400">
            30+ reusable components
          </span>{" "}
          and developed a no-code visual editor that{" "}
          <span className="font-semibold text-emerald-500 dark:text-emerald-400">
            reduced manual design effort by 80%
          </span>
          , accelerating team delivery speed.
        </p>

        <p>
          On the backend, I work with{" "}
          <span className="font-medium text-indigo-500 dark:text-indigo-400">
            Node.js
          </span>
          ,{" "}
          <span className="font-medium text-indigo-500 dark:text-indigo-400">
            Express.js
          </span>
          , and{" "}
          <span className="font-medium text-indigo-500 dark:text-indigo-400">
            Nest.js
          </span>{" "}
          to build robust RESTful APIs. I integrate payment solutions like{" "}
          <span className=" text-emerald-500 dark:text-emerald-400">
            Stripe
          </span>
          ,{" "}
          <span className=" text-emerald-500 dark:text-emerald-400">
            PayPal
          </span>
          , and{" "}
          <span className=" text-emerald-500 dark:text-emerald-400">
            Razorpay
          </span>
          , manage data via <span className="font-medium">PostgreSQL</span> and{" "}
          <span className="font-medium">MongoDB</span> with Prisma and Mongoose,
          and deploy with confidence on{" "}
          <span className="font-medium">Vercel</span> and{" "}
          <span className="font-medium">Netlify</span>.
        </p>

        <p>
          Beyond the stack, I&apos;ve led{" "}
          <span className="font-semibold text-emerald-500 dark:text-emerald-400">
            AI-powered features
          </span>{" "}
          using MediaPipe Pose Detection, automated workflows saving{" "}
          <span className="font-medium text-emerald-500 dark:text-emerald-400">
            6–7 hours daily
          </span>
          , and boosted backend response times by{" "}
          <span className="font-medium text-emerald-500 dark:text-emerald-400">
            20%+
          </span>
          . I thrive in Agile environments and love creating products that are
          not only fast and scalable — but genuinely useful.
        </p>
      </div>
    </motion.section>
  );
}
