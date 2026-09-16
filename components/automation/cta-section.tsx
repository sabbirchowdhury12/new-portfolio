"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F5E6D3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-[60px] text-center px-6 sm:px-12 py-16 sm:py-20 text-white"
          style={{
            background:
              "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
          }}
        >
          <h2 className="text-3xl sm:text-5xl font-['Modern_Antiqua'] mb-4">
            Ready to Eliminate Repetitive Manual Work?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
            Tell me which process is eating the most hours, and I&apos;ll show
            you exactly how it can be automated.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sabbirchowdhury40854@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#BE5F47] px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition"
            >
              <Mail className="w-4 h-4" />
              Start a Project
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-3.5 rounded-full font-semibold text-sm border border-white/30 hover:bg-white/20 transition"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}