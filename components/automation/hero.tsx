"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import AutomationNav from "./automation-nav";

export default function AutomationHero() {
  return (
    <div
      className="rounded-b-[120px] relative overflow-hidden"
      style={{
        background:
          "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
      }}
    >
      <AutomationNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-16 pb-24 sm:pb-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-white/90 uppercase tracking-wider text-sm mb-6 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4" />
          AI & Automation Engineering
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-['Modern_Antiqua'] text-white mb-6"
        >
          Stop Doing Repetitive
          <br />
          Work Manually
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/90 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          I help businesses eliminate repetitive manual work by building
          intelligent automation systems — from simple workflow triggers to
          AI-powered agents that can reason, act, and integrate with your
          existing tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#BE5F47] px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition"
          >
            Explore Services
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#process"
            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-3.5 rounded-full font-semibold text-sm border border-white/30 hover:bg-white/20 transition"
          >
            How I Work
          </a>
        </motion.div>
      </div>
    </div>
  );
}
