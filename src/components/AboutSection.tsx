import React from 'react';

// 3. About Project Component
export const AboutSection: React.FC = () => {
  return (
    <div className="bg-white border border-gray-300 rounded p-5 sm:p-6 space-y-6">
      {/* Section Heading */}
      <div className="border-b border-gray-200 pb-3">
        <h2 className="text-xl font-bold text-gray-900">
          About The Project
        </h2>
        <p className="text-xs sm:text-sm text-gray-600">
          Early Disease Risk Prediction using Lifestyle and Medical History
        </p>
      </div>

      {/* 1. Problem */}
      <div className="border border-gray-200 p-4 rounded bg-gray-50">
        <h3 className="font-bold text-gray-900 text-base mb-2">
          1. Problem
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-2">
          Chronic diseases such as diabetes, high blood pressure, and cardiovascular issues are often detected at late stages because symptoms develop gradually. 
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Many people do not realize that daily habits (like physical inactivity, smoking, alcohol use, and high BMI) along with hereditary family history significantly increase their disease susceptibility. Lack of simple, early screening tools is a key challenge.
        </p>
      </div>

      {/* 2. Objective */}
      <div className="border border-gray-200 p-4 rounded bg-gray-50">
        <h3 className="font-bold text-gray-900 text-base mb-2">
          2. Objective
        </h3>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
          <li>
            To design an accessible web interface for collecting primary lifestyle indicators and medical background.
          </li>
          <li>
            To study key risk factors that contribute to chronic lifestyle-related diseases.
          </li>
          <li>
            To prepare a structured frontend input system ready to be connected with Machine Learning prediction models in the subsequent phase.
          </li>
          <li>
            To raise awareness regarding preventive health measures and timely lifestyle modifications.
          </li>
        </ul>
      </div>

      {/* 3. How the system will work in the future */}
      <div className="border border-gray-200 p-4 rounded bg-gray-50">
        <h3 className="font-bold text-gray-900 text-base mb-2">
          3. How the System Will Work in the Future
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          The future version will collect user information, process it and use a Machine Learning model to predict disease risk and provide preventive health recommendations.
        </p>

        {/* Simple Workflow Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="bg-white border border-gray-300 p-3 rounded">
            <span className="font-bold text-blue-700 block mb-1">Step 1: Input</span>
            <p className="text-gray-600">User inputs lifestyle habits, BMI, BP, and family medical background.</p>
          </div>
          <div className="bg-white border border-gray-300 p-3 rounded">
            <span className="font-bold text-blue-700 block mb-1">Step 2: Processing</span>
            <p className="text-gray-600">Inputs are converted into normalized numerical values for the model.</p>
          </div>
          <div className="bg-white border border-gray-300 p-3 rounded">
            <span className="font-bold text-blue-700 block mb-1">Step 3: ML Model</span>
            <p className="text-gray-600">Trained Machine Learning algorithm evaluates probability and risk score.</p>
          </div>
          <div className="bg-white border border-gray-300 p-3 rounded">
            <span className="font-bold text-blue-700 block mb-1">Step 4: Output</span>
            <p className="text-gray-600">System displays the risk level and gives preventive health recommendations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
