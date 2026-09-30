"use client";

import React, { useState } from "react";
import { featuredProjects } from "../data/portfolioData";
import { Project } from "../types/portfolio";
import { soundEngine } from "../lib/soundEngine";
import { ProjectModal } from "./ProjectModal";
import {
  Code,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  ArrowUpRight,
  Activity,
  Terminal,
} from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [inspectedProject, setInspectedProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Algorithms & Logic",
    "Web Applications",
    "Generative AI & Web",
    "Developer Tools",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              <Code className="w-3.5 h-3.5" />
              <span>FEATURED SOFTWARE & BLUEPRINTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering Work & Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Pragmatic campus utilities, high-performance algorithm visualizers, and generative AI interfaces engineered by a 1st-year student.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-surface-card/60 p-1.5 rounded-xl border border-white/[0.08] backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundEngine.playClick();
                  setSelectedCategory(cat);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/[0.08] hover:border-cyan-500/40 relative overflow-hidden group"
            >
              {/* Subtle top accent gradient */}
              <div
                style={{ backgroundColor: project.accent }}
                className="absolute top-0 left-0 right-0 h-1 opacity-70 group-hover:opacity-100 transition-opacity"
              />

              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    PROJECT // {project.num}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    {project.badge}
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/80 mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                  {project.summary}
                </p>

                {/* Key Metrics HUD */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-black/40 rounded-xl border border-white/[0.05] mb-6">
                  {project.metrics.slice(0, 3).map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-[10px] font-mono text-slate-400">
                        {metric.label}
                      </div>
                      <div className="text-xs font-mono font-bold text-white mt-0.5">
                        {metric.val}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/[0.07] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setInspectedProject(project);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 group-hover:underline underline-offset-4"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture & Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => soundEngine.playHover()}
                    onClick={() => soundEngine.playClick()}
                    className="p-2 rounded-lg bg-surface-card border border-white/[0.08] text-slate-400 hover:text-white hover:border-cyan-500/30 transition-all"
                    title="Inspect Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inspect Project Modal */}
      <ProjectModal
        project={inspectedProject}
        onClose={() => setInspectedProject(null)}
      />
    </section>
  );
};
