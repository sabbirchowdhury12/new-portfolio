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
      className="py-16 sm:py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#BE5F47] uppercase tracking-wider text-sm mb-2">
            SERVICES
          </p>
          <h2 className="text-4xl sm:text-5xl font-['Modern_Antiqua'] text-gray-900 mb-4">
            Services <span className="text-[#BE5F47]">We Provide</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Comprehensive development solutions from concept to deployment,
            delivering quality products that solve real-world problems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col gap-12">
          {services.map((s, idx) => {
            const isRight = idx % 2 === 1;
            const Icon = s.icon;

            return (
              <div
                key={s.id}
                className={[
                  "flex flex-col md:flex-row items-center gap-4 sm:gap-8 mb-0",
                  "w-full md:max-w-[60%]",
                  isRight ? "md:ml-auto" : "",
                ].join(" ")}
              >
                <div className="shrink-0 flex md:hidden items-center gap-3">
                  <div className="h-16 w-16 border flex justify-center items-center border-dashed rounded-full border-[#BE5F47]">
                    <div className="h-10 w-10 bg-[#BE5F47] rounded-full flex justify-center items-center text-white font-bold">
                      {s.id}
                    </div>
                  </div>
                  <div
                    className="h-16 w-16 flex justify-center items-center rounded-full shrink-0"
                    style={{
                      background:
                        "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div
                  className={[
                    "min-w-0 flex flex-col gap-2",
                    isRight ? "md:text-right md:items-end" : "md:text-left md:items-start",
                    "text-center items-center",
                  ].join(" ")}
                >
                  <p className="text-xl text-gray-900 font-['Modern_Antiqua']">
                    {s.title}
                  </p>
                  <p className="text-base text-gray-700 font-['Modern_Antiqua']">
                    {s.description}
                  </p>
                </div>

                <div className="shrink-0 hidden md:block">
                  <div
                    className="h-16 w-16 flex justify-center items-center rounded-full shrink-0"
                    style={{
                      background:
                        "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Bottom Illustration Text */}
      </div>
    </section>
  );
}
