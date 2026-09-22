export type Category = 
  | 'AI' 
  | 'Camera' 
  | 'Gaming' 
  | 'Security' 
  | 'Productivity' 
  | 'Accessibility' 
  | 'Connectivity' 
  | 'Other';

export type IdeaStatus = 
  | 'Draft' 
  | 'Analyzed' 
  | 'Prototype Testing' 
  | 'Feedback Captured' 
  | 'Submitted' 
  | 'Under Review';

export type TargetAudience = 
  | 'Students' 
  | 'Gamers' 
  | 'Creators' 
  | 'Professionals' 
  | 'Travelers' 
  | 'Everyone';

export interface AIAnalysis {
  problemSummary: string;
  opportunity: string;
  feasibility: string;
  differentiation: string;
  iqooIntegration: string;
  technicalSpecs: {
    chipsetRequirement: string;
    batteryImpact: string;
    latencyEstimate: string;
    osLayer: string;
  };
}

export interface PrototypeStep {
  step: number;
  title: string;
  desc: string;
}

export interface PrototypeConfig {
  type: 'gaming' | 'camera' | 'audio' | 'battery' | 'security' | 'generic';
  title: string;
  badge: string;
  metrics: { label: string; value: string; unit?: string }[];
  controls: {
    id: string;
    label: string;
    type: 'toggle' | 'slider' | 'button';
    defaultValue?: any;
    min?: number;
    max?: number;
  }[];
  steps: PrototypeStep[];
}

export interface UserFeedback {
  rating: number; // 1-5
  isUseful: boolean | null;
  suggestions: string;
  wantPermanently: 'Definitely' | 'Maybe' | 'No' | null;
  createdAt: string;
}

export interface Idea {
  id: string;
  title: string;
  problem: string;
  solution: string;
  targetAudience: TargetAudience[];
  category: Category;
  createdAt: string;
  status: IdeaStatus;
  demandSignal: number; // 0-100%
  requestsCount: number;
  uniqueUsers: number;
  satisfactionRate: number; // 0-100%
  aiAnalysis?: AIAnalysis;
  prototype?: PrototypeConfig;
  feedback?: UserFeedback;
  submissionId?: string;
  submittedAt?: string;
  communityVotes: number;
  hasUserSupported?: boolean;
  developerNotes?: string[];
  devStage?: 'Incoming' | 'Validated' | 'Prototype Queue' | 'Implementation Candidate';
}

export type NavTab = 'home' | 'my-ideas' | 'explore' | 'innovation' | 'profile';

export type AppScreen = 
  | 'home' 
  | 'submit' 
  | 'ai_analysis' 
  | 'ai-analysis'
  | 'prototype' 
  | 'feedback' 
  | 'submission_summary'
  | 'summary'
  | 'submission_success'
  | 'success'
  | 'my_ideas' 
  | 'my-ideas'
  | 'explore' 
  | 'innovation_dashboard' 
  | 'innovation'
  | 'developer_workspace' 
  | 'developer'
  | 'profile' 
  | 'idea_detail'
  | 'idea-detail';
