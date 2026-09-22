import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Layers, 
  Flame, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle,
  ArrowUpRight,
  Activity,
  Sparkles
} from 'lucide-react';
import { Idea } from '../types';

interface InnovationDashboardScreenProps {
  ideas: Idea[];
  onSelectIdea: (idea: Idea) => void;
  onOpenDeveloper: () => void;
}

export const InnovationDashboardScreen: React.FC<InnovationDashboardScreenProps> = ({
  ideas,
  onSelectIdea,
  onOpenDeveloper,
}) => {
  const [signalLoaded, setSignalLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSignalLoaded(true);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  const totalIdeasCount = 1428 + ideas.length;
  const aiAnalyzedCount = 1290 + ideas.length;
  const prototypeTestedCount = 892 + ideas.length;
  const userFeedbackCount = 3410 + ideas.length;
  const highDemandCount = 147;

  return (
    <div className="pb-28 pt-2 px-4 space-y-5">
      {/* Demo Mode Notice Banner */}
      <div className="flex items-center justify-between px-3.5 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[10px] font-mono text-orange-400 font-bold">
        <span>DEMO MODE • AUTH SIMULATED</span>
        <button 
          onClick={onOpenDeveloper}
          className="underline hover:text-white flex items-center gap-0.5"
        >
          <span>Developer Workspace</span>
          <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>

      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-xl font-extrabold text-white">
          Innovation Overview
        </h1>
        <p className="text-xs text-zinc-400">
          A live view of the problems people want their phones to solve.
        </p>
      </div>

      {/* Demand Insight Card */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1A1326] via-[#12131F] to-[#0D0E16] border border-orange-500/30 space-y-2 shadow-lg shadow-purple-950/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange-300">
              Demand Insight
            </h3>
          </div>
          <span className="text-[10px] font-mono text-zinc-400">Real-Time Synthesis</span>
        </div>

        {!signalLoaded ? (
          <div className="flex items-center gap-2 py-2 text-xs text-zinc-400 animate-pulse font-mono">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <span>Loading signal…</span>
          </div>
        ) : (
          <div className="space-y-1.5 animate-in fade-in duration-500">
            <p className="text-xs text-white font-semibold leading-relaxed">
              The strongest demand is currently around <span className="text-orange-400 font-bold">Sub-5ms Frame Interpolation</span> and <span className="text-amber-400 font-bold">Acoustic Whisper Privacy</span> during public calls.
            </p>
            <p className="text-[11px] text-zinc-400">
              Correlated across 2,400+ esports gamers and urban commuters this week.
            </p>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="space-y-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
          Pipeline Metrics
        </h2>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3.5 rounded-2xl bg-[#12131A] border border-white/[0.06] space-y-1">
            <span className="text-[10px] text-zinc-400 uppercase font-semibold">Total Ideas</span>
            <span className="text-xl font-mono font-bold text-white block">{totalIdeasCount.toLocaleString()}</span>
            <span className="text-[10px] text-emerald-400 font-medium">+18% this month</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#12131A] border border-white/[0.06] space-y-1">
            <span className="text-[10px] text-zinc-400 uppercase font-semibold">AI Analyzed</span>
            <span className="text-xl font-mono font-bold text-orange-400 block">{aiAnalyzedCount.toLocaleString()}</span>
            <span className="text-[10px] text-zinc-400 font-mono">92% throughput</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#12131A] border border-white/[0.06] space-y-1">
            <span className="text-[10px] text-zinc-400 uppercase font-semibold">Prototype Tested</span>
            <span className="text-xl font-mono font-bold text-amber-400 block">{prototypeTestedCount.toLocaleString()}</span>
            <span className="text-[10px] text-zinc-400 font-mono">Interactive lab runs</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#12131A] border border-white/[0.06] space-y-1">
            <span className="text-[10px] text-zinc-400 uppercase font-semibold">High Demand Ideas</span>
            <span className="text-xl font-mono font-bold text-emerald-400 block">{highDemandCount}</span>
            <span className="text-[10px] text-zinc-400 font-mono">iQOO R&D priority</span>
          </div>
        </div>
      </div>

      {/* Feature Requests Table / List */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
            Feature Requests
          </h2>
          <span className="text-[10px] text-zinc-400 font-mono">Ranked by Demand</span>
        </div>

        <div className="space-y-2.5">
          {ideas.map((idea) => {
            const statusUpper = (idea.status || 'SUBMITTED').toUpperCase();
            return (
              <div
                key={idea.id}
                onClick={() => onSelectIdea(idea)}
                className="p-3.5 rounded-2xl bg-[#12131A] border border-white/[0.06] hover:border-orange-500/30 cursor-pointer transition-all space-y-2.5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold text-orange-400 px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 mr-2">
                      {idea.category}
                    </span>
                    <h3 className="text-xs font-bold text-white inline hover:text-orange-400 transition-colors">
                      {idea.title}
                    </h3>
                  </div>

                  <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded-md bg-white/[0.06] text-zinc-300 shrink-0 border border-white/[0.08]">
                    {statusUpper}
                  </span>
                </div>

                {/* Sub metrics grid */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.04] text-[10px]">
                  <div>
                    <span className="text-zinc-400 block">Requests:</span>
                    <span className="font-mono text-zinc-200 font-bold">{idea.requestsCount || 1200}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block">Unique Users:</span>
                    <span className="font-mono text-zinc-200 font-bold">{idea.uniqueUsers || 850}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block">Satisfaction:</span>
                    <span className="font-mono text-emerald-400 font-bold">{idea.satisfactionRate || 92}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
