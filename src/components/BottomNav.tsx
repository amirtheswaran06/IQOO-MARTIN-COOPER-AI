import React from 'react';
import { Home, Lightbulb, Compass, BarChart3, PlusCircle } from 'lucide-react';
import { AppScreen } from '../types';

interface BottomNavProps {
  activeScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
  myIdeasCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeScreen,
  onNavigate,
  myIdeasCount = 0,
}) => {
  const isTabActive = (tabKey: 'home' | 'my_ideas' | 'submit' | 'explore' | 'innovation_dashboard') => {
    if (tabKey === 'home') return activeScreen === 'home';
    if (tabKey === 'my_ideas') return activeScreen === 'my_ideas' || activeScreen === 'my-ideas';
    if (tabKey === 'submit') return activeScreen === 'submit';
    if (tabKey === 'explore') return activeScreen === 'explore';
    if (tabKey === 'innovation_dashboard') return activeScreen === 'innovation_dashboard' || activeScreen === 'innovation';
    return false;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0B10]/95 backdrop-blur-2xl border-t border-white/[0.08] safe-bottom">
      <div className="max-w-[430px] mx-auto flex items-center justify-around px-2 py-1.5 h-16">
        {/* Home */}
        <button
          onClick={() => onNavigate('home')}
          className={`relative flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-90 select-none ${
            isTabActive('home') ? 'text-orange-500' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          {isTabActive('home') && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-sm shadow-orange-500" />
          )}
          <Home className={`w-5 h-5 ${isTabActive('home') ? 'stroke-[2.5] scale-105' : 'stroke-[1.8]'}`} />
          <span className={`text-[10px] mt-1 font-semibold tracking-tight ${isTabActive('home') ? 'text-orange-400 font-bold' : 'text-zinc-400'}`}>
            Home
          </span>
        </button>

        {/* Explore */}
        <button
          onClick={() => onNavigate('explore')}
          className={`relative flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-90 select-none ${
            isTabActive('explore') ? 'text-orange-500' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          {isTabActive('explore') && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-sm shadow-orange-500" />
          )}
          <Compass className={`w-5 h-5 ${isTabActive('explore') ? 'stroke-[2.5] scale-105' : 'stroke-[1.8]'}`} />
          <span className={`text-[10px] mt-1 font-semibold tracking-tight ${isTabActive('explore') ? 'text-orange-400 font-bold' : 'text-zinc-400'}`}>
            Explore
          </span>
        </button>

        {/* Central Submit Action Button */}
        <button
          onClick={() => onNavigate('submit')}
          className="relative -top-2 flex flex-col items-center justify-center px-1 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 via-orange-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/35 group-active:scale-95 transition-all">
            <PlusCircle className="w-6 h-6 stroke-[2.5]" />
          </div>
          <span className="text-[9px] font-bold text-orange-400 mt-1 uppercase tracking-wider">
            New Idea
          </span>
        </button>

        {/* My Ideas */}
        <button
          onClick={() => onNavigate('my_ideas')}
          className={`relative flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-90 select-none ${
            isTabActive('my_ideas') ? 'text-orange-500' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          {isTabActive('my_ideas') && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-sm shadow-orange-500" />
          )}
          <div className="relative">
            <Lightbulb className={`w-5 h-5 ${isTabActive('my_ideas') ? 'stroke-[2.5] scale-105' : 'stroke-[1.8]'}`} />
            {myIdeasCount > 0 && (
              <span className="absolute -top-1 -right-2 px-1 min-w-3.5 h-3.5 bg-orange-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-[#090A0E]">
                {myIdeasCount}
              </span>
            )}
          </div>
          <span className={`text-[10px] mt-1 font-semibold tracking-tight ${isTabActive('my_ideas') ? 'text-orange-400 font-bold' : 'text-zinc-400'}`}>
            My Ideas
          </span>
        </button>

        {/* Innovation Overview */}
        <button
          onClick={() => onNavigate('innovation_dashboard')}
          className={`relative flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-90 select-none ${
            isTabActive('innovation_dashboard') ? 'text-orange-500' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          {isTabActive('innovation_dashboard') && (
            <span className="absolute -top-1.5 w-6 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-sm shadow-orange-500" />
          )}
          <BarChart3 className={`w-5 h-5 ${isTabActive('innovation_dashboard') ? 'stroke-[2.5] scale-105' : 'stroke-[1.8]'}`} />
          <span className={`text-[10px] mt-1 font-semibold tracking-tight ${isTabActive('innovation_dashboard') ? 'text-orange-400 font-bold' : 'text-zinc-400'}`}>
            Overview
          </span>
        </button>
      </div>
    </nav>
  );
};
