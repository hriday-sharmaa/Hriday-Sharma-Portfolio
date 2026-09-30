"use client";

import React, { useState } from "react";
import { educationData, achievementsData, timelineMilestones } from "../data/portfolioData";
import { soundEngine } from "../lib/soundEngine";
import {
  GraduationCap,
  Trophy,
  BookOpen,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  Flame,
  Sparkles,
} from "lucide-react";

export const AcademicJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"academics" | "achievements">("academics");

  return (
    <section id="academics" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC TRAJECTORY & ROADMAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Education & Engineering Milestones
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Foundational coursework at JECRC University, hackathon drives, and daily algorithmic problem-solving cadence.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 bg-surface-card/60 p-1.5 rounded-xl border border-white/[0.08]">
            <button
              onClick={() => {
                soundEngine.playClick();
                setActiveTab("academics");
              }}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                activeTab === "academics"
                  ? "bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Coursework & Degrees
            </button>
            <button
              onClick={() => {
                soundEngine.playClick();
                setActiveTab("achievements");
              }}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                activeTab === "achievements"
                  ? "bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              Hackathons & Contests
            </button>
          </div>
        </div>

        {/* Academics Tab View */}
        {activeTab === "academics" && (
          <div className="space-y-6">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-cyan-500/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                        {edu.badge}
                      </span>
                      <span className="text-xs font-mono text-emerald-400 font-medium">
                        {edu.status}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {edu.degree} — {edu.field}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-2">
                      <span className="text-slate-200 font-semibold">{edu.institution}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        {edu.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                  {edu.description}
                </p>

                {/* Key Coursework Modules */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    Core Engineering Coursework & Curriculum
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-black/40 border border-white/[0.07] text-slate-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Hackathons & Achievements Tab View */}
        {activeTab === "achievements" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievementsData.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-white/[0.08] hover:border-cyan-500/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-amber-500/10 border border-amber-500/30 text-amber-300">
                      {item.badge}
                    </span>
                    <Trophy className="w-4 h-4 text-amber-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <Sparkles className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-slate-400 mt-4">
                  Domain: {item.category}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
