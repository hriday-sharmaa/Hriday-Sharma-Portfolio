"use client";

import React, { useEffect } from "react";
import { Project } from "../types/portfolio";
import { soundEngine } from "../lib/soundEngine";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Activity,
  Zap,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-white/[0.12] bg-[#0c0e17] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundEngine.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
        >
          <X className="w-5 h-5" />
          <span className="sr-only">Close modal</span>
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">
              PROJECT // {project.num}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-cyan-400/90 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Description & Narrative */}
        <div className="mb-6 space-y-4 text-sm text-slate-300 leading-relaxed font-sans">
          <p className="text-base text-slate-200 font-medium">
            {project.summary}
          </p>
          <p>{project.fullDescription}</p>
        </div>

        {/* Key Metrics HUD */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-cyan-400" />
            Performance & Engineering Benchmarks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-black/40 border border-white/[0.06] text-center"
              >
                <div className="text-[11px] font-mono text-slate-400">{metric.label}</div>
                <div className="text-base font-bold font-mono text-cyan-300 mt-1">
                  {metric.val}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture & Engineering Highlights */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-indigo-400" />
            Key Technical Innovations & Highlights
          </h3>
          <div className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-sans leading-normal">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Blueprint Note */}
        {project.architectureOverview && (
          <div className="mb-6 p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 font-semibold mb-1">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              <span>System Architecture Note</span>
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              {project.architectureOverview}
            </p>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Implemented Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions & Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-card border border-white/[0.1] text-xs font-mono text-slate-200 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Source Repository</span>
            </a>
          </div>

          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all"
          >
            Close Blueprint
          </button>
        </div>
      </div>
    </div>
  );
};
