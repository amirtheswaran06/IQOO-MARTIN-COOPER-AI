import React from 'react';
import { Zap, Terminal, ArrowLeft, Award } from 'lucide-react';
import { AppScreen } from '../types';

interface HeaderProps {
  activeScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
  onBack?: () => void;
  showBack?: boolean;
  notificationCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  onNavigate,
  onBack,
  showBack = false,
  notificationCount = 2,
}) => {
  const isDevMode = activeScreen === 'developer_workspace' || activeScreen === 'developer';

  return (
    <header className="sticky top-0 z-40 bg-[#090A0E]/90 backdrop-blur-xl border-b border-white/[0.06] safe-top">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left: Back button (if inside sub-screen) OR Brand Logo */}
        <div className="flex items-center gap-2">
          {showBack && onBack ? (
            <button
              onClick={onBack}
              className="p-1.5 -ml-1 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 border border-white/[0.06] flex items-center gap-1 text-xs font-semibold active:scale-95 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            /* Brand with Orange Lightning Logo */
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 cursor-pointer select-none active:opacity-80 transition-opacity"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-md shadow-orange-500/25">
                <Zap className="w-4 h-4 text-white fill-white stroke-[2.5]" />
                <div className="absolute -inset-0.5 rounded-xl bg-orange-500/20 blur-[3px] -z-10 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] font-black tracking-wider text-white uppercase">
                    Martin Cooper
                  </span>
                  <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                    AI
                  </span>
                </div>
                <span className="text-[9px] font-medium text-zinc-400 tracking-tight flex items-center gap-1">
                  <span>iQOO Innovation</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Right Actions: Developer Workspace toggle & Profile */}
        <div className="flex items-center gap-2">
          {/* Dev Workspace Toggle */}
          <button
            onClick={() => onNavigate('developer_workspace')}
            title="Open Developer Workspace"
            className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 ${
              isDevMode 
                ? 'bg-orange-500 text-white shadow-sm shadow-orange-500/30' 
                : 'bg-white/[0.05] hover:bg-white/[0.08] text-zinc-400 border border-white/[0.06]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="text-[11px]">R&D</span>
          </button>

          {/* Profile icon */}
          <button
            onClick={() => onNavigate('profile')}
            className={`relative p-1 rounded-xl border transition-all active:scale-95 ${
              activeScreen === 'profile'
                ? 'border-orange-500/60 bg-orange-500/10'
                : 'border-white/[0.08] bg-white/[0.04]'
            }`}
          >
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-400 flex items-center justify-center text-[10px] font-black text-black">
              AR
            </div>
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-orange-500 border-2 border-[#090A0E] rounded-full text-[8px] font-bold text-white flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
