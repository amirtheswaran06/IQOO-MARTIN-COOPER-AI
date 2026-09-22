import React, { useState } from 'react';
import { 
  Lightbulb, 
  Filter, 
  Layers, 
  ChevronRight, 
  Plus, 
  Activity, 
  CheckCircle2, 
  Flame,
  Clock,
  Sparkles
} from 'lucide-react';
import { Idea, IdeaStatus } from '../types';

interface MyIdeasScreenProps {
  ideas: Idea[];
  onSelectIdea: (idea: Idea) => void;
  onStartSubmit: () => void;
  onTestPrototype: (idea: Idea) => void;
}

const STATUS_FILTERS: (IdeaStatus | 'All')[] = [
  'All',
  'Submitted',
  'Under Review',
  'Prototype Testing',
  'Feedback Captured',
  'Analyzed',
  'Draft'
];

export const MyIdeasScreen: React.FC<MyIdeasScreenProps> = ({
  ideas,
  onSelectIdea,
  onStartSubmit,
  onTestPrototype,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<IdeaStatus | 'All'>('All');

  const filteredIdeas = selectedStatus === 'All'
    ? ideas
    : ideas.filter(i => i.status === selectedStatus);

  const getStatusBadge = (status: IdeaStatus) => {
    switch (status) {
      case 'Submitted':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25';
      case 'Under Review':
        return 'bg-orange-500/15 text-orange-400 border-orange-500/25';
      case 'Prototype Testing':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/25';
      case 'Feedback Captured':
        return 'bg-purple-500/15 text-purple-400 border-purple-500/25';
      case 'Analyzed':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/25';
      default:
        return 'bg-zinc-800 text-zinc-400 border-zinc-700';
    }
  };

  return (
    <div className="pb-28 pt-2 px-4 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <h1 className="text-xl font-extrabold text-white">
            My Ideas
          </h1>
          <p className="text-xs text-zinc-400">
            {ideas.length} concepts tracking through validation
          </p>
        </div>

        <button
          onClick={onStartSubmit}
          className="p-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-orange-500/20 active:scale-95 transition-all"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>New Idea</span>
        </button>
      </div>

      {/* Filter Chips - Horizontal Scrolling */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar -mx-4 px-4 pb-1">
        {STATUS_FILTERS.map((st) => (
          <button
            key={st}
            onClick={() => setSelectedStatus(st)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all active:scale-95 ${
              selectedStatus === st
                ? 'bg-orange-500 text-white border-orange-500 shadow-sm shadow-orange-500/30'
                : 'bg-[#12131A] text-zinc-400 border-white/[0.06] hover:text-zinc-200'
            }`}
          >
            {st}
          </button>
        ))}
      </div>

      {/* Ideas List */}
      {filteredIdeas.length === 0 ? (
        <div className="p-8 rounded-3xl bg-[#12131A] border border-white/[0.06] text-center space-y-3">
          <Lightbulb className="w-8 h-8 text-zinc-400 mx-auto" />
          <h3 className="text-sm font-bold text-white">No ideas in this category</h3>
          <p className="text-xs text-zinc-400">
            Submit a problem or feature request to start an AI innovation loop.
          </p>
          <button
            onClick={onStartSubmit}
            className="mt-2 py-2 px-4 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold"
          >
            Submit an Idea
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredIdeas.map((idea) => (
            <div
              key={idea.id}
              className="p-4 rounded-2xl bg-[#12131A] border border-white/[0.06] hover:border-orange-500/30 transition-all space-y-3 shadow-md shadow-black/40"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 text-[10px] font-bold uppercase border border-white/[0.08]">
                      {idea.category}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono">
                      {new Date(idea.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 
                    onClick={() => onSelectIdea(idea)}
                    className="text-sm font-bold text-white cursor-pointer hover:text-orange-400 transition-colors pt-0.5"
                  >
                    {idea.title}
                  </h3>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border shrink-0 ${getStatusBadge(idea.status)}`}>
                  {idea.status}
                </span>
              </div>

              <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                {idea.problem}
              </p>

              {/* Metrics row */}
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[11px]">
                <div className="flex items-center gap-3 text-zinc-400">
                  <span className="flex items-center gap-1 font-mono">
                    <Flame className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                    <span className="text-zinc-200 font-bold">{idea.demandSignal}%</span> Demand
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold">
                    ✓ Prototype {idea.prototype ? 'Ready' : 'Synthesized'}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onTestPrototype(idea)}
                    className="px-2.5 py-1 rounded-lg bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/30 text-orange-400 text-[11px] font-bold flex items-center gap-1"
                  >
                    <Layers className="w-3 h-3" />
                    <span>Prototype</span>
                  </button>
                  <button
                    onClick={() => onSelectIdea(idea)}
                    className="p-1 rounded-lg text-zinc-400 hover:text-white"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
