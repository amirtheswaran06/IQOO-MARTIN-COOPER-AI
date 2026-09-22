import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Check, 
  AlertCircle, 
  HelpCircle,
  Gamepad2,
  Camera,
  Bot,
  Shield,
  Briefcase,
  Accessibility,
  Wifi,
  MoreHorizontal
} from 'lucide-react';
import { Category, TargetAudience, Idea } from '../types';
import { generateAIAnalysis } from '../utils/aiAnalyzer';

interface SubmitIdeaScreenProps {
  onBack?: () => void;
  onCancel?: () => void;
  onIdeaCreated?: (idea: Idea) => void;
  onSubmitIdea?: (data: {
    title: string;
    problem: string;
    solution: string;
    targetAudience: TargetAudience[];
    category: Category;
  }) => void;
}

const CATEGORIES: { id: Category; label: string; icon: any }[] = [
  { id: 'AI', label: 'AI', icon: Bot },
  { id: 'Camera', label: 'Camera', icon: Camera },
  { id: 'Gaming', label: 'Gaming', icon: Gamepad2 },
  { id: 'Security', label: 'Security', icon: Shield },
  { id: 'Productivity', label: 'Productivity', icon: Briefcase },
  { id: 'Accessibility', label: 'Accessibility', icon: Accessibility },
  { id: 'Connectivity', label: 'Connectivity', icon: Wifi },
  { id: 'Other', label: 'Other', icon: MoreHorizontal },
];

const TARGET_AUDIENCES: TargetAudience[] = [
  'Students',
  'Gamers',
  'Creators',
  'Professionals',
  'Travelers',
  'Everyone'
];

const SAMPLE_TEMPLATES = [
  {
    title: 'Adaptive 144Hz Eye-Safe Combat Frame Engine',
    problem: 'Fast-paced shooters cause intense eye fatigue and frame micro-stutters during 2-hour ranked gaming sessions.',
    solution: 'Use Q2 co-processor to intelligently boost frames to 144Hz while adjusting sub-pixel blue light based on in-game muzzle flash intensity.',
    category: 'Gaming' as Category,
    target: ['Gamers'] as TargetAudience[]
  },
  {
    title: 'Acoustic AI Whisper Mode for Public Phone Calls',
    problem: 'When taking sensitive business calls on public transit or quiet cafes, you have to choose between whispering inaudibly or shouting your private info.',
    solution: 'Use on-device neural beamforming and bone conduction harmonics to transmit a clear voice signal even when you whisper at 20dB.',
    category: 'Connectivity' as Category,
    target: ['Professionals', 'Travelers'] as TargetAudience[]
  },
  {
    title: 'Stage Master Anti-Glare Concert Filter',
    problem: 'Night concerts and festival stage lights cause severe blinding lens flares and laser overexposure that destroy memories on video.',
    solution: 'Real-time multi-exposure neural dehaze that isolates stage laser beams and restores artist facial clarity without losing stage lighting atmosphere.',
    category: 'Camera' as Category,
    target: ['Creators', 'Everyone'] as TargetAudience[]
  }
];

export const SubmitIdeaScreen: React.FC<SubmitIdeaScreenProps> = ({
  onBack,
  onCancel,
  onIdeaCreated,
  onSubmitIdea,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [title, setTitle] = useState('');
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [targetAudience, setTargetAudience] = useState<TargetAudience[]>(['Everyone']);
  const [category, setCategory] = useState<Category>('AI');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleAudience = (aud: TargetAudience) => {
    if (targetAudience.includes(aud)) {
      if (targetAudience.length > 1) {
        setTargetAudience(targetAudience.filter(a => a !== aud));
      }
    } else {
      setTargetAudience([...targetAudience, aud]);
    }
  };

  const applyTemplate = (tmpl: typeof SAMPLE_TEMPLATES[0]) => {
    setTitle(tmpl.title);
    setProblem(tmpl.problem);
    setSolution(tmpl.solution);
    setCategory(tmpl.category);
    setTargetAudience(tmpl.target);
    setErrors({});
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!problem.trim() || problem.trim().length < 15) {
      errs.problem = 'Please provide a clear description of the problem (min 15 characters).';
    }
    if (!solution.trim() || solution.trim().length < 15) {
      errs.solution = 'Please describe what you want your phone to do (min 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) {
        if (!title.trim()) {
          // Auto-generate title if user didn't write one
          const words = solution.trim().split(' ').slice(0, 5).join(' ');
          setTitle(words || 'Innovative Smartphone Concept');
        }
        setStep(2);
      }
    } else if (step === 2) {
      setStep(3);
    } else {
      handleSubmitFinal();
    }
  };

  const handleSubmitFinal = () => {
    if (onIdeaCreated) {
      const finalTitle = title.trim() || 'Innovative Smartphone Feature';
      const finalProblem = problem.trim();
      const finalSolution = solution.trim();

      const { aiAnalysis, prototype } = generateAIAnalysis(
        finalTitle,
        finalProblem,
        finalSolution,
        category,
        targetAudience
      );

      const newIdea: Idea = {
        id: `idea_${Date.now()}`,
        title: finalTitle,
        problem: finalProblem,
        solution: finalSolution,
        targetAudience,
        category,
        createdAt: new Date().toISOString(),
        status: 'Analyzed',
        demandSignal: Math.floor(78 + Math.random() * 18),
        requestsCount: 1,
        uniqueUsers: 1,
        satisfactionRate: 94,
        aiAnalysis,
        prototype,
        submissionId: `#IQOO-MC-${Math.floor(1000 + Math.random() * 9000)}`,
        communityVotes: 1,
        hasUserSupported: true,
        developerNotes: ['Intake completed through Martin Cooper AI analysis pipeline.']
      };

      onIdeaCreated(newIdea);
    } else if (onSubmitIdea) {
      onSubmitIdea({
        title: title.trim() || 'AI Smart Concept',
        problem: problem.trim(),
        solution: solution.trim(),
        targetAudience,
        category
      });
    }
  };

  const handleCancel = () => {
    if (onBack) onBack();
    else if (onCancel) onCancel();
  };

  return (
    <div className="pb-28 pt-2 px-4 space-y-5">
      {/* Top Bar with Step Progress */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            if (step > 1) setStep((step - 1) as any);
            else handleCancel();
          }}
          className="p-2 -ml-2 rounded-xl text-zinc-400 hover:text-white active:scale-95 transition-all flex items-center gap-1.5 text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{step === 1 ? 'Home' : 'Back'}</span>
        </button>

        <div className="flex items-center gap-1.5">
          <span className="text-xs font-mono font-bold text-orange-400">Step {step}</span>
          <span className="text-xs text-zinc-400">of 3</span>
        </div>
      </div>

      {/* Progress Bar Indicator */}
      <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden flex">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 rounded-full"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      {/* Screen Title */}
      <div className="space-y-1">
        <h1 className="text-xl font-extrabold text-white">
          {step === 1 && 'Submit your idea'}
          {step === 2 && 'Target & Category'}
          {step === 3 && 'Review & Kickoff AI'}
        </h1>
        <p className="text-xs text-zinc-400">
          {step === 1 && 'Describe the friction you experience and your ideal smartphone behavior.'}
          {step === 2 && 'Help iQOO understand the target audience and technology domain.'}
          {step === 3 && 'Verify your inputs before Martin Cooper AI synthesizes the prototype.'}
        </p>
      </div>

      {/* Step 1: Problem & Desired Behavior */}
      {step === 1 && (
        <div className="space-y-5">
          {/* Quick Inspiration Pills */}
          <div className="p-3.5 rounded-2xl bg-orange-500/[0.06] border border-orange-500/20 space-y-2">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-orange-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Try with a pre-configured smartphone concept:</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {SAMPLE_TEMPLATES.map((tmpl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => applyTemplate(tmpl)}
                  className="text-left text-[11px] px-3 py-2 rounded-xl bg-black/40 hover:bg-black/60 border border-white/[0.06] text-zinc-300 flex items-center justify-between transition-colors active:scale-[0.99]"
                >
                  <span className="font-semibold text-white truncate">{tmpl.title}</span>
                  <span className="text-[10px] text-orange-400 font-mono shrink-0 ml-2">Load →</span>
                </button>
              ))}
            </div>
          </div>

          {/* Problem Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-zinc-200">
                What problem are you trying to solve? <span className="text-orange-400">*</span>
              </label>
              <span className="text-[10px] text-zinc-400 font-mono">{problem.length} chars</span>
            </div>
            <textarea
              rows={4}
              value={problem}
              onChange={(e) => {
                setProblem(e.target.value);
                if (errors.problem) setErrors({ ...errors, problem: '' });
              }}
              placeholder="e.g., My phone gets uncomfortably hot and drops frame rates during high-performance gaming sessions while charging..."
              className={`w-full p-3.5 rounded-2xl bg-[#12131A] text-white text-sm placeholder:text-zinc-400 border focus:outline-none transition-all resize-none ${
                errors.problem 
                  ? 'border-red-500/60 focus:border-red-500 bg-red-950/10' 
                  : 'border-white/[0.08] focus:border-orange-500/60'
              }`}
            />
            {errors.problem && (
              <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.problem}</span>
              </p>
            )}
          </div>

          {/* Desired Phone Behavior */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-zinc-200">
                What would you like your phone to do? <span className="text-orange-400">*</span>
              </label>
              <span className="text-[10px] text-zinc-400 font-mono">{solution.length} chars</span>
            </div>
            <textarea
              rows={4}
              value={solution}
              onChange={(e) => {
                setSolution(e.target.value);
                if (errors.solution) setErrors({ ...errors, solution: '' });
              }}
              placeholder="e.g., Automatically route charging power straight to the motherboard to bypass the battery completely when games are running..."
              className={`w-full p-3.5 rounded-2xl bg-[#12131A] text-white text-sm placeholder:text-zinc-400 border focus:outline-none transition-all resize-none ${
                errors.solution 
                  ? 'border-red-500/60 focus:border-red-500 bg-red-950/10' 
                  : 'border-white/[0.08] focus:border-orange-500/60'
              }`}
            />
            {errors.solution && (
              <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.solution}</span>
              </p>
            )}
          </div>

          {/* Feature Title (Optional) */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-zinc-300">
              Concept Name <span className="text-zinc-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Direct Motherboard Bypass Power"
              className="w-full p-3 rounded-xl bg-[#12131A] text-white text-sm placeholder:text-zinc-400 border border-white/[0.08] focus:border-orange-500/60 focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Step 2: Target Audience & Category */}
      {step === 2 && (
        <div className="space-y-6">
          {/* Target Audience Chips */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-zinc-200 block">
              Who is this useful for?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {TARGET_AUDIENCES.map((aud) => {
                const isSelected = targetAudience.includes(aud);
                return (
                  <button
                    key={aud}
                    type="button"
                    onClick={() => toggleAudience(aud)}
                    className={`p-3 rounded-xl text-left text-xs font-semibold flex items-center justify-between border transition-all active:scale-95 ${
                      isSelected
                        ? 'bg-orange-500/15 border-orange-500/50 text-orange-300 shadow-sm shadow-orange-500/20'
                        : 'bg-[#12131A] border-white/[0.06] text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <span>{aud}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-orange-400 stroke-[3]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Chips */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-zinc-200 block">
              Category
            </label>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isSelected = category === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id)}
                    className={`p-3 rounded-xl text-left text-xs font-semibold flex items-center gap-2.5 border transition-all active:scale-95 ${
                      isSelected
                        ? 'bg-orange-500/15 border-orange-500/50 text-orange-300 shadow-sm shadow-orange-500/20'
                        : 'bg-[#12131A] border-white/[0.06] text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-orange-400' : 'text-zinc-400'}`} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Review & Summary */}
      {step === 3 && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-[#12131A] border border-white/[0.08] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-wider text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                {category}
              </span>
              <span className="text-[10px] text-zinc-400">
                Target: {targetAudience.join(', ')}
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">
                {title || 'Innovative Smartphone Feature'}
              </h3>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/[0.06] text-xs">
              <div>
                <span className="text-zinc-400 block font-semibold text-[11px]">Problem:</span>
                <p className="text-zinc-300 mt-0.5">{problem}</p>
              </div>
              <div>
                <span className="text-zinc-400 block font-semibold text-[11px]">Desired Solution:</span>
                <p className="text-zinc-300 mt-0.5">{solution}</p>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed text-[11px]">
              Clicking "Analyze My Idea" will run Martin Cooper AI's technical engine to evaluate hardware feasibility, chipset pipelines, and synthesize a working interactive prototype.
            </p>
          </div>
        </div>
      )}

      {/* Primary Sticky CTA */}
      <div className="pt-3">
        <button
          type="button"
          onClick={handleNext}
          className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-all"
        >
          {step < 3 ? (
            <>
              <span>Continue</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Analyze My Idea →</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
