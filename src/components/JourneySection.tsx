"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioConfig } from "../config/portfolioConfig";
import { Calendar, MapPin, Building2, CheckCircle2, CircleDot } from "lucide-react";

export const JourneySection: React.FC = () => {
  const { journey } = portfolioConfig;

  return (
    <section
      id="journey"
      className="py-24 sm:py-32 border-b border-[#F5F3EE]/8 relative bg-[#171717] editorial-grid"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-[#F5F3EE]/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C6F36B] block mb-2">
              02 // PROGRESSION
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#F5F3EE] tracking-tight">
              My Journey
            </h2>
          </div>
          <div className="font-mono text-xs text-[#A5A5A5] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6F36B] animate-pulse" />
            <span>ACTIVE PATH // EXPANDABLE</span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pt-16 max-w-4xl">
          {/* Main Vertical Spine Line */}
          <div className="absolute top-16 bottom-8 left-4 sm:left-8 w-[1px] bg-gradient-to-b from-[#C6F36B] via-[#F5F3EE]/20 to-transparent" />

          <div className="space-y-12">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-1.5 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-[#171717] border-2 border-[#C6F36B] flex items-center justify-center shadow-[0_0_12px_#C6F36B]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6F36B]" />
                  </div>
                </div>

                {/* Timeline Content Card */}
                <div className="p-8 sm:p-10 border border-[#F5F3EE]/10 bg-[#1a1a1a]/60 hover:border-[#C6F36B] transition-all duration-300">
                  {/* Period Tag & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1 bg-[#C6F36B] text-[#171717] font-bold tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="font-mono text-[11px] text-[#A5A5A5] flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#C6F36B]" />
                      {item.location}
                    </span>
                  </div>

                  {/* Degree & Institution */}
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F3EE] mb-1">
                    {item.degree}
                  </h3>
                  <div className="text-base text-[#C6F36B] font-mono mb-5 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>{item.institution}</span>
                  </div>

                  {/* Description */}
                  <p className="text-base text-[#F5F3EE]/80 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Focus Highlights */}
                  <div className="space-y-2 pt-4 border-t border-[#F5F3EE]/10">
                    <div className="text-[10px] font-mono text-[#A5A5A5] uppercase tracking-wider mb-2">
                      CURRENT EXPLORATION DOMAINS:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-2 text-xs font-mono text-[#F5F3EE]/90"
                        >
                          <CircleDot className="w-3 h-3 text-[#C6F36B] shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Teaser for Next Milestones (Easy to update) */}
            <div className="relative pl-12 sm:pl-20">
              <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-2 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#171717] border border-[#F5F3EE]/30" />
              </div>
              <div className="p-6 border border-dashed border-[#F5F3EE]/10 bg-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#A5A5A5]">
                <div>
                  <span className="text-[#C6F36B] mr-2">{"// FUTURE CHAPTERS"}</span>
                  <span>Projects, open source contributions, and engineering milestones will be logged here.</span>
                </div>
                <span className="px-2.5 py-1 border border-[#F5F3EE]/10 uppercase text-[10px]">
                  CLASS OF 2030
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
