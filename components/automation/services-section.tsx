"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Users,
  Bot,
  DatabaseZap,
  FileText,
  Lightbulb,
  Wrench,
} from "lucide-react";

const services = [
  {
    id: "01",
    icon: Workflow,
    title: "Workflow & Business Process Automation",
    description:
      "Automating repetitive operational tasks — data entry, follow-ups, notifications, and cross-platform data sync — so teams can focus on high-value work instead of manual processes.",
    tools: ["n8n", "Node.js", "Webhooks", "REST APIs"],
    example:
      "Automated Binance P2P profile operations, eliminating 6–7 hours of manual work per day.",
  },
  {
    id: "02",
    icon: Users,
    title: "CRM & Lead Management Automation",
    description:
      "Automating lead capture, follow-up sequences, and data updates across CRM tools — so no lead falls through the cracks and follow-ups happen instantly instead of manually.",
    tools: ["n8n", "Google Sheets/Airtable", "WhatsApp/Email API integrations"],
    example:
      "Built an automated SEO audit pipeline (n8n + OpenAI) that captures leads via form, emails a client-ready report within minutes, and logs every lead in Google Sheets automatically.",
  },
  {
    id: "03",
    icon: Bot,
    title: "AI-Powered Feature & Agent Integration",
    description:
      "Building AI features into existing products — from intelligent analysis systems to conversational agents that can answer questions and take action using business context and connected tools.",
    tools: ["AI APIs (OpenAI/Claude)", "MediaPipe", "Node.js"],
    example:
      "Built an AI-powered posture analysis platform using MediaPipe Pose Detection, analyzing multiple body metrics with real-time competitive scoring.",
  },
  {
    id: "04",
    icon: DatabaseZap,
    title: "Custom API & Database Integrations",
    description:
      "Connecting fragmented systems — APIs, databases, and third-party tools — into unified automated workflows, including exposing internal data/tools to AI systems for direct querying and action.",
    tools: ["Node.js", "MongoDB", "PostgreSQL", "REST/MCP integrations"],
    example:
      "Built a DB Management MCP server that connects AI assistants (Claude, Cursor) directly to your database — enabling live query analysis, slow-query detection, and index suggestions backed by real execution data.",
  },
  {
    id: "05",
    icon: FileText,
    title: "Document & Communication Automation",
    description:
      "Automating repetitive document-based and communication-heavy processes (emails, reports, notifications) to reduce turnaround time and manual overhead.",
    tools: ["Node.js", "Puppeteer", "Email/Notification APIs"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F5E6D3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#BE5F47] uppercase tracking-wider text-sm mb-2">
            SERVICES
          </p>
          <h2 className="text-4xl sm:text-5xl font-['Modern_Antiqua'] text-gray-900 mb-4">
            What I Can <span className="text-[#BE5F47]">Automate</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every service below is tied to a real capability I&apos;ve shipped —
            not generic buzzwords.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-6 sm:gap-8"
              >
                {/* Number + Icon */}
                <div className="shrink-0 flex md:flex-col items-center md:items-start gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="h-16 w-16 flex justify-center items-center rounded-full shrink-0"
                      style={{
                        background:
                          "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-3xl font-['Modern_Antiqua'] text-[#BE5F47]/40">
                      {service.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl sm:text-2xl font-['Modern_Antiqua'] text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#BE5F47] uppercase tracking-wider">
                      <Wrench className="w-3.5 h-3.5" />
                      Tools:
                    </span>
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full bg-[#FFE8DC] text-[#BE5F47] text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {service.example && (
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                      <Lightbulb className="w-5 h-5 text-[#BE5F47] shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900">
                          Example:{" "}
                        </span>
                        {service.example}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}