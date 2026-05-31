"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithubSquare } from "react-icons/fa";
import { useRef } from "react";

interface Project {
  id: number;
  title: string;
  imgUrl: string;
  tags: string[];
  features: string[];
  live: string;
  client: string;
  server: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Tigsaw (SaaS Platform)",
    imgUrl: "/tigsaw.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "ShadCN",
      "Tailwind CSS",
      "PayPal",
      "Razorpay",
    ],
    features: [
      "Built and optimized full-stack web applications with Next.js, Prisma, and PostgreSQL, improving performance and backend response times by 20%+.",
      "Designed and implemented responsive UI components using ShadCN, Tailwind CSS, and Framer Motion, improving user experience and consistency.",
      "Developed 15+ RESTful APIs and integrated payment gateways (PayPal, Razorpay) with upgrade & renewal plans, enabling seamless subscription management.",
      "Implemented a custom editor like GrapesJS, empowering users to create and manage components without coding.",
      "Collaborated in Agile workflows (daily stand-ups, sprint planning, code reviews), ensuring timely delivery of high-quality features and reducing bugs by 10%.",
    ],
    live: "https://tigsaw.com",
    client: "",
    server: "",
  },
  {
    id: 2,
    title: "Sacchi Sewa (Crowdfunding Platform)",
    imgUrl: "/Sacchi-Sewa.png",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Cashfree PG",
      "AWS S3",
      "Tailwind CSS",
      "Framer Motion",
    ],
    features: [
      "Built a full-stack crowdfunding platform with Next.js 16 App Router, supporting campaign creation, donation processing, and real-time payment tracking.",
      "Integrated Cashfree payment gateway with dual payment paths — static UPI QR codes and dynamic checkout popups with webhook-based verification.",
      "Designed PostgreSQL schema via Prisma ORM with Campaign, Payment, and FundAdjustment models handling deduplication, refunds, and atomic balance updates.",
      "Implemented AWS S3 image uploads and admin campaign management with Zod-validated API routes and bcryptjs authentication.",
      "Built responsive animated UI with Tailwind CSS, Framer Motion, shadcn/ui, and TipTap rich-text editor — including donation popups and contributor leaderboards.",
    ],
    live: "https://sacchisewa.org",
    client: "",
    server: "",
  },
  {
    id: 3,
    title: "RemoveQ (Analytics Platform)",
    imgUrl: "/removeq.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "AWS S3",
      "Tailwind CSS",
      "ShadCN",
      "REST API",
      "JWT",
    ],
    features: [
      "Implementing authentication system with Supabase Auth, enabling secure user login, registration, and session handling.",
      "Building a modern dashboard UI with beautiful loading states and smooth frontend interactions.",
      "Developing file upload & storage features (images, videos, documents) using AWS S3 for scalability and reliability.",
      "Debugging and optimizing file/image upload flows, improving performance and reducing errors.",
      "Contributing to continuous enhancements by bug fixing, refining UI/UX, and adding new features in collaboration with the product team.",
    ],
    live: "https://removeq.com",
    client: "",
    server: "",
  },
  {
    id: 4,
    title: "Binance P2P Automation",
    imgUrl: "/dollerpe.png",
    tags: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL",
      "Binance C2C API",
    ],
    features: [
      "Built a full-stack admin dashboard in Next.js 16 (App Router, TypeScript) with Tailwind CSS & shadcn/ui to manage Binance P2P trading operations, featuring real-time order syncing, user management, and trading analytics.",
      "Implemented a multi-provider KYC/AML verification engine integrating Signzy, Deepvue, Surepass, and HyperVerge APIs with automatic fallback chains — including OCR-based Aadhaar/PAN extraction with OpenAI GPT fallback.",
      "Designed a risk assessment decision system with 30+ rules across identity verification, mule checks, and AML screening, computing risk bands (low/medium/high) and overall KYC status (verified/failed/manual_review).",
      "Developed a custom HMAC-SHA256 signed Binance C2C API integration with pagination, batch upsert via Prisma transactions, and a webhook receiver for real-time order ingestion into PostgreSQL.",
      "Built session-based admin authentication (bcrypt, httpOnly cookies) with role-based access (ADMIN/READ_ONLY), and a responsive UI featuring collapsible sidebar, CSV export, date-range filtering, and dark mode support.",
    ],
    live: "",
    client: "",
    server: "",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row">
      <div className="relative w-full md:w-[280px] lg:w-[320px] h-52 md:h-auto shrink-0">
        <Image
          src={project.imgUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-bold md:text-2xl font-['Modern_Antiqua']  text-gray-900 mb-2">
            {project.title}
          </h3>

          <ul className="space-y-1.5 mb-4">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#BE5F47] shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 bg-[#BE5F47]/10 text-[#BE5F47] text-xs rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs text-gray-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#BE5F47] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Site
            </a>
          )}
          {project.client && (
            <a
              href={project.client}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#BE5F47] transition-colors"
            >
              <FaGithubSquare className="w-4 h-4" />
              Client
            </a>
          )}
          {project.server && (
            <a
              href={project.server}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#BE5F47] transition-colors"
            >
              <FaGithubSquare className="w-4 h-4" />
              Server
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 relative overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div style={{ y: headingY }} className="text-center mb-12">
          <p className="text-white/80 uppercase tracking-wider text-sm mb-2">
            PROJECTS
          </p>
          <h2 className="text-4xl sm:text-5xl font-['Modern_Antiqua'] text-white mb-4">
            Featured <span className="text-white/80">Projects</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Real-world applications I&apos;ve built — from SaaS platforms to
            automation tools.
          </p>
        </motion.div>

        <div ref={sectionRef} className="relative">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="sticky top-24 md:top-32"
              style={{ zIndex: index + 1 }}
            >
              <div className="pb-6 md:pb-8">
                <ProjectCard project={project} index={index} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
