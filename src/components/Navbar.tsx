"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { soundEngine } from "../lib/soundEngine";
import {
  Volume2,
  VolumeX,
  FileText,
  Copy,
  Check,
  Menu,
  X,
  Sparkles,
  Terminal,
} from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMuted(soundEngine.getMuted());
    const unsub = soundEngine.subscribeMute((muted) => setIsMuted(muted));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      unsub();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSoundToggle = () => {
    soundEngine.playClick();
    soundEngine.toggleMute();
  };

  const handleCopyEmail = () => {
    soundEngine.playClick();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Identity", href: "#bento" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Academics", href: "#academics" },
    { label: "Terminal", href: "#terminal" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090d]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#"
          onMouseEnter={() => soundEngine.playHover()}
          onClick={() => soundEngine.playClick()}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-cyan-400 text-sm group-hover:border-cyan-400 transition-colors shadow-sm shadow-cyan-500/10">
            HS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-wide text-slate-100 group-hover:text-cyan-400 transition-colors">
                HRIDAY SHARMA
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                1st Year CSE
              </span>
            </div>
            <span className="block text-[11px] font-mono text-slate-400">
              JECRC University • Jaipur
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 bg-surface-card/60 backdrop-blur-md border border-white/[0.06] rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => soundEngine.playHover()}
              onClick={() => soundEngine.playClick()}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound Synthesizer Toggle */}
          <button
            onClick={handleSoundToggle}
            title={isMuted ? "Sound FX: Muted (Click to enable)" : "Sound FX: Active (Click to mute)"}
            className={`p-2 rounded-lg border transition-all ${
              isMuted
                ? "bg-surface-card/60 border-white/[0.08] text-slate-400 hover:text-slate-200"
                : "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-sm shadow-cyan-500/20"
            }`}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Quick Copy Email */}
          <button
            onClick={handleCopyEmail}
            title="Copy email: hridaysharma3264@gmail.com"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-card/70 border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          {/* View Resume Button */}
          <button
            onClick={() => {
              soundEngine.playClick();
              onOpenResume();
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/15 to-indigo-500/15 hover:from-cyan-500/25 hover:to-indigo-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-medium transition-all shadow-sm shadow-cyan-500/10 hover:shadow-cyan-500/20 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              soundEngine.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-lg bg-surface-card/60 border border-white/[0.08] text-slate-300 hover:text-cyan-400"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 p-4 rounded-2xl glass-panel border border-white/[0.1] shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  soundEngine.playClick();
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/[0.05] transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between gap-2">
              <button
                onClick={handleCopyEmail}
                className="flex-1 py-2 px-3 rounded-lg bg-surface-card border border-white/[0.08] text-xs font-mono text-slate-300 flex items-center justify-center gap-1.5"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedEmail ? "Email Copied!" : "Copy Email"}
              </button>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 py-2 px-3 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                Resume CV
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
