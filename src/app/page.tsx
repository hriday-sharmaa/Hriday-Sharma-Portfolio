"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { JourneySection } from "../components/JourneySection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#171717] text-[#F5F3EE] relative selection:bg-[#C6F36B] selection:text-[#171717]">
      {/* Top Hairline Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#C6F36B] origin-left z-50 shadow-[0_0_8px_#C6F36B]"
        style={{ scaleX }}
      />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* 01. Hero Section */}
        <Hero />

        {/* 02. About Section */}
        <AboutSection />

        {/* 03. My Journey (Timeline) */}
        <JourneySection />

        {/* 04. Skills & Exploration */}
        <SkillsSection />

        {/* 05. Project Showcase */}
        <ProjectsSection />

        {/* 06. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
