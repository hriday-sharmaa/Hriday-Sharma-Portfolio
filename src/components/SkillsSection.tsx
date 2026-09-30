"use client";

import React, { useState } from "react";
import { skillsCategories } from "../data/portfolioData";
import { soundEngine } from "../lib/soundEngine";
import {
  Code2,
  Globe,
  Wrench,
  Cpu,
  Sparkles,
  CheckCircle,
  Terminal,
} from "lucide-react";

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const getIcon = (id: string) => {
    switch (id) {
      case "languages":
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case "web":
        return <Globe className="w-5 h-5 text-indigo-400" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case "foundations":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const displayedCategories =
    activeTab === "all"
      ? skillsCategories
      : skillsCategories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL COMPETENCY & FLUENCY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Architecture Matrix
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Categorized breakdown of programming languages, web systems, developer tooling, and computer science foundations.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap items-center gap-2 bg-surface-card/60 p-1.5 rounded-xl border border-white/[0.08]">
            <button
              onClick={() => {
                soundEngine.playClick();
                setActiveTab("all");
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === "all"
                  ? "bg-cyan-500 text-black font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Domains
            </button>
            {skillsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundEngine.playClick();
                  setActiveTab(cat.id);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeTab === cat.id
                    ? "bg-cyan-500 text-black font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Quadrant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-white/[0.08] hover:border-cyan-500/30 flex flex-col justify-between transition-all"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                    {getIcon(cat.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills List with Levels and Context */}
                <div className="space-y-4 my-6">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onMouseEnter={() => soundEngine.playHover()}
                      className="p-3 rounded-xl bg-black/30 border border-white/[0.04] hover:border-white/[0.1] transition-all group"
                    >
                      <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] bg-white/[0.05] text-slate-300 border border-white/[0.06]">
                            {skill.badge}
                          </span>
                        </div>
                        <span className="text-cyan-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Meter */}
                      <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden mb-2">
                        <div
                          style={{ width: `${skill.level}%` }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                        />
                      </div>

                      {/* Real Usage Experience Description */}
                      <p className="text-[11px] text-slate-400 font-sans leading-tight">
                        {skill.experience}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Practiced at JECRC & Independent Projects</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Active Skillset
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
