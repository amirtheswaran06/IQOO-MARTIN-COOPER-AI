import React, { useState } from 'react';
import { 
  Search, 
  Heart, 
  Layers, 
  Eye, 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  SlidersHorizontal,
  Zap
} from 'lucide-react';
import { Idea, Category } from '../types';

interface ExploreScreenProps {
  ideas: Idea[];
  onSelectIdea: (idea: Idea) => void;
  onTestPrototype: (idea: Idea) => void;
  onToggleSupport: (ideaId: string) => void;
}

const CATEGORIES: (Category | 'All')[] = [
  'All',
  'Gaming',
  'Camera',
  'AI',
  'Connectivity',
  'Productivity',
  'Security'
];

export const ExploreScreen: React.FC<ExploreScreenProps> = ({
  ideas,
  onSelectIdea,
  onTestPrototype,
  onToggleSupport,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const filteredIdeas = ideas.filter((idea) => {
    const matchesCategory = selectedCategory === 'All' || idea.category === selectedCategory;
    const matchesSearch = 
      idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.solution.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-28 pt-2 px-4 space-y-5">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-xl font-extrabold text-white">
          Explore Ideas
        </h1>
        <p className="text-xs text-zinc-400">
          Anonymous community concepts shaping future iQOO devices
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search features, FPS, camera, battery..."
          className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-[#12131A] text-white text-xs placeholder:text-zinc-400 border border-white/[0.08] focus:border-orange-500/60 focus:outline-none"
        />
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar -mx-4 px-4 pb-1">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all active:scale-95 ${
              selectedCategory === cat
                ? 'bg-orange-500 text-white border-orange-500 shadow-sm shadow-orange-500/25'
                : 'bg-[#12131A] text-zinc-400 border-white/[0.06] hover:text-zinc-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards List */}
      <div className="space-y-3.5">
        {filteredIdeas.map((idea) => {
          const isSupported = !!idea.hasUserSupported;

          return (
            <div
              key={idea.id}
              className="p-4 rounded-2xl bg-[#12131A] border border-white/[0.06] hover:border-orange-500/30 transition-all space-y-3 shadow-md shadow-black/40"
            >
              {/* Category & Badge */}
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md bg-orange-500/15 text-orange-400 text-[10px] font-bold uppercase tracking-wider border border-orange-500/25">
                  {idea.category}
                </span>

                <span className="text-[10px] text-zinc-400 font-mono">
                  {idea.submissionId || '#IQOO-MC'}
                </span>
              </div>

              {/* Title & Short Description */}
              <div className="space-y-1">
                <h3 
                  onClick={() => onSelectIdea(idea)}
                  className="text-sm font-bold text-white hover:text-orange-400 cursor-pointer transition-colors"
                >
                  {idea.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {idea.problem}
                </p>
              </div>

              {/* Community Demand & Feasibility Pill Strip */}
              <div className="flex flex-wrap items-center gap-2 text-[10px]">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-500/10 text-orange-400 font-mono font-bold border border-orange-500/20">
                  <Flame className="w-3 h-3 fill-orange-400" />
                  <span>{idea.demandSignal}% Demand</span>
                </span>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>High Feasibility</span>
                </span>

                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/[0.04] text-zinc-300 font-semibold border border-white/[0.06] ml-auto">
                  <Layers className="w-3 h-3 text-orange-400" />
                  <span>Prototype Available</span>
                </span>
              </div>

              {/* Actions: Support, View, Try Prototype */}
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between gap-2">
                {/* Support Heart */}
                <button
                  type="button"
                  onClick={() => onToggleSupport(idea.id)}
                  className={`py-1.5 px-3 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 ${
                    isSupported
                      ? 'bg-rose-500/20 border-rose-500/50 text-rose-400 shadow-sm shadow-rose-500/20'
                      : 'bg-white/[0.04] border-white/[0.08] text-zinc-400 hover:text-white'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isSupported ? 'fill-rose-500 text-rose-500' : ''}`} />
                  <span>{idea.communityVotes + (isSupported ? 1 : 0)}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectIdea(idea)}
                    className="py-1.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onTestPrototype(idea)}
                    className="py-1.5 px-3 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/40 text-orange-300 text-xs font-bold flex items-center gap-1 transition-all active:scale-95"
                  >
                    <Layers className="w-3.5 h-3.5 text-orange-400" />
                    <span>Try Prototype</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
