import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

// Simple navigation bar component for the student project
export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navTabs = [
    { id: 'home', label: 'Home' },
    { id: 'form', label: 'Risk Prediction Form' },
    { id: 'about', label: 'About Project' },
    { id: 'future', label: 'Future Scope' },
  ];

  return (
    <nav className="bg-[#2563eb] text-white border-b border-blue-700 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Project Header */}
        <div 
          onClick={() => setActiveTab('home')}
          className="cursor-pointer text-center sm:text-left"
        >
          <h1 className="text-lg font-bold tracking-tight">
            Early Disease Risk Prediction
          </h1>
          <p className="text-xs text-blue-100">
            B.Tech College Mini Project &bull; Lifestyle & Medical History
          </p>
        </div>

        {/* Simple Navigation Links */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              id={`nav-link-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded text-xs sm:text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-blue-700 font-semibold'
                  : 'text-white hover:bg-blue-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
