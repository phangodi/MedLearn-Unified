import React, { useState, useEffect } from 'react';
import { Layers, Zap, Network, Target, Mic, ClipboardCheck } from 'lucide-react';
import ErrorBoundary from './components/ErrorBoundary';
import VersionSelector from './components/VersionSelector';
import SlideNavigation from './components/SlideNavigation';
import HierarchicalFormat from './components/HierarchicalFormat';
import QuickCardsFormat from './components/QuickCardsFormat';
import RelationshipsFormat from './components/RelationshipsFormat';
import UltraMinimalFormat from './components/UltraMinimalFormat';
import ExamPresentationFormat from './components/ExamPresentationFormat';
import FinalCheckFormat from './components/FinalCheckFormat';
import { SLIDES } from './data/slideData';
import { ENABLED } from './flags';

const App = () => {
  const [showHomepage, setShowHomepage] = useState(true);
  const [currentVersion, setCurrentVersion] = useState('hierarchical');
  const [currentSlideNumber, setCurrentSlideNumber] = useState(73);
  
  const SLIDE_DATA = SLIDES[currentSlideNumber] || SLIDES[73];

  const versions = [
    { id: 'hierarchical', name: 'Hierarchical', icon: <Layers size={20} />, component: HierarchicalFormat },
    { id: 'quick', name: 'Quick Cards', icon: <Zap size={20} />, component: QuickCardsFormat },
    { id: 'relationship', name: 'Relationships', icon: <Network size={20} />, component: RelationshipsFormat },
    { id: 'presentation', name: 'Exam Presentation', icon: <Mic size={20} />, component: ExamPresentationFormat },
    { id: 'minimal', name: 'Ultra-Minimal', icon: <Target size={20} />, component: UltraMinimalFormat },
    { id: 'finalcheck', name: 'Final Check', icon: <ClipboardCheck size={20} />, component: FinalCheckFormat }
  ].filter(v => {
    const key = v.name.replace(/[^A-Za-z]/g, '');
    return ENABLED[key] !== false;
  });

  const CurrentComponent = versions.find(v => v.id === currentVersion)?.component;

  const handleSlideChange = (slideNum) => {
    if (SLIDES[slideNum]) {
      setCurrentSlideNumber(slideNum);
      setShowHomepage(false);
      console.log(`Navigated to slide ${slideNum}`);
    } else {
      console.warn(`Slide ${slideNum} not available`);
    }
  };

  const goToHomepage = () => {
    setShowHomepage(true);
  };

  // Scroll to top when navigating between pages or slides  
  useEffect(() => {
    // Multiple methods to ensure scroll works in all browsers
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentSlideNumber, showHomepage]);

  // Get available slide numbers dynamically
  const availableSlides = Object.keys(SLIDES).map(Number).sort((a, b) => a - b);
  
  // Homepage Component
  if (showHomepage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 py-20 relative">
            <div className="text-center">
              <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                Exam Saver Platform
              </div>
              <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6" >
                Lara's Histology
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 pb-4 overflow-visible">Study App</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed pb-2">
                Analyze your histology slides with AI-powered study formats tailored to your learning style
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => handleSlideChange(73)}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Start Learning
                </button>
                <button
                  onClick={() => document.getElementById('slides').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white text-gray-800 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Browse Slides
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Why Choose This Platform?</h2>
            <p className="text-lg text-gray-600">Multiple formats optimized for medical exam success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Cards */}
            {[
              { icon: '🎯', title: 'Exam Focused', desc: 'Content aligned with medical school essentials', color: 'from-blue-500 to-blue-600' },
              { icon: '⚡', title: 'Quick Cards', desc: 'Rapid review flashcards for efficient study', color: 'from-purple-500 to-purple-600' },
              { icon: '🧠', title: 'Deep Learning', desc: 'Hierarchical format for comprehensive understanding', color: 'from-pink-500 to-pink-600' },
              { icon: '🔗', title: 'Relationships', desc: 'Connect concepts with visual relationship maps', color: 'from-indigo-500 to-indigo-600' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed pb-1">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Slides Grid */}
        <div id="slides" className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Available Slides</h2>
            <p className="text-lg text-gray-600">{availableSlides.length} comprehensive histology slides ready to study</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableSlides.map(slideNum => {
              const slide = SLIDES[slideNum];
              return (
                <div
                  key={slideNum}
                  onClick={() => handleSlideChange(slideNum)}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 border-2 border-transparent hover:border-blue-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                      {slideNum}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 font-semibold">SLIDE {slideNum}</div>
                      <div className="text-xs text-gray-400">{slide.stain}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {slide.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {slide.bigPicture || slide.stainingInfo?.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>Study Now</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400">Built for Lara, by malfunctioning AI agents</p>
          </div>
        </div>
      </div>
    );
  }

  // Study View (existing slide viewer)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <SlideNavigation 
        currentSlide={currentSlideNumber} 
        onSlideChange={handleSlideChange} 
        availableSlides={availableSlides}
        onHomeClick={goToHomepage}
      />
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <button
            onClick={goToHomepage}
            className="text-blue-600 hover:text-blue-800 font-semibold mb-3 flex items-center gap-2 transition-colors"
          >
            ← Back to Home
          </button>
          <h1 className="text-4xl font-black text-gray-800 mb-2">Lara's Histology Study App</h1>
          <p className="text-gray-600 text-lg">
            <strong>Slide {SLIDE_DATA.slideNumber}:</strong> {SLIDE_DATA.name}
          </p>
          <p className="text-sm text-gray-500 mt-2">{versions.length} study formats available</p>
        </div>
        <VersionSelector currentVersion={currentVersion} onVersionChange={setCurrentVersion} versions={versions} />
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {CurrentComponent ? (
            <ErrorBoundary version={currentVersion}>
              <CurrentComponent data={SLIDE_DATA} />
            </ErrorBoundary>
          ) : (
            <div className="text-red-500">No component for {currentVersion}</div>
          )}
        </div>
        <div className="mt-8 bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-200">
            <div className="bg-blue-500 p-3 rounded-xl shadow-md">
              <span className="text-3xl">📚</span>
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-900">STUDY STRATEGY</h3>
              <p className="text-sm text-gray-600">Optimize your learning with this proven approach</p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Learning Phase */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🎯</span>
                <h4 className="font-bold text-lg text-blue-900">Learning Phase</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-blue-600 font-bold text-lg">1.</span>
                  <div>
                    <div className="font-semibold text-gray-900">Start with Hierarchical</div>
                    <div className="text-xs text-gray-600">Build comprehensive understanding</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-blue-600 font-bold text-lg">2.</span>
                  <div>
                    <div className="font-semibold text-gray-900">Understand with Relationships</div>
                    <div className="text-xs text-gray-600">Connect concepts together</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-blue-600 font-bold text-lg">3.</span>
                  <div>
                    <div className="font-semibold text-gray-900">Memorize with Quick Cards</div>
                    <div className="text-xs text-gray-600">Rapid review and retention</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Management */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⏱️</span>
                <h4 className="font-bold text-lg text-purple-900">Time Management</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-purple-600 font-bold">📚</span>
                  <div>
                    <div className="font-semibold text-gray-900">Deep study: Hierarchical</div>
                    <div className="text-xs text-gray-600">30 minutes - comprehensive learning</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-purple-600 font-bold">🔗</span>
                  <div>
                    <div className="font-semibold text-gray-900">Connections: Relationships</div>
                    <div className="text-xs text-gray-600">20 minutes - understand links</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-purple-600 font-bold">⚡</span>
                  <div>
                    <div className="font-semibold text-gray-900">Quick review: Quick Cards</div>
                    <div className="text-xs text-gray-600">10 minutes - rapid memorization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default App;
