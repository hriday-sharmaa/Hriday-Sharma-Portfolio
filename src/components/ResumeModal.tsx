"use client";

import React, { useEffect, useState } from "react";
import { personalInfo, featuredProjects, educationData } from "../data/portfolioData";
import { soundEngine } from "../lib/soundEngine";
import { X, Printer, Download, Copy, Check, Mail, MapPin, Globe, Github, Linkedin } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    soundEngine.playClick();
    window.print();
  };

  const handleCopy = () => {
    soundEngine.playClick();
    const resumeText = `
HRIDAY SHARMA
1st Year B.Tech Computer Science & Engineering Undergrad
JECRC University, Jaipur, Rajasthan, India
Email: ${personalInfo.email}
GitHub: ${personalInfo.socials.github.url}
LinkedIn: ${personalInfo.socials.linkedin.url}

EDUCATION:
- B.Tech in Computer Science & Engineering, JECRC University (2024 - 2028)
- Senior Secondary (Class XII Science PCM + CS), Completed 2024 with Distinction

TECHNICAL SKILLS:
- Languages: C/C++, Python, TypeScript, JavaScript, HTML5/CSS3
- Frameworks & Tools: Next.js 14, React 18, Tailwind CSS, Framer Motion, Git, Linux/Bash
- Core Foundations: Data Structures & Algorithms, Object-Oriented Programming, Discrete Math

FEATURED PROJECTS:
1. Algoverse - Real-time Algorithm & Graph Visualizer (60 FPS Canvas, Web Audio API, C++ Logic)
2. CampusPulse - JECRC Student Attendance & Academic Utility Hub (Offline PWA, 75% Rule Predictor)
3. NeuroChat - Multi-Persona AI Studio with streaming tokens
4. DevSync - Sandboxed In-Browser Frontend Playground
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl glass-panel border border-white/[0.12] bg-[#0c0e17] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#111420] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-wide">
              CURRICULUM VITAE // HRIDAY SHARMA
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-surface-card border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy Text"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 text-xs font-mono font-medium flex items-center gap-1.5 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={() => {
                soundEngine.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:border-cyan-500/30 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#08090d] text-slate-200 font-sans space-y-6 print:p-0 print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="border-b border-white/[0.1] pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
            <div>
              <h1 className="text-3xl font-black text-white tracking-tight uppercase">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-mono text-cyan-400 mt-1">
                {personalInfo.headline}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {personalInfo.college}
              </p>
            </div>

            <div className="text-xs font-mono text-slate-300 space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-3 pt-1">
                <a
                  href={personalInfo.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  GitHub
                </a>
                <span>•</span>
                <a
                  href={personalInfo.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-white/[0.08] pb-1">
              Education
            </h2>
            <div className="space-y-4 text-xs font-sans">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-sm text-white">
                    JECRC University, Jaipur, Rajasthan
                  </div>
                  <div className="text-slate-300">
                    Bachelor of Technology (B.Tech) — Computer Science & Engineering
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    Coursework: Data Structures & Algorithms (C++), OOP, Discrete Math, Computer Org.
                  </div>
                </div>
                <div className="text-right font-mono text-slate-400">
                  2024 - 2028 (Expected)
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-sm text-white">
                    Senior Secondary Education (Class XII)
                  </div>
                  <div className="text-slate-300">
                    Science Stream (Physics, Chemistry, Mathematics & CS)
                  </div>
                  <div className="text-emerald-400 text-[11px] mt-0.5">
                    Completed with Distinction
                  </div>
                </div>
                <div className="text-right font-mono text-slate-400">
                  Graduated 2024
                </div>
              </div>
            </div>
          </div>

          {/* Technical Fluency */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-white/[0.08] pb-1">
              Technical Fluency
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-black/40 rounded-xl border border-white/[0.05]">
                <span className="text-slate-400 block mb-1 text-[11px]">Languages</span>
                <span className="text-white font-medium">
                  C / C++ (STL, Pointers, Memory), Python 3, JavaScript (ES6+), TypeScript, HTML5/CSS3
                </span>
              </div>
              <div className="p-3 bg-black/40 rounded-xl border border-white/[0.05]">
                <span className="text-slate-400 block mb-1 text-[11px]">Frameworks & Web</span>
                <span className="text-white font-medium">
                  Next.js 14 (App Router), React 18, Tailwind CSS, Framer Motion, REST APIs, HTML5 Canvas
                </span>
              </div>
              <div className="p-3 bg-black/40 rounded-xl border border-white/[0.05]">
                <span className="text-slate-400 block mb-1 text-[11px]">Developer Tools</span>
                <span className="text-white font-medium">
                  Git, GitHub, Linux Shell / Bash, VS Code, Chrome DevTools
                </span>
              </div>
              <div className="p-3 bg-black/40 rounded-xl border border-white/[0.05]">
                <span className="text-slate-400 block mb-1 text-[11px]">CS Fundamentals</span>
                <span className="text-white font-medium">
                  Data Structures & Algorithms, Object-Oriented Design, Discrete Math, Complexity Analysis
                </span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-white/[0.08] pb-1">
              Featured Software Engineering Projects
            </h2>
            <div className="space-y-4 text-xs font-sans">
              {featuredProjects.map((p) => (
                <div key={p.id} className="space-y-1">
                  <div className="flex justify-between items-center font-bold text-sm text-white">
                    <span>
                      {p.title} <span className="font-mono text-xs font-normal text-slate-400">— {p.subtitle}</span>
                    </span>
                    <span className="font-mono text-[11px] text-cyan-400">{p.badge}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {p.summary}
                  </p>
                  <div className="text-[11px] font-mono text-slate-400">
                    Key Stack: {p.tags.join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Cadence */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-white/[0.08] pb-1">
              Achievements & Commit Cadence
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300">
              <li>
                <strong className="text-white">Active Hackathon Participant:</strong> Contributed to CampusPulse utility prototype during university innovation challenges at JECRC.
              </li>
              <li>
                <strong className="text-white">350+ GitHub Commits:</strong> Maintained consistent repository cadence across algorithm problem solving and web applications.
              </li>
              <li>
                <strong className="text-white">LeetCode Problem Solving:</strong> Solved 140+ problems focusing on arrays, two pointers, strings, and recursion in C++.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
