"use client";

import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { soundEngine } from "../lib/soundEngine";
import confetti from "canvas-confetti";
import {
  Mail,
  Send,
  Copy,
  Check,
  MapPin,
  Sparkles,
  Github,
  Linkedin,
  Code2,
  Twitter,
  MessageSquare,
  Clock,
  Radio,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Internship Query",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    soundEngine.playClick();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundEngine.playClick();
    setLoading(true);

    // Simulated submission + mailto fallback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      soundEngine.playFanfare();
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
      });

      // Construct mailto link so the message can also be sent via client email client
      const subject = encodeURIComponent(`[Portfolio] ${formData.topic} from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Hriday,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 700);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Currently open to summer software internships, hackathon team formations, and engineering collaborations.
          </p>
        </div>

        {/* Two-Column Grid: Telemetry & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Info & Socials (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Status Card */}
            <div className="glass-card p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-[#101c18] to-[#0c0e17]">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-2">
                <Radio className="w-4 h-4 animate-pulse" />
                <span>AVAILABILITY TELEMETRY</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Open to High-Impact Opportunities
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                Seeking tech internships, hackathon squad invitations, and peer software engineering projects. Guaranteed fast turnaround.
              </p>
              <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Typical response time: Within 12-24 hours</span>
              </div>
            </div>

            {/* Quick Email Copy Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/[0.08]">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Primary Inbox
              </div>
              <div className="flex items-center justify-between gap-3 p-3 bg-black/40 rounded-xl border border-white/[0.06]">
                <div className="font-mono text-xs sm:text-sm text-cyan-300 font-semibold truncate">
                  {personalInfo.email}
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono flex items-center gap-1.5 transition-all shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* University & Location Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/[0.08] space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between py-1 border-b border-white/[0.05]">
                <span className="text-slate-400">Campus Institution</span>
                <span className="text-white font-medium">JECRC University</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/[0.05]">
                <span className="text-slate-400">Location</span>
                <span className="text-white font-medium">Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Timezone</span>
                <span className="text-cyan-300 font-medium">Asia/Kolkata (IST • UTC+5:30)</span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundEngine.playHover()}
                onClick={() => soundEngine.playClick()}
                className="p-3.5 rounded-xl glass-card flex items-center gap-3 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-medium">GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundEngine.playHover()}
                onClick={() => soundEngine.playClick()}
                className="p-3.5 rounded-xl glass-card flex items-center gap-3 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
              >
                <Linkedin className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-mono font-medium">LinkedIn</span>
              </a>

              <a
                href={personalInfo.socials.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundEngine.playHover()}
                onClick={() => soundEngine.playClick()}
                className="p-3.5 rounded-xl glass-card flex items-center gap-3 text-slate-300 hover:text-amber-400 hover:border-amber-500/30 transition-all"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-medium">LeetCode</span>
              </a>

              <a
                href={personalInfo.socials.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundEngine.playHover()}
                onClick={() => soundEngine.playClick()}
                className="p-3.5 rounded-xl glass-card flex items-center gap-3 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/30 transition-all"
              >
                <Twitter className="w-4 h-4 text-cyan-300" />
                <span className="text-xs font-mono font-medium">Twitter / X</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] relative">
              <h3 className="text-xl font-bold text-white mb-1">
                Direct Dispatch Interface
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-6">
                Fill the fields below to dispatch a message directly to Hriday&apos;s mailbox.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-cyan-500/10 border border-cyan-500/30 rounded-2xl animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-slate-300 font-sans max-w-md mx-auto mb-4">
                    Your email client will pop up with the formatted message, or Hriday will contact you at{" "}
                    <span className="text-cyan-400 font-mono">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-surface-card border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins (Tech Lead)"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 font-sans transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 font-sans transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Collaboration Intent *
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none text-xs sm:text-sm text-slate-100 font-sans transition-all"
                    >
                      <option value="Internship Query" className="bg-[#0f1118]">
                        💼 Summer Software Internship / Hiring Query
                      </option>
                      <option value="Hackathon Invite" className="bg-[#0f1118]">
                        🏆 Hackathon Team Invite / Project Pitch
                      </option>
                      <option value="Open Source Collaboration" className="bg-[#0f1118]">
                        ⚡ Open Source Collaboration / Peer Project
                      </option>
                      <option value="General CS Chat" className="bg-[#0f1118]">
                        ☕ Engineering Chat & Networking
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Message / Opportunity Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your team, problem space, or role requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 font-sans transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs sm:text-sm font-mono flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.99] disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Synthesizing Dispatch...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Transmission</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
