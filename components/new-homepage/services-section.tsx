"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  Database,
  Cloud,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    id: "01",
    icon: Code2,
    title: "Web Development",
    description:
      "Building responsive, high-performance web applications using React, Next.js, and modern frontend technologies with clean, maintainable code.",
  },
  {
    id: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile applications with React Native, delivering native-like experiences for both iOS and Android platforms.",
  },
  {
    id: "03",
    icon: Palette,
    title: "UI/UX Design Implementation",
    description:
      "Transforming designs into pixel-perfect, interactive interfaces with attention to detail, accessibility, and user experience.",
  },
  {
    id: "04",
    icon: Database,
    title: "Backend Development",
    description:
      "Developing robust REST APIs and backend systems using Node.js, Express, and databases like MongoDB and PostgreSQL.",
  },
  {
    id: "05",
    icon: Cloud,
    title: "Cloud Integration",
    description:
      "Implementing cloud solutions with AWS S3, Firebase, Supabase for scalable file storage, authentication, and real-time features.",
  },
  {
    id: "06",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Building complete e-commerce platforms with payment gateway integration (PayPal, Stripe, Razorpay) and shopping cart functionality.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-[#F5E6D3] relative overflow-hidden"
    >
      {/* Background Illustration */}
      <div className="absolute left-10 top-20 opacity-20">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simple illustration of person working */}
          <circle
            cx="200"
            cy="200"
            r="150"
            stroke="#BE5F47"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#BE5F47] uppercase tracking-wider text-sm mb-2">
            SERVICES
          </p>
          <h2 className="text-4xl sm:text-5xl font-['Modern_Antiqua'] text-gray-900 mb-4">
            Services <span className="text-[#BE5F47]">We Provide</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive development solutions from concept to deployment,
            delivering quality products that solve real-world problems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden"
            >
              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#BE5F47]/10 flex items-center justify-center">
                <span className="text-[#BE5F47] font-bold text-sm">
                  {service.id}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-4">
                <div className="w-16 h-16 rounded-xl bg-[#FFE8DC] flex items-center justify-center group-hover:bg-[#BE5F47] transition-colors">
                  <service.icon className="w-8 h-8 text-[#BE5F47] group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Decorative dots */}
              <div className="absolute bottom-4 right-4 flex gap-1 opacity-20">
                <div className="w-2 h-2 rounded-full bg-[#BE5F47]"></div>
                <div className="w-2 h-2 rounded-full bg-[#BE5F47]"></div>
                <div className="w-2 h-2 rounded-full bg-[#BE5F47]"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Illustration Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <svg
              width="300"
              height="100"
              viewBox="0 0 300 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M10 50 Q 75 20, 150 50 T 290 50"
                stroke="#BE5F47"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
              <circle cx="150" cy="50" r="30" fill="#4A90E2" opacity="0.8" />
              <text
                x="150"
                y="55"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="bold"
              >
                With
              </text>
            </svg>
            <p className="text-gray-600 mt-4 text-sm">
              You start the{" "}
              <span className="text-[#BE5F47] font-semibold">ideas</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
