"use client";

import { motion } from "framer-motion";
import { Clock, Zap, Target } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "6–7 hrs",
    sub: "/ day saved",
    description:
      "Manual Binance P2P profile operations eliminated by automation.",
  },
  {
    icon: Zap,
    value: "Minutes",
    sub: "not hours",
    description:
      "From form submission to a client-ready SEO audit report.",
  },
  {
    icon: Target,
    value: "Zero",
    sub: "missed leads",
    description:
      "Every lead captured, logged in Google Sheets, and followed up instantly.",
  },
];

export default function WhyAutomationSection() {
  return (
    <div className="relative z-10 -mt-16 sm:-mt-20 max-w-6xl mx-auto px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.sub}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
                }}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-2xl sm:text-3xl font-['Playfair_Display'] text-gray-900 leading-tight">
                  {stat.value}{" "}
                  <span className="text-sm text-[#BE5F47] align-middle uppercase tracking-wide">
                    {stat.sub}
                  </span>
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mt-1.5">
                  {stat.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}