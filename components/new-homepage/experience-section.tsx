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

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#BE5F47]/20"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Left Side (or Right for odd items) */}
                <div
                  className={`${
                    index % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:order-2 md:pl-12"
                  }`}
                >
                  {index % 2 === 0 && (
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="flex items-start gap-4 md:flex-row-reverse md:text-right">
                        <div
                          className="bg-[#FFE8DC] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
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
                          {exp.achievements.length > 0 && (
                            <ul className="text-sm text-gray-600 space-y-2 mt-4 list-disc list-inside md:list-outside md:mr-4">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="leading-relaxed">
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Center Icon */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-[#F5E6D3]"
                    style={{ backgroundColor: exp.color }}
                  >
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Right Side (or Left for odd items) */}
                <div
                  className={`${
                    index % 2 === 1
                      ? "md:text-right md:pr-12"
                      : "md:order-1 md:pl-12"
                  }`}
                >
                  {index % 2 === 1 && (
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="flex items-start gap-4">
                        <div
                          className="bg-[#FFE8DC] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
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
                          {exp.achievements.length > 0 && (
                            <ul className="text-sm text-gray-600 space-y-2 mt-4 list-disc list-inside">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="leading-relaxed">
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Period Badge */}
                  <div className="mt-4 md:mt-6">
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: `${exp.color}20`,
                        color: exp.color,
                      }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {exp.period}
                    </div>
                  </div>
                </div>

                {/* Mobile View */}
                <div className="md:hidden bg-white rounded-2xl p-6 shadow-md col-span-2">
                  <div className="flex items-start gap-4">
                    <div
                      className="bg-[#FFE8DC] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
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
                      {exp.achievements.length > 0 && (
                        <ul className="text-sm text-gray-600 space-y-2 mt-4 list-disc list-inside">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="leading-relaxed">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
