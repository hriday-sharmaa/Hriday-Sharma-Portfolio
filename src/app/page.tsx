"use client";

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { BentoGrid } from "../components/BentoGrid";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { AcademicJourney } from "../components/AcademicJourney";
import { TerminalCli } from "../components/TerminalCli";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ResumeModal } from "../components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-black">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Single-Page Content */}
      <main className="flex-1 w-full">
        {/* Hero Presentation */}
        <Hero />

        {/* Bento Identity & Live Telemetry Grid */}
        <BentoGrid />

        {/* Engineering Projects & Architectural Blueprints */}
        <ProjectsSection />

        {/* Technical Skills & Competencies Matrix */}
        <SkillsSection />

        {/* Academic Coursework & Hackathons */}
        <AcademicJourney />

        {/* Interactive CLI Terminal Emulator */}
        <TerminalCli />

        {/* Direct Contact & Collaboration Hub */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* ATS Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
