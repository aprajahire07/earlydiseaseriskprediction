import React from 'react';

interface HomeSectionProps {
  onCheckRiskClick: () => void;
  onAboutClick: () => void;
}

// 1. Home Page Component
export const HomeSection: React.FC<HomeSectionProps> = ({
  onCheckRiskClick,
  onAboutClick,
}) => {
  return (
    <div className="space-y-6">
      {/* Main Project Banner Box */}
      <div className="bg-white border border-gray-300 rounded p-6 sm:p-8 text-center">
        {/* Project Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Early Disease Risk Prediction using Lifestyle and Medical History
        </h2>

        {/* Short Introduction */}
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
          This project is designed to study disease risk using lifestyle and medical history information.
        </p>

        {/* Simple Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
          <button
            type="button"
            id="btn-check-risk"
            onClick={onCheckRiskClick}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium px-6 py-2.5 rounded text-sm sm:text-base border border-blue-700 cursor-pointer"
          >
            Check Risk
          </button>

          <button
            type="button"
            id="btn-read-about"
            onClick={onAboutClick}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-5 py-2.5 rounded text-sm sm:text-base border border-gray-300 cursor-pointer"
          >
            About Project
          </button>
        </div>

        {/* Required Student Educational Note */}
        <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 text-xs sm:text-sm p-3 rounded max-w-lg mx-auto">
          <strong>Note:</strong> This is a student project for educational purposes.
        </div>
      </div>

      {/* Simple Information Cards for College Demo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
        <div className="bg-white border border-gray-300 p-4 rounded">
          <h3 className="font-bold text-gray-900 text-sm mb-1.5 border-b border-gray-200 pb-1">
            Lifestyle Assessment
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Considers daily parameters such as BMI, smoking habits, alcohol consumption, and physical activity routine.
          </p>
        </div>

        <div className="bg-white border border-gray-300 p-4 rounded">
          <h3 className="font-bold text-gray-900 text-sm mb-1.5 border-b border-gray-200 pb-1">
            Medical History
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Takes into account resting blood pressure levels, blood sugar indicators, and family hereditary disease history.
          </p>
        </div>

        <div className="bg-white border border-gray-300 p-4 rounded">
          <h3 className="font-bold text-gray-900 text-sm mb-1.5 border-b border-gray-200 pb-1">
            Prototype Status
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Currently in Phase-1 frontend demonstration. Machine Learning prediction logic will be connected in Phase-2.
          </p>
        </div>
      </div>
    </div>
  );
};
