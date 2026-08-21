import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { PredictionForm } from './components/PredictionForm';
import { AboutSection } from './components/AboutSection';
import { FutureScopeSection } from './components/FutureScopeSection';
import { Footer } from './components/Footer';

/**
 * ==============================================================================
 * College Mini Project: Early Disease Risk Prediction using Lifestyle and Medical History
 * Frontend Demo (Phase-1)
 * ==============================================================================
 */

export default function App() {
  // Navigation active tab: 'home' | 'form' | 'about' | 'future'
  const [activeTab, setActiveTab] = useState<string>('home');

  // Helper function to switch to Prediction Form
  const handleCheckRisk = () => {
    setActiveTab('form');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper function to switch to About section
  const handleReadAbout = () => {
    setActiveTab('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-gray-800 flex flex-col font-sans">
      {/* 1. Simple Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. Main Page Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6">
        
        {/* Section Indicator */}
        <div className="mb-4 text-xs text-gray-500 border-b border-gray-300 pb-1.5 flex justify-between items-center">
          <span>
            Current Page:{' '}
            <strong className="text-blue-700">
              {activeTab === 'home' && '1. Home Page'}
              {activeTab === 'form' && '2. Risk Prediction Form'}
              {activeTab === 'about' && '3. About Project'}
              {activeTab === 'future' && '4. Future Scope'}
            </strong>
          </span>
          <span className="text-[11px] text-gray-500">
            Frontend Prototype Version
          </span>
        </div>

        {/* Dynamic Section Display */}
        {activeTab === 'home' && (
          <HomeSection
            onCheckRiskClick={handleCheckRisk}
            onAboutClick={handleReadAbout}
          />
        )}

        {activeTab === 'form' && <PredictionForm />}

        {activeTab === 'about' && <AboutSection />}

        {activeTab === 'future' && <FutureScopeSection />}
      </main>

      {/* 3. Simple Footer */}
      <Footer />
    </div>
  );
}
