import React from 'react';
import { 
  ArrowLeft, 
  Flame, 
  Layers, 
  Cpu, 
  MessageSquare, 
  Send, 
  Share2, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Zap,
  Star
} from 'lucide-react';
import { Idea } from '../types';

interface IdeaDetailScreenProps {
  idea: Idea;
  onBack: () => void;
  onTestPrototype: (idea: Idea) => void;
  onContinueToFeedback?: (idea: Idea) => void;
}

export const IdeaDetailScreen: React.FC<IdeaDetailScreenProps> = ({
  idea,
  onBack,
  onTestPrototype,
  onContinueToFeedback,
}) => {
  const analysis = idea.aiAnalysis;

  return (
    <div className="pb-28 pt-2 px-4 space-y-5">
      {/* Top navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-xl text-zinc-400 hover:text-white flex items-center gap-1.5 text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <span className="text-[10px] font-mono text-zinc-400">
          {idea.submissionId || '#IQOO-MC'}
        </span>
      </div>

      {/* Header Info */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-md bg-orange-500/15 text-orange-400 text-[10px] font-bold uppercase border border-orange-500/25">
            {idea.category}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 text-[10px] font-bold uppercase border border-white/[0.08]">
            {idea.status}
          </span>
        </div>

        <h1 className="text-xl font-extrabold text-white">
          {idea.title}
        </h1>

        <div className="flex items-center gap-4 text-xs font-mono pt-1">
          <span className="flex items-center gap-1 text-orange-400 font-bold">
            <Flame className="w-4 h-4 fill-orange-400" />
            <span>{idea.demandSignal}% Demand</span>
          </span>
          <span className="text-zinc-400">
            {idea.communityVotes} supporters
          </span>
        </div>
      </div>

      {/* Problem & Solution Cards */}
      <div className="space-y-3">
        <div className="p-4 rounded-2xl bg-[#12131A] border border-white/[0.08] space-y-1.5">
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">
            Target Smartphone Pain Point
          </span>
          <p className="text-xs text-zinc-200 leading-relaxed font-medium">
            {idea.problem}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#12131A] border border-white/[0.08] space-y-1.5">
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
            Proposed Architecture / Feature
          </span>
          <p className="text-xs text-zinc-200 leading-relaxed font-medium">
            {idea.solution}
          </p>
        </div>
      </div>

      {/* AI Analysis Summary */}
      {analysis && (
        <div className="p-4 rounded-2xl bg-[#14141F] border border-orange-500/25 space-y-2.5">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-orange-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              AI Technical Evaluation
            </h3>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed">
            {analysis.feasibility}
          </p>

          {analysis.technicalSpecs && (
            <div className="pt-2 border-t border-white/[0.06] grid grid-cols-2 gap-2 text-[10px]">
              <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                <span className="text-zinc-400 block">Chipset Layer:</span>
                <span className="font-mono text-zinc-200 font-semibold">{analysis.technicalSpecs.chipsetRequirement}</span>
              </div>
              <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                <span className="text-zinc-400 block">Latency Budget:</span>
                <span className="font-mono text-orange-300 font-semibold">{analysis.technicalSpecs.latencyEstimate}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* User Feedback (if captured) */}
      {idea.feedback && (
        <div className="p-4 rounded-2xl bg-[#12131A] border border-white/[0.08] space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-white">
              <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
              <span>Captured Feedback</span>
            </div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-3 h-3 ${
                    s <= (idea.feedback?.rating || 5)
                      ? 'text-orange-400 fill-orange-400'
                      : 'text-zinc-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {idea.feedback.suggestions && (
            <p className="text-xs text-zinc-300 italic">
              "{idea.feedback.suggestions}"
            </p>
          )}

          <div className="text-[10px] text-zinc-400 font-mono">
            Permanent OS build interest: <span className="text-emerald-400 font-bold">{idea.feedback.wantPermanently}</span>
          </div>
        </div>
      )}

      {/* Action CTA: Test Prototype */}
      <div className="pt-2 space-y-2">
        <button
          type="button"
          onClick={() => onTestPrototype(idea)}
          className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-all"
        >
          <Layers className="w-4 h-4" />
          <span>Launch Interactive Prototype</span>
        </button>

        {onContinueToFeedback && (
          <button
            type="button"
            onClick={() => onContinueToFeedback(idea)}
            className="w-full py-3 px-4 rounded-2xl bg-white/[0.04] text-zinc-300 text-xs font-semibold hover:bg-white/[0.08] transition-colors"
          >
            Submit Feedback on this Idea
          </button>
        )}
      </div>
    </div>
  );
};
