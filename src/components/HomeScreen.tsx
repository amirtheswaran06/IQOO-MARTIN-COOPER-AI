import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  FileText, 
  Cpu, 
  Layers, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Flame, 
  Zap, 
  Activity,
  ChevronRight
} from 'lucide-react';
import { Idea } from '../types';

interface HomeScreenProps {
  onStartSubmit: () => void;
  onExplore?: () => void;
  onOpenExplore?: () => void;
  onViewMyIdeas?: () => void;
  onOpenDeveloper?: () => void;
  featuredIdea: Idea;
  onSelectIdea?: (idea: Idea) => void;
  onOpenIdea?: (idea: Idea) => void;
  onTestPrototype?: (idea: Idea) => void;
  totalIdeasCount?: number;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onStartSubmit,
  onExplore,
  onOpenExplore,
  onViewMyIdeas,
  onOpenDeveloper,
  featuredIdea,
  onSelectIdea,
  onOpenIdea,
  onTestPrototype,
  totalIdeasCount = 1428,
}) => {
  const handleOpenIdea = (idea: Idea) => {
    if (onOpenIdea) onOpenIdea(idea);
    else if (onSelectIdea) onSelectIdea(idea);
  };

  const handleExplore = () => {
    if (onOpenExplore) onOpenExplore();
    else if (onExplore) onExplore();
  };
  const journeySteps = [
    {
      num: '01',
      title: 'Submit',
      desc: 'Describe your mobile friction or visionary phone feature',
      icon: FileText,
      status: 'Ready',
      statusColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20'
    },
    {
      num: '02',
      title: 'AI Analysis',
      desc: 'NPU feasibility, chipset impact & iQOO integration study',
      icon: Cpu,
      status: 'Automated',
      statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    },
    {
      num: '03',
      title: 'Prototype',
      desc: 'Test simulated smartphone UI feature live on your screen',
      icon: Layers,
      status: 'Interactive',
      statusColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20'
    },
    {
      num: '04',
      title: 'Feedback',
      desc: 'Rate usefulness and vote on permanent iQOO OS adoption',
      icon: MessageSquare,
      status: 'Demand Metric',
      statusColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
    },
    {
      num: '05',
      title: 'iQOO Submission',
      desc: 'Validated demand signals routed to iQOO R&D product teams',
      icon: Send,
      status: 'Direct Channel',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
  ];

  return (
    <div className="pb-24 pt-2 px-4 space-y-6">
      {/* Live Innovation Signal Banner */}
      <div className="flex items-center justify-between px-3.5 py-2 rounded-2xl bg-gradient-to-r from-orange-500/10 via-purple-500/5 to-transparent border border-orange-500/20">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-[11px] font-semibold text-zinc-300">
            iQOO Pipeline Active • <span className="text-orange-400 font-bold">{totalIdeasCount}+ Ideas</span> in validation
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-zinc-400 font-mono">
          <Flame className="w-3 h-3 text-orange-400 fill-orange-400" />
          <span>94% Signal</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-b from-[#161722] via-[#0E0F16] to-[#0A0B10] border border-white/[0.08] shadow-2xl shadow-orange-950/20">
        {/* Glow Effects */}
        <div className="absolute -top-16 -right-16 w-44 h-44 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Co-Create With iQOO</span>
          </div>

          <h1 className="text-2xl xs:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Turn your idea into something <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">iQOO can build.</span>
          </h1>

          <p className="text-sm text-zinc-400 leading-relaxed font-normal">
            Submit a problem, explore an AI-generated concept, test the prototype, and send your validated idea to iQOO.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={onStartSubmit}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-500 text-white font-bold text-sm shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-all"
            >
              <span>Submit an Idea</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={handleExplore}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.08] text-zinc-200 font-semibold text-sm border border-white/[0.08] active:scale-[0.98] transition-all"
            >
              <Compass className="w-4 h-4 text-orange-400" />
              <span>Explore Ideas</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Innovation Card */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-orange-400 fill-orange-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-300">
              Featured Innovation
            </h2>
          </div>
          <span className="text-[11px] font-semibold text-orange-400 flex items-center gap-0.5 cursor-pointer" onClick={() => handleOpenIdea(featuredIdea)}>
            View Concept <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>

        <div className="relative overflow-hidden rounded-2xl p-4.5 bg-[#12131C] border border-orange-500/25 shadow-lg shadow-orange-950/15">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-orange-500/15 text-orange-400 text-[10px] font-bold tracking-wide uppercase border border-orange-500/25">
                  {featuredIdea.category}
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">
                  {featuredIdea.submissionId || '#IQOO-MC-9041'}
                </span>
              </div>
              <h3 className="text-base font-bold text-white pt-1">
                {featuredIdea.title}
              </h3>
            </div>
          </div>

          <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
            {featuredIdea.problem}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-white/[0.06]">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
              <CheckCircle2 className="w-3 h-3" />
              <span>AI Analyzed</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold">
              <Activity className="w-3 h-3" />
              <span>Prototype Tested</span>
            </span>
            <span className="ml-auto text-[11px] font-mono text-zinc-400">
              {featuredIdea.demandSignal}% Demand
            </span>
          </div>

          {/* Test Prototype CTA */}
          <button
            onClick={() => onTestPrototype ? onTestPrototype(featuredIdea) : handleOpenIdea(featuredIdea)}
            className="w-full mt-3.5 py-2.5 px-4 rounded-xl bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/30 text-orange-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
          >
            <Layers className="w-3.5 h-3.5 text-orange-400" />
            <span>Launch Interactive Prototype</span>
          </button>
        </div>
      </div>

      {/* Your Innovation Journey */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-300">
              Your Innovation Journey
            </h2>
            <p className="text-xs text-zinc-400">From raw problem to real iQOO smartphone hardware</p>
          </div>
        </div>

        <div className="space-y-2.5">
          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="relative overflow-hidden rounded-2xl p-3.5 bg-[#11121A] border border-white/[0.06] hover:border-white/[0.12] transition-colors flex items-center gap-3.5"
              >
                {/* Step number badge */}
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <span className="text-xs font-mono font-extrabold text-orange-400">
                    {step.num}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white">
                      {step.title}
                    </h4>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${step.statusColor}`}>
                      {step.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                    {step.desc}
                  </p>
                </div>

                <div className="p-2 rounded-xl bg-white/[0.03] text-zinc-400">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
