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
      <p>
        I am a full stack developer with a passion for creating robust and
        scalable web applications. I have a wide understanding of both frontend
        and backend technologies.
      </p>
      <p className="my-4">
        On the front end, I am skilled in using modern JavaScript frameworks
        such as React.js, Next js, and interactive user interfaces. I have a
        firm grasp of HTML, CSS, and JavaScript and expertise in front-end
        libraries and tools like Bootstrap, Sass, Style-components, and
        Tailwind CSS. My proficiency in Redux enables me to efficiently manage
        the state of complex applications, ensuring a smooth and predictable user
        experience.
      </p>
      <p>
        On the back end, I am proficient in server-side technologies such as
        Node.js, Express.js, and Nest.js, and I have extensive experience in
        designing and developing RESTful APIs. I am well-versed in handling
        data storage and retrieval, utilizing databases such as MongoDB and
        Postgres. Additionally, I have a strong background in database modeling
        using technologies like Mongoose and Prisma, and I am skilled in writing
        server-side code using TypeScript, which enhances code quality and
        maintainability. My expertise extends to implementing authentication
        and authorization mechanisms, including technologies like Firebase, to
        ensure robust security and user access control.
      </p>
    </motion.section>
  );
}
