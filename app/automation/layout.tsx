import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Automation Engineering | Sabbir Chowdhury",
  description:
    "I help businesses eliminate repetitive manual work by building intelligent automation systems — from workflow triggers to AI-powered agents.",
};

export default function AutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
