"use client";

import React, { useState, useEffect, useRef } from "react";
import { soundEngine } from "../lib/soundEngine";
import { Play, Pause, RotateCcw, Shuffle, Sparkles, Activity } from "lucide-react";

export const AlgoVisualizerCard: React.FC = () => {
  const [array, setArray] = useState<number[]>([45, 80, 25, 95, 60, 35, 70, 15, 85, 50, 65, 30]);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [algorithm, setAlgorithm] = useState<"bubble" | "selection">("bubble");
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);
  const cancelRef = useRef(false);

  const resetArray = () => {
    soundEngine.playClick();
    cancelRef.current = true;
    setIsRunning(false);
    const newArr = [42, 85, 20, 95, 62, 35, 72, 18, 88, 52, 65, 30].map(
      (v) => Math.floor(v * (0.8 + Math.random() * 0.4))
    );
    setArray(newArr);
    setActiveIndices([]);
    setSortedIndices([]);
    setComparisons(0);
    setSwaps(0);
  };

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const runBubbleSort = async () => {
    cancelRef.current = false;
    setIsRunning(true);
    const arr = [...array];
    const n = arr.length;
    let localComp = comparisons;
    let localSwaps = swaps;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (cancelRef.current) {
          setIsRunning(false);
          return;
        }

        setActiveIndices([j, j + 1]);
        localComp++;
        setComparisons(localComp);

        const freq = 220 + arr[j] * 8;
        soundEngine.playNote(freq, 0.05);

        await delay(120);

        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          localSwaps++;
          setSwaps(localSwaps);
          setArray([...arr]);
          await delay(100);
        }
      }
      setSortedIndices((prev) => [...prev, n - 1 - i]);
    }

    setSortedIndices(arr.map((_, i) => i));
    setActiveIndices([]);
    setIsRunning(false);
    soundEngine.playFanfare();
  };

  const runSelectionSort = async () => {
    cancelRef.current = false;
    setIsRunning(true);
    const arr = [...array];
    const n = arr.length;
    let localComp = comparisons;
    let localSwaps = swaps;

    for (let i = 0; i < n; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (cancelRef.current) {
          setIsRunning(false);
          return;
        }
        setActiveIndices([i, j, minIdx]);
        localComp++;
        setComparisons(localComp);
        soundEngine.playNote(250 + arr[j] * 7, 0.04);
        await delay(110);

        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }

      if (minIdx !== i) {
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        localSwaps++;
        setSwaps(localSwaps);
        setArray([...arr]);
        await delay(120);
      }
      setSortedIndices((prev) => [...prev, i]);
    }

    setSortedIndices(arr.map((_, i) => i));
    setActiveIndices([]);
    setIsRunning(false);
    soundEngine.playFanfare();
  };

  const handleStart = () => {
    soundEngine.playClick();
    if (algorithm === "bubble") {
      runBubbleSort();
    } else {
      runSelectionSort();
    }
  };

  const handleStop = () => {
    soundEngine.playClick();
    cancelRef.current = true;
    setIsRunning(false);
  };

  return (
    <div className="glass-card p-5 rounded-2xl flex flex-col justify-between border border-cyan-500/20 bg-gradient-to-b from-[#101422] to-[#0c0e17]">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide">
                Interactive Algo Sandbox
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                C++ Logic Visualizer • Procedural Pitch
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/[0.08]">
            <button
              onClick={() => {
                soundEngine.playClick();
                setAlgorithm("bubble");
              }}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                algorithm === "bubble"
                  ? "bg-cyan-500 text-black font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Bubble
            </button>
            <button
              onClick={() => {
                soundEngine.playClick();
                setAlgorithm("selection");
              }}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                algorithm === "selection"
                  ? "bg-cyan-500 text-black font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Selection
            </button>
          </div>
        </div>

        {/* Dynamic Bars Canvas Simulation */}
        <div className="h-32 bg-black/50 rounded-xl p-3 flex items-end justify-between gap-1.5 border border-white/[0.06] mb-4 relative overflow-hidden">
          {array.map((val, idx) => {
            const isActive = activeIndices.includes(idx);
            const isSorted = sortedIndices.includes(idx);

            let barColor = "bg-slate-700";
            if (isActive) {
              barColor = "bg-amber-400 shadow-md shadow-amber-400/50";
            } else if (isSorted) {
              barColor = "bg-emerald-400 shadow-sm shadow-emerald-400/30";
            } else {
              barColor = "bg-gradient-to-t from-cyan-600 to-cyan-400";
            }

            return (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center gap-1 transition-all duration-150"
              >
                <div
                  style={{ height: `${val}%` }}
                  className={`w-full rounded-t-sm transition-all duration-150 ${barColor}`}
                />
              </div>
            );
          })}
        </div>

        {/* Live HUD Complexity Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4 text-center">
          <div className="bg-black/30 p-1.5 rounded-lg border border-white/[0.05]">
            <div className="text-[10px] font-mono text-slate-400">Comparisons</div>
            <div className="text-xs font-mono font-bold text-cyan-300">{comparisons}</div>
          </div>
          <div className="bg-black/30 p-1.5 rounded-lg border border-white/[0.05]">
            <div className="text-[10px] font-mono text-slate-400">Swaps</div>
            <div className="text-xs font-mono font-bold text-amber-300">{swaps}</div>
          </div>
          <div className="bg-black/30 p-1.5 rounded-lg border border-white/[0.05]">
            <div className="text-[10px] font-mono text-slate-400">Big-O Time</div>
            <div className="text-xs font-mono font-bold text-emerald-300">O(N²)</div>
          </div>
        </div>
      </div>

      {/* Control Actions */}
      <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
        {isRunning ? (
          <button
            onClick={handleStop}
            className="flex-1 py-1.5 px-3 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-medium flex items-center justify-center gap-1.5 hover:bg-amber-500/30 transition-all"
          >
            <Pause className="w-3.5 h-3.5" />
            Pause
          </button>
        ) : (
          <button
            onClick={handleStart}
            className="flex-1 py-1.5 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm shadow-cyan-500/30"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Run Sort
          </button>
        )}

        <button
          onClick={resetArray}
          title="Shuffle array"
          className="p-1.5 rounded-lg bg-surface-card border border-white/[0.08] text-slate-400 hover:text-white hover:border-cyan-500/30 transition-all"
        >
          <Shuffle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
