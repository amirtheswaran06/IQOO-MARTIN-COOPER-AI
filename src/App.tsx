import React, { useState, useEffect } from 'react';
import { AppScreen, Idea, UserFeedback } from './types';
import { INITIAL_IDEAS } from './data/mockIdeas';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { SubmitIdeaScreen } from './components/SubmitIdeaScreen';
import { AIAnalysisScreen } from './components/AIAnalysisScreen';
import { PrototypeScreen } from './components/PrototypeScreen';
import { FeedbackScreen } from './components/FeedbackScreen';
import { SubmissionSummaryScreen } from './components/SubmissionSummaryScreen';
import { SubmissionSuccessScreen } from './components/SubmissionSuccessScreen';
import { MyIdeasScreen } from './components/MyIdeasScreen';
import { ExploreScreen } from './components/ExploreScreen';
import { InnovationDashboardScreen } from './components/InnovationDashboardScreen';
import { DeveloperWorkspaceScreen } from './components/DeveloperWorkspaceScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { IdeaDetailScreen } from './components/IdeaDetailScreen';

const STORAGE_KEY = 'martin_cooper_ai_ideas_v1';

export default function App() {
  const [ideas, setIdeas] = useState<Idea[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load ideas from localStorage', e);
    }
    return INITIAL_IDEAS;
  });

  const [activeScreen, setActiveScreen] = useState<AppScreen>('home');
  const [activeIdea, setActiveIdea] = useState<Idea>(ideas[0]);
  const [navigationHistory, setNavigationHistory] = useState<AppScreen[]>(['home']);

  // Sync ideas to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ideas));
    } catch (e) {
      console.error('Failed to save ideas to localStorage', e);
    }
  }, [ideas]);

  const navigateTo = (screen: AppScreen, pushHistory = true) => {
    if (pushHistory) {
      setNavigationHistory(prev => [...prev, screen]);
    }
    setActiveScreen(screen);
    // Scroll mobile view to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (navigationHistory.length > 1) {
      const newHist = [...navigationHistory];
      newHist.pop(); // Remove current
      const prevScreen = newHist[newHist.length - 1];
      setNavigationHistory(newHist);
      setActiveScreen(prevScreen);
    } else {
      setActiveScreen('home');
    }
  };

  // Called when a user creates an idea in SubmitIdeaScreen
  const handleIdeaCreated = (newIdea: Idea) => {
    setIdeas(prev => [newIdea, ...prev]);
    setActiveIdea(newIdea);
    navigateTo('ai_analysis');
  };

  // Called after AI analysis
  const handleProceedToPrototype = () => {
    // Update idea status if needed
    setIdeas(prev =>
      prev.map(i => (i.id === activeIdea.id ? { ...i, status: 'Prototype Testing' } : i))
    );
    navigateTo('prototype');
  };

  // Called after testing prototype
  const handleProceedToFeedback = () => {
    navigateTo('feedback');
  };

  // Called after saving feedback
  const handleSaveFeedback = (feedback: UserFeedback) => {
    const updatedIdea: Idea = {
      ...activeIdea,
      feedback,
      status: 'Feedback Captured',
      demandSignal: Math.min(99, activeIdea.demandSignal + 6),
    };
    setActiveIdea(updatedIdea);
    setIdeas(prev => prev.map(i => (i.id === updatedIdea.id ? updatedIdea : i)));
    navigateTo('submission_summary');
  };

  // Called after confirming submission to iQOO
  const handleSubmitToIqoo = () => {
    const updatedIdea: Idea = {
      ...activeIdea,
      status: 'Submitted',
      demandSignal: Math.min(99, activeIdea.demandSignal + 4),
    };
    setActiveIdea(updatedIdea);
    setIdeas(prev => prev.map(i => (i.id === updatedIdea.id ? updatedIdea : i)));
    navigateTo('submission_success');
  };

  // Supporting / upvoting an idea in Explore
  const handleToggleSupport = (ideaId: string) => {
    setIdeas(prev =>
      prev.map(idea => {
        if (idea.id === ideaId) {
          const currentlySupported = !!idea.hasUserSupported;
          return {
            ...idea,
            hasUserSupported: !currentlySupported,
            communityVotes: currentlySupported ? idea.communityVotes - 1 : idea.communityVotes + 1,
            demandSignal: currentlySupported ? Math.max(60, idea.demandSignal - 2) : Math.min(99, idea.demandSignal + 3)
          };
        }
        return idea;
      })
    );
  };

  // Adding developer notes
  const handleAddDevNote = (ideaId: string, note: string) => {
    setIdeas(prev =>
      prev.map(idea => {
        if (idea.id === ideaId) {
          const notes = idea.developerNotes ? [...idea.developerNotes, note] : [note];
          return { ...idea, developerNotes: notes };
        }
        return idea;
      })
    );
  };

  // Reset to initial mock ideas
  const handleResetDemoData = () => {
    setIdeas(INITIAL_IDEAS);
    setActiveIdea(INITIAL_IDEAS[0]);
    localStorage.removeItem(STORAGE_KEY);
    navigateTo('home');
  };

  const handleSelectIdea = (idea: Idea) => {
    setActiveIdea(idea);
    navigateTo('idea_detail');
  };

  const handleTestPrototypeForIdea = (idea: Idea) => {
    setActiveIdea(idea);
    navigateTo('prototype');
  };

  // Determine if header should display a back button
  const canGoBack = navigationHistory.length > 1 && activeScreen !== 'home';

  // Bottom navigation visibility (hide during immersive full-flow screens if preferred, or keep present)
  // Per mobile best practice, bottom navigation remains visible on top-level tabs:
  const isBottomNavVisible = [
    'home',
    'explore',
    'submit',
    'my_ideas',
    'innovation_dashboard',
    'profile',
    'developer_workspace'
  ].includes(activeScreen);

  // Statistics for profile
  const userIdeasCount = ideas.filter(i => i.status === 'Submitted' || i.status === 'Under Review' || i.status === 'Feedback Captured').length;
  const prototypesTestedCount = ideas.filter(i => i.prototype).length;
  const feedbackGivenCount = ideas.filter(i => i.feedback).length;

  return (
    <div className="min-h-screen bg-[#050609] text-zinc-100 flex justify-center selection:bg-orange-500 selection:text-white">
      {/* Mobile Shell Frame */}
      <div className="w-full max-w-[430px] min-h-screen flex flex-col bg-[#07080D] shadow-2xl relative border-x border-white/[0.04]">
        
        {/* Persistent App Header */}
        <Header
          activeScreen={activeScreen}
          onNavigate={(screen) => navigateTo(screen)}
          onBack={handleBack}
          showBack={canGoBack}
        />

        {/* Dynamic Screen Content */}
        <main className="flex-1 overflow-x-hidden">
          {activeScreen === 'home' && (
            <HomeScreen
              featuredIdea={ideas[0]}
              onStartSubmit={() => navigateTo('submit')}
              onViewMyIdeas={() => navigateTo('my_ideas')}
              onOpenExplore={() => navigateTo('explore')}
              onOpenDeveloper={() => navigateTo('developer_workspace')}
              onOpenIdea={handleSelectIdea}
            />
          )}

          {activeScreen === 'submit' && (
            <SubmitIdeaScreen
              onIdeaCreated={handleIdeaCreated}
              onCancel={() => navigateTo('home')}
            />
          )}

          {activeScreen === 'ai_analysis' && (
            <AIAnalysisScreen
              idea={activeIdea}
              onProceedToPrototype={handleProceedToPrototype}
            />
          )}

          {activeScreen === 'prototype' && (
            <PrototypeScreen
              idea={activeIdea}
              onProceedToFeedback={handleProceedToFeedback}
            />
          )}

          {activeScreen === 'feedback' && (
            <FeedbackScreen
              ideaTitle={activeIdea.title}
              onSaveFeedback={handleSaveFeedback}
            />
          )}

          {activeScreen === 'submission_summary' && (
            <SubmissionSummaryScreen
              idea={activeIdea}
              onSubmitToIqoo={handleSubmitToIqoo}
            />
          )}

          {activeScreen === 'submission_success' && (
            <SubmissionSuccessScreen
              idea={activeIdea}
              onViewMyIdeas={() => navigateTo('my_ideas')}
              onExploreMore={() => navigateTo('explore')}
            />
          )}

          {activeScreen === 'my_ideas' && (
            <MyIdeasScreen
              ideas={ideas}
              onSelectIdea={handleSelectIdea}
              onStartSubmit={() => navigateTo('submit')}
              onTestPrototype={handleTestPrototypeForIdea}
            />
          )}

          {activeScreen === 'explore' && (
            <ExploreScreen
              ideas={ideas}
              onSelectIdea={handleSelectIdea}
              onTestPrototype={handleTestPrototypeForIdea}
              onToggleSupport={handleToggleSupport}
            />
          )}

          {activeScreen === 'innovation_dashboard' && (
            <InnovationDashboardScreen
              ideas={ideas}
              onSelectIdea={handleSelectIdea}
              onOpenDeveloper={() => navigateTo('developer_workspace')}
            />
          )}

          {activeScreen === 'developer_workspace' && (
            <DeveloperWorkspaceScreen
              ideas={ideas}
              onBack={() => navigateTo('home')}
              onSelectIdea={handleSelectIdea}
              onTestPrototype={handleTestPrototypeForIdea}
              onAddDevNote={handleAddDevNote}
            />
          )}

          {activeScreen === 'profile' && (
            <ProfileScreen
              ideasCount={userIdeasCount}
              prototypesCount={prototypesTestedCount}
              feedbackCount={feedbackGivenCount}
              onOpenDeveloper={() => navigateTo('developer_workspace')}
              onResetDemoData={handleResetDemoData}
              onShowHelp={() => navigateTo('explore')}
            />
          )}

          {activeScreen === 'idea_detail' && (
            <IdeaDetailScreen
              idea={activeIdea}
              onBack={handleBack}
              onTestPrototype={handleTestPrototypeForIdea}
              onContinueToFeedback={(idea) => {
                setActiveIdea(idea);
                navigateTo('feedback');
              }}
            />
          )}
        </main>

        {/* Persistent Bottom Navigation */}
        {isBottomNavVisible && (
          <BottomNav
            activeScreen={activeScreen}
            onNavigate={(screen) => navigateTo(screen)}
          />
        )}
      </div>
    </div>
  );
}
