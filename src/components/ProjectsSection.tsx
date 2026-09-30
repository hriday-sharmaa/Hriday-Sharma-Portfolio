"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioConfig, ProjectItem } from "../config/portfolioConfig";
import { ArrowUpRight, Github, ExternalLink, Terminal, Code2, Sparkles, Layers } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioConfig;

  // Custom CSS-Generated Graphic Previews
  const renderPreview = (type: "portfolio" | "terminal" | "neural") => {
    switch (type) {
      case "portfolio":
        return (
          <div className="relative w-full h-full min-h-[220px] bg-[#121212] border border-[#F5F3EE]/10 p-5 flex flex-col justify-between overflow-hidden group-hover:border-[#C6F36B]/60 transition-colors">
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between border-b border-[#F5F3EE]/10 pb-3 font-mono text-[10px] text-[#A5A5A5]">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F5F3EE]/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F5F3EE]/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#C6F36B]" />
              </div>
              <div className="px-2 py-0.5 bg-[#171717] border border-[#F5F3EE]/10 text-[9px]">
                hridaysharma.dev {"//"} LIVE
              </div>
            </div>

            {/* Editorial Mock Wireframe */}
            <div className="space-y-3 my-auto py-2">
              <div className="text-[10px] font-mono text-[#C6F36B]">
                {"// THE DIGITAL JOURNEY"}
              </div>
              <div className="text-xl sm:text-2xl font-display font-extrabold text-[#F5F3EE] leading-tight">
                Curious mind.
                <br />
                <span className="text-[#C6F36B]">Building beyond.</span>
              </div>
              <div className="w-24 h-1 bg-[#C6F36B]" />
            </div>

            {/* Bottom HUD */}
            <div className="flex items-center justify-between text-[10px] font-mono text-[#A5A5A5] pt-2 border-t border-[#F5F3EE]/10">
              <span>EDITORIAL ARCHITECTURE</span>
              <span className="text-[#C6F36B]">v2.0_DEPLOYED</span>
            </div>
          </div>
        );

      case "terminal":
        return (
          <div className="relative w-full h-full min-h-[220px] bg-[#0f0f0f] border border-[#F5F3EE]/10 p-5 flex flex-col justify-between overflow-hidden group-hover:border-[#C6F36B]/60 transition-colors">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-[#F5F3EE]/10 pb-3 font-mono text-[10px] text-[#A5A5A5]">
              <span className="text-[#C6F36B]">c_algorithm_runtime</span>
              <span>DEV_STATUS: 85%</span>
            </div>

            {/* Terminal Memory Stream Simulation */}
            <div className="font-mono text-xs text-[#A5A5A5] space-y-1.5 py-2">
              <div className="text-[#C6F36B] text-[11px]">{"// Memory allocation & pointer logic"}</div>
              <div className="text-[11px] text-[#F5F3EE]">int *ptr = (int*)malloc(sizeof(int));</div>
              <div className="text-[10px] text-[#A5A5A5]">*ptr = 2026; {"/* JECRC Foundation */"}</div>
              <div className="flex items-center gap-2 pt-2">
                <span className="w-2 h-2 rounded-full bg-[#C6F36B] animate-ping" />
                <span className="text-[10px] text-[#C6F36B]">STATUS: IN DEVELOPMENT</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#A5A5A5] pt-2 border-t border-[#F5F3EE]/10">
              <span>ALGORITHMIC LOGIC</span>
              <span className="text-[#F5F3EE]">COMING SOON</span>
            </div>
          </div>
        );

      case "neural":
        return (
          <div className="relative w-full h-full min-h-[220px] bg-[#121212] border border-[#F5F3EE]/10 p-5 flex flex-col justify-between overflow-hidden group-hover:border-[#C6F36B]/60 transition-colors">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#F5F3EE]/10 pb-3 font-mono text-[10px] text-[#A5A5A5]">
              <span>SYSTEMS_LAB</span>
              <span className="text-[#C6F36B]">CONCEPT</span>
            </div>

            {/* Perspective Grid & Node Visual */}
            <div className="relative my-auto py-4 flex items-center justify-center">
              <div className="w-32 h-20 border border-dashed border-[#F5F3EE]/20 flex items-center justify-center relative">
                <div className="w-12 h-12 border border-[#C6F36B]/50 rounded-full flex items-center justify-center animate-spin-slow">
                  <div className="w-2 h-2 bg-[#C6F36B] rounded-full" />
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#F5F3EE]/40" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#F5F3EE]/40" />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#A5A5A5] pt-2 border-t border-[#F5F3EE]/10">
              <span>FUTURE HORIZONS</span>
              <span className="text-[#C6F36B]">EXPERIMENTING</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 border-b border-[#F5F3EE]/8 relative bg-[#171717] editorial-grid"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-[#F5F3EE]/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C6F36B] block mb-2">
              {projects.tag}
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#F5F3EE] tracking-tight">
              {projects.heading}
            </h2>
          </div>
          <p className="font-mono text-xs text-[#A5A5A5] max-w-sm">
            {projects.subheading}
          </p>
        </div>

        {/* Large Asymmetrical Project Cards */}
        <div className="pt-16 space-y-12 sm:space-y-16">
          {projects.items.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="group border border-[#F5F3EE]/12 bg-[#191919] hover:border-[#C6F36B] transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 sm:p-12 items-center`}
                >
                  {/* Visual Preview Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {renderPreview(project.previewType)}
                  </div>

                  {/* Project Information Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Index & Status Badge */}
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-[#C6F36B] font-bold">
                        [{project.number}] {"// PROJECT"}
                      </span>
                      <span
                        className={`px-2.5 py-1 text-[10px] tracking-wider uppercase border ${
                          project.status === "Completed"
                            ? "border-[#C6F36B] text-[#C6F36B] bg-[#C6F36B]/5"
                            : "border-[#F5F3EE]/20 text-[#A5A5A5] bg-[#171717]"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-4xl font-display font-bold text-[#F5F3EE] group-hover:text-[#C6F36B] transition-colors">
                        {project.title}
                      </h3>
                      <div className="text-xs font-mono text-[#A5A5A5] mt-1 uppercase tracking-wider">
                        {project.tagline}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-base text-[#F5F3EE]/80 font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[#171717] border border-[#F5F3EE]/10 text-xs font-mono text-[#F5F3EE]/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons: GitHub & Live Demo */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#F5F3EE]/10">
                      {/* GitHub Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-[#F5F3EE]/20 hover:border-[#C6F36B] hover:text-[#C6F36B] text-[#F5F3EE] font-mono text-xs tracking-wider uppercase transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>

                      {/* Live Demo Button */}
                      <a
                        href={project.liveUrl}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs tracking-wider uppercase transition-colors ${
                          project.status === "Completed"
                            ? "bg-[#F5F3EE] text-[#171717] font-semibold hover:bg-[#C6F36B]"
                            : "bg-[#171717] text-[#A5A5A5] border border-[#F5F3EE]/10 cursor-default"
                        }`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>
                          {project.status === "Completed" ? "Live Experience" : "Preview Soon"}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
