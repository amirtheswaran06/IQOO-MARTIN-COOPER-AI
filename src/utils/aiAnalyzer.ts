import { Category, TargetAudience, AIAnalysis, PrototypeConfig } from '../types';

export function generateAIAnalysis(
  title: string,
  problem: string,
  solution: string,
  category: Category,
  targetAudience: TargetAudience[]
): { aiAnalysis: AIAnalysis; prototype: PrototypeConfig } {
  const pLower = (problem + ' ' + solution + ' ' + title).toLowerCase();

  // Determine prototype archetype
  let protoType: 'gaming' | 'camera' | 'audio' | 'battery' | 'security' | 'generic' = 'generic';
  if (category === 'Gaming' || pLower.includes('game') || pLower.includes('fps') || pLower.includes('trigger')) {
    protoType = 'gaming';
  } else if (category === 'Camera' || pLower.includes('photo') || pLower.includes('video') || pLower.includes('lens') || pLower.includes('flare') || pLower.includes('zoom')) {
    protoType = 'camera';
  } else if (category === 'Connectivity' || pLower.includes('call') || pLower.includes('whisper') || pLower.includes('mic') || pLower.includes('audio') || pLower.includes('sound')) {
    protoType = 'audio';
  } else if (category === 'Productivity' || pLower.includes('battery') || pLower.includes('charge') || pLower.includes('heat') || pLower.includes('thermal') || pLower.includes('power')) {
    protoType = 'battery';
  } else if (category === 'Security' || pLower.includes('privacy') || pLower.includes('lock') || pLower.includes('biometric')) {
    protoType = 'security';
  }

  // Generate realistic smartphone AI analysis
  const aiAnalysis: AIAnalysis = {
    problemSummary: problem.length > 30 
      ? `User highlights friction regarding: "${problem.slice(0, 110)}..." Affects daily workflow and user satisfaction.`
      : `Critical smartphone pain point: ${problem}.`,
    opportunity: `Addresses unmet needs for ${targetAudience.join(', ')}. Transforming this friction into an effortless native capability gives iQOO a distinct market edge over standard stock Android devices.`,
    feasibility: `High feasibility using modern NPU accelerators and specialized hardware offloading. Can execute on-device without remote cloud dependencies for instant privacy and zero network latency.`,
    differentiation: `Unlike generic third-party software utilities that suffer from background memory eviction, this integrates directly with iQOO kernel governors and display/audio pipelines.`,
    iqooIntegration: `Directly accessible via iQOO OriginOS / FuntouchOS sidebar, Monster Mode toggle, and Game Space control hub.`,
    technicalSpecs: {
      chipsetRequirement: protoType === 'gaming' ? 'iQOO SuperComputing Chip Q2 + Snapdragon 8 Elite' :
                          protoType === 'camera' ? 'Custom V3 ISP + Dual Exposure RAW stream' :
                          protoType === 'audio' ? 'Hexagon DSP Low-Power Audio Core' :
                          protoType === 'battery' ? 'Dual-Cell FlashCharge PMIC MCU' :
                          'On-device NPU (16+ TOPS quantized)',
      batteryImpact: protoType === 'battery' ? 'Zero degradation; improves thermal efficiency' : 'Low (< 3.5% additional draw under peak load)',
      latencyEstimate: protoType === 'gaming' ? '< 3.5ms hardware sync' : protoType === 'audio' ? '14ms neural vocoder' : '< 25ms execution',
      osLayer: 'Hardware Composer & OriginOS Kernel HAL'
    }
  };

  // Generate interactive prototype configuration
  let prototype: PrototypeConfig;

  if (protoType === 'gaming') {
    prototype = {
      type: 'gaming',
      title: `${title.split(' ')[0] || 'Monster'} Turbo Engine`,
      badge: 'Interactive Lab Prototype',
      metrics: [
        { label: 'Display Refresh', value: '144', unit: 'Hz' },
        { label: 'Touch Sampling', value: '2000', unit: 'Hz' },
        { label: 'Stability Index', value: '99.8', unit: '%' }
      ],
      controls: [
        { id: 'turbo_active', label: 'iQOO Monster Mode Boost', type: 'toggle', defaultValue: true },
        { id: 'frame_interpolation', label: 'Super-Resolution Synthesis', type: 'toggle', defaultValue: true },
        { id: 'perf_slider', label: 'Performance Governor', type: 'slider', min: 1, max: 5, defaultValue: 4 }
      ],
      steps: [
        { step: 1, title: 'Process Priority Lock', desc: 'Isolate game threads on Cortex-X prime cores.' },
        { step: 2, title: 'Hardware Intercept', desc: 'Route frames through Q2 co-processor before display scanout.' },
        { step: 3, title: 'Continuous Equilibrium', desc: 'Dynamically balance thermals and peak touch response.' }
      ]
    };
  } else if (protoType === 'camera') {
    prototype = {
      type: 'camera',
      title: `${title.split(' ')[0] || 'Pro'} Imaging Co-Engine`,
      badge: 'Viewfinder Prototype',
      metrics: [
        { label: 'Spectral Suppression', value: '88', unit: '%' },
        { label: 'Dynamic Range', value: '14.2', unit: 'stops' },
        { label: 'ISP Pipeline', value: '4K 60', unit: 'fps' }
      ],
      controls: [
        { id: 'ai_filter', label: 'Smart Neural Reconstruction', type: 'toggle', defaultValue: true },
        { id: 'hdr_assist', label: 'Ultra HDR Exposure Clamp', type: 'toggle', defaultValue: true },
        { id: 'denoise_level', label: 'Detail Sharpness', type: 'slider', min: 1, max: 10, defaultValue: 7 }
      ],
      steps: [
        { step: 1, title: 'Raw Sensor Stream', desc: 'Capture multi-exposure brackets directly from 50MP Sony sensor.' },
        { step: 2, title: 'Neural Scene Segmentation', desc: 'Segment problematic light or object regions instantly.' },
        { step: 3, title: 'Zero-Shutter Reconstruction', desc: 'Render artifact-free final frame into gallery.' }
      ]
    };
  } else if (protoType === 'audio') {
    prototype = {
      type: 'audio',
      title: `${title.split(' ')[0] || 'Neural'} Acoustic Lab`,
      badge: 'Audio Simulation',
      metrics: [
        { label: 'Vocal Isolation', value: '96', unit: '%' },
        { label: 'Noise Rejection', value: '-35', unit: 'dB' },
        { label: 'DSP Latency', value: '14', unit: 'ms' }
      ],
      controls: [
        { id: 'neural_mic', label: 'Acoustic AI Beamforming', type: 'toggle', defaultValue: true },
        { id: 'echo_cancel', label: 'Ambient Damping', type: 'toggle', defaultValue: true },
        { id: 'mic_boost', label: 'Vocal Gain', type: 'slider', min: 1, max: 10, defaultValue: 8 }
      ],
      steps: [
        { step: 1, title: 'Spatial Mic Array', desc: 'Sample phase difference between triple microphones.' },
        { step: 2, title: 'Low-Power DSP Math', desc: 'Compute on-device FFT filter matrix.' },
        { step: 3, title: 'Clear Voice Output', desc: 'Transmit ultra-clean audio to listener.' }
      ]
    };
  } else if (protoType === 'battery') {
    prototype = {
      type: 'battery',
      title: `${title.split(' ')[0] || 'Intelligent'} Thermal & Power Hub`,
      badge: 'Power Lab Sim',
      metrics: [
        { label: 'Chassis Temp', value: '33.8', unit: '°C' },
        { label: 'Bypass Efficacy', value: '100', unit: '%' },
        { label: 'Efficiency', value: '98.5', unit: '%' }
      ],
      controls: [
        { id: 'direct_power', label: 'Direct Motherboard Power', type: 'toggle', defaultValue: true },
        { id: 'cool_boost', label: 'Vapor Chamber Assist', type: 'toggle', defaultValue: true },
        { id: 'wattage_clamp', label: 'Max Peak Input', type: 'slider', min: 20, max: 120, defaultValue: 80 }
      ],
      steps: [
        { step: 1, title: 'Thermal Telemetry', desc: 'Read internal thermistors on battery and SoC rails.' },
        { step: 2, title: 'Current Redirection', desc: 'Bypass battery anode to prevent exothermic build-up.' },
        { step: 3, title: 'Sustained Clocks', desc: 'Run maximum sustained frequencies without throttling.' }
      ]
    };
  } else {
    prototype = {
      type: 'generic',
      title: `${title.split(' ')[0] || 'Smart'} System Assistant`,
      badge: 'iQOO Lab Demo',
      metrics: [
        { label: 'Response Time', value: '28', unit: 'ms' },
        { label: 'Confidence Score', value: '98.2', unit: '%' },
        { label: 'Memory Footprint', value: '42', unit: 'MB' }
      ],
      controls: [
        { id: 'system_hook', label: 'Background Service Hook', type: 'toggle', defaultValue: true },
        { id: 'smart_predict', label: 'Proactive AI Predictions', type: 'toggle', defaultValue: true },
        { id: 'aggression', label: 'Optimization Level', type: 'slider', min: 1, max: 5, defaultValue: 4 }
      ],
      steps: [
        { step: 1, title: 'Context Trigger', desc: 'Sense user intention from touch patterns and active foreground app.' },
        { step: 2, title: 'Lightweight AI Inferencing', desc: 'Evaluate quantized neural model on local NPU.' },
        { step: 3, title: 'Seamless Execution', desc: 'Apply seamless system adjustments with zero latency.' }
      ]
    };
  }

  return { aiAnalysis, prototype };
}
