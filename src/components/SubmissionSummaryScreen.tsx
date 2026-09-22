import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Send, 
  Layers, 
  Cpu, 
  MessageSquare, 
  Sparkles, 
  X, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Idea } from '../types';

interface SubmissionSummaryScreenProps {
  idea: Idea;
  onSubmitToIqoo: () => void;
}

export const SubmissionSummaryScreen: React.FC<SubmissionSummaryScreenProps> = ({
  idea,
  onSubmitToIqoo,
}) => {
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const statusItems = [
    { label: 'Feature request', status: 'Ready', desc: idea.title, icon: Sparkles, color: 'text-orange-400 bg-orange-500/10 border-orange-500/20' },
    { label: 'AI analysis', status: 'Complete', desc: 'NPU architecture & feasibility verified', icon: Cpu, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
    { label: 'AI prototype', status: 'Tested', desc: idea.prototype?.title || 'Interactive lab demo', icon: Layers, color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
    { label: 'User feedback', status: 'Captured', desc: `${idea.feedback?.rating || 5} Stars • ${idea.feedback?.isUseful ? 'Useful' : 'Feedback recorded'}`, icon: MessageSquare, color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
    { label: 'iQOO interest', status: idea.feedback?.wantPermanently || 'Definitely', desc: 'Permanent OS implementation desired', icon: Zap, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  ];

  const handleConfirmSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setShowBottomSheet(false);
      onSubmitToIqoo();
    }, 600);
  };

  return (
    <div className="pb-28 pt-2 px-4 space-y-5">
      {/* Title & Subtitle */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-[10px] font-bold">
          <Send className="w-3 h-3" />
          <span>Stage 05: iQOO Pipeline Routing</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white">
          Tell iQOO what you think.
        </h1>
        <p className="text-xs text-zinc-400">
          Your summary includes the request, AI analysis, prototype, and your feedback.
        </p>
      </div>

      {/* Concept Card Highlight */}
      <div className="p-4 rounded-2xl bg-[#12131A] border border-orange-500/20 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-bold text-orange-400 px-2 py-0.5 rounded bg-orange-500/15">
            {idea.category}
          </span>
          <span className="text-[10px] text-zinc-400 font-mono">Ready to Send</span>
        </div>
        <h3 className="text-base font-bold text-white">
          {idea.title}
        </h3>
        <p className="text-xs text-zinc-400 line-clamp-2">
          {idea.problem}
        </p>
      </div>

      {/* Status Cards */}
      <div className="space-y-2.5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
          Validation Artifacts
        </h2>

        {statusItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-[#12131A] border border-white/[0.06] flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{item.label}</h4>
                  <p className="text-[11px] text-zinc-400 truncate max-w-[180px]">{item.desc}</p>
                </div>
              </div>

              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border shrink-0 ${item.color}`}>
                {item.status}
              </span>
            </div>
          );
        })}
      </div>

      {/* Privacy note */}
      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] text-zinc-400 flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
        <span>Submitted anonymously as aggregate demand telemetry for iQOO engineers.</span>
      </div>

      {/* Primary CTA */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => setShowBottomSheet(true)}
          className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-all"
        >
          <Send className="w-4 h-4" />
          <span>Send this idea to iQOO →</span>
        </button>
      </div>

      {/* Confirmation Bottom Sheet */}
      {showBottomSheet && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-[430px] bg-[#11121A] border-t border-orange-500/30 rounded-t-3xl p-5 space-y-4 shadow-2xl animate-in slide-in-from-bottom duration-300">
            {/* Sheet Handle */}
            <div className="w-10 h-1 rounded-full bg-zinc-700 mx-auto" />

            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-white">
                  Ready to submit?
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  This sends your idea and feedback into the innovation pipeline.
                </p>
              </div>
              <button
                onClick={() => setShowBottomSheet(false)}
                className="p-1.5 rounded-full text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-200 text-xs flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Target: iQOO Innovation & Product Architecture Lab</span>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowBottomSheet(false)}
                className="flex-1 py-3 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-zinc-300 font-bold text-xs transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleConfirmSubmit}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-xs shadow-md shadow-orange-500/25 active:scale-95 transition-all flex items-center justify-center gap-1.5"
              >
                {isSubmitting ? 'Sending…' : 'Submit Idea'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
