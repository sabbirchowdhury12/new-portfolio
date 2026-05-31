"use client";

import Navigation from "@/components/new-homepage/navigation";
import Hero from "@/components/new-homepage/hero";
import TechMarquee from "@/components/new-homepage/tech-marquee";
import StatsSection from "@/components/new-homepage/stats-section";
import ServicesSection from "@/components/new-homepage/services-section";
import SkillsSection from "@/components/new-homepage/skills-section";
import AboutSection from "@/components/new-homepage/about-section";
import ExperienceSection from "@/components/new-homepage/experience-section";
import ProjectsSection from "@/components/new-homepage/projects-section";
import ContactSection from "@/components/new-homepage/contact-section";
import GitHubSection from "@/components/new-homepage/github-section";
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
      <ProjectsSection />
      <ExperienceSection />

      {/* Contact */}
      <ContactSection />

      {/* GitHub Contributions */}
      <GitHubSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
// import About from "@/components/about";
// import Contact from "@/components/contact";
// import Experience from "@/components/experience";
// import Footer from "@/components/footer";
// import Header from "@/components/header";
// import Intro from "@/components/intro";
// import Projects from "@/components/projects";
// import SectionDivider from "@/components/section-divider";
// import Skills from "@/components/skills";

// export default function Home() {
//   return (
//     <main className="pt-24 sm:pt-36 flex max-w-5xl mx-auto flex-col items-center px-4">
//       <Header />

//       <Intro />
//       <SectionDivider />
//       <About />
//       <Skills />
//       <Projects />
//       <Experience />
//       <Contact />
//     </main>
//   );
// }
