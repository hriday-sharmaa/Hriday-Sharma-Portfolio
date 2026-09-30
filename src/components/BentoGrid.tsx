"use client";

import React, { useState } from "react";
import { personalInfo, marqueeTech } from "../data/portfolioData";
import { soundEngine } from "../lib/soundEngine";
import { AlgoVisualizerCard } from "./AlgoVisualizerCard";
import { JaipurClockCard } from "./JaipurClockCard";
import { AudioSoundscapeCard } from "./AudioSoundscapeCard";
import {
  GraduationCap,
  Sparkles,
  QrCode,
  ShieldCheck,
  Flame,
  GitCommit,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";

export const BentoGrid: React.FC = () => {
  // 3D Tilt calculation state for JECRC ID Card
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -10);
    setRotateY(((x - centerX) / centerX) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Sample commit intensities for 64-cell commit heatmap
  const commitMatrix = [
    3, 1, 4, 2, 0, 5, 2, 4, 1, 3, 2, 4, 5, 3, 1, 2,
    4, 2, 3, 5, 1, 0, 4, 3, 2, 5, 4, 1, 3, 4, 2, 5,
    2, 4, 1, 3, 5, 2, 4, 1, 0, 3, 4, 5, 2, 3, 4, 1,
    4, 5, 3, 2, 4, 1, 5, 3, 2, 4, 3, 5, 4, 2, 5, 4,
  ];

  return (
    <section id="bento" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>IDENTITY & LIVE TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Engineer&apos;s Bento Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Real-time telemetry, procedural audio synthesis, in-card sorting bench, and verified academic credentials.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: JECRC Hologram Student ID Card (Interactive 3D Tilt) */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: "transform 0.15s ease-out",
            }}
            className="glass-card p-6 rounded-2xl border border-white/[0.1] bg-gradient-to-br from-[#121624] via-[#0d101a] to-[#0a0c14] relative overflow-hidden flex flex-col justify-between shadow-2xl group"
          >
            {/* Holographic Sheen Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/5 to-purple-500/10 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Card Badge & Institute */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold tracking-wider uppercase block">
                      University Identity Card
                    </span>
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      JECRC University
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Student Details Grid */}
              <div className="space-y-3 font-mono text-xs">
                <div className="bg-black/40 p-3 rounded-xl border border-white/[0.06]">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">
                    Candidate Name
                  </div>
                  <div className="text-sm font-bold text-white tracking-wide">
                    {personalInfo.name}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-black/30 p-2.5 rounded-xl border border-white/[0.05]">
                    <div className="text-[10px] text-slate-400 uppercase">Program</div>
                    <div className="text-xs font-semibold text-slate-200 mt-0.5">
                      B.Tech CSE
                    </div>
                  </div>
                  <div className="bg-black/30 p-2.5 rounded-xl border border-white/[0.05]">
                    <div className="text-[10px] text-slate-400 uppercase">Year / Batch</div>
                    <div className="text-xs font-semibold text-cyan-300 mt-0.5">
                      1st Year (2024-28)
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 p-2.5 rounded-xl border border-white/[0.05] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Specialization</div>
                    <div className="text-xs font-semibold text-slate-200">
                      Core CS & AI Foundations
                    </div>
                  </div>
                  <QrCode className="w-8 h-8 text-cyan-400/70" />
                </div>
              </div>
            </div>

            {/* Microchip & Card Security Bar */}
            <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-3.5 rounded bg-amber-400/20 border border-amber-400/40 flex items-center justify-center">
                  <div className="w-2.5 h-1.5 border-t border-b border-amber-400/60" />
                </div>
                <span>EMV CHIP • ID#2024-CSE</span>
              </div>
              <span className="text-cyan-400">Jaipur, RJ</span>
            </div>
          </div>

          {/* Card 2: Interactive Algorithm Sandbox */}
          <AlgoVisualizerCard />

          {/* Card 3: GitHub Activity Heatmap */}
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-emerald-500/20 bg-gradient-to-b from-[#101918] to-[#0c0e17]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <GitCommit className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      GitHub Activity Matrix
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono">
                      Consistent Commit Cadence
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                  <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>{personalInfo.stats.streakDays}</span>
                </div>
              </div>

              {/* Commit Grid */}
              <div className="my-3 p-3 bg-black/40 rounded-xl border border-white/[0.06]">
                <div className="grid grid-cols-16 gap-1.5">
                  {commitMatrix.map((lvl, i) => {
                    let color = "bg-white/[0.04]";
                    if (lvl === 1) color = "bg-emerald-900/60";
                    if (lvl === 2) color = "bg-emerald-700/70";
                    if (lvl === 3) color = "bg-emerald-500/80";
                    if (lvl === 4) color = "bg-emerald-400 shadow-sm shadow-emerald-400/40";
                    if (lvl === 5) color = "bg-emerald-300 shadow-sm shadow-emerald-300/60";

                    return (
                      <div
                        key={i}
                        title={`Day ${i + 1}: ${lvl * 2 + 1} commits`}
                        className={`w-3.5 h-3.5 rounded-sm transition-all hover:scale-125 cursor-pointer ${color}`}
                      />
                    );
                  })}
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-3 pt-2 border-t border-white/[0.05]">
                  <span>Less</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2.5 h-2.5 rounded-sm bg-white/[0.04]" />
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-900/60" />
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-700/70" />
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500/80" />
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-300" />
                  </div>
                  <span>More</span>
                </div>
              </div>

              {/* Quick Summary Stats */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-black/30 border border-white/[0.05]">
                  <div className="text-[10px] text-slate-400">Total Commits</div>
                  <div className="text-sm font-bold text-white mt-0.5">350+ Commits</div>
                </div>
                <div className="p-2.5 rounded-xl bg-black/30 border border-white/[0.05]">
                  <div className="text-[10px] text-slate-400">Repositories</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">14 Active</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Code Base: Public & Campus</span>
              <a
                href={personalInfo.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                Inspect GitHub ↗
              </a>
            </div>
          </div>

          {/* Card 4: Jaipur Real-time Telemetry & Radar Clock */}
          <JaipurClockCard />

          {/* Card 5: Ambient Focus Synthesizer */}
          <AudioSoundscapeCard />

          {/* Card 6: Quick Narrative & Philosophy */}
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-purple-500/20 bg-gradient-to-b from-[#151122] to-[#0c0e17]">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    Engineering Ethos & Focus
                  </h3>
                  <p className="text-[11px] text-slate-400 font-mono">
                    Principles of a 1st-Year Undergrad
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 leading-relaxed font-sans">
                <div className="p-3 rounded-xl bg-black/30 border border-white/[0.05]">
                  <strong className="text-white block font-semibold mb-1">
                    1. Rigorous Foundations First
                  </strong>
                  Prioritizing memory allocation, pointer mechanics, and Big-O efficiency in C++ before abstracting away complexity.
                </div>

                <div className="p-3 rounded-xl bg-black/30 border border-white/[0.05]">
                  <strong className="text-white block font-semibold mb-1">
                    2. Pragmatic Problem Solving
                  </strong>
                  Building tools like CampusPulse that address tangible challenges faced by fellow 1st-year JECRC students.
                </div>

                <div className="p-3 rounded-xl bg-black/30 border border-white/[0.05]">
                  <strong className="text-white block font-semibold mb-1">
                    3. Rapid Iteration & AI Collaboration
                  </strong>
                  Leveraging LLMs and generative agents to accelerate learning, test hypotheses, and build robust software.
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-purple-400">
              Target: Top Hackathon Finalist & SDE Intern
            </div>
          </div>
        </div>

        {/* Infinite Tech Radar Marquee */}
        <div className="mt-8 p-4 rounded-2xl glass-panel border border-white/[0.08] overflow-hidden relative">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-slate-400">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>DAILY ACTIVE TECH RADAR & CAPABILITIES</span>
          </div>

          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap flex gap-3">
              {[...marqueeTech, ...marqueeTech].map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-card border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
