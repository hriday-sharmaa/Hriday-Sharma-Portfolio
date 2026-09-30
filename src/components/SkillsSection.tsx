"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioConfig } from "../config/portfolioConfig";
import { Terminal, Cpu, Sparkles, ArrowRight, Check, Code2, Layers, Lightbulb } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioConfig;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 border-b border-[#F5F3EE]/8 relative bg-[#171717]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-[#F5F3EE]/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C6F36B] block mb-2">
              03 // EXPLORATION
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#F5F3EE] tracking-tight">
              {skills.heading}
            </h2>
          </div>
          <p className="font-mono text-xs text-[#A5A5A5] max-w-sm">
            {skills.subheading}
          </p>
        </div>

        {/* Three Visually Distinct Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          {/* ──────────────────────────────────────────────────────────── */}
          {/* CARD 01 — PROGRAMMING */}
          {/* ──────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative p-8 border border-[#F5F3EE]/12 bg-[#191919] hover:border-[#C6F36B] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Indicator */}
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-[#A5A5A5] mb-6">
                <span className="text-[#C6F36B] font-bold">[CARD 01]</span>
                <span className="px-2 py-0.5 border border-[#C6F36B]/40 text-[#C6F36B] text-[10px] tracking-wider uppercase bg-[#C6F36B]/5">
                  ACTIVE LEARNING
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-[#171717] border border-[#F5F3EE]/15 text-[#C6F36B] group-hover:border-[#C6F36B] transition-colors">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#F5F3EE]">
                    PROGRAMMING
                  </h3>
                  <span className="text-xs font-mono text-[#A5A5A5]">
                    Core Language Study
                  </span>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-3.5 my-8">
                <div className="p-3 bg-[#171717] border border-[#F5F3EE]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6F36B]" />
                    <span className="font-mono text-sm text-[#F5F3EE] font-medium">
                      C Language
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#C6F36B]">PRIMARY</span>
                </div>

                <div className="p-3 bg-[#171717] border border-[#F5F3EE]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6F36B] animate-ping" />
                    <span className="font-mono text-sm text-[#F5F3EE] font-medium">
                      Currently Learning
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A5A5A5]">DAILY FOCUS</span>
                </div>
              </div>

              {/* Visual Element: Authentic C Code Preview */}
              <div className="p-4 bg-[#121212] border border-[#F5F3EE]/10 font-mono text-xs text-[#A5A5A5] space-y-1 select-none">
                <div className="text-[10px] text-[#A5A5A5]/60 mb-1 border-b border-[#F5F3EE]/5 pb-1 flex justify-between">
                  <span>{"// main.c"}</span>
                  <span className="text-[#C6F36B]">gcc -Wall</span>
                </div>
                <div><span className="text-[#C6F36B]">#include</span> &lt;stdio.h&gt;</div>
                <div><span className="text-[#C6F36B]">int</span> main(<span className="text-[#C6F36B]">void</span>) &#123;</div>
                <div className="pl-4 text-[#F5F3EE]">printf(<span className="text-[#C6F36B]">&quot;Building foundation.\n&quot;</span>);</div>
                <div className="pl-4"><span className="text-[#C6F36B]">return</span> 0;</div>
                <div>&#125;</div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F5F3EE]/10 flex items-center justify-between text-xs font-mono text-[#A5A5A5]">
              <span>SYNTAX & LOGIC</span>
              <span className="text-[#C6F36B]">01 / 03</span>
            </div>
          </motion.div>

          {/* ──────────────────────────────────────────────────────────── */}
          {/* CARD 02 — FOUNDATIONS */}
          {/* ──────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative p-8 border border-[#F5F3EE]/12 bg-[#191919] hover:border-[#C6F36B] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Indicator */}
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-[#A5A5A5] mb-6">
                <span className="text-[#C6F36B] font-bold">[CARD 02]</span>
                <span className="px-2 py-0.5 border border-[#F5F3EE]/20 text-[#F5F3EE] text-[10px] tracking-wider uppercase bg-[#F5F3EE]/5">
                  CORE DISCIPLINE
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-[#171717] border border-[#F5F3EE]/15 text-[#C6F36B] group-hover:border-[#C6F36B] transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#F5F3EE]">
                    FOUNDATIONS
                  </h3>
                  <span className="text-xs font-mono text-[#A5A5A5]">
                    Engineering Fundamentals
                  </span>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-3.5 my-8">
                <div className="p-3 bg-[#171717] border border-[#F5F3EE]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6F36B]" />
                    <span className="font-mono text-sm text-[#F5F3EE] font-medium">
                      Computer Science Fundamentals
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A5A5A5]">CORE</span>
                </div>

                <div className="p-3 bg-[#171717] border border-[#F5F3EE]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6F36B]" />
                    <span className="font-mono text-sm text-[#F5F3EE] font-medium">
                      Problem Solving
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#C6F36B]">ANALYTIC</span>
                </div>
              </div>

              {/* Visual Element: Algorithmic Logic & Memory Blocks */}
              <div className="p-4 bg-[#121212] border border-[#F5F3EE]/10 font-mono text-xs text-[#A5A5A5] space-y-2 select-none">
                <div className="text-[10px] text-[#A5A5A5]/60 mb-2 border-b border-[#F5F3EE]/5 pb-1 flex justify-between">
                  <span>{"// computational_model"}</span>
                  <span className="text-[#C6F36B]">MEM_MAP</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
                  <div className="p-2 border border-[#C6F36B]/40 text-[#C6F36B] bg-[#C6F36B]/5">
                    STACK
                  </div>
                  <div className="p-2 border border-[#F5F3EE]/15 text-[#F5F3EE]">
                    HEAP
                  </div>
                  <div className="p-2 border border-[#F5F3EE]/15 text-[#F5F3EE]">
                    BSS
                  </div>
                  <div className="p-2 border border-[#F5F3EE]/15 text-[#F5F3EE]">
                    TEXT
                  </div>
                </div>
                <div className="text-[10px] text-[#A5A5A5] pt-1 flex justify-between">
                  <span>LOGIC: FLOW & CONDITIONAL</span>
                  <span className="text-[#C6F36B]">O(1)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F5F3EE]/10 flex items-center justify-between text-xs font-mono text-[#A5A5A5]">
              <span>SYSTEMS & CONCEPTS</span>
              <span className="text-[#C6F36B]">02 / 03</span>
            </div>
          </motion.div>

          {/* ──────────────────────────────────────────────────────────── */}
          {/* CARD 03 — INTERESTS */}
          {/* ──────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative p-8 border border-[#F5F3EE]/12 bg-[#191919] hover:border-[#C6F36B] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Indicator */}
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-[#A5A5A5] mb-6">
                <span className="text-[#C6F36B] font-bold">[CARD 03]</span>
                <span className="px-2 py-0.5 border border-[#F5F3EE]/20 text-[#A5A5A5] text-[10px] tracking-wider uppercase bg-white/5">
                  FUTURE HORIZONS
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-[#171717] border border-[#F5F3EE]/15 text-[#C6F36B] group-hover:border-[#C6F36B] transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#F5F3EE]">
                    INTERESTS
                  </h3>
                  <span className="text-xs font-mono text-[#A5A5A5]">
                    Technological Horizons
                  </span>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-3.5 my-8">
                <div className="p-3 bg-[#171717] border border-[#F5F3EE]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6F36B]" />
                    <span className="font-mono text-sm text-[#F5F3EE] font-medium">
                      Software Development
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#C6F36B]">EXPANDING</span>
                </div>

                <div className="p-3 bg-[#171717] border border-[#F5F3EE]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6F36B]" />
                    <span className="font-mono text-sm text-[#F5F3EE] font-medium">
                      Web Development
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A5A5A5]">INTEREST</span>
                </div>

                <div className="p-3 bg-[#171717] border border-[#F5F3EE]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6F36B]" />
                    <span className="font-mono text-sm text-[#F5F3EE] font-medium">
                      Technology & Innovation
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#C6F36B]">PASSION</span>
                </div>
              </div>

              {/* Visual Element: Creative Tech Architecture */}
              <div className="p-4 bg-[#121212] border border-[#F5F3EE]/10 font-mono text-xs text-[#A5A5A5] space-y-1.5 select-none">
                <div className="text-[10px] text-[#A5A5A5]/60 mb-1 border-b border-[#F5F3EE]/5 pb-1 flex justify-between">
                  <span>{"// design_engineering"}</span>
                  <span className="text-[#C6F36B]">AESTHETICS</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#F5F3EE]">
                  <span>INTERACTIVE UI</span>
                  <span className="text-[#C6F36B]">● ACTIVE</span>
                </div>
                <div className="w-full bg-[#171717] h-1.5 rounded-none overflow-hidden">
                  <div className="bg-[#C6F36B] h-full w-2/3" />
                </div>
                <div className="text-[9px] text-[#A5A5A5] pt-0.5">
                  Exploring high-craft interfaces & digital product architecture.
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F5F3EE]/10 flex items-center justify-between text-xs font-mono text-[#A5A5A5]">
              <span>CRAFT & CREATION</span>
              <span className="text-[#C6F36B]">03 / 03</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
