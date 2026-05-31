"use client";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

export default function GitHubSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#BE5F47] uppercase tracking-wider text-sm mb-2">
            GITHUB
          </p>
          <h2 className="text-4xl sm:text-5xl font-['Modern_Antiqua'] text-gray-900 mb-4">
            Contribution <span className="text-[#BE5F47]">Calendar</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My open-source activity and contributions from the past year.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm flex justify-center overflow-x-auto"
        >
          <GitHubCalendar
            username="sabbirchowdhury12"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
          />
        </motion.div>
      </div>
    </section>
  );
}
