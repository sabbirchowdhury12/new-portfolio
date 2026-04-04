"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading title="experience" sub_title="my training" />

      <div className="relative mx-auto mt-12 max-w-7xl">
        {/* center line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-300 md:block dark:bg-white/10" />

        <div className="space-y-14">
          {experiencesData.map((item, index) => {
            const isLeftCard = index % 2 === 0;

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] items-center gap-6"
              >
                {/* MOBILE */}
                <div className="md:hidden">
                  <div className="mb-2 text-sm text-gray-500 dark:text-white/60">
                    {item.date}
                  </div>
                  <ExperienceCard item={item} theme={theme} />
                </div>

                {/* DESKTOP */}
                {isLeftCard ? (
                  <>
                    {/* left card */}
                    <div className="hidden md:flex justify-end">
                      <ExperienceCard item={item} theme={theme} />
                    </div>

                    {/* center icon */}
                    <div className="hidden md:flex justify-center">
                      <div className="z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm dark:border-white/20 dark:bg-[#1f2430]">
                        {item.icon}
                      </div>
                    </div>

                    {/* right date */}
                    <div className="hidden md:flex items-center">
                      <span className="text-sm text-gray-500 dark:text-white/60">
                        {item.date}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* left date */}
                    <div className="hidden md:flex items-center justify-end">
                      <span className="text-sm text-gray-500 dark:text-white/60">
                        {item.date}
                      </span>
                    </div>

                    {/* center icon */}
                    <div className="hidden md:flex justify-center">
                      <div className="z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm dark:border-white/20 dark:bg-[#1f2430]">
                        {item.icon}
                      </div>
                    </div>

                    {/* right card */}
                    <div className="hidden md:flex justify-start">
                      <ExperienceCard item={item} theme={theme} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  item,
  theme,
}: {
  item: (typeof experiencesData)[number];
  theme: string;
}) {
  return (
    <div
      className="w-full max-w-[340px] rounded-md border p-5 shadow-sm"
      style={{
        background: theme === "light" ? "#f9fafb" : "#1f2937",
        borderColor:
          theme === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)",
      }}
    >
      <h3 className="font-semibold text-gray-900 dark:text-white">
        {item.title}
      </h3>
      <p className="mt-2 text-sm font-semibold uppercase text-gray-700 dark:text-white/80">
        {item.location}
      </p>

      {item.description && (
        <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-white/70">
          {item.description}
        </p>
      )}
    </div>
  );
}
