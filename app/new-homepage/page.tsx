"use client";

import Navigation from "@/components/new-homepage/navigation";
import Hero from "@/components/new-homepage/hero";
import TechMarquee from "@/components/new-homepage/tech-marquee";
import StatsSection from "@/components/new-homepage/stats-section";
import ServicesSection from "@/components/new-homepage/services-section";
import SkillsSection from "@/components/new-homepage/skills-section";
import AboutSection from "@/components/new-homepage/about-section";
import ExperienceSection from "@/components/new-homepage/experience-section";
import Footer from "@/components/new-homepage/footer";

export default function NewHomepage() {
  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      {/* Hero Section with Gradient Background */}
      <div
        className="rounded-b-[120px] relative overflow-hidden"
        style={{
          background:
            "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
        }}
      >
        <Navigation />
        <Hero />
        <TechMarquee />
        <StatsSection />
      </div>
      <AboutSection />

      {/* Other Sections */}
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
