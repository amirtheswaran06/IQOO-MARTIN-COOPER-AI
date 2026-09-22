import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Info, 
  HelpCircle, 
  Terminal, 
  RotateCcw, 
  ExternalLink, 
  Check, 
  Sparkles, 
  Flame, 
  ChevronRight,
  Zap,
  Award
} from 'lucide-react';

interface ProfileScreenProps {
  ideasCount: number;
  prototypesCount: number;
  feedbackCount: number;
  onOpenDeveloper: () => void;
  onResetDemoData: () => void;
  onShowHelp: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  ideasCount,
  prototypesCount,
  feedbackCount,
  onOpenDeveloper,
  onResetDemoData,
  onShowHelp,
}) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [anonymousPrivacy, setAnonymousPrivacy] = useState(true);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  return (
    <div className="pb-28 pt-2 px-4 space-y-5">
      {/* Profile Header Card */}
      <div className="p-5 rounded-3xl bg-gradient-to-b from-[#171824] via-[#10111A] to-[#0A0B10] border border-white/[0.08] shadow-xl shadow-black/40 space-y-4">
        <div className="flex items-center gap-3.5">
          {/* Avatar with Orange Glow */}
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-400 flex items-center justify-center text-lg font-black text-black shadow-lg shadow-orange-500/30">
              AR
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#0A0B10] rounded-full" />
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5">
              <h2 className="text-base font-extrabold text-white">
                Alex Rivera
              </h2>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-orange-500/20 text-orange-400 border border-orange-500/30">
                Pioneer
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              iQOO Hardware Co-Creator
            </p>
          </div>
        </div>

        {/* Pioneer Stats Trio */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.06]">
          <div className="p-2.5 rounded-xl bg-white/[0.03] text-center">
            <span className="text-[10px] text-zinc-400 block">Submitted</span>
            <span className="text-base font-mono font-bold text-orange-400">{ideasCount}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.03] text-center">
            <span className="text-[10px] text-zinc-400 block">Prototypes</span>
            <span className="text-base font-mono font-bold text-amber-400">{prototypesCount}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.03] text-center">
            <span className="text-[10px] text-zinc-400 block">Feedback</span>
            <span className="text-base font-mono font-bold text-emerald-400">{feedbackCount}</span>
          </div>
        </div>
      </div>

      {/* Settings Section */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 px-1">
          Settings & Preferences
        </h3>

        <div className="rounded-2xl bg-[#12131A] border border-white/[0.06] divide-y divide-white/[0.06] overflow-hidden">
          {/* Notifications Toggle */}
          <div className="p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.04] flex items-center justify-center text-zinc-300">
                <Bell className="w-4 h-4 text-orange-400" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Notifications</span>
                <span className="text-[11px] text-zinc-400">Status updates when ideas enter review</span>
              </div>
            </div>

            <button
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-0.5 ${
                notificationsEnabled ? 'bg-orange-500' : 'bg-zinc-800'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  notificationsEnabled ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Privacy Toggle */}
          <div className="p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.04] flex items-center justify-center text-zinc-300">
                <Shield className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Anonymous Privacy</span>
                <span className="text-[11px] text-zinc-400">Demand telemetry is zero-identity</span>
              </div>
            </div>

            <button
              onClick={() => setAnonymousPrivacy(!anonymousPrivacy)}
              className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-0.5 ${
                anonymousPrivacy ? 'bg-emerald-500' : 'bg-zinc-800'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  anonymousPrivacy ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Developer Mode */}
          <button
            onClick={onOpenDeveloper}
            className="w-full p-3.5 flex items-center justify-between hover:bg-white/[0.02] text-left transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Developer Workspace</span>
                <span className="text-[11px] text-zinc-400">iQOO R&D Labs internal view</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-400" />
          </button>

          {/* About */}
          <button
            onClick={() => setShowAboutModal(true)}
            className="w-full p-3.5 flex items-center justify-between hover:bg-white/[0.02] text-left transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.04] flex items-center justify-center text-zinc-300">
                <Info className="w-4 h-4 text-orange-400" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">About Martin Cooper AI</span>
                <span className="text-[11px] text-zinc-400">Vision & Tribute to the Father of Mobile</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-400" />
          </button>

          {/* Help & Guidelines */}
          <button
            onClick={onShowHelp}
            className="w-full p-3.5 flex items-center justify-between hover:bg-white/[0.02] text-left transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.04] flex items-center justify-center text-zinc-300">
                <HelpCircle className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Help & Guidelines</span>
                <span className="text-[11px] text-zinc-400">How ideas turn into real phone features</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-400" />
          </button>

          {/* Demo Data Reset */}
          <button
            onClick={() => setShowResetConfirm(true)}
            className="w-full p-3.5 flex items-center justify-between hover:bg-red-500/[0.05] text-left transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                <RotateCcw className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-red-300 block">Reset Demo State</span>
                <span className="text-[11px] text-zinc-400">Restore factory ideas & metrics</span>
              </div>
            </div>
            <span className="text-[10px] text-zinc-400 font-mono">Reset</span>
          </button>
        </div>
      </div>

      {/* About Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-[#12131A] border border-orange-500/30 rounded-3xl p-5 space-y-4 shadow-2xl">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                <Zap className="w-4 h-4 fill-white" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-white">MARTIN COOPER AI</h3>
                <span className="text-[10px] text-orange-400 font-mono">iQOO Co-Creation Platform</span>
              </div>
            </div>

            <div className="text-xs text-zinc-300 space-y-2 leading-relaxed">
              <p>
                Named in honor of <strong className="text-white">Martin Cooper</strong>, who placed the first handheld cellular phone call on April 3, 1973.
              </p>
              <p>
                This platform bridges passionate smartphone power users with <strong className="text-orange-400">iQOO’s innovation and engineering teams</strong>. Users describe the problems they experience, Martin Cooper AI synthesizes a testable prototype, and community demand guides future smartphone silicon and software features.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAboutModal(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-orange-500 text-white font-bold text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Reset Confirmation */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-xs bg-[#12131A] border border-white/[0.1] rounded-3xl p-5 space-y-3 text-center">
            <h3 className="text-sm font-bold text-white">Reset Demo Ideas?</h3>
            <p className="text-xs text-zinc-400">
              This will restore all pre-loaded concept ideas and clear local feedback states.
            </p>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-2 rounded-xl bg-white/[0.06] text-xs font-semibold text-zinc-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onResetDemoData();
                  setShowResetConfirm(false);
                }}
                className="flex-1 py-2 rounded-xl bg-red-600 text-white text-xs font-bold"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
