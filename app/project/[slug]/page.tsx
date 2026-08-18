"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug } from "@/lib/project-data";
import {
  Shield,
  BookOpen,
  GraduationCap,
  Users,
  Brain,
  Database,
  Lock,
  FileText,
  Rocket,
  CheckCircle2,
  ChevronRight,
  Layers,
  Eye,
  ExternalLink,
  X,
  ChevronLeft,
  KeyRound,
  Languages,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const roleIcons: Record<string, React.ReactNode> = {
  shield: <Shield className="w-5 h-5" />,
  "book-open": <BookOpen className="w-5 h-5" />,
  "graduation-cap": <GraduationCap className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
};

type Lang = "en" | "bn";

function t(en: string, bn: string, lang: Lang) {
  return lang === "bn" ? bn : en;
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  const [lang, setLang] = useState<Lang>("en");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    notFound();
  }

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) =>
      i !== null
        ? (i - 1 + project.gallery.length) % project.gallery.length
        : null
    );
  const nextImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % project.gallery.length : null
    );

  const highlights =
    lang === "bn" ? project.highlightsBn : project.highlights;
  const overview = lang === "bn" ? project.overviewBn : project.overview;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative py-16 lg:py-24"
        style={{
          background:
            "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/15 text-white/90 backdrop-blur-sm border border-white/15">
              {project.category}
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-400/20 text-emerald-100 border border-emerald-400/20">
              {t(project.status, project.statusBn, lang)}
            </span>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "bn" : "en")}
              className="ml-auto flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-white/15 text-white/90 backdrop-blur-sm border border-white/15 hover:bg-white/25 transition-colors"
            >
              <Languages className="w-3.5 h-3.5" />
              {lang === "en" ? "বাংলা" : "English"}
            </button>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-3 font-['Modern_Antiqua']">
            {project.name}
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mb-6">
            {t(project.tagline, project.taglineBn, lang)}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#BE5F47] font-semibold text-sm hover:shadow-lg transition-shadow"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            <Link
              href="/project"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white border border-white/20 text-sm hover:bg-white/20 transition"
            >
              {lang === "bn" ? "সব প্রজেক্ট" : "All Projects"}
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-16">
        {/* Demo Credentials */}
        {project.demoCredentials && project.demoCredentials.length > 0 && (
          <section id="demo">
            <SectionHeader
              icon={<KeyRound className="w-5 h-5" />}
              title={t("Demo Credentials", "ডেমো তথ্যাদি", lang)}
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {project.demoCredentials.map((cred) => (
                <div
                  key={cred.role}
                  className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
                >
                  <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                    {t(cred.role, cred.roleBn, lang)}
                  </p>
                  <p className="text-sm font-mono text-gray-800 dark:text-gray-200 mb-1">
                    {cred.email}
                  </p>
                  <p className="text-sm font-mono text-gray-500 dark:text-gray-400">
                    {cred.password}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Overview */}
        <section id="overview">
          <SectionHeader
            icon={<Eye className="w-5 h-5" />}
            title={t("Project Overview", "প্রজেক্ট সারসংক্ষেপ", lang)}
          />
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
            {overview}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack">
          <SectionHeader
            icon={<Layers className="w-5 h-5" />}
            title={t("Technology Stack", "প্রযুক্তি স্ট্যাক", lang)}
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {project.techStack.map((cat) => (
              <div
                key={cat.category}
                className="p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                  {t(cat.category, cat.categoryBn, lang)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* User Roles */}
        <section id="user-roles">
          <SectionHeader
            icon={<Users className="w-5 h-5" />}
            title={t("User Portals & Roles", "ব্যবহারকারী পোর্টাল ও ভূমিকা", lang)}
          />
          <div className="space-y-6">
            {project.userRoles.map((role) => (
              <div
                key={role.role}
                className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#BE5F47] to-[#D29D73] flex items-center justify-center text-white">
                    {roleIcons[role.icon] || <Users className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {t(role.role, role.roleBn, lang)}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t(role.description, role.descriptionBn, lang)}
                    </p>
                  </div>
                </div>
                <div className="mt-4 ml-[52px]">
                  <ul className="space-y-2">
                    {(lang === "bn" ? role.featuresBn : role.features).map(
                      (feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <ChevronRight className="w-4 h-4 text-[#BE5F47] dark:text-[#D29D73] shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Features */}
        <section id="ai-features">
          <SectionHeader
            icon={<Brain className="w-5 h-5" />}
            title={t("AI-Powered Features", "এআই-চালিত বৈশিষ্ট্য", lang)}
          />
          <div className="space-y-6">
            {project.aiFeatures.map((ai) => (
              <div
                key={ai.name}
                className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {t(ai.name, ai.nameBn, lang)}
                  </h3>
                  <span className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 shrink-0">
                    {t(ai.trigger, ai.triggerBn, lang)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  {t(ai.description, ai.descriptionBn, lang)}
                </p>
                {ai.output && (
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    <span className="font-semibold">
                      {lang === "bn" ? "আউটপুট:" : "Output:"}
                    </span>{" "}
                    {t(ai.output, ai.outputBn ?? ai.output, lang)}
                  </p>
                )}
                {ai.supportedQueries && (
                  <div className="mt-3">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                      {lang === "bn"
                        ? "সমর্থিত প্রশ্নসমূহ:"
                        : "Supported Queries:"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(
                        lang === "bn"
                          ? ai.supportedQueriesBn ?? ai.supportedQueries
                          : ai.supportedQueries
                      ).map((q, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[11px] rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/30"
                        >
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {ai.riskLevels && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                      {lang === "bn"
                        ? "ঝুঁকি শ্রেণীবিভাগ:"
                        : "Risk Classification:"}
                    </p>
                    <div className="grid gap-2 sm:grid-cols-3">
                      {ai.riskLevels.map((rl) => (
                        <div
                          key={rl.level}
                          className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                rl.level === "SAFE"
                                  ? "bg-emerald-500"
                                  : rl.level === "WATCH"
                                    ? "bg-amber-500"
                                    : "bg-red-500"
                              }`}
                            />
                            <span className="text-xs font-bold text-gray-900 dark:text-white">
                              {rl.level}
                            </span>
                            <span className="text-[10px] text-gray-400">
                              ({rl.range})
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400">
                            {t(rl.action, rl.actionBn, lang)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Database */}
        <section id="database">
          <SectionHeader
            icon={<Database className="w-5 h-5" />}
            title={t("Database Architecture", "ডেটাবেস স্থাপত্য", lang)}
          />
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            {project.database.totalModels}{" "}
            {lang === "bn"
              ? "মডেল, ৭টি ডোমেইনে সাজানো"
              : "models organized across 7 domains"}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.database.domains.map((domain) => (
              <div
                key={domain.name}
                className="p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">
                  {t(domain.name, domain.nameBn, lang)}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {t(domain.description, domain.descriptionBn, lang)}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {domain.models.map((model) => (
                    <span
                      key={model}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security */}
        <section id="security">
          <SectionHeader
            icon={<Lock className="w-5 h-5" />}
            title={t(
              "Security & Authentication",
              "নিরাপত্তা ও প্রমাণীকরণ",
              lang
            )}
          />
          <div className="space-y-3">
            {project.security.map((item) => (
              <div
                key={item.aspect}
                className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                    {t(item.aspect, item.aspectBn, lang)}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t(item.detail, item.detailBn, lang)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PDF Documents */}
        <section id="pdf-documents">
          <SectionHeader
            icon={<FileText className="w-5 h-5" />}
            title={t(
              "PDF Document Generation",
              "পিডিএফ ডকুমেন্ট জেনারেশন",
              lang
            )}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {project.pdfDocuments.map((doc) => (
              <div
                key={doc.name}
                className="p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-[#BE5F47]" />
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                    {t(doc.name, doc.nameBn, lang)}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {t(doc.contents, doc.contentsBn, lang)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Deployment */}
        <section id="deployment">
          <SectionHeader
            icon={<Rocket className="w-5 h-5" />}
            title={t(
              "Deployment & Infrastructure",
              "ডেপ্লোয়মেন্ট ও অবকাঠামো",
              lang
            )}
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(project.deployment).map(([key, value]) => (
              <div
                key={key}
                className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                  {t(key, key, lang)}
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap — commented out for now */}
        {/*
        <section id="roadmap">
          <SectionHeader
            icon={<Map className="w-5 h-5" />}
            title="Development Roadmap"
          />
          ...
        </section>
        */}

        {/* Gallery */}
        <section id="gallery">
          <SectionHeader
            icon={<Eye className="w-5 h-5" />}
            title={t(
              "Application Screenshots",
              "অ্যাপ্লিকেশন স্ক্রিনশট",
              lang
            )}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="group rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow text-left cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-80 transition-opacity" />
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    {t(img.caption, img.captionBn, lang)}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={project.gallery[lightboxIndex].src}
                  alt={project.gallery[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="mt-4 text-sm text-white/80 text-center">
                {t(
                  project.gallery[lightboxIndex].caption,
                  project.gallery[lightboxIndex].captionBn,
                  lang
                )}
              </p>
              <p className="mt-1 text-xs text-white/40">
                {lightboxIndex + 1} / {project.gallery.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#BE5F47] to-[#D29D73] flex items-center justify-center text-white shadow-md">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Modern_Antiqua']">
        {title}
      </h2>
    </div>
  );
}
