import React from 'react';
import { Activity, Home, FileText, Info, Compass, Users } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'predict', label: 'Check Risk (Form)', icon: FileText },
    { id: 'about', label: 'About Project', icon: Info },
    { id: 'future', label: 'Future Scope', icon: Compass },
    { id: 'team', label: 'Project Info & Viva', icon: Users },
  ];

  return (
    <header className="bg-[#1e40af] text-white border-b-4 border-[#1d4ed8] sticky top-0 z-50 shadow-sm">
      {/* College Project Top Header Banner */}
      <div className="bg-[#172554] text-xs py-1.5 px-4 text-center text-blue-200 border-b border-blue-900 flex justify-between items-center flex-wrap gap-2">
        <span>🎓 B.Tech College Mini Project &mdash; Semester III / IV Demo</span>
        <span className="bg-blue-800 text-blue-100 px-2 py-0.5 rounded font-mono text-[11px]">
          Phase-1: Frontend Prototype
        </span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-3">
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          <div className="bg-white text-[#1e40af] p-1.5 rounded-md flex items-center justify-center">
            <Activity className="w-6 h-6 text-[#1e40af]" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight tracking-tight text-white">
              HealthRisk Predictor
            </h1>
            <p className="text-xs text-blue-200">
              Early Disease Risk Prediction System
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-tab-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white text-[#1e40af] shadow-xs'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
