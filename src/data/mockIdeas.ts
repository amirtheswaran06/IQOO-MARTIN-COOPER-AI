import { Idea } from '../types';

export const INITIAL_IDEAS: Idea[] = [
  {
    id: 'iqoo-idea-1',
    title: 'Smart 144Hz Frame Interpolation for Esports',
    problem: 'Competitive battle royale games cap at 60 or 90 FPS due to engine limits, causing visual micro-stutter on high refresh rate displays.',
    solution: 'Use iQOO custom SuperComputing Q2 chip to generate intermediary frames with sub-5ms latency, giving smooth 144FPS without overheating.',
    targetAudience: ['Gamers', 'Professionals'],
    category: 'Gaming',
    createdAt: '2025-05-14T10:30:00.000Z',
    status: 'Under Review',
    demandSignal: 96,
    requestsCount: 2840,
    uniqueUsers: 1920,
    satisfactionRate: 94,
    submissionId: 'IQOO-MC-9041',
    submittedAt: '2025-05-18T14:20:00.000Z',
    communityVotes: 1428,
    hasUserSupported: true,
    devStage: 'Implementation Candidate',
    developerNotes: [
      'Verified with SuperComputing Q2 driver branch v4.2.',
      'Thermal dissipation profile maintains 39.8°C under 1hr test.',
      'Candidate for upcoming flagship FuntouchOS / OriginOS release.'
    ],
    aiAnalysis: {
      problemSummary: 'Visual stuttering in competitive titles on 144Hz OLED panels due to game developer rendering caps.',
      opportunity: 'Gives competitive mobile gamers an undisputed fluidity edge without battery drain penalty.',
      feasibility: 'High feasibility leveraging dedicated hardware display co-processor and memory frame buffer.',
      differentiation: 'Sub-5ms optical flow motion estimation algorithms developed specifically for fast-paced FPS shooters.',
      iqooIntegration: 'Seamless toggle inside iQOO Ultra Game Mode sidebar with real-time FPS overlay.',
      technicalSpecs: {
        chipsetRequirement: 'iQOO SuperComputing Chip Q2 / V3 ISP',
        batteryImpact: '+4% power consumption vs native 60fps',
        latencyEstimate: '< 4.2ms motion-to-photon latency',
        osLayer: 'Hardware Composer HAL & Game Space 4.0'
      }
    },
    prototype: {
      type: 'gaming',
      title: 'Game Space 144Hz Super Frame Engine',
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
    },
    feedback: {
      rating: 5,
      isUseful: true,
      suggestions: 'Add game-specific presets for PUBG and Genshin.',
      wantPermanently: 'Definitely',
      createdAt: '2025-05-16T11:00:00.000Z'
    }
  },
  {
    id: 'iqoo-idea-2',
    title: 'Acoustic AI Whisper Mode for Public Calls',
    problem: 'Taking private or sensitive calls in crowded trains, quiet libraries, or elevators forces users to speak loudly or risk inaudible communication.',
    solution: 'Dual-microphone bone conduction and beamforming with an on-device neural vocoder that amplifies soft whispers while masking outgoing noise.',
    targetAudience: ['Professionals', 'Students', 'Travelers'],
    category: 'Connectivity',
    createdAt: '2025-05-18T09:15:00.000Z',
    status: 'Feedback Captured',
    demandSignal: 89,
    requestsCount: 1980,
    uniqueUsers: 1450,
    satisfactionRate: 91,
    submissionId: 'IQOO-MC-7732',
    submittedAt: '2025-05-19T16:45:00.000Z',
    communityVotes: 984,
    hasUserSupported: false,
    devStage: 'Validated',
    developerNotes: [
      'Requires DSP firmware update for Qualcomm Hexagon audio pipeline.',
      'Passed acoustic lab testing at 25dB whisper threshold.'
    ],
    aiAnalysis: {
      problemSummary: 'Social awkwardness and privacy leaks during phone calls in quiet or densely populated environments.',
      opportunity: 'Solves an everyday pain point for commuters, students, and office workers.',
      feasibility: 'High feasibility using on-device quantized neural network model running in DSP low-power core.',
      differentiation: 'Synthesizes natural speech resonance from faint breath audio instead of mere linear gain amplification.',
      iqooIntegration: 'Integrated into in-call floating dynamic widget or automatically triggered via ambient mic sensor.',
      technicalSpecs: {
        chipsetRequirement: 'Qualcomm Hexagon DSP / Dimensity APU',
        batteryImpact: 'Negligible (< 0.5% per 30 min call)',
        latencyEstimate: '18ms real-time audio pipeline',
        osLayer: 'Android Audio HAL & Telephony Stack'
      }
    },
    prototype: {
      type: 'audio',
      title: 'Neural Whisper Sound Enhancer',
      badge: 'Interactive Audio Demo',
      metrics: [
        { label: 'Whisper Clarity', value: '98', unit: '%' },
        { label: 'Ambient Suppress', value: '-38', unit: 'dB' },
        { label: 'Processing Delay', value: '12', unit: 'ms' }
      ],
      controls: [
        { id: 'whisper_enhance', label: 'Acoustic Whisper Boost', type: 'toggle', defaultValue: true },
        { id: 'privacy_mask', label: 'Eavesdrop Noise Masker', type: 'toggle', defaultValue: false },
        { id: 'gain_level', label: 'Neural Gain Sensitivity', type: 'slider', min: 1, max: 10, defaultValue: 8 }
      ],
      steps: [
        { step: 1, title: 'Low-Amplitude Capture', desc: 'Bottom & earpiece mics capture vocal frequencies below 30dB.' },
        { step: 2, title: 'Vocoder Reconstruction', desc: 'Pre-trained neural model reconstructs formant vowels and consonants.' },
        { step: 3, title: 'Spatial Isolation', desc: 'Ambient background noise is phase-inverted and stripped in real time.' }
      ]
    },
    feedback: {
      rating: 5,
      isUseful: true,
      suggestions: 'Enable auto-detection when user whispers.',
      wantPermanently: 'Definitely',
      createdAt: '2025-05-19T17:00:00.000Z'
    }
  },
  {
    id: 'iqoo-idea-3',
    title: 'Dynamic Stage Glare & Concert Lens Flare Eraser',
    problem: 'Concert and festival videos taken on smartphones suffer from blown-out laser artifacts, harsh spotlight glare, and lens refraction spots.',
    solution: 'Multi-frame AI spectral separation using iQOO V3 ISP to isolate laser streaks and reconstruct underlying artist faces and stage visuals.',
    targetAudience: ['Creators', 'Everyone'],
    category: 'Camera',
    createdAt: '2025-05-20T14:40:00.000Z',
    status: 'Prototype Testing',
    demandSignal: 92,
    requestsCount: 2210,
    uniqueUsers: 1680,
    satisfactionRate: 88,
    submissionId: 'IQOO-MC-8104',
    communityVotes: 1120,
    hasUserSupported: false,
    devStage: 'Prototype Queue',
    aiAnalysis: {
      problemSummary: 'Destructive optical flares and overexposed laser strobes ruining night concerts and festival photography.',
      opportunity: 'Huge viral appeal on Instagram Reels, TikTok, and YouTube Shorts for live music fans.',
      feasibility: 'Medium-High using dual-exposure HDR raw stream with neural dehazing.',
      differentiation: 'Preserves stage atmosphere while suppressing blinding light source bleed-over onto subjects.',
      iqooIntegration: 'One-tap Stage Master preset inside iQOO Camera Pro mode.',
      technicalSpecs: {
        chipsetRequirement: 'Custom V3 / V2 Imaging Chip',
        batteryImpact: 'Moderate (+8% during active 4K recording)',
        latencyEstimate: 'Real-time preview at 60fps 4K HDR',
        osLayer: 'Camera HAL3 & Vivo Imaging Engine'
      }
    },
    prototype: {
      type: 'camera',
      title: 'Stage Master Flare Suppressor',
      badge: 'Live Viewfinder Sim',
      metrics: [
        { label: 'Glare Reduction', value: '84', unit: '%' },
        { label: 'Highlight Recovery', value: '+3.4', unit: 'EV' },
        { label: 'FPS Preview', value: '60', unit: 'fps' }
      ],
      controls: [
        { id: 'anti_glare', label: 'AI Flare Neutralizer', type: 'toggle', defaultValue: true },
        { id: 'stage_clarity', label: 'Stage Face Clarity Lock', type: 'toggle', defaultValue: true },
        { id: 'exposure_damp', label: 'Strobe Dampening', type: 'slider', min: 1, max: 5, defaultValue: 4 }
      ],
      steps: [
        { step: 1, title: 'Specular Flare Detection', desc: 'Identify high-intensity non-Lambertian point light blooms.' },
        { step: 2, title: 'Multi-Exposure Stitch', desc: 'Blend under-exposed highlights with medium tone shadows.' },
        { step: 3, title: 'Neural Color Grading', desc: 'Re-saturate stage lights without blowing out the artist.' }
      ]
    }
  },
  {
    id: 'iqoo-idea-4',
    title: 'Intelligent Bypass Power Router for Heavy Loads',
    problem: 'Using phone while charging causes extreme battery thermal accumulation, leading to thermal throttling and long-term battery degradation.',
    solution: 'Allow user or AI to route charging current directly to the motherboard while putting the battery cell in rest mode during gaming or rendering.',
    targetAudience: ['Gamers', 'Creators', 'Professionals'],
    category: 'Productivity',
    createdAt: '2025-05-12T11:20:00.000Z',
    status: 'Submitted',
    demandSignal: 95,
    requestsCount: 3100,
    uniqueUsers: 2400,
    satisfactionRate: 96,
    submissionId: 'IQOO-MC-6290',
    submittedAt: '2025-05-15T08:00:00.000Z',
    communityVotes: 2190,
    hasUserSupported: true,
    devStage: 'Implementation Candidate',
    developerNotes: [
      'Hardware PMIC allows direct motherboard power path.',
      'Drop in surface temperature: -4.8°C measured during 2hr PUBG session.'
    ],
    aiAnalysis: {
      problemSummary: 'Thermal heat spikes caused by simultaneous charging and high CPU/GPU load throttling performance.',
      opportunity: 'Preserves peak clock speeds indefinitely and prolongs lithium battery lifespan by 2.3x.',
      feasibility: 'High feasibility assuming hardware power switch IC support in next motherboard revision.',
      differentiation: 'Smart auto-trigger based on game detection and ambient phone thermals, with zero user friction.',
      iqooIntegration: 'SuperCharge settings tab & Ultra Game Space power hub.',
      technicalSpecs: {
        chipsetRequirement: 'Dual-cell FlashCharge PMIC & Battery MCU',
        batteryImpact: 'Zero battery cycle degradation while active',
        latencyEstimate: 'Instant hardware switch (< 100μs)',
        osLayer: 'Kernel Power Supply Subsystem'
      }
    },
    prototype: {
      type: 'battery',
      title: 'Direct Motherboard Power Bypass',
      badge: 'Power Lab Simulator',
      metrics: [
        { label: 'Motherboard Temp', value: '34.2', unit: '°C' },
        { label: 'Battery Cell Draw', value: '0', unit: 'W' },
        { label: 'FPS Drop Chance', value: '0', unit: '%' }
      ],
      controls: [
        { id: 'bypass_active', label: 'Bypass Direct Power Mode', type: 'toggle', defaultValue: true },
        { id: 'thermal_guard', label: 'Adaptive Thermal Floor', type: 'toggle', defaultValue: true },
        { id: 'power_limit', label: 'Max Power Draw', type: 'slider', min: 30, max: 120, defaultValue: 65 }
      ],
      steps: [
        { step: 1, title: 'Load Threshold Tripped', desc: 'Game or heavy compute task exceeds 45% SoC utilization.' },
        { step: 2, title: 'Relay Switch', desc: 'PMIC diverts 120W input straight to SoC rail, idling the lithium pack.' },
        { step: 3, title: 'Cooling Equilibrium', desc: 'Zero heat dissipation from battery chemistry allows fans or passive vapor chamber to cool SoC.' }
      ]
    }
  },
  {
    id: 'iqoo-idea-5',
    title: 'Dual Monster Touch Haptic Triggers on Screen Edges',
    problem: 'Mobile gamers hate claw grip on glass screens and bulky external clamp-on controller triggers.',
    solution: 'Map ultrasonic pressure-sensitive zones on the phone frame into virtual shoulder triggers with custom linear motor haptic recoil.',
    targetAudience: ['Gamers'],
    category: 'Gaming',
    createdAt: '2025-05-21T18:00:00.000Z',
    status: 'Analyzed',
    demandSignal: 87,
    requestsCount: 1650,
    uniqueUsers: 1100,
    satisfactionRate: 85,
    submissionId: 'IQOO-MC-5510',
    communityVotes: 732,
    hasUserSupported: false,
    devStage: 'Incoming',
    aiAnalysis: {
      problemSummary: 'Awkward finger cramping from 4-finger claw grip when aiming and shooting simultaneously.',
      opportunity: 'Re-establishes iQOO as the definitive competitive mobile gaming hardware brand.',
      feasibility: 'High feasibility integrating dual ultrasonic force sensors along aluminum frame.',
      differentiation: 'Provides physical click sensation via dual X-axis linear vibration motors.',
      iqooIntegration: 'Monster Touch customization HUD in Game Space with deadzone and actuation calibration.',
      technicalSpecs: {
        chipsetRequirement: 'Dual Ultrasonic Sensor Driver & Dual X-axis Haptic IC',
        batteryImpact: '< 1% per hour of intensive gameplay',
        latencyEstimate: '< 2.5ms actuation response',
        osLayer: 'InputManager & Game SDK'
      }
    },
    prototype: {
      type: 'gaming',
      title: 'Monster Touch Virtual Trigger Calibrator',
      badge: 'Interactive Sensor Map',
      metrics: [
        { label: 'Actuation Force', value: '45', unit: 'gf' },
        { label: 'Haptic Click', value: '180', unit: 'Hz' },
        { label: 'Response Time', value: '2.1', unit: 'ms' }
      ],
      controls: [
        { id: 'left_trigger', label: 'Left Trigger (Aim)', type: 'toggle', defaultValue: true },
        { id: 'right_trigger', label: 'Right Trigger (Fire)', type: 'toggle', defaultValue: true },
        { id: 'sensitivity', label: 'Pressure Sensitivity', type: 'slider', min: 1, max: 10, defaultValue: 7 }
      ],
      steps: [
        { step: 1, title: 'Ultrasonic Strain Sense', desc: 'Frame sensors detect micro-deflections when index fingers press.' },
        { step: 2, title: 'Haptic Click Pulse', desc: 'Linear motor fires a 180Hz sine wave mimicking a mechanical mouse switch.' },
        { step: 3, title: 'Touch Event Injection', desc: 'OS maps the input to on-screen shoot coordinates without latency.' }
      ]
    }
  }
];
