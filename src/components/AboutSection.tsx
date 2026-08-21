import React from 'react';
import { Target, HelpCircle, Workflow, Cpu, Database, CheckSquare, ShieldCheck, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Title Header Card */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          About The Project
        </h2>
        <p className="text-sm text-gray-600">
          Academic Mini Project &mdash; Early Disease Risk Prediction using Lifestyle and Medical History.
        </p>
      </div>

      {/* Grid: Problem Statement & Project Objective */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 1. Problem Statement Card */}
        <div className="bg-white border border-gray-300 rounded-lg p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
              <div className="p-1.5 bg-red-50 text-red-700 rounded">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">1. Problem</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Chronic non-communicable diseases (such as Type-2 Diabetes, Hypertension, and Cardiovascular ailments) often develop silently over several years. Many individuals only seek medical attention after acute symptoms occur, when treatment is more difficult and costly.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Lack of routine early lifestyle screening and awareness regarding hereditary medical risks prevents timely preventive lifestyle interventions.
            </p>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-100 bg-gray-50 -mx-5 -mb-5 p-4 rounded-b-lg text-xs text-gray-600">
            <strong>Key Issue:</strong> Late diagnosis of lifestyle-induced conditions and lack of accessible self-assessment tools.
          </div>
        </div>

        {/* 2. Project Objective Card */}
        <div className="bg-white border border-gray-300 rounded-lg p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
              <div className="p-1.5 bg-blue-50 text-blue-700 rounded">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">2. Objective</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              The primary objective of this project is to develop a user-friendly system that evaluates disease risk by analyzing routine lifestyle indicators and medical background.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Provide a simple interface for users to enter daily lifestyle habits and family health history.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Establish a structured data format for future Machine Learning classification algorithms.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Promote preventive healthcare awareness among students and the general community.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 bg-gray-50 -mx-5 -mb-5 p-4 rounded-b-lg text-xs text-gray-600">
            <strong>Core Goal:</strong> Early risk categorization to enable proactive habit modification before disease onset.
          </div>
        </div>

      </div>

      {/* 3. How the System Will Work in the Future */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
          <div className="p-1.5 bg-green-50 text-green-700 rounded">
            <Workflow className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 text-lg">
            3. How the System Will Work in the Future
          </h3>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed mb-5">
          In the completed multi-tier version, the system will collect user information, process and normalize the feature attributes, and pass the data into a trained Machine Learning model to predict disease risk category (Low, Moderate, High) and provide tailored preventive health recommendations.
        </p>

        {/* 4-Step Architecture Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Step 1 */}
          <div className="bg-gray-50 border border-gray-200 rounded p-4 relative">
            <div className="text-xs font-bold text-blue-600 mb-1">STAGE 1</div>
            <h4 className="font-semibold text-gray-900 text-sm mb-1.5">User Input Collection</h4>
            <p className="text-xs text-gray-600 leading-normal">
              Captures lifestyle metrics (BMI, smoking, activity, alcohol) and medical history (BP, family heredity, blood glucose).
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-50 border border-gray-200 rounded p-4 relative">
            <div className="text-xs font-bold text-blue-600 mb-1">STAGE 2</div>
            <h4 className="font-semibold text-gray-900 text-sm mb-1.5">Data Preprocessing</h4>
            <p className="text-xs text-gray-600 leading-normal">
              Converts categorical values into numerical vectors, handles null values, and applies feature scaling (MinMax / StandardScaler).
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-50 border border-gray-200 rounded p-4 relative">
            <div className="text-xs font-bold text-blue-600 mb-1">STAGE 3</div>
            <h4 className="font-semibold text-gray-900 text-sm mb-1.5">ML Classification</h4>
            <p className="text-xs text-gray-600 leading-normal">
              Trained models (e.g. Random Forest Classifier, Logistic Regression) classify risk probability based on historical training datasets.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-50 border border-gray-200 rounded p-4 relative">
            <div className="text-xs font-bold text-blue-600 mb-1">STAGE 4</div>
            <h4 className="font-semibold text-gray-900 text-sm mb-1.5">Recommendations</h4>
            <p className="text-xs text-gray-600 leading-normal">
              Outputs a clear risk summary along with preventive diet, exercise, and medical consultation guidelines.
            </p>
          </div>

        </div>

        {/* Highlight Note */}
        <div className="mt-5 p-4 bg-blue-50 border border-blue-200 rounded flex items-start gap-3">
          <HeartHandshake className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
            <strong>Educational Scope:</strong> The future version will collect user information, process it and use a Machine Learning model to predict disease risk and provide preventive health recommendations to empower early health management.
          </p>
        </div>
      </div>
    </div>
  );
};
