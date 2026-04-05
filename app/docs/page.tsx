"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  FileText,
  ChevronRight,
  ChevronDown,
  Loader2,
  Menu,
  X,
} from "lucide-react";

interface Category {
  id: string;
  slug: string;
  name: string;
  documents: { id: string; slug: string; title: string }[];
}

export default function DocsPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(),
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    setLoading(true);
    try {
      const res = await fetch("/api/public/categories");
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      }
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    } finally {
      setLoading(false);
    }
  }

  function toggleCategory(categoryId: string) {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  }

  if (loading && categories.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <aside
        className={`fixed lg:sticky top-0 inset-y-0 left-0 z-40 w-72 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} h-screen overflow-y-auto`}
      >
        <div className="p-6 pt-16 lg:pt-6">
          <Link
            href="/docs"
            className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-6 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Learn with Sabbir
          </Link>

          {categories.length === 0 ? (
            <p className="text-sm text-gray-500">No documents available</p>
          ) : (
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.id}>
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    {expandedCategories.has(category.id) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                    {category.name}
                  </button>

                  {expandedCategories.has(category.id) && (
                    <div className="ml-3 mt-2 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                      {category.documents.map((doc) => (
                        <Link
                          key={doc.id}
                          href={`/docs/${category.slug}/${doc.slug}`}
                          onClick={() => setSidebarOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          {doc.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 lg:ml-0 p-4 lg:p-12">
        <div className="px-0 lg:px-4 mx-auto max-w-4xl">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Documentation
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Welcome to my documentation. Select a topic from the sidebar to get
            started.
          </p>

          {categories.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                >
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {category.name}
                  </h2>
                  <ul className="space-y-2">
                    {category.documents.slice(0, 5).map((doc) => (
                      <li key={doc.id}>
                        <Link
                          href={`/docs/${category.slug}/${doc.slug}`}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {doc.title}
                        </Link>
                      </li>
                    ))}
                    {category.documents.length > 5 && (
                      <li className="text-sm text-gray-500">
                        +{category.documents.length - 5} more...
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
