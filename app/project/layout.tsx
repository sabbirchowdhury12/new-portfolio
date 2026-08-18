"use client";

import { usePathname } from "next/navigation";
import ProjectSidebar from "@/components/project-sidebar";
import { getAllProjects } from "@/lib/project-data";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const projects = getAllProjects();
  const slug = pathname.split("/project/")[1] ?? "";
  const activeSlug = slug || projects[0]?.slug || "";

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <ProjectSidebar projects={projects} activeSlug={activeSlug} />
      <main className="flex-1 lg:ml-0 min-w-0 overflow-y-auto">{children}</main>
    </div>
  );
}
