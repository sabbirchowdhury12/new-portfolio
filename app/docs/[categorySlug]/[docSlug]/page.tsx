"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FileText, ChevronRight, ChevronDown, Loader2, Menu, X } from "lucide-react";

interface Category {
  id: string;
  slug: string;
  name: string;
  documents: { id: string; slug: string; title: string }[];
}

interface Document {
  id: string;
  slug: string;
  title: string;
  content: string;
  category: { id: string; slug: string; name: string } | null;
}

export default function DocsSlugPage() {
  const params = useParams();
  const [categories, setCategories] = useState<Category[]>([]);
  const [document, setDocument] = useState<Document | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(),
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const categorySlug = params.categorySlug as string | undefined;
  const docSlug = params.docSlug as string | undefined;

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categorySlug && docSlug) {
      fetchDocument(categorySlug, docSlug);
    } else {
      setDocument(null);
    }
  }, [categorySlug, docSlug]);

  useEffect(() => {
    if (categories.length > 0) {
      setExpandedCategories(new Set(categories.map((c) => c.id)));
    }
  }, [categories]);

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

  async function fetchDocument(categorySlug: string, docSlug: string) {
    setLoading(true);
    try {
      const res = await fetch(`/api/public/documents/${docSlug}`);
      if (res.ok) {
        const data = await res.json();
        if (data.category?.slug === categorySlug) {
          setDocument(data);
        } else {
          setDocument(null);
        }
      }
    } catch (error) {
      console.error("Failed to fetch document:", error);
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

      <aside className={`fixed lg:sticky top-0 inset-y-0 left-0 z-40 w-72 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} h-screen overflow-y-auto`}>
        <div className="p-6 pt-16 lg:pt-6">
          <Link
            href="/docs"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-6 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Documentation
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
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                            docSlug === doc.slug
                              ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                          }`}
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
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : document ? (
          <div className="px-0 lg:px-4 mx-auto max-w-4xl">
            <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                {document.category?.name}
              </div>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                {document.title}
              </h1>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-code:bg-gray-200 dark:prose-code:bg-gray-700 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-pre:bg-gray-200 dark:prose-pre:bg-gray-700 prose-pre:text-gray-900 dark:prose-pre:text-gray-100 prose-pre:rounded-xl prose-a:text-blue-600 dark:prose-a:text-blue-400">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {document.content}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-64 text-gray-500">
            <div className="text-center">
              <FileText className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p className="text-lg">Select a document from the sidebar</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
