"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, BookOpen, GraduationCap, Crown } from "lucide-react";

const experiences = [
  {
    icon: Crown,
    title: "Tech Lead",
    company: "EYWINK — REMOTE",
    period: "2026 - Present",
    color: "#BE5F47",
    achievements: [
      "Leading a 3-member development team, managing sprints and reviewing 20+ pull requests weekly.",
      "Built an AI-powered posture analysis platform using MediaPipe.",
      "Automated Binance P2P operations saving 6-7 hours/day.",
      "Mentored 3 junior developers reducing feature delivery time by ~25%.",
    ],
  },
  {
    icon: Code,
    title: "Full-Stack Web Developer",
    company: "REMOVEQ TECHNOLOGY PVT. LTD. — REMOTE (INDIA)",
    period: "2024 - 2025",
    color: "#BE5F47",
    achievements: [
      "Built 30+ reusable UI components and developed 15+ RESTful APIs.",
      "Integrated PayPal & Razorpay payment gateways.",
      "Pioneered a no-code visual editor that reduced manual design efforts by 80%.",
      "Integrated Supabase Auth and built a scalable AWS S3 file storage system.",
    ],
  },
  {
    icon: BookOpen,
    title: "Web Development Course (Level 1 & 2)",
    company: "PROGRAMMING HERO",
    period: "2022 - 2024",
    color: "#BE5F47",
    achievements: [
      "Built a strong foundation in full-stack development.",
      "Mastered React, Next.js, Redux, Node.js, Express, MongoDB, PostgreSQL, Prisma, and TypeScript.",
      "Completed structured coursework and practical projects.",
    ],
  },
  {
    icon: GraduationCap,
    title: "BSS (Hons)",
    company: "GOVT. DEBENDRA COLLEGE",
    period: "2019 - Present",
    color: "#BE5F47",
    achievements: [],
  },
];

function Card({ exp }: { exp: (typeof experiences)[number] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${exp.color}20` }}
        >
          <exp.icon className="w-7 h-7" style={{ color: exp.color }} />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {exp.title}
          </h3>
          <p className="text-sm font-medium mb-2" style={{ color: exp.color }}>
            {exp.company}
          </p>

          {exp.achievements?.length > 0 && (
            <ul className="text-sm text-gray-600 space-y-2 mt-4 list-disc list-inside">
              {exp.achievements.map((a, i) => (
                <li key={i} className="leading-relaxed">
                  {a}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#F5E6D3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#BE5F47] uppercase tracking-wider text-sm mb-2">
            EXPERIENCE
          </p>
          <h2 className="text-4xl sm:text-5xl font-['Modern_Antiqua'] text-gray-900 mb-4">
            My Professional <span className="text-[#BE5F47]">Journey</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A timeline of my experience, roles, and the impact I&apos;ve made
            across teams and projects.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* The center vertical line across the whole timeline */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#BE5F47]/25" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0; // card on left for even, right for odd

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative"
                >
                  {/* Desktop: 3-column layout */}
                  <div className="hidden md:grid grid-cols-[1fr_120px_1fr] gap-8 items-center">
                    {/* LEFT COLUMN */}
                    <div className="flex justify-end">
                      {isLeft ? (
                        <div className="w-full max-w-lg">
                          <Card exp={exp} />
                        </div>
                      ) : (
                        // period on left when card is on right (matches screenshot)
                        <div
                          className="text-sm font-medium justify-self-end"
                          style={{ color: exp.color }}
                        >
                          {exp.period}
                        </div>
                      )}
                    </div>

                    {/* MIDDLE COLUMN: icon + local line segment */}
                    <div className="relative flex flex-col items-center">
                      {/* Optional small segment overlay (line is already drawn globally) */}
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4"
                        style={{
                          backgroundColor: exp.color,
                          borderColor: "#F5E6D3",
                        }}
                      >
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex justify-start">
                      {!isLeft ? (
                        <div className="w-full max-w-lg">
                          <Card exp={exp} />
                        </div>
                      ) : (
                        // period on right when card is on left (matches screenshot)
                        <div
                          className="text-sm font-medium"
                          style={{ color: exp.color }}
                        >
                          {exp.period}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile: stacked card */}
                  <div className="md:hidden">
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${exp.color}20` }}
                        >
                          <exp.icon
                            className="w-7 h-7"
                            style={{ color: exp.color }}
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {exp.title}
                          </h3>
                          <p
                            className="text-sm font-medium mb-2"
                            style={{ color: exp.color }}
                          >
                            {exp.company}
                          </p>

                          <div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3"
                            style={{
                              backgroundColor: `${exp.color}20`,
                              color: exp.color,
                            }}
                          >
                            {exp.period}
                          </div>

                          {exp.achievements?.length > 0 && (
                            <ul className="text-sm text-gray-600 space-y-2 mt-4 list-disc list-inside">
                              {exp.achievements.map((a, i) => (
                                <li key={i} className="leading-relaxed">
                                  {a}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
