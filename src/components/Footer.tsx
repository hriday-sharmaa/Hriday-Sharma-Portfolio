"use client";

import React from "react";
import { personalInfo } from "../data/portfolioData";
import { soundEngine } from "../lib/soundEngine";
import { ArrowUp, Heart, Terminal, Sparkles, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundEngine.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07080c] py-12 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="font-mono font-bold text-white tracking-wider text-sm">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                1st Year CSE
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              JECRC University • Jaipur, Rajasthan, India ({personalInfo.coordinates})
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#bento" className="hover:text-cyan-400 transition-colors">
              Identity
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#academics" className="hover:text-cyan-400 transition-colors">
              Academics
            </a>
            <a href="#terminal" className="hover:text-cyan-400 transition-colors">
              CLI
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-surface-card border border-white/[0.08] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all flex items-center gap-1.5 text-xs font-mono"
            title="Return to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits & Telemetry */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Built with Next.js 14 App Router, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
