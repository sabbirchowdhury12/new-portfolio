"use client";

import AutomationHero from "@/components/automation/hero";
import WhyAutomationSection from "@/components/automation/why-automation";
import ServicesSection from "@/components/automation/services-section";
import ProcessSection from "@/components/automation/process-section";
import AutomationProjectsSection from "@/components/automation/projects-section";
import CtaSection from "@/components/automation/cta-section";
import AutomationFooter from "@/components/automation/automation-footer";

export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      <AutomationHero />

      <WhyAutomationSection />

      <ServicesSection />
      <ProcessSection />
      <AutomationProjectsSection />
      <CtaSection />

      <AutomationFooter />
    </div>
  );
}