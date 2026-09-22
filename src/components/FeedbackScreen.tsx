import React, { useState } from 'react';
import { 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { UserFeedback } from '../types';

interface FeedbackScreenProps {
  ideaTitle: string;
  onSaveFeedback: (feedback: UserFeedback) => void;
}

export const FeedbackScreen: React.FC<FeedbackScreenProps> = ({
  ideaTitle,
  onSaveFeedback,
}) => {
  const [rating, setRating] = useState<number>(5);
  const [isUseful, setIsUseful] = useState<boolean | null>(true);
  const [suggestions, setSuggestions] = useState<string>('');
  const [wantPermanently, setWantPermanently] = useState<'Definitely' | 'Maybe' | 'No' | null>('Definitely');
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => {
      onSaveFeedback({
        rating,
        isUseful,
        suggestions: suggestions.trim(),
        wantPermanently,
        createdAt: new Date().toISOString()
      });
    }, 900);
  };

  if (isSaved) {
    return (
      <div className="py-20 px-4 text-center space-y-4 animate-in zoom-in-95 duration-400">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/30">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-extrabold text-white">
          Feedback Captured!
        </h2>
        <p className="text-xs text-zinc-400 max-w-xs mx-auto">
          Your input has been factored into the demand signal score.
        </p>
      </div>
    );
  }

  return (
    <div className="pb-28 pt-2 px-4 space-y-6">
      {/* Title & Subtitle */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-[10px] font-bold">
          <Sparkles className="w-3 h-3" />
          <span>Stage 04: Validation</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white">
          How useful was this idea?
        </h1>
        <p className="text-xs text-zinc-400">
          Your feedback helps prioritize what matters for <span className="text-orange-400 font-semibold">{ideaTitle}</span>.
        </p>
      </div>

      {/* Star Rating Section */}
      <div className="p-5 rounded-3xl bg-[#12131A] border border-white/[0.08] text-center space-y-3">
        <span className="text-xs font-semibold text-zinc-400">Rate this concept</span>
        <div className="flex items-center justify-center gap-2.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="p-1 transition-transform active:scale-125 focus:outline-none"
            >
              <Star
                className={`w-8 h-8 transition-colors ${
                  star <= rating
                    ? 'text-orange-400 fill-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]'
                    : 'text-zinc-700'
                }`}
              />
            </button>
          ))}
        </div>
        <span className="text-xs font-mono font-bold text-orange-400 block">
          {rating === 5 && 'Outstanding innovation'}
          {rating === 4 && 'Very useful feature'}
          {rating === 3 && 'Good potential with tweaks'}
          {rating === 2 && 'Needs refinement'}
          {rating === 1 && 'Low utility'}
        </span>
      </div>

      {/* Quick Useful / Not Useful Buttons */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-zinc-300 block">Would you use it?</span>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setIsUseful(true)}
            className={`py-3 px-4 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${
              isUseful === true
                ? 'bg-orange-500/20 border-orange-500 text-orange-300 shadow-md shadow-orange-500/20'
                : 'bg-[#12131A] border-white/[0.08] text-zinc-400'
            }`}
          >
            <ThumbsUp className="w-4 h-4 text-orange-400" />
            <span>Useful</span>
          </button>

          <button
            type="button"
            onClick={() => setIsUseful(false)}
            className={`py-3 px-4 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${
              isUseful === false
                ? 'bg-red-500/20 border-red-500 text-red-300 shadow-md shadow-red-500/20'
                : 'bg-[#12131A] border-white/[0.08] text-zinc-400'
            }`}
          >
            <ThumbsDown className="w-4 h-4 text-red-400" />
            <span>Not useful</span>
          </button>
        </div>
      </div>

      {/* What would you change? */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-zinc-200 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
          <span>What would you change?</span>
        </label>
        <textarea
          rows={3}
          value={suggestions}
          onChange={(e) => setSuggestions(e.target.value)}
          placeholder="e.g., Allow manual calibration presets or add a quick toggle in notification shade..."
          className="w-full p-3.5 rounded-2xl bg-[#12131A] text-white text-xs placeholder:text-zinc-400 border border-white/[0.08] focus:border-orange-500/60 focus:outline-none resize-none"
        />
      </div>

      {/* Question: Would you want iQOO to build this permanently? */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-zinc-200 block">
          Would you want iQOO to build this permanently?
        </label>
        <div className="grid grid-cols-3 gap-2">
          {(['Definitely', 'Maybe', 'No'] as const).map((opt) => {
            const isSelected = wantPermanently === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => setWantPermanently(opt)}
                className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all active:scale-95 ${
                  isSelected
                    ? opt === 'Definitely'
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                      : opt === 'Maybe'
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                      : 'bg-zinc-800 border-zinc-600 text-zinc-300'
                    : 'bg-[#12131A] border-white/[0.08] text-zinc-400'
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Primary CTA */}
      <div className="pt-2">
        <button
          type="button"
          onClick={handleSave}
          className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-all"
        >
          <span>Save Feedback</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
