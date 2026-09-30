"use client";

import React from "react";
import { motion } from "framer-motion";

export const DigitalSculpture: React.FC = () => {
  return (
    <div className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center select-none perspective-container">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-radial-gradient from-[#C6F36B]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Outer Dashed Orbit Ring */}
      <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-[#F5F3EE]/15 animate-ring-spin pointer-events-none" />

      {/* Middle Orbit Ring with Lime Accents */}
      <div className="absolute w-[280px] h-[280px] sm:w-[330px] sm:h-[330px] rounded-full border border-[#F5F3EE]/10 animate-ring-reverse pointer-events-none">
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#C6F36B] shadow-[0_0_12px_#C6F36B]" />
        <div className="absolute -bottom-1 left-1/3 w-2 h-2 rounded-full bg-[#F5F3EE]/60" />
      </div>

      {/* Inner Fine Orbit Ring */}
      <div className="absolute w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full border border-[#C6F36B]/20 pointer-events-none" />

      {/* Central 3D Wireframe Polyhedral Cube */}
      <div className="relative w-44 h-44 sm:w-52 sm:h-52 preserve-3d animate-cube-slow">
        {/* Front Face */}
        <div
          className="absolute inset-0 border border-[#F5F3EE]/30 bg-[#171717]/40 backdrop-blur-sm flex flex-col justify-between p-3.5"
          style={{ transform: "translateZ(88px)" }}
        >
          <div className="flex justify-between items-center text-[10px] font-mono text-[#A5A5A5]">
            <span>[F_01]</span>
            <span className="text-[#C6F36B]">C_CORE</span>
          </div>
          <div className="space-y-1">
            <div className="w-12 h-1 bg-[#C6F36B]" />
            <div className="text-[11px] font-mono text-[#F5F3EE]/90 tracking-wider">
              0x7FFD // LOGIC
            </div>
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono text-[#A5A5A5]">
            <span>NODE::ACTIVE</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#C6F36B] animate-ping" />
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 border border-[#F5F3EE]/20 bg-[#171717]/30 flex flex-col justify-between p-3.5"
          style={{ transform: "rotateY(180deg) translateZ(88px)" }}
        >
          <span className="text-[10px] font-mono text-[#A5A5A5]">[B_02] // JECRC</span>
          <div className="text-center font-mono text-[11px] text-[#A5A5A5]">
            SYS.ARCH
          </div>
          <span className="text-[9px] font-mono text-[#A5A5A5]">2026.01</span>
        </div>

        {/* Right Face */}
        <div
          className="absolute inset-0 border border-[#C6F36B]/30 bg-[#171717]/40 flex flex-col justify-between p-3.5"
          style={{ transform: "rotateY(90deg) translateZ(88px)" }}
        >
          <span className="text-[10px] font-mono text-[#C6F36B]">01010011</span>
          <div className="border border-dashed border-[#F5F3EE]/20 h-10 flex items-center justify-center font-mono text-[10px] text-[#F5F3EE]/80">
            int main()
          </div>
          <span className="text-[9px] font-mono text-[#A5A5A5]">EXEC_OK</span>
        </div>

        {/* Left Face */}
        <div
          className="absolute inset-0 border border-[#F5F3EE]/20 bg-[#171717]/30 flex flex-col justify-between p-3.5"
          style={{ transform: "rotateY(-90deg) translateZ(88px)" }}
        >
          <span className="text-[10px] font-mono text-[#A5A5A5]">VECTOR</span>
          <div className="space-y-1 font-mono text-[9px] text-[#A5A5A5]">
            <div>X: +26.9124</div>
            <div>Y: +75.7873</div>
          </div>
          <span className="text-[9px] font-mono text-[#C6F36B]">JAIPUR_IN</span>
        </div>

        {/* Top Face */}
        <div
          className="absolute inset-0 border border-[#F5F3EE]/25 bg-[#171717]/50 flex items-center justify-center p-3"
          style={{ transform: "rotateX(90deg) translateZ(88px)" }}
        >
          <div className="w-16 h-16 border border-dashed border-[#C6F36B]/40 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-[#C6F36B]/20 rounded-full border border-[#C6F36B]" />
          </div>
        </div>

        {/* Bottom Face */}
        <div
          className="absolute inset-0 border border-[#F5F3EE]/15 bg-[#171717]/60"
          style={{ transform: "rotateX(-90deg) translateZ(88px)" }}
        />
      </div>

      {/* Floating Spatial Coordinates HUD */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 right-2 sm:right-6 bg-[#171717]/90 border border-hairline px-3 py-1.5 rounded-none font-mono text-[10px] text-[#A5A5A5] backdrop-blur-md shadow-lg"
      >
        <span className="text-[#C6F36B] mr-1.5">●</span>
        GEO: 26.91°N 75.78°E
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 left-2 sm:left-4 bg-[#171717]/90 border border-[#C6F36B]/30 px-3 py-1.5 font-mono text-[10px] text-[#F5F3EE] backdrop-blur-md shadow-lg flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#C6F36B] animate-ping" />
        <span>CSE // YEAR_01</span>
      </motion.div>

      {/* Corner Crosshairs */}
      <div className="absolute top-2 left-2 text-[#A5A5A5]/40 font-mono text-xs select-none">
        +
      </div>
      <div className="absolute top-2 right-2 text-[#A5A5A5]/40 font-mono text-xs select-none">
        +
      </div>
      <div className="absolute bottom-2 left-2 text-[#A5A5A5]/40 font-mono text-xs select-none">
        +
      </div>
      <div className="absolute bottom-2 right-2 text-[#A5A5A5]/40 font-mono text-xs select-none">
        +
      </div>
    </div>
  );
};
