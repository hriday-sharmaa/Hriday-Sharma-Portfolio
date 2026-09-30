"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { soundEngine } from "../lib/soundEngine";
import {
  ArrowRight,
  Terminal as TerminalIcon,
  Github,
  Linkedin,
  Code2,
  Twitter,
  Mail,
  MapPin,
  Sparkles,
  GitCommit,
  Cpu,
  Layers,
  ChevronDown,
} from "lucide-react";

export const Hero: React.FC = () => {
  const titles = [
    "1st Year B.Tech Computer Science & Engineering (CSE)",
    "Algorithmic Problem Solver in C++ & STL",
    "Modern Web Architecture Builder (Next.js 14)",
    "Generative AI Explorer & Hackathon Builder",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 30 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          // Pause at end of sentence
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section id="about" className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-center items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
        
        {/* Pulsing Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-card/90 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-mono mb-8 shadow-lg shadow-emerald-500/5 hover:border-emerald-500/50 transition-all cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{personalInfo.statusBadge}</span>
        </div>

        {/* Monumental Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 uppercase">
          <span className="block text-gradient-cyan">
            {personalInfo.displayName}
          </span>
        </h1>

        {/* Dynamic Typing Title */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <p className="font-mono text-base sm:text-xl md:text-2xl text-cyan-400/90 font-medium">
            <span>{"> "}</span>
            <span>{displayedText}</span>
            <span className="inline-block w-2 sm:w-2.5 h-5 sm:h-6 ml-1 bg-cyan-400 animate-pulse align-middle" />
          </p>
        </div>

        {/* Narrative & Value Proposition */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed mb-10">
          Undergraduate software engineer at{" "}
          <span className="text-white font-semibold underline decoration-cyan-500/50 underline-offset-4">
            JECRC University, Jaipur
          </span>
          . Merging core algorithmic foundations in C++ with modern reactive web architectures and generative AI explorations. Focused on writing clean code, solving real campus challenges, and collaborating in hackathons.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            onMouseEnter={() => soundEngine.playHover()}
            onClick={() => soundEngine.playClick()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02] active:scale-98"
          >
            <span>Explore Engineering Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#terminal"
            onMouseEnter={() => soundEngine.playHover()}
            onClick={() => soundEngine.playClick()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-card/90 hover:bg-surface-card border border-white/10 hover:border-cyan-500/40 text-slate-200 font-mono text-sm transition-all hover:scale-[1.02] active:scale-98 shadow-md"
          >
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span>Launch CLI Terminal</span>
          </a>

          <a
            href="#contact"
            onMouseEnter={() => soundEngine.playHover()}
            onClick={() => soundEngine.playClick()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 text-sm font-medium transition-all"
          >
            <span>Let&apos;s Collaborate</span>
          </a>
        </div>

        {/* Social Links Bar with Interactive Tooltips */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-14">
          <a
            href={personalInfo.socials.github.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundEngine.playHover()}
            onClick={() => soundEngine.playClick()}
            className="p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all group relative"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>

          <a
            href={personalInfo.socials.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundEngine.playHover()}
            onClick={() => soundEngine.playClick()}
            className="p-3 rounded-xl glass-card text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all group relative"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>

          <a
            href={personalInfo.socials.leetcode.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundEngine.playHover()}
            onClick={() => soundEngine.playClick()}
            className="p-3 rounded-xl glass-card text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all group relative"
            title="LeetCode Profile"
          >
            <Code2 className="w-5 h-5" />
            <span className="sr-only">LeetCode</span>
          </a>

          <a
            href={personalInfo.socials.twitter.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundEngine.playHover()}
            onClick={() => soundEngine.playClick()}
            className="p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-all group relative"
            title="Twitter / X"
          >
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            onMouseEnter={() => soundEngine.playHover()}
            onClick={() => soundEngine.playClick()}
            className="p-3 rounded-xl glass-card text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all group relative"
            title="Direct Email"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>

        {/* Telemetry Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="glass-card p-4 rounded-xl text-left border border-white/[0.06]">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-xs font-mono uppercase tracking-wider">GitHub Commits</span>
              <GitCommit className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-white">{personalInfo.stats.commits}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Continuous Cadence</div>
          </div>

          <div className="glass-card p-4 rounded-xl text-left border border-white/[0.06]">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-xs font-mono uppercase tracking-wider">DSA Problems</span>
              <Cpu className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-white">{personalInfo.stats.problemsSolved}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">LeetCode & C++ STL</div>
          </div>

          <div className="glass-card p-4 rounded-xl text-left border border-white/[0.06]">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-xs font-mono uppercase tracking-wider">Degree & Batch</span>
              <Layers className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-white">B.Tech &apos;28</div>
            <div className="text-[11px] text-slate-400 mt-0.5">JECRC University</div>
          </div>

          <div className="glass-card p-4 rounded-xl text-left border border-white/[0.06]">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-xs font-mono uppercase tracking-wider">Location / IST</span>
              <MapPin className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-white">Jaipur, IN</div>
            <div className="text-[11px] text-slate-400 mt-0.5">26.7753° N, 75.8763° E</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#bento"
            className="p-2 text-slate-400 hover:text-cyan-400 transition-colors animate-bounce"
            title="Scroll down"
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
