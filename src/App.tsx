import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { PredictionForm } from './components/PredictionForm';
import { AboutSection } from './components/AboutSection';
import { FutureScopeSection } from './components/FutureScopeSection';
import { ProjectInfoSection } from './components/ProjectInfoSection';
import { Footer } from './components/Footer';

/**
 * ==============================================================================
 * B.Tech College Mini Project: Early Disease Risk Prediction System
 * ------------------------------------------------------------------------------
 * Main Application Component (App.tsx)
 * 
 * Sections:
 * 1. Home Page: Project title, introduction, Check Risk button, student project note
 * 2. Risk Prediction Form: Age, Gender, BMI, BP, Smoking, Alcohol, Activity, Family History, Blood Sugar
 * 3. About Project: Problem statement, Objective, Future Machine Learning workflow
 * 4. Future Scope: ML integration, Accuracy improvements, Recommendations, DB, Flask backend
 * 5. Project Info: Viva Q&A, Team and Guide details
 * ==============================================================================
 */

export default function App() {
  // Navigation active tab state: 'home' | 'predict' | 'about' | 'future' | 'team'
  const [activeTab, setActiveTab] = useState<string>('home');

  // Helper to jump to Risk Prediction Form
  const handleGoToPrediction = () => {
    setActiveTab('predict');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to jump to About Project section
  const handleGoToAbout = () => {
    setActiveTab('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800 flex flex-col font-sans">
      {/* 1. Header & Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. Main Content Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 md:py-8">
        
        {/* Academic Breadcrumb / Sub-header */}
        <div className="mb-6 flex flex-wrap items-center justify-between text-xs text-gray-500 border-b border-gray-200 pb-2">
          <div>
            <span>Active Section: </span>
            <span className="font-semibold text-blue-700 uppercase tracking-wide">
              {activeTab === 'home' && '1. Home Page'}
              {activeTab === 'predict' && '2. Risk Prediction Form'}
              {activeTab === 'about' && '3. About Project'}
              {activeTab === 'future' && '4. Future Scope'}
              {activeTab === 'team' && '5. Project Info & Viva'}
            </span>
          </div>
          <div className="text-gray-400 text-[11px]">
            Status: Frontend Demo (No ML/Backend Connected)
          </div>
        </div>

        {/* Dynamic Section Rendering */}
        {activeTab === 'home' && (
          <HomeSection
            onCheckRiskClick={handleGoToPrediction}
            onExploreAboutClick={handleGoToAbout}
          />
        )}

        {activeTab === 'predict' && <PredictionForm />}

        {activeTab === 'about' && <AboutSection />}

        {activeTab === 'future' && <FutureScopeSection />}

        {activeTab === 'team' && <ProjectInfoSection />}
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
