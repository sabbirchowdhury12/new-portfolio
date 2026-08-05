"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    title: "Reputation",
    description:
      "20+ successful projects delivered — SaaS platforms, AI tools, automation systems, dashboards, and visual editors for clients and startups.",
  },
  {
    title: "Tech Leadership",
    description:
      "Lead dev teams, mentor juniors, review 20+ PRs/week, and drive sprint planning for on-time delivery.",
  },
  {
    title: "Full-Stack Expert",
    description:
      "React, Next.js, Node.js, TypeScript, PostgreSQL, AWS — from UI to API to deployment.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl h-full flex items-center">
              <Image
                src="/me.png"
                alt="Sabbir Chowdhury"
                width={600}
                height={700}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Modern_Antiqua'] text-gray-900 mb-6 leading-tight">
              <span className="text-[#BE5F47]">Your Next Tech Leader -</span>
              <br />
              Building scalable products with clean design & strong engineering.
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I&apos;m <strong>Sabbir Chowdhury</strong>, a Tech Lead and
                Full-Stack Developer From Bangladesh with experience building
                scalable SaaS platforms, AI-powered systems, and modern web
                applications that focus on performance, usability, and
                real-world impact.
              </p>

              <p>
                I specialize in React, Next.js, TypeScript, and Node.js –
                crafting responsive interfaces, robust backend architectures,
                and seamless user experiences with modern technologies and clean
                development practices.
              </p>

              <p>
                Beyond coding, I lead development teams, mentor developers, and
                turn complex ideas into production-ready products. I enjoy
                building systems that are not only scalable and fast, but also
                intuitive and genuinely useful.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:scale-105 hover:brightness-110 transition-all duration-300"
              style={{
                background:
                  "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
              }}
            >
              <h3 className="text-2xl font-['Modern_Antiqua'] mb-3">
                {value.title}
              </h3>
              <p className="text-white/90">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
