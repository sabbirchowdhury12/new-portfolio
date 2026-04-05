"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FileText, ChevronRight, ChevronDown, Loader2 } from "lucide-react";

interface Category {
  id: string;
  name: string;
  documents: { id: string; title: string }[];
}

interface Document {
  id: string;
  title: string;
  content: string;
  category: { id: string; name: string } | null;
}

export default function DocsCategoryPage() {
  const params = useParams();
  const [categories, setCategories] = useState<Category[]>([]);
  const [document, setDocument] = useState<Document | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(),
  );

  const selectedDocId = params.id as string | undefined;

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedDocId) {
      fetchDocument(selectedDocId);
    } else {
      setDocument(null);
    }
  }, [selectedDocId]);

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

  async function fetchDocument(id: string) {
    setLoading(true);
    try {
      const res = await fetch(`/api/public/documents/${id}`);
      if (res.ok) {
        const data = await res.json();
        setDocument(data);
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
      <aside className="w-72 border-r border-gray-200 dark:border-gray-800 fixed h-full overflow-y-auto bg-white dark:bg-gray-900">
        <div className="p-6">
          <Link
            href="/docs"
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
                          href={`/docs/${category.id}/${doc.id}`}
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                            selectedDocId === doc.id
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

      <main className="flex-1 ml-72 p-12">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : document ? (
          <div className="px-4 mx-auto">
            <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                {document.category?.name}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {document.title}
              </h1>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950 prose-pre:rounded-xl prose-a:text-blue-600 dark:prose-a:text-blue-400">
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
