import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 border-t border-gray-700 py-6 px-4 mt-12 text-center text-xs">
      <div className="max-w-6xl mx-auto space-y-2">
        <p className="font-semibold text-gray-200">
          Early Disease Risk Prediction using Lifestyle and Medical History
        </p>
        <p className="text-gray-400">
          B.Tech College Mini Project &bull; Department of Computer Science and Engineering
        </p>
        <div className="pt-2 text-gray-400 border-t border-gray-700 max-w-xl mx-auto text-[11px] leading-relaxed">
          Disclaimer: This web application is a student mini project created strictly for academic and educational evaluation. It does not provide certified medical diagnoses or replace licensed clinical consultation.
        </div>
      </div>
    </footer>
  );
};
