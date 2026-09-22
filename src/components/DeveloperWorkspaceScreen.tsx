import React, { useState } from 'react';
import { 
  Terminal, 
  Layers, 
  Eye, 
  FileEdit, 
  Lock, 
  Unlock, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowLeft,
  Flame,
  Cpu,
  Send,
  Plus,
  X
} from 'lucide-react';
import { Idea } from '../types';

interface DeveloperWorkspaceScreenProps {
  ideas: Idea[];
  onBack: () => void;
  onSelectIdea: (idea: Idea) => void;
  onTestPrototype: (idea: Idea) => void;
  onAddDevNote: (ideaId: string, note: string) => void;
}

type DevStage = 'Incoming' | 'Validated' | 'Prototype Queue' | 'Implementation Candidate';

export const DeveloperWorkspaceScreen: React.FC<DeveloperWorkspaceScreenProps> = ({
  ideas,
  onBack,
  onSelectIdea,
  onTestPrototype,
  onAddDevNote,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [activeStage, setActiveStage] = useState<DevStage>('Implementation Candidate');
  const [activeNoteIdea, setActiveNoteIdea] = useState<Idea | null>(null);
  const [newNoteText, setNewNoteText] = useState('');

  const stages: DevStage[] = [
    'Implementation Candidate',
    'Prototype Queue',
    'Validated',
    'Incoming'
  ];

  // Distribute ideas among stages for rich demonstration
  const getStageForIdea = (idea: Idea): DevStage => {
    if (idea.devStage) return idea.devStage;
    if (idea.status === 'Under Review') return 'Implementation Candidate';
    if (idea.status === 'Submitted') return 'Implementation Candidate';
    if (idea.status === 'Prototype Testing') return 'Prototype Queue';
    if (idea.status === 'Feedback Captured') return 'Validated';
    return 'Incoming';
  };

  const currentStageIdeas = ideas.filter(i => getStageForIdea(i) === activeStage);

  const handleSaveNote = () => {
    if (!newNoteText.trim() || !activeNoteIdea) return;
    onAddDevNote(activeNoteIdea.id, newNoteText.trim());
    setNewNoteText('');
    setActiveNoteIdea(null);
  };

  return (
    <div className="pb-28 pt-2 px-4 space-y-5">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-xl text-zinc-400 hover:text-white flex items-center gap-1.5 text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit Workspace</span>
        </button>

        {/* Demo Auth Indicator */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-[10px] font-mono text-orange-400">
          <Unlock className="w-3 h-3" />
          <span>iQOO R&D Labs Demo</span>
        </div>
      </div>

      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-orange-400" />
          <h1 className="text-xl font-extrabold text-white">
            Developer Workspace
          </h1>
        </div>
        <p className="text-xs text-zinc-400">
          Internal triage & hardware implementation pipeline for iQOO engineers.
        </p>
      </div>

      {/* Mandatory Disclaimer */}
      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[11px] text-zinc-400 flex items-start gap-2">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
        <p className="leading-snug">
          <strong className="text-zinc-300 font-semibold">Demo Workspace:</strong> This is an interactive architectural demonstration. It does not connect to live proprietary iQOO internal servers.
        </p>
      </div>

      {/* Stage Selector Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar -mx-4 px-4 pb-1">
        {stages.map((st) => {
          const count = ideas.filter(i => getStageForIdea(i) === st).length;
          return (
            <button
              key={st}
              onClick={() => setActiveStage(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all active:scale-95 flex items-center gap-1.5 ${
                activeStage === st
                  ? 'bg-orange-500 text-white border-orange-500 shadow-sm shadow-orange-500/30'
                  : 'bg-[#12131A] text-zinc-400 border-white/[0.06] hover:text-zinc-200'
              }`}
            >
              <span>{st}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                activeStage === st ? 'bg-black/30 text-white' : 'bg-white/[0.06] text-zinc-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Ideas in current stage */}
      <div className="space-y-4">
        {currentStageIdeas.length === 0 ? (
          <div className="p-8 rounded-3xl bg-[#12131A] border border-white/[0.06] text-center space-y-2">
            <Cpu className="w-7 h-7 text-zinc-400 mx-auto" />
            <p className="text-xs text-zinc-400">No concepts currently in {activeStage}.</p>
          </div>
        ) : (
          currentStageIdeas.map((idea) => {
            const analysis = idea.aiAnalysis;
            const tech = analysis?.technicalSpecs;

            return (
              <div
                key={idea.id}
                className="p-4 rounded-2xl bg-[#12131A] border border-white/[0.08] space-y-3.5 shadow-md shadow-black/40"
              >
                {/* Title & Category */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-orange-500/15 text-orange-400 text-[10px] font-bold uppercase border border-orange-500/25">
                        {idea.category}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-mono">
                        {idea.submissionId || '#IQOO-MC'}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white pt-1">
                      {idea.title}
                    </h3>
                  </div>

                  <span className="text-xs font-mono font-bold text-orange-400 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-orange-400" />
                    <span>{idea.demandSignal}%</span>
                  </span>
                </div>

                {/* Problem & Proposed Solution */}
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.04]">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase block">User Problem:</span>
                    <p className="text-zinc-300 mt-0.5">{idea.problem}</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.04]">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase block">Proposed Solution:</span>
                    <p className="text-zinc-300 mt-0.5">{idea.solution}</p>
                  </div>
                </div>

                {/* Technical Considerations */}
                <div className="p-3 rounded-xl bg-orange-500/[0.04] border border-orange-500/20 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-orange-400">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Technical Considerations:</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div>
                      <span className="text-zinc-400 block">Silicon / Co-Proc:</span>
                      <span className="text-zinc-200 font-mono font-medium">{tech?.chipsetRequirement || 'Qualcomm Snapdragon / Dimensity'}</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 block">Latency Budget:</span>
                      <span className="text-zinc-200 font-mono font-medium">{tech?.latencyEstimate || '< 5ms real-time'}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-zinc-400 block">OS & Kernel Layer:</span>
                      <span className="text-zinc-200 font-mono font-medium">{tech?.osLayer || 'Hardware Composer & FuntouchOS / OriginOS HAL'}</span>
                    </div>
                  </div>
                </div>

                {/* Lab Notes Display */}
                {idea.developerNotes && idea.developerNotes.length > 0 && (
                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                      R&D Lab Notes ({idea.developerNotes.length})
                    </span>
                    <div className="space-y-1">
                      {idea.developerNotes.map((note, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[11px] text-zinc-300">
                          • {note}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions: View Concept, Test Prototype, Developer Notes */}
                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveNoteIdea(idea)}
                    className="py-1.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 text-xs font-semibold flex items-center gap-1"
                  >
                    <FileEdit className="w-3.5 h-3.5 text-orange-400" />
                    <span>Dev Notes</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectIdea(idea)}
                      className="py-1.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 text-xs font-semibold flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </button>

                    <button
                      onClick={() => onTestPrototype(idea)}
                      className="py-1.5 px-3 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/40 text-orange-300 text-xs font-bold flex items-center gap-1 active:scale-95 transition-all"
                    >
                      <Layers className="w-3.5 h-3.5 text-orange-400" />
                      <span>Test Prototype</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Developer Notes Modal Bottom Sheet */}
      {activeNoteIdea && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-[430px] bg-[#11121A] border-t border-orange-500/30 rounded-t-3xl p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="text-base font-extrabold text-white">
                  Developer Lab Notes
                </h3>
                <p className="text-xs text-zinc-400 truncate max-w-[280px]">
                  {activeNoteIdea.title}
                </p>
              </div>
              <button
                onClick={() => setActiveNoteIdea(null)}
                className="p-1 rounded-full text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Existing Notes */}
            <div className="max-h-40 overflow-y-auto space-y-1.5 no-scrollbar">
              {activeNoteIdea.developerNotes?.map((n, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-zinc-300">
                  {n}
                </div>
              )) || <p className="text-xs text-zinc-400">No notes yet.</p>}
            </div>

            {/* New Note Input */}
            <div className="space-y-2 pt-1 border-t border-white/[0.06]">
              <textarea
                rows={2}
                value={newNoteText}
                onChange={(e) => setNewNoteText(e.target.value)}
                placeholder="Add engineering or firmware observation..."
                className="w-full p-2.5 rounded-xl bg-[#090A0E] text-white text-xs placeholder:text-zinc-400 border border-white/[0.08] focus:border-orange-500 focus:outline-none resize-none"
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setActiveNoteIdea(null)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-400"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveNote}
                  className="px-4 py-1.5 rounded-xl bg-orange-500 text-white font-bold text-xs shadow-md shadow-orange-500/20 active:scale-95 transition-all"
                >
                  Save Note
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
