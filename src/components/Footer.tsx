import React from 'react';

// Simple Footer Component
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 px-4 mt-8 text-center text-xs">
      <div className="max-w-5xl mx-auto space-y-1">
        <p className="font-semibold text-gray-200">
          Early Disease Risk Prediction using Lifestyle and Medical History
        </p>
        <p className="text-gray-400 text-[11px]">
          B.Tech College Mini Project &bull; Academic Year Demo
        </p>
        <p className="text-gray-500 text-[10px] pt-1">
          Disclaimer: This website is a student project created solely for educational demonstration purposes.
        </p>
      </div>
    </footer>
  );
};
