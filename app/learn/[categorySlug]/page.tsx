"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FileText,
  ChevronDown,
  Loader2,
  ArrowLeft,
  Menu,
  X,
} from "lucide-react";

interface Category {
  id: string;
  slug: string;
  name: string;
  documents: { id: string; slug: string; title: string }[];
}

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.categorySlug as string;

  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    let active = true;

    async function fetchCategory() {
      setLoading(true);
      setNotFound(false);
      try {
        const res = await fetch("/api/public/categories");
        if (res.ok) {
          const data = await res.json();
          const match = data.find(
            (c: Category) => c.slug === categorySlug,
          );
          if (active) {
            if (match) {
              setCategory(match);
            } else {
              setCategory(null);
              setNotFound(true);
            }
          }
        } else if (active) {
          setCategory(null);
          setNotFound(true);
        }
      } catch {
        if (active) {
          setCategory(null);
          setNotFound(true);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    fetchCategory();

    return () => {
      active = false;
    };
  }, [categorySlug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (notFound || !category) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="text-center">
          <FileText className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Category not found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This category may be private or doesn&apos;t exist.
          </p>
          <Link
            href="/learn"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Back to all docs
          </Link>
        </div>
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
            href="/learn"
            className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-6 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Learn with Sabbir
          </Link>

          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-left text-gray-900 dark:text-white">
                <ChevronDown className="w-4 h-4 shrink-0" />
                {category.name}
              </div>
              <div className="ml-3 mt-2 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                {category.documents.map((doc) => (
                  <Link
                    key={doc.id}
                    href={`/learn/${category.slug}/${doc.slug}?cat=${category.slug}`}
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center gap-1.5 block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <span className="break-words">{doc.title}</span>
                  </Link>
                ))}
                {category.documents.length === 0 && (
                  <p className="px-3 py-2 text-sm text-gray-500">
                    No public documents yet
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 lg:ml-0 min-w-0 p-4 lg:p-12">
        <div className="px-0 lg:px-4 mx-auto max-w-4xl">
          <Link
            href="/learn"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All docs
          </Link>

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              {category.documents.length}{" "}
              {category.documents.length === 1 ? "document" : "documents"}
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 break-words">
              {category.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Browse the public documentation in this category.
            </p>
          </div>

          {category.documents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {category.documents.map((doc) => (
                <Link
                  key={doc.id}
                  href={`/learn/${category.slug}/${doc.slug}?cat=${category.slug}`}
                  className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                >
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 break-words">
                    {doc.title}
                  </h2>
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    Read document →
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-10 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-center">
              <FileText className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-gray-600 dark:text-gray-400">
                No public documents in this category yet.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
