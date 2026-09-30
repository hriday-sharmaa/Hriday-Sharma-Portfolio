"use client";

import React, { useState, useRef, useEffect } from "react";
import { personalInfo, featuredProjects, skillsCategories } from "../data/portfolioData";
import { soundEngine } from "../lib/soundEngine";
import confetti from "canvas-confetti";
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Trash2, Cpu } from "lucide-react";

interface TerminalLine {
  type: "input" | "output" | "error" | "system" | "matrix";
  text: string;
}

export const TerminalCli: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "system",
      text: "⚡ HRIDAY SHARMA // INTERACTIVE WORKSTATION v2.4 (Next.js 14 / x86_64)",
    },
    {
      type: "system",
      text: "Type 'help' to inspect available commands, or click any command chip below.",
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    soundEngine.playClick();
    setHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);

    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", text: `hriday@jecrc:~$ ${cmdStr}` },
    ];

    switch (trimmed) {
      case "help":
        newLines.push({
          type: "output",
          text: `AVAILABLE COMMANDS:
  help               - Display this help manual
  about              - Hriday Sharma's background, institution & role
  skills             - Inspect technical fluency and competencies
  projects           - List featured software architectures
  education          - JECRC University coursework & credentials
  stats              - View live telemetry, commit count & problem solving
  contact            - Email, handles & location
  matrix             - Launch digital matrix simulation
  sudo hire-hriday   - Execute hiring authorization protocol 🎉
  clear              - Purge terminal display`,
        });
        break;

      case "about":
        newLines.push({
          type: "output",
          text: `CANDIDATE PROFILE:
  Name        : ${personalInfo.name}
  Role        : ${personalInfo.headline}
  Institution : ${personalInfo.institution} (Jaipur, India)
  Batch       : ${personalInfo.batch}
  Focus       : C++ Data Structures & Algorithms, Modern Next.js 14 Web Systems, Generative AI`,
        });
        break;

      case "skills": {
        const summary = skillsCategories
          .map((cat) => `  [${cat.name}]\n    ${cat.skills.map((s) => s.name).join(", ")}`)
          .join("\n");
        newLines.push({
          type: "output",
          text: `ENGINEERING FLUENCY:\n${summary}`,
        });
        break;
      }

      case "projects": {
        const list = featuredProjects
          .map(
            (p) =>
              `  [${p.num}] ${p.title}\n      Summary : ${p.summary}\n      Stack   : ${p.tags.join(", ")}`
          )
          .join("\n\n");
        newLines.push({
          type: "output",
          text: `FEATURED ARCHITECTURES:\n${list}`,
        });
        break;
      }

      case "education":
        newLines.push({
          type: "output",
          text: `ACADEMIC SUMMARY:
  • B.Tech Computer Science & Engineering (1st Year)
    JECRC University, Jaipur (2024 - 2028)
    Coursework: Data Structures, C++ OOP, Discrete Math, Web Systems.
  • Senior Secondary (Class XII Science PCM + CS)
    Completed 2024 with distinction.`,
        });
        break;

      case "stats":
        newLines.push({
          type: "output",
          text: `TELEMETRY BENCHMARKS:
  • Commits This Year : 350+ commits across repos
  • Problems Solved    : 140+ on LeetCode & HackerRank
  • Active Streak     : 45 consecutive days
  • Target SGPA       : 9.0+
  • Campus Status     : 1st Year @ JECRC University`,
        });
        break;

      case "contact":
        newLines.push({
          type: "output",
          text: `COMMUNICATION CHANNELS:
  • Email    : ${personalInfo.email}
  • GitHub   : ${personalInfo.socials.github.url}
  • LinkedIn : ${personalInfo.socials.linkedin.url}
  • LeetCode : ${personalInfo.socials.leetcode.url}
  • Location : Jaipur, Rajasthan, India`,
        });
        break;

      case "matrix":
        newLines.push({
          type: "matrix",
          text: `01001000 01110010 01101001 01100100 01100001 01111001
[SYS] Initializing kernel memory...
[SYS] Allocating C++ STL vectors...
[SYS] JECRC Node connected: 26.7753° N, 75.8763° E
[SYS] Welcome to the matrix, Engineer.`,
        });
        break;

      case "sudo hire-hriday":
      case "hire":
        newLines.push({
          type: "output",
          text: `[AUTH GRANTED] 🎉 Protocol initiated: Contacting Hriday Sharma directly!
Email: ${personalInfo.email}
Ready for summer internships, hackathon team-ups, and software collaborations!`,
        });
        soundEngine.playFanfare();
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
        break;

      case "clear":
        setLines([]);
        setInputVal("");
        return;

      default:
        newLines.push({
          type: "error",
          text: `bash: command not found: '${trimmed}'. Type 'help' to view valid commands.`,
        });
        break;
    }

    setLines(newLines);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    soundEngine.playKey();

    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex =
          historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(history[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < history.length) {
          setHistoryIndex(nextIndex);
          setInputVal(history[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInputVal("");
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const available = [
        "help",
        "about",
        "skills",
        "projects",
        "education",
        "stats",
        "contact",
        "matrix",
        "sudo hire-hriday",
        "clear",
      ];
      const match = available.find((cmd) => cmd.startsWith(inputVal.trim().toLowerCase()));
      if (match) {
        setInputVal(match);
      }
    }
  };

  const quickChips = [
    "help",
    "about",
    "skills",
    "projects",
    "stats",
    "sudo hire-hriday",
  ];

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>INTERACTIVE SHELL EMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer CLI Console
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Fully functional client-side Unix shell. Try typing commands or click the shortcut chips below.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-500 mr-1 flex items-center gap-1">
            <Cpu className="w-3 h-3" /> Quick Run:
          </span>
          {quickChips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleCommand(chip)}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all active:scale-95"
            >
              $ {chip}
            </button>
          ))}
          <button
            onClick={() => {
              soundEngine.playClick();
              setLines([]);
            }}
            title="Clear terminal"
            className="p-1 rounded-md text-xs font-mono text-slate-500 hover:text-rose-400 ml-auto"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Terminal Window Frame */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-2xl border border-white/[0.12] bg-[#090b10] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm cursor-text scanline-effect"
        >
          {/* Top Bar */}
          <div className="px-4 py-3 bg-[#0f121a] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600" />
              <span className="ml-2 text-xs text-slate-400 font-mono">
                hriday@jecrc-lap:~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
              <span>UTF-8</span>
              <span>•</span>
              <span className="text-emerald-400">ONLINE</span>
            </div>
          </div>

          {/* Console Body */}
          <div className="p-4 sm:p-6 min-h-[340px] max-h-[480px] overflow-y-auto space-y-3">
            {lines.map((line, idx) => {
              if (line.type === "system") {
                return (
                  <div key={idx} className="text-cyan-400/80 font-mono leading-relaxed">
                    {line.text}
                  </div>
                );
              }
              if (line.type === "input") {
                return (
                  <div key={idx} className="text-slate-100 font-bold font-mono">
                    <span className="text-cyan-400">{"> "}</span>
                    {line.text}
                  </div>
                );
              }
              if (line.type === "error") {
                return (
                  <div key={idx} className="text-rose-400 font-mono whitespace-pre-wrap">
                    {line.text}
                  </div>
                );
              }
              if (line.type === "matrix") {
                return (
                  <div key={idx} className="text-emerald-400 font-mono whitespace-pre-wrap leading-relaxed animate-pulse">
                    {line.text}
                  </div>
                );
              }
              return (
                <div key={idx} className="text-slate-300 font-mono whitespace-pre-wrap leading-relaxed">
                  {line.text}
                </div>
              );
            })}

            {/* Live Input Line */}
            <div className="flex items-center gap-2 text-slate-100 pt-2">
              <span className="text-emerald-400 font-bold shrink-0">
                hriday@jecrc:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help' or tab to complete..."
                className="flex-1 bg-transparent border-none outline-none text-cyan-300 placeholder:text-slate-600 font-mono text-xs sm:text-sm"
                autoFocus
              />
              <CornerDownLeft className="w-3.5 h-3.5 text-slate-500" />
            </div>

            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
};
