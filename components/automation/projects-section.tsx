"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ClipboardList,
  Globe,
  Waypoints,
  Sparkles,
  Mail,
  TableProperties,
  FileSearch,
  Timer,
  KeyRound,
  Activity,
  Gauge,
  GitCompare,
  TrendingUp,
  LayoutDashboard,
  ShieldCheck,
  ShieldAlert,
  Webhook,
  Lock,
  FileDown,
  Send,
  CreditCard,
  X,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import ProjectSlider from "./project-slider";

interface Project {
  badge: string;
  title: string;
  hook: string;
  problemSolution: string;
  stepsTitle: string;
  steps: { icon: LucideIcon; text: string }[];
  tools: string[];
  audience?: string;
  impact: string;
  images: { src: string; alt: string }[];
}

const projectOne: Project = {
  badge: "Project 01",
  title: "AI-Powered SEO Audit Automation",
  hook: "Automates manual SEO auditing using parallel AI agents — from form submission to a client-ready report, delivered in minutes.",
  problemSolution:
    "Manually auditing a website's SEO requires multiple tools and hours of work. I built a fully automated pipeline where two AI agents analyze meta data and content quality in parallel, then merge their findings into a professional report.",
  stepsTitle: "How It Works",
  steps: [
    {
      icon: ClipboardList,
      text: "Captures name, phone, and website via a simple form",
    },
    {
      icon: Globe,
      text: "Automatically fetches the website's content",
    },
    {
      icon: Waypoints,
      text: "Two AI agents work in parallel — one analyzes meta data, the other analyzes content quality",
    },
    {
      icon: Sparkles,
      text: "A final AI agent merges both analyses into a structured, client-friendly report",
    },
    {
      icon: Mail,
      text: "Report is emailed directly to the user",
    },
    {
      icon: TableProperties,
      text: "Every lead is automatically logged in Google Sheets",
    },
  ],
  tools: ["n8n", "OpenAI API", "Google Sheets API", "Gmail API", "Webhooks"],
  impact:
    "Reduces a multi-tool, manual SEO audit process into a fully automated, few-minute report generation system — while capturing leads automatically.",
  images: [
    {
      src: "/automation/project1-2.png",
      alt: "AI-powered SEO report preview",
    },
    { src: "/automation/project1.png", alt: "SEO audit automation dashboard" },
  ],
};

const projectTwo: Project = {
  badge: "Project 02",
  title: "DB Management MCP Server",
  hook: "An MCP server that lets AI assistants directly diagnose and optimize database queries — no more manual EXPLAIN, guesswork, or Googling execution plans.",
  problemSolution:
    "Every backend developer has faced this: a query is slow, you run EXPLAIN manually, Google the output, guess which index to add, and hope for the best. I built an MCP server that connects AI assistants (Claude, Cursor, etc.) directly to your database, so you can ask questions and get real answers backed by actual execution data — not guesses.",
  stepsTitle: "Key Capabilities",
  steps: [
    {
      icon: FileSearch,
      text: "analyze_query — Analyzes a raw SQL query's execution plan to pinpoint performance issues, root causes, severity, and targeted fixes with estimated improvements",
    },
    {
      icon: Timer,
      text: "detect_slow_queries — Scans live or historical queries (pg_stat_statements, performance_schema, currentOp) to surface the worst-performing queries",
    },
    {
      icon: KeyRound,
      text: "suggest_indexes — Parses WHERE, JOIN, and ORDER BY clauses and recommends missing indexes",
    },
    {
      icon: Activity,
      text: "explain_query — Runs EXPLAIN / EXPLAIN ANALYZE and returns a human-readable breakdown of bottlenecks",
    },
    {
      icon: Gauge,
      text: "get_table_stats — Fetches table size, row count, index size, health score, and vacuum info",
    },
    {
      icon: GitCompare,
      text: "compare_queries — Compares two query versions side-by-side and declares a winner with reasoning",
    },
  ],
  tools: ["MCP (Model Context Protocol)", "PostgreSQL", "Node.js"],
  audience:
    "For database administrators, backend developers, and data engineers optimizing SQL/NoSQL workloads.",
  impact:
    "Turns query optimization from a manual, guesswork-heavy process into a direct AI-assisted workflow — reducing diagnosis time and improving database performance with data-driven recommendations.",
  images: [
    { src: "/automation/mcp.png", alt: "DB Management MCP server interface" },
  ],
};

const projectThree: Project = {
  badge: "Project 03",
  title: "Binance P2P Automation",
  hook: "A full-stack automation platform that eliminates 6–7 hours of manual daily work managing Binance P2P trading operations.",
  problemSolution:
    "Managing Binance P2P operations meant hours of manual order syncing, identity verification, and risk checks every day. I built a full-stack admin dashboard that automates real-time order sync, multi-provider KYC/AML verification, and risk scoring in a single workflow.",
  stepsTitle: "Key Features",
  steps: [
    {
      icon: LayoutDashboard,
      text: "Full-stack admin dashboard (Next.js 16, TypeScript, Tailwind CSS & shadcn/ui) for managing Binance P2P operations — real-time order syncing, user management, and trading analytics",
    },
    {
      icon: ShieldCheck,
      text: "Multi-provider KYC/AML verification engine integrating Signzy, Deepvue, Surepass, and HyperVerge APIs with automatic fallback chains, plus OCR-based Aadhaar/PAN extraction with OpenAI GPT fallback",
    },
    {
      icon: ShieldAlert,
      text: "Risk assessment decision system with 30+ rules across identity verification, mule checks, and AML screening — computing risk bands and overall KYC status",
    },
    {
      icon: Webhook,
      text: "Custom HMAC-SHA256 signed Binance C2C API integration with pagination, batch upsert via Prisma transactions, and a webhook receiver for real-time order ingestion into PostgreSQL",
    },
    {
      icon: Lock,
      text: "Session-based admin authentication (bcrypt, httpOnly cookies) with role-based access (ADMIN/READ_ONLY), plus CSV export, date-range filtering, and dark mode",
    },
  ],
  tools: [
    "Next.js 16",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Prisma",
    "PostgreSQL",
    "Binance C2C API",
  ],
  impact:
    "Automates Binance P2P profile operations end-to-end, eliminating 6–7 hours of manual work per day.",
  images: [{ src: "/dollerpe.png", alt: "Binance P2P automation dashboard" }],
};

const projectFour: Project = {
  badge: "Project 04",
  title: "Invoicely — Invoice & Billing Automation",
  hook: "A full-stack invoice automation platform that generates branded PDFs, emails them to clients, runs recurring billing, and collects payments online via Stripe.",
  problemSolution:
    "Managing invoices manually meant building documents in a spreadsheet, exporting PDFs, emailing clients one by one, tracking payments by hand, and chasing overdue bills — hours of admin work every week. I built a full-stack invoice automation platform that handles the whole lifecycle: creating invoices, generating branded PDFs, emailing clients, scheduling recurring bills, and processing payments through Stripe — all from a single dashboard.",
  stepsTitle: "Key Features",
  steps: [
    {
      icon: FileDown,
      text: "Puppeteer renders a branded HTML template into an A4 PDF invoice on demand, stored permanently via ImageKit",
    },
    {
      icon: Send,
      text: "Nodemailer emails each invoice to the client with the PDF attached automatically",
    },
    {
      icon: Timer,
      text: "BullMQ queue + cron job handles recurring billing (weekly / monthly / yearly) — auto-generating and emailing invoices on schedule while a daily job marks overdue invoices",
    },
    {
      icon: CreditCard,
      text: "Stripe Checkout integration — the Stripe webhook auto-marks invoices as PAID the moment checkout completes",
    },
    {
      icon: Globe,
      text: "Public payment page (/pay/[invoiceId]) — clients open the payment link from email and pay without logging in",
    },
    {
      icon: LayoutDashboard,
      text: "Dashboard with KPI cards (revenue, outstanding, overdue, clients), invoice status breakdown, and recent activity feed",
    },
    {
      icon: ShieldCheck,
      text: "Secure auth via JWT + bcrypt, protected routes, and server-side validation with Zod",
    },
    {
      icon: Mail,
      text: "Automated overdue reminder emails to clients, plus sequential invoice numbering (INV-2026-0001)",
    },
  ],
  tools: [
    "Next.js",
    "TypeScript",
    "Express",
    "Prisma",
    "PostgreSQL",
    "Redis",
    "BullMQ",
    "Stripe",
    "Puppeteer",
    "Nodemailer",
    "ImageKit",
  ],
  impact:
    "Eliminates the entire manual invoice-to-payment workflow — replacing spreadsheet creation, manual PDF exports, one-by-one emailing, and payment chasing with one automated system that generates, ships, schedules, and collects invoices end-to-end.",
  images: [
    {
      src: "/automation/imvoices-automation.png",
      alt: "Invoicely invoice automation platform",
    },
  ],
};

const projects = [projectOne, projectTwo, projectThree, projectFour];

function ProjectCard({
  project,
  onView,
}: {
  project: Project;
  onView: (project: Project) => void;
}) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
      <div className="relative h-56 md:h-64 shrink-0">
        <ProjectSlider images={project.images} title={project.title} />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="inline-block self-start px-3 py-1 rounded-full bg-[#BE5F47]/10 text-[#BE5F47] text-xs font-semibold uppercase tracking-wider mb-3">
          {project.badge}
        </span>

        <h3 className="text-xl sm:text-2xl font-['Playfair_Display'] text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.hook}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          {project.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 rounded-full bg-[#FFE8DC] text-[#BE5F47] text-xs font-medium"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="text-xs text-gray-400">
              +{project.tools.length - 3} more
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => onView(project)}
          className="mt-auto inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl text-white text-sm font-semibold transition hover:opacity-90"
          style={{
            background:
              "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
          }}
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function DetailsModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 flex items-center justify-between gap-4 px-6 sm:px-8 py-4">
          <div className="min-w-0">
            <span className="inline-block px-3 py-1 rounded-full bg-[#BE5F47]/10 text-[#BE5F47] text-xs font-semibold uppercase tracking-wider mb-1.5">
              {project.badge}
            </span>
            <h3 className="text-lg sm:text-2xl font-['Playfair_Display'] text-gray-900 truncate">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            aria-label="Close details"
            onClick={onClose}
            className="w-11 h-11 shrink-0 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          <div className="relative h-56 sm:h-80">
            <ProjectSlider images={project.images} title={project.title} />
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-[#BE5F47] font-medium text-sm sm:text-base mb-5 leading-relaxed">
              {project.hook}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold text-gray-900">
                Problem → Solution:{" "}
              </span>
              {project.problemSolution}
            </p>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
              {project.stepsTitle}
            </h4>
            <ul className="space-y-2.5 mb-6">
              {project.steps.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <span className="mt-0.5 w-8 h-8 shrink-0 rounded-lg bg-[#FFE8DC] flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-[#BE5F47]" />
                  </span>
                  <span className="leading-relaxed">{step.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs font-medium text-[#BE5F47] uppercase tracking-wider mr-1">
                Tech Stack:
              </span>
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full bg-[#FFE8DC] text-[#BE5F47] text-xs font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>

            {project.audience && (
              <p className="text-sm text-gray-500 mb-6">
                <span className="font-semibold text-gray-700">
                  Who it&apos;s for:{" "}
                </span>
                {project.audience}
              </p>
            )}

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-9 h-9 shrink-0 rounded-xl bg-[#BE5F47] flex items-center justify-center mt-0.5">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Impact: </span>
                {project.impact}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AutomationProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-white/80 uppercase tracking-wider text-sm mb-2">
            PROJECTS
          </p>
          <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] text-white mb-4">
            Featured <span className="text-white/80">Projects</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.badge}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} onView={setSelectedProject} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <DetailsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
