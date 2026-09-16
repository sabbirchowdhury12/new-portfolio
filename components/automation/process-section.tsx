"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  Route,
  FlaskConical,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Discovery Call",
    description:
      "We talk through your current workflow, bottlenecks, and where the manual hours are going.",
  },
  {
    icon: Route,
    title: "Workflow Mapping",
    description:
      "I map the exact steps, tools, and data flow so we can design the right automation.",
  },
  {
    icon: FlaskConical,
    title: "Build & Test",
    description:
      "I build the automation and test it against real scenarios before anything goes live.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description:
      "The system goes live in your environment, integrated with your existing tools.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    description:
      "Monitoring, maintenance, and improvements so the automation keeps earning back time.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="inline-flex items-center gap-2 text-[#BE5F47] uppercase tracking-wider text-sm mb-3">
            <span className="w-6 h-px bg-[#BE5F47]/60" />
            HOW I WORK
            <span className="w-6 h-px bg-[#BE5F47]/60" />
          </p>
          <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] text-gray-900 mb-4">
            From Discovery to{" "}
            <span className="text-[#BE5F47]">Deployment</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A clear, collaborative process so you always know what&apos;s
            happening and what&apos;s next.
          </p>
        </motion.div>

        {/* Desktop Stepper */}
        <div className="hidden md:block relative">
          {/* Animated connector line */}
          <div className="absolute left-0 right-0 top-10 h-0.5 overflow-hidden rounded-full bg-[#F0D9C3]/70">
            <motion.div
              aria-hidden
              className="absolute inset-y-0 w-40 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #BE5F47, #D29D73, transparent)",
              }}
              animate={{ x: ["-30%", "130%"] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon with ring + number badge */}
                <div className="relative z-10 mb-5">
                  <div className="w-20 h-20 rounded-full bg-white p-1.5 shadow-lg shadow-[#BE5F47]/20 transition-transform duration-300 group-hover:-translate-y-1.5">
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
                      }}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-gradient-to-br from-[#BE5F47] to-[#D29D73] text-white text-[11px] font-bold flex items-center justify-center border-2 border-white shadow-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Step card */}
                <div className="w-full rounded-2xl bg-gradient-to-b from-white to-[#FFF6EE] border border-[#F0D9C3]/70 shadow-sm px-4 py-5 transition-shadow duration-300 group-hover:shadow-md">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-[#BE5F47]/70 mb-1.5">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-['Playfair_Display'] text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Stepper */}
        <div className="md:hidden space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative flex gap-5 pb-8 last:pb-0"
            >
              {index < steps.length - 1 && (
                <div className="absolute left-[2.3rem] top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#BE5F47]/40 to-[#D29D73]/40" />
              )}
              {/* Icon with ring + number badge */}
              <div className="relative shrink-0">
                <div className="w-20 h-20 rounded-full bg-white p-1.5 shadow-lg shadow-[#BE5F47]/20">
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
                    }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <span className="absolute -top-1.5 -left-1.5 w-7 h-7 rounded-full bg-gradient-to-br from-[#BE5F47] to-[#D29D73] text-white text-[11px] font-bold flex items-center justify-center border-2 border-white shadow-md">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex-1 pt-1 min-w-0">
                <div className="rounded-2xl bg-gradient-to-b from-white to-[#FFF6EE] border border-[#F0D9C3]/70 shadow-sm px-5 py-4">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#BE5F47]/70 mb-1">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-['Playfair_Display'] text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}