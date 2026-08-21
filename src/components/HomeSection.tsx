import React from 'react';
import { ArrowRight, FileText, CheckCircle, ShieldAlert, HeartPulse, Stethoscope, Dna, Activity } from 'lucide-react';

interface HomeSectionProps {
  onCheckRiskClick: () => void;
  onExploreAboutClick: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onCheckRiskClick,
  onExploreAboutClick,
}) => {
  return (
    <div className="space-y-8">
      {/* Hero Welcome Card */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 md:p-8 shadow-xs text-center">
        {/* Project Tag Badge */}
        <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-200">
          Mini Project Title
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-3xl mx-auto leading-snug">
          Early Disease Risk Prediction using Lifestyle and Medical History
        </h1>

        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
          This project is designed to study disease risk using lifestyle and medical history information.
        </p>

        {/* Action Button */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          <button
            id="btn-check-risk-hero"
            onClick={onCheckRiskClick}
            className="inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-xs cursor-pointer text-base"
          >
            <FileText className="w-5 h-5" />
            <span>Check Risk</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="btn-learn-more-hero"
            onClick={onExploreAboutClick}
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-5 py-3 rounded-md border border-gray-300 transition-colors cursor-pointer text-base"
          >
            <span>Read About Project</span>
          </button>
        </div>

        {/* Small Required Educational Note */}
        <div className="bg-amber-50 border border-amber-300 text-amber-900 text-sm px-4 py-2.5 rounded max-w-xl mx-auto flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0 text-amber-700" />
          <span className="font-medium">
            Note: This is a student project for educational purposes.
          </span>
        </div>
      </div>

      {/* Project Overview / At a Glance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* Card 1 */}
        <div className="bg-white border border-gray-300 rounded-md p-5 shadow-xs">
          <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded flex items-center justify-center mb-3 border border-blue-100">
            <HeartPulse className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-gray-900 text-base mb-2">1. Lifestyle Factors</h2>
          <p className="text-sm text-gray-600 leading-normal">
            Evaluates daily habits such as physical activity levels, smoking, alcohol intake, and BMI.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-300 rounded-md p-5 shadow-xs">
          <div className="w-10 h-10 bg-green-50 text-green-700 rounded flex items-center justify-center mb-3 border border-green-100">
            <Dna className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-gray-900 text-base mb-2">2. Medical History</h2>
          <p className="text-sm text-gray-600 leading-normal">
            Considers blood pressure, blood glucose indicators, and hereditary family medical records.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-300 rounded-md p-5 shadow-xs">
          <div className="w-10 h-10 bg-purple-50 text-purple-700 rounded flex items-center justify-center mb-3 border border-purple-100">
            <Activity className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-gray-900 text-base mb-2">3. Early Assessment</h2>
          <p className="text-sm text-gray-600 leading-normal">
            Aims to provide early warning indicators to help individuals adopt preventive health measures.
          </p>
        </div>
      </div>

      {/* Mini Project Quick Guide for Presentation */}
      <div className="bg-slate-50 border border-slate-300 rounded-lg p-5">
        <h2 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Stethoscope className="w-4 h-4 text-blue-600" />
          <span>Project Flow & Demo Instructions</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div className="flex items-start gap-2 bg-white p-3 rounded border border-gray-200">
            <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
            <div>
              <p className="font-semibold text-gray-900">Step 1: Open Form</p>
              <p className="text-xs text-gray-600 mt-0.5">Click "Check Risk" or choose the tab from the top menu.</p>
            </div>
          </div>
          <div className="flex items-start gap-2 bg-white p-3 rounded border border-gray-200">
            <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
            <div>
              <p className="font-semibold text-gray-900">Step 2: Enter Details</p>
              <p className="text-xs text-gray-600 mt-0.5">Fill in age, BMI, BP, smoking, and medical history inputs.</p>
            </div>
          </div>
          <div className="flex items-start gap-2 bg-white p-3 rounded border border-gray-200">
            <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
            <div>
              <p className="font-semibold text-gray-900">Step 3: Click Predict</p>
              <p className="text-xs text-gray-600 mt-0.5">View the student prototype notification and entered parameter summary.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
