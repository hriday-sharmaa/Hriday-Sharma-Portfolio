"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { Clock, MapPin, Radio, Wifi, Sun } from "lucide-react";

export const JaipurClockCard: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>("");
  const [secFraction, setSecFraction] = useState<string>("00");
  const [ping, setPing] = useState<number>(14);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const formatted = new Intl.DateTimeFormat("en-GB", options).format(now);
      setTimeStr(formatted);
      setSecFraction(String(Math.floor(now.getMilliseconds() / 10)).padStart(2, "0"));
    };

    updateTime();
    const interval = setInterval(updateTime, 50);

    // Random slight ping variation for realistic telemetry
    const pingInterval = setInterval(() => {
      setPing(Math.floor(11 + Math.random() * 6));
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(pingInterval);
    };
  }, []);

  return (
    <div className="glass-card p-5 rounded-2xl flex flex-col justify-between border border-indigo-500/20 bg-gradient-to-b from-[#111322] to-[#0c0e17]">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide">
                Jaipur Telemetry & Radar
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Indian Standard Time (UTC+5:30)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
            <Radio className="w-3 h-3 animate-pulse" />
            <span>LIVE</span>
          </div>
        </div>

        {/* Live Clock Display */}
        <div className="my-3 p-4 bg-black/40 rounded-xl border border-white/[0.06] text-center relative overflow-hidden">
          <div className="font-mono text-3xl sm:text-4xl font-black text-indigo-300 tracking-wider">
            {timeStr || "12:00:00"}
            <span className="text-xs sm:text-sm text-indigo-400/60 ml-1">
              .{secFraction}
            </span>
          </div>
          <div className="text-[11px] font-mono text-slate-400 mt-1 flex items-center justify-center gap-2">
            <span>IST • Asia/Kolkata</span>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Synced
            </span>
          </div>
        </div>

        {/* Telemetry Metrics */}
        <div className="space-y-2 mt-4 text-xs font-mono">
          <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <span className="text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Coordinates
            </span>
            <span className="text-slate-200">{personalInfo.coordinates}</span>
          </div>

          <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-amber-300" />
              Climate / Pink City
            </span>
            <span className="text-slate-200">28°C • Clear Sky</span>
          </div>

          <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Wifi className="w-3.5 h-3.5 text-cyan-400" />
              Latency / System
            </span>
            <span className="text-cyan-300 font-bold">{ping}ms • OPTIMAL</span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-400 flex items-center justify-between">
        <span>Campus: JECRC University</span>
        <span className="text-indigo-400">Jaipur, Rajasthan</span>
      </div>
    </div>
  );
};
