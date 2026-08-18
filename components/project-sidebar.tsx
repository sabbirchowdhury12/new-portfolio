"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FolderOpen, ExternalLink } from "lucide-react";
import type { ProjectListItem } from "@/lib/project-data";

interface ProjectSidebarProps {
  projects: ProjectListItem[];
  activeSlug: string;
}

export default function ProjectSidebar({
  projects,
  activeSlug,
}: ProjectSidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow"
      >
        {sidebarOpen ? (
          <X className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        ) : (
          <Menu className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        )}
      </button>

      <aside
        className={`fixed lg:sticky top-0 inset-y-0 left-0 z-40 w-80 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 h-screen overflow-y-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-16 lg:pt-6">
          <Link
            href="/project"
            className="flex items-center gap-2.5 mb-8 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#BE5F47] to-[#D29D73] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <FolderOpen className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-gray-900 dark:text-white tracking-tight">
                Projects
              </h2>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">
                Portfolio Showcase
              </p>
            </div>
          </Link>

          <div className="space-y-2">
            {projects.map((project) => {
              const isActive = project.slug === activeSlug;
              return (
                <Link
                  key={project.slug}
                  href={`/project/${project.slug}`}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "bg-gradient-to-r from-[#BE5F47]/10 to-[#D29D73]/10 border border-[#BE5F47]/20 dark:border-[#BE5F47]/30"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-transparent"
                  }`}
                >
                  <div className="relative w-14 h-10 rounded-lg overflow-hidden shrink-0 shadow-sm">
                    <Image
                      src={project.thumbnail}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-sm font-semibold truncate ${
                        isActive
                          ? "text-[#BE5F47] dark:text-[#D29D73]"
                          : "text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white"
                      }`}
                    >
                      {project.name}
                    </h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
                      {project.tagline}
                    </p>
                  </div>
                  {isActive && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#BE5F47] shrink-0" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-[#BE5F47] dark:hover:text-[#D29D73] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </aside>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
