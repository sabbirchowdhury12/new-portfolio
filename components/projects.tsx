"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { generateProjectData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

const projectBtn = [
  { name: "Full-Stack", value: "full-stack" },
  { name: "Javascript", value: "javascript" },
  { name: "Css", value: "css" },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState("full-stack");
  const [selectedbtn, setSelectedbtn] = useState("full-stack");
  const { ref } = useSectionInView("Projects", 0.5);

  const data: any = generateProjectData(selectedProject);

  const handleProject = (value: string) => {
    setSelectedProject(value);
    setSelectedbtn(value);
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading title="My Projects" sub_title="" />
      <ul className="flex justify-center flex-wrap items-center gap-4">
        {projectBtn.map((btn) => (
          <div
            key={btn.value}
            onClick={() => handleProject(btn.value)}
            className={`uppercase borderBlack rounded-xl px-5 py-3 mb-10 cursor-pointer ${
              btn.value === selectedbtn
                ? "bg-gray-500 text-white dark:bg-white dark:text-black"
                : "bg-white dark:text-white/80 dark:bg-white/10"
            }`}
          >
            {btn.name}
          </div>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((project: any) => (
          <React.Fragment key={project.id}>
            <Project project={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
