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
          <p className="text-[#BE5F47] uppercase tracking-wider text-sm mb-2">
            HOW I WORK
          </p>
          <h2 className="text-4xl sm:text-5xl font-['Modern_Antiqua'] text-gray-900 mb-4">
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
          <div className="absolute left-0 right-0 top-8 h-px bg-[#BE5F47]/25" />
          <div className="relative grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg relative z-10 mb-4"
                  style={{
                    background:
                      "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
                  }}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-['Modern_Antiqua'] text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
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
                <div className="absolute left-8 top-16 bottom-0 w-px bg-[#BE5F47]/25" />
              )}
              <div
                className="w-16 h-16 shrink-0 rounded-full flex items-center justify-center shadow-lg relative z-10"
                style={{
                  background:
                    "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
                }}
              >
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-['Modern_Antiqua'] text-gray-900 mb-1">
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
    </section>
  );
}