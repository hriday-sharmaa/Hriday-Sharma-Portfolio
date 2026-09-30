"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioConfig } from "../config/portfolioConfig";
import { DigitalSculpture } from "./DigitalSculpture";
import { ArrowDown, ArrowUpRight, Terminal } from "lucide-react";

export const Hero: React.FC = () => {
  const { personal } = portfolioConfig;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-[#F5F3EE]/8 editorial-grid"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C6F36B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F5F3EE]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Asymmetrical Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7">
            {/* Small Top Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717]/80 border border-[#F5F3EE]/15 text-[11px] sm:text-xs font-mono tracking-widest uppercase text-[#A5A5A5]"
            >
              <span className="w-1.5 h-1.5 bg-[#C6F36B] rounded-full inline-block" />
              <span>{personal.topLabel}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-display font-extrabold text-[#F5F3EE] tracking-tight leading-[1.04]">
                Curious mind.
                <br />
                Building beyond
                <br />
                the{" "}
                <span className="text-[#C6F36B] relative inline-block underline decoration-[#C6F36B]/30 underline-offset-8">
                  ordinary.
                </span>
              </h1>
            </motion.div>

            {/* Introduction Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#F5F3EE]/80 max-w-2xl font-light leading-relaxed"
            >
              {personal.hero.introduction}
            </motion.p>

            {/* CTA Buttons & Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto"
            >
              {/* Primary CTA: Explore My Work */}
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#F5F3EE] text-[#171717] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#C6F36B] transition-all duration-300 shadow-sm"
              >
                <span>{personal.hero.ctaPrimary}</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* Secondary CTA: Let's Connect */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-transparent text-[#F5F3EE] font-mono text-xs uppercase tracking-widest border border-[#F5F3EE]/25 hover:border-[#C6F36B] hover:text-[#C6F36B] transition-all duration-300"
              >
                <span>{personal.hero.ctaSecondary}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Animated Status Indicator: CURRENTLY LEARNING C */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 pt-4 border-t border-[#F5F3EE]/10 w-full max-w-md"
            >
              <div className="flex items-center gap-2 px-3 py-1 bg-[#171717] border border-[#C6F36B]/30 rounded-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6F36B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6F36B]" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#C6F36B] font-medium">
                  {personal.statusBadge}
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#A5A5A5]">
                {"// JECRC UNIVERSITY"}
              </span>
            </motion.div>
          </div>

          {/* Right Column: Original Abstract Digital Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <DigitalSculpture />
            </motion.div>
          </div>
        </div>

        {/* Minimal Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-16 sm:pt-20 flex items-center justify-between text-[#A5A5A5] text-[11px] font-mono uppercase tracking-widest border-t border-[#F5F3EE]/8 mt-12"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6F36B]" />
            <span>THE DIGITAL JOURNEY — 2026</span>
          </div>

          <a
            href="#about"
            className="group flex items-center gap-2 hover:text-[#C6F36B] transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-[#C6F36B]" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
