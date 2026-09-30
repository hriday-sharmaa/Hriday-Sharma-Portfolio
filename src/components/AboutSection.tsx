"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioConfig } from "../config/portfolioConfig";
import { Compass, Sparkles, Terminal, MapPin, GraduationCap, University } from "lucide-react";

export const AboutSection: React.FC = () => {
  const { about, personal } = portfolioConfig;

  return (
    <section
      id="about"
      className="py-24 sm:py-32 border-b border-[#F5F3EE]/8 relative bg-[#171717]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with Monospace Meta Tag */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-[#F5F3EE]/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C6F36B] block mb-2">
              {about.tag}
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#F5F3EE] tracking-tight">
              {about.heading}
            </h2>
          </div>
          <span className="font-mono text-xs text-[#A5A5A5] uppercase tracking-widest">
            AUTHENTIC STORY // 2026
          </span>
        </div>

        {/* Editorial Body: Asymmetrical Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          {/* Left Column: Bold Editorial Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative pl-6 border-l-2 border-[#C6F36B]">
              <p className="text-xl sm:text-2xl lg:text-3xl font-display font-normal text-[#F5F3EE] leading-relaxed tracking-tight">
                &ldquo;I&apos;m Hriday Sharma, currently pursuing B.Tech in
                Computer Science Engineering at JECRC University.&rdquo;
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#F5F3EE]/80 leading-relaxed font-light">
              I&apos;m at the beginning of my journey in technology, building my
              programming foundation and exploring how ideas transform into
              real-world digital experiences.
            </p>

            <p className="text-base sm:text-lg text-[#F5F3EE]/80 leading-relaxed font-light">
              I believe in learning by building, staying curious, and
              continuously improving. Rather than just memorizing syntax, I focus
              on understanding computational logic and memory principles from the
              ground up.
            </p>

            {/* Academic Snapshot Badge Bar */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-[#F5F3EE]/10 bg-[#171717] hover:border-[#C6F36B]/40 transition-colors">
                <div className="flex items-center gap-2.5 text-[#C6F36B] mb-2 font-mono text-xs">
                  <GraduationCap className="w-4 h-4" />
                  <span>ACADEMICS</span>
                </div>
                <div className="text-sm font-semibold text-[#F5F3EE]">
                  {personal.degree}
                </div>
                <div className="text-xs text-[#A5A5A5] mt-1">
                  {personal.year} Undergrad • Class of 2030
                </div>
              </div>

              <div className="p-5 border border-[#F5F3EE]/10 bg-[#171717] hover:border-[#C6F36B]/40 transition-colors">
                <div className="flex items-center gap-2.5 text-[#C6F36B] mb-2 font-mono text-xs">
                  <MapPin className="w-4 h-4" />
                  <span>LOCATION</span>
                </div>
                <div className="text-sm font-semibold text-[#F5F3EE]">
                  {personal.university}
                </div>
                <div className="text-xs text-[#A5A5A5] mt-1">
                  Jaipur, Rajasthan, India
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three Editorial Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A5A5A5] border-b border-[#F5F3EE]/10 pb-3">
              CORE PHILOSOPHY
            </div>

            <div className="space-y-4">
              {about.pillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="group p-6 border border-[#F5F3EE]/10 hover:border-[#C6F36B] bg-[#1a1a1a]/40 transition-all duration-300"
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="font-mono text-xs text-[#C6F36B] font-bold">
                      [{pillar.num}]
                    </span>
                    <span className="font-mono text-[10px] text-[#A5A5A5] uppercase tracking-wider">
                      GUIDING PRINCIPLE
                    </span>
                  </div>
                  <h3 className="text-base font-display font-bold text-[#F5F3EE] mb-2 group-hover:text-[#C6F36B] transition-colors">
                    {pillar.label}
                  </h3>
                  <p className="text-sm text-[#A5A5A5] font-light leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Monospace Quote Card */}
            <div className="p-4 border border-dashed border-[#F5F3EE]/15 bg-[#171717] font-mono text-xs text-[#A5A5A5] leading-relaxed">
              <span className="text-[#C6F36B]">$ </span>
              <span>mindset = explore() && build() && iterate();</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
