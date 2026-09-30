"use client";

import React, { useState, useEffect } from "react";
import { soundEngine } from "../lib/soundEngine";
import { Disc3, Play, Square, Headphones, Sparkles } from "lucide-react";

export const AudioSoundscapeCard: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(soundEngine.isAmbientActive());
    const unsub = soundEngine.subscribeAmbient((playing) => setIsPlaying(playing));
    return () => unsub();
  }, []);

  const handleToggle = () => {
    soundEngine.playClick();
    soundEngine.toggleAmbient();
  };

  return (
    <div className="glass-card p-5 rounded-2xl flex flex-col justify-between border border-cyan-500/20 bg-gradient-to-b from-[#0e1622] to-[#0c0e17]">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Headphones className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide">
                Focus Beat Synthesizer
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Web Audio API • Procedural Ambient
              </p>
            </div>
          </div>

          <span
            className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
              isPlaying
                ? "bg-cyan-500/15 border-cyan-500/40 text-cyan-300"
                : "bg-white/[0.04] border-white/[0.08] text-slate-400"
            }`}
          >
            {isPlaying ? "GENERATING TONE" : "STANDBY"}
          </span>
        </div>

        {/* Vinyl & Visualizer Area */}
        <div className="my-3 p-4 bg-black/40 rounded-xl border border-white/[0.06] flex items-center justify-around gap-4">
          {/* Animated Vinyl Disc */}
          <div className="relative flex items-center justify-center">
            <div
              className={`w-20 h-20 rounded-full border-2 border-slate-700 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 shadow-xl flex items-center justify-center transition-all ${
                isPlaying ? "animate-spin-slow ring-2 ring-cyan-500/40" : ""
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-cyan-900/60 border border-cyan-500/40 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              </div>
            </div>
          </div>

          {/* Equalizer Waveform simulation */}
          <div className="flex items-end gap-1.5 h-14">
            {[18, 35, 48, 25, 60, 42, 30, 52].map((height, i) => (
              <div
                key={i}
                style={{
                  height: isPlaying ? `${height + Math.sin(i) * 15}%` : "15%",
                  animationDuration: `${0.6 + (i % 3) * 0.2}s`,
                }}
                className={`w-2 rounded-t-sm transition-all duration-300 ${
                  isPlaying
                    ? "bg-cyan-400 shadow-sm shadow-cyan-400/50 animate-pulse"
                    : "bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
          Procedurally synthesized ambient soundscape generated in real-time with Web Audio oscillators and lowpass filters for deep focus coding sessions. Zero MP3 assets.
        </p>
      </div>

      {/* Control Button */}
      <div className="pt-2 border-t border-white/[0.06]">
        <button
          onClick={handleToggle}
          className={`w-full py-2 px-3 rounded-lg text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all ${
            isPlaying
              ? "bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30"
              : "bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30"
          }`}
        >
          {isPlaying ? (
            <>
              <Square className="w-3.5 h-3.5 fill-current" />
              Stop Ambient Audio
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              Start Focus Synthesizer
            </>
          )}
        </button>
      </div>
    </div>
  );
};
