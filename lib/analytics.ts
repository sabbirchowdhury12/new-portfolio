export {};

declare global {
  interface Window {
    gtag: (
      command: "config" | "event",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export function trackEvent(action: string, category: string, label?: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
}

export function trackCVDownload() {
  trackEvent("download_cv", "engagement", "CV_download");
}

export function trackDocView(docTitle: string, categoryName: string) {
  trackEvent("view_doc", "docs", `${categoryName}: ${docTitle}`);
}