import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Loader2, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  HelpCircle, 
  AlertTriangle,
  Zap,
  ShieldAlert,
  Server,
  Microchip
} from 'lucide-react';
import { Idea } from '../types';

interface AIAnalysisScreenProps {
  idea: Idea;
  onProceedToPrototype: () => void;
}

const ANALYSIS_STAGES = [
  'Understanding the problem',
  'Checking existing solutions',
  'Identifying iQOO opportunities',
  'Designing a possible solution',
  'Preparing prototype'
];

export const AIAnalysisScreen: React.FC<AIAnalysisScreenProps> = ({
  idea,
  onProceedToPrototype,
}) => {
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    // Animate the 5 processing stages sequentially
    if (currentStageIdx < ANALYSIS_STAGES.length) {
      const timer = setTimeout(() => {
        setCurrentStageIdx(prev => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsProcessing(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentStageIdx]);

  const analysis = idea.aiAnalysis;

  return (
    <div className="pb-28 pt-2 px-4 space-y-6">
      {/* Animated Processing State */}
      {isProcessing ? (
        <div className="py-12 px-2 text-center space-y-8">
          <div className="relative inline-flex items-center justify-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-orange-500/20 via-orange-600/30 to-amber-500/10 border border-orange-500/30 flex items-center justify-center shadow-xl shadow-orange-500/20 animate-pulse">
              <Cpu className="w-10 h-10 text-orange-400" />
            </div>
            <div className="absolute -inset-2 rounded-3xl bg-orange-500/10 blur-xl -z-10" />
          </div>

          <div className="space-y-1.5">
            <h2 className="text-xl font-extrabold text-white tracking-tight">
              Analyzing your idea…
            </h2>
            <p className="text-xs text-zinc-400">
              Evaluating smartphone architecture, NPU feasibility & iQOO integration
            </p>
          </div>

          {/* Stages checklist */}
          <div className="max-w-xs mx-auto space-y-2.5 text-left">
            {ANALYSIS_STAGES.map((stage, idx) => {
              const isDone = idx < currentStageIdx;
              const isCurrent = idx === currentStageIdx;

              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all duration-300 ${
                    isDone
                      ? 'bg-emerald-500/[0.08] border-emerald-500/30 text-emerald-300'
                      : isCurrent
                      ? 'bg-orange-500/[0.08] border-orange-500/40 text-orange-300'
                      : 'bg-white/[0.02] border-white/[0.04] text-zinc-400'
                  }`}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : isCurrent ? (
                    <Loader2 className="w-4 h-4 text-orange-400 animate-spin shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-zinc-700 shrink-0" />
                  )}
                  <span className="text-xs font-semibold">{stage}</span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Completed AI Analysis View */
        <div className="space-y-5 animate-in fade-in duration-500">
          {/* Header */}
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-bold">
              <CheckCircle2 className="w-3 h-3" />
              <span>AI Evaluation Complete</span>
            </div>
            <h1 className="text-2xl font-extrabold text-white">
              AI Analysis
            </h1>
            <p className="text-xs text-zinc-400">
              Technical feasibility and product opportunity breakdown for <span className="text-orange-400 font-semibold">{idea.title}</span>
            </p>
          </div>

          {/* Cards Section */}
          <div className="space-y-3">
            {/* 1. Problem */}
            <div className="p-4 rounded-2xl bg-[#12131A] border border-white/[0.08] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>Problem</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                {analysis?.problemSummary || idea.problem}
              </p>
            </div>

            {/* 2. Opportunity */}
            <div className="p-4 rounded-2xl bg-[#12131A] border border-white/[0.08] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Opportunity</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                {analysis?.opportunity}
              </p>
            </div>

            {/* 3. Feasibility */}
            <div className="p-4 rounded-2xl bg-[#12131A] border border-white/[0.08] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Feasibility</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                {analysis?.feasibility}
              </p>
            </div>

            {/* 4. Differentiation */}
            <div className="p-4 rounded-2xl bg-[#12131A] border border-white/[0.08] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Differentiation</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                {analysis?.differentiation}
              </p>
            </div>

            {/* 5. Potential iQOO Integration */}
            <div className="p-4 rounded-2xl bg-[#14141F] border border-orange-500/25 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 fill-orange-400" />
                <span>Potential iQOO Integration</span>
              </div>
              <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                {analysis?.iqooIntegration}
              </p>

              {/* Technical Specifications Sub-panel */}
              {analysis?.technicalSpecs && (
                <div className="pt-2.5 mt-2 border-t border-white/[0.06] grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                    <span className="text-zinc-400 block">Chipset / Co-Proc:</span>
                    <span className="font-mono text-zinc-200 font-semibold">{analysis.technicalSpecs.chipsetRequirement}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                    <span className="text-zinc-400 block">Latency Estimate:</span>
                    <span className="font-mono text-orange-300 font-semibold">{analysis.technicalSpecs.latencyEstimate}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mandatory Experimental Disclaimer */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[11px] text-zinc-400 flex items-start gap-2">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-snug">
              <strong className="text-zinc-300 font-semibold">Experimental Demonstration:</strong> This analysis is generated for exploratory concept validation and does not represent an official iQOO product release or commercial commitment.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="pt-2">
            <button
              onClick={onProceedToPrototype}
              className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-all"
            >
              <Layers className="w-4 h-4 stroke-[2.5]" />
              <span>Build Prototype →</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
