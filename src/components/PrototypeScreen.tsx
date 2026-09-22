import React, { useState } from 'react';
import { 
  Layers, 
  RotateCcw, 
  Sparkles, 
  Check, 
  AlertTriangle, 
  Play, 
  Flame, 
  Volume2, 
  Sliders, 
  Smartphone,
  Gauge,
  Wifi,
  BatteryCharging,
  Zap,
  Eye,
  Camera,
  ShieldCheck
} from 'lucide-react';
import { Idea } from '../types';

interface PrototypeScreenProps {
  idea: Idea;
  onProceedToFeedback: () => void;
}

export const PrototypeScreen: React.FC<PrototypeScreenProps> = ({
  idea,
  onProceedToFeedback,
}) => {
  const prototype = idea.prototype || {
    type: 'gaming',
    title: 'Super Frame & Monster Boost Engine',
    badge: 'Interactive Lab Simulator',
    metrics: [
      { label: 'Display Refresh', value: '144', unit: 'Hz' },
      { label: 'Render Latency', value: '3.8', unit: 'ms' },
      { label: 'Frame Stability', value: '99.4', unit: '%' }
    ],
    controls: [
      { id: 'frame_interpolation', label: 'Super Frame Interpolation', type: 'toggle', defaultValue: true },
      { id: 'monster_boost', label: 'Monster Performance Mode', type: 'toggle', defaultValue: true },
      { id: 'target_fps', label: 'Target Frame Rate', type: 'slider', min: 60, max: 144, defaultValue: 144 }
    ],
    steps: [
      { step: 1, title: 'Engine Intercept', desc: 'Game graphics buffer is routed through Q2 co-processor.' },
      { step: 2, title: 'Motion Vector Analysis', desc: 'Bi-directional optical flow calculates intermediary pixel trajectories.' },
      { step: 3, title: 'Hardware Injection', desc: 'Generated frames are pushed directly to display pipeline without GPU burden.' }
    ]
  };

  // State for prototype controls
  const [toggleState, setToggleState] = useState<Record<string, boolean>>({
    turbo_active: true,
    frame_interpolation: true,
    anti_glare: true,
    stage_clarity: true,
    whisper_enhance: true,
    direct_power: true,
    cool_boost: true,
    system_hook: true,
  });

  const [sliderValue, setSliderValue] = useState<number>(85);
  const [simActive, setSimActive] = useState<boolean>(true);
  const [hasTested, setHasTested] = useState<boolean>(false);
  const [hapticTriggered, setHapticTriggered] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setToggleState(prev => ({ ...prev, [id]: !prev[id] }));
    setHasTested(true);
  };

  const handleReset = () => {
    setToggleState({
      turbo_active: true,
      frame_interpolation: true,
      anti_glare: true,
      stage_clarity: true,
      whisper_enhance: true,
      direct_power: true,
      cool_boost: true,
      system_hook: true,
    });
    setSliderValue(85);
    setSimActive(true);
    setHapticTriggered(null);
  };

  const triggerFeatureBurst = () => {
    setSimActive(false);
    setHapticTriggered('Burst active');
    setTimeout(() => {
      setSimActive(true);
      setHasTested(true);
    }, 400);
  };

  return (
    <div className="pb-28 pt-2 px-4 space-y-5">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-[11px] font-bold">
            <Sparkles className="w-3 h-3" />
            <span>Experimental Prototype</span>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white px-2 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>

        <h1 className="text-xl font-extrabold text-white">
          AI Prototype
        </h1>
        <p className="text-xs text-zinc-400">
          Interactive concept demonstration for <span className="text-orange-400 font-semibold">{idea.title}</span>
        </p>
      </div>

      {/* Simulated Smartphone Feature Canvas */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-orange-400" />
            <span>Try the concept</span>
          </span>
          <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>SIMULATION ACTIVE</span>
          </span>
        </div>

        {/* Simulated Phone Screen Container */}
        <div className="relative overflow-hidden rounded-3xl bg-[#08090E] border-2 border-orange-500/30 shadow-2xl shadow-orange-950/30 p-3.5 space-y-3">
          {/* Phone Top Status Bar */}
          <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono px-1">
            <span>08:36</span>
            <div className="flex items-center gap-2">
              <span className="text-orange-400 font-bold">5G Ultra</span>
              <Wifi className="w-3 h-3" />
              <div className="flex items-center gap-0.5">
                <span>100%</span>
                <BatteryCharging className="w-3 h-3 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Interactive Feature Stage based on type */}
          {prototype.type === 'gaming' && (
            <div className="p-3 rounded-2xl bg-gradient-to-b from-[#141522] to-[#0D0E16] border border-orange-500/30 space-y-3">
              {/* Game Space HUD Banner */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center shadow-md shadow-orange-500/30">
                    <Zap className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-white tracking-wide uppercase">
                      iQOO Ultra Game Space
                    </h4>
                    <span className="text-[9px] text-orange-400 font-mono">Q2 SuperComputing Active</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-mono font-black text-orange-400">
                    {toggleState.frame_interpolation !== false ? '144' : '60'}
                  </span>
                  <span className="text-[9px] text-zinc-400 font-mono ml-0.5">FPS</span>
                </div>
              </div>

              {/* Dynamic Wave / Frame Stability Bar */}
              <div className="h-12 rounded-xl bg-black/60 p-2 flex items-end gap-1 overflow-hidden border border-white/[0.04]">
                {[45, 60, 80, 95, 100, 98, 100, 99, 100, 97, 100, 99, 100, 100, 98, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-orange-500 to-amber-400 rounded-t-sm transition-all duration-300"
                    style={{
                      height: toggleState.frame_interpolation !== false ? `${h}%` : `${Math.min(h, 45)}%`,
                      opacity: simActive ? 1 : 0.4
                    }}
                  />
                ))}
              </div>

              {/* Interactive Virtual Monster Triggers */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setHapticTriggered('Left Trigger (ADS Zoom)');
                    setHasTested(true);
                  }}
                  className="py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-orange-500/20 border border-white/[0.08] active:border-orange-500 text-[11px] font-bold text-white flex items-center justify-between transition-all active:scale-95"
                >
                  <span>L-Trigger: Aim</span>
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setHapticTriggered('Right Trigger (Recoil Fire)');
                    setHasTested(true);
                  }}
                  className="py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-orange-500/20 border border-white/[0.08] active:border-orange-500 text-[11px] font-bold text-white flex items-center justify-between transition-all active:scale-95"
                >
                  <span>R-Trigger: Fire</span>
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                </button>
              </div>

              {hapticTriggered && (
                <div className="text-center text-[10px] text-orange-400 font-mono animate-bounce">
                  ⚡ Micro-Haptic Click: {hapticTriggered}
                </div>
              )}
            </div>
          )}

          {prototype.type === 'camera' && (
            <div className="p-3 rounded-2xl bg-gradient-to-b from-[#141522] to-[#0D0E16] border border-orange-500/30 space-y-3">
              <div className="relative h-32 rounded-xl bg-black overflow-hidden flex items-center justify-center border border-white/[0.06]">
                {/* Simulated concert viewfinder background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-orange-950/40 transition-all duration-500 ${
                    toggleState.anti_glare !== false ? 'brightness-100' : 'brightness-150 contrast-125'
                  }`}
                />
                
                {/* Harsh laser bloom simulator if turned off */}
                {toggleState.anti_glare === false && (
                  <div className="absolute inset-0 bg-radial from-amber-300/60 via-purple-500/40 to-transparent blur-md pointer-events-none" />
                )}

                <div className="relative z-10 text-center space-y-1">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 border border-white/20 text-[10px] text-white">
                    <Camera className="w-3 h-3 text-orange-400" />
                    <span>Stage Master 4K • 60FPS</span>
                  </div>
                  <p className="text-[11px] text-zinc-300 font-semibold">
                    {toggleState.anti_glare !== false ? '✓ Laser Flare Neutralized' : '⚠ High Specular Laser Glare'}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] px-1">
                <span className="text-zinc-400">Glare Suppress</span>
                <span className="font-mono text-orange-400 font-bold">
                  {toggleState.anti_glare !== false ? '-84% Bloom' : '0% (Standard)'}
                </span>
              </div>
            </div>
          )}

          {prototype.type === 'audio' && (
            <div className="p-3 rounded-2xl bg-gradient-to-b from-[#141522] to-[#0D0E16] border border-orange-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-bold text-white">Neural Vocoder Array</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                  {toggleState.whisper_enhance !== false ? 'Whisper Mode: ON' : 'Standard Mic'}
                </span>
              </div>

              {/* Animated audio sine waves */}
              <div className="h-12 rounded-xl bg-black/60 p-2 flex items-center justify-center gap-1 border border-white/[0.04]">
                {[12, 24, 38, 50, 68, 85, 94, 60, 42, 75, 90, 45, 30, 18, 10].map((h, idx) => (
                  <div
                    key={idx}
                    className="w-1 rounded-full bg-gradient-to-t from-orange-500 to-amber-300 transition-all duration-200"
                    style={{
                      height: toggleState.whisper_enhance !== false ? `${h * 0.45}px` : `${Math.max(6, h * 0.15)}px`
                    }}
                  />
                ))}
              </div>

              <p className="text-[10px] text-zinc-400 text-center">
                Simulated ambient background noise suppressed by <span className="text-orange-400 font-bold">-38dB</span>
              </p>
            </div>
          )}

          {prototype.type === 'battery' && (
            <div className="p-3 rounded-2xl bg-gradient-to-b from-[#141522] to-[#0D0E16] border border-orange-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BatteryCharging className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-bold text-white">FlashCharge Direct Router</span>
                </div>
                <span className="text-[10px] font-mono text-orange-400 font-bold">120W FlashRail</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 rounded-xl bg-black/50 border border-white/[0.04]">
                  <span className="text-zinc-400 block">Motherboard Thermals</span>
                  <span className="text-base font-mono font-bold text-white">
                    {toggleState.direct_power !== false ? '33.8°C' : '41.5°C'}
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-black/50 border border-white/[0.04]">
                  <span className="text-zinc-400 block">Battery Cell Strain</span>
                  <span className="text-base font-mono font-bold text-emerald-400">
                    {toggleState.direct_power !== false ? '0 Watts (Idle)' : '18 Watts'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {prototype.type === 'generic' && (
            <div className="p-3 rounded-2xl bg-gradient-to-b from-[#141522] to-[#0D0E16] border border-orange-500/30 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-bold text-white">iQOO Super Turbo Orchestrator</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">Active</span>
              </div>
              <p className="text-[11px] text-zinc-300">
                Low-overhead background dispatch hooked into FuntouchOS / OriginOS scheduler.
              </p>
            </div>
          )}

          {/* Real-time Metrics Pill Strip */}
          <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/[0.06]">
            {prototype.metrics.map((m, idx) => (
              <div key={idx} className="p-1.5 rounded-xl bg-white/[0.03] text-center">
                <span className="text-[9px] text-zinc-400 block truncate">{m.label}</span>
                <span className="text-xs font-mono font-bold text-orange-400">
                  {m.value}{m.unit}
                </span>
              </div>
            ))}
          </div>

          {/* Test Feature Quick Trigger Button */}
          <button
            type="button"
            onClick={triggerFeatureBurst}
            className="w-full py-2.5 px-3 rounded-xl bg-orange-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 active:scale-95 transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Simulate Feature Action</span>
          </button>
        </div>
      </div>

      {/* Interactive Controls Panel */}
      <div className="p-4 rounded-2xl bg-[#12131A] border border-white/[0.08] space-y-3.5">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-orange-400" />
            <span>Interactive Controls</span>
          </h3>
          <span className="text-[10px] text-zinc-400">Adjust live behavior</span>
        </div>

        <div className="space-y-3">
          {prototype.controls.map((ctrl) => {
            if (ctrl.type === 'toggle') {
              const isOn = toggleState[ctrl.id] ?? ctrl.defaultValue ?? true;
              return (
                <div key={ctrl.id} className="flex items-center justify-between py-1">
                  <span className="text-xs font-medium text-zinc-200">{ctrl.label}</span>
                  <button
                    type="button"
                    onClick={() => handleToggle(ctrl.id)}
                    className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-0.5 ${
                      isOn ? 'bg-orange-500' : 'bg-zinc-800'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        isOn ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              );
            }

            if (ctrl.type === 'slider') {
              return (
                <div key={ctrl.id} className="space-y-1.5 py-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-zinc-200">{ctrl.label}</span>
                    <span className="font-mono text-orange-400 font-bold">{sliderValue}%</span>
                  </div>
                  <input
                    type="range"
                    min={ctrl.min || 1}
                    max={ctrl.max || 100}
                    value={sliderValue}
                    onChange={(e) => {
                      setSliderValue(Number(e.target.value));
                      setHasTested(true);
                    }}
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>

      {/* How This Prototype Works */}
      <div className="p-4 rounded-2xl bg-[#12131A] border border-white/[0.08] space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
          How this prototype works
        </h3>
        <div className="space-y-2.5">
          {prototype.steps.map((step) => (
            <div key={step.step} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                {step.step}
              </span>
              <div>
                <h4 className="text-xs font-bold text-white">{step.title}</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mandatory Disclaimer */}
      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[11px] text-zinc-400 flex items-start gap-2">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
        <p className="leading-snug">
          Experimental demonstration only. This prototype does not modify Android, access system permissions, or represent an official iQOO product.
        </p>
      </div>

      {/* CTA */}
      <div className="pt-2">
        <button
          onClick={onProceedToFeedback}
          className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-all"
        >
          <Check className="w-4 h-4 stroke-[3]" />
          <span>Prototype Tested ✓</span>
        </button>
      </div>
    </div>
  );
};
