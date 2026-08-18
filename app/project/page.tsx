import { getAllProjects } from "@/lib/project-data";
import { FolderOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Projects | Sabbir Chowdhury",
  description: "A showcase of projects built by Sabbir Chowdhury.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-lg text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#BE5F47] to-[#D29D73] flex items-center justify-center mx-auto mb-6 shadow-lg">
          <FolderOpen className="w-7 h-7 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 font-['Modern_Antiqua']">
          Project Showcase
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Select a project from the sidebar to explore its architecture,
          features, and technical details.
        </p>
        <div className="space-y-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/project/${project.slug}`}
              className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-[#BE5F47]/30 dark:hover:border-[#D29D73]/30 transition-all group"
            >
              <div className="text-left">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#BE5F47] dark:group-hover:text-[#D29D73] transition-colors">
                  {project.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {project.tagline}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-[#BE5F47] dark:group-hover:text-[#D29D73] transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
