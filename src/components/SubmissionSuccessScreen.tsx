import React from 'react';
import { 
  Check, 
  CheckCircle2, 
  Flame, 
  Sparkles, 
  Zap, 
  ArrowRight,
  Send,
  Compass,
  FileCheck
} from 'lucide-react';
import { Idea } from '../types';

interface SubmissionSuccessScreenProps {
  idea: Idea;
  onViewMyIdeas: () => void;
  onExploreMore: () => void;
}

export const SubmissionSuccessScreen: React.FC<SubmissionSuccessScreenProps> = ({
  idea,
  onViewMyIdeas,
  onExploreMore,
}) => {
  const submissionId = idea.submissionId || `#IQOO-MC-${Math.floor(1000 + Math.random() * 9000)}`;

  const timeline = [
    { label: 'Idea submitted', status: 'done' },
    { label: 'AI analysis completed', status: 'done' },
    { label: 'Prototype tested', status: 'done' },
    { label: 'Feedback captured', status: 'done' },
    { label: 'Innovation team review', status: 'current' },
  ];

  return (
    <div className="pb-28 pt-6 px-4 space-y-7 animate-in fade-in zoom-in-95 duration-500">
      {/* Premium Success Badge with Glow */}
      <div className="text-center space-y-4">
        <div className="relative inline-flex items-center justify-center">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center shadow-2xl shadow-orange-500/50">
            <Check className="w-10 h-10 text-white stroke-[3]" />
          </div>
          <div className="absolute -inset-3 rounded-full bg-orange-500/20 blur-xl -z-10 animate-pulse" />
        </div>

        <div className="space-y-1.5">
          <h1 className="text-2xl font-extrabold text-white">
            Your idea is in the pipeline.
          </h1>
          <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-relaxed">
            Your feedback has been captured as an anonymous demand signal.
          </p>
        </div>
      </div>

      {/* Idea Ticket Meta Card */}
      <div className="p-4 rounded-2xl bg-[#12131A] border border-orange-500/30 space-y-3 shadow-lg shadow-orange-950/20">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] text-zinc-400 font-mono">Submission ID</span>
            <span className="text-sm font-mono font-bold text-orange-400 block">{submissionId}</span>
          </div>

          <div className="text-right space-y-0.5">
            <span className="text-[10px] text-zinc-400 font-mono">Category</span>
            <span className="text-xs font-bold text-white block">{idea.category}</span>
          </div>

          <div className="text-right space-y-0.5">
            <span className="text-[10px] text-zinc-400 font-mono">Status</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 block">
              Submitted
            </span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/[0.06]">
          <h3 className="text-xs font-bold text-white">{idea.title}</h3>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="p-4 rounded-2xl bg-[#12131A] border border-white/[0.08] space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
          Innovation Pipeline Progress
        </h3>

        <div className="space-y-3 pl-1">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              {item.status === 'done' ? (
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/40">
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
                </div>
              )}

              <span className={`text-xs font-semibold ${item.status === 'done' ? 'text-zinc-200' : 'text-orange-400 font-bold'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="space-y-2.5 pt-1">
        <button
          onClick={onViewMyIdeas}
          className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-all"
        >
          <span>View My Ideas</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>

        <button
          onClick={onExploreMore}
          className="w-full py-3.5 px-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 font-semibold text-xs border border-white/[0.08] transition-colors"
        >
          <span>Explore Community Ideas</span>
        </button>
      </div>
    </div>
  );
};
