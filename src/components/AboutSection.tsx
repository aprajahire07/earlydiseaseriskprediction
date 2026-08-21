import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Problem Box */}
      <div className="border border-gray-300 p-5 bg-white">
        <h2 className="text-lg font-bold text-[#3b82f6] mb-2 border-b border-gray-200 pb-1">
          1. Problem
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-2">
          Chronic diseases such as high blood pressure, diabetes, and heart ailments are often diagnosed at late stages because symptoms are not noticed early.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Many people do not realize that daily lifestyle habits (sedentary lifestyle, smoking, alcohol, unhealthy BMI) combined with family medical history contribute significantly to these health risks.
        </p>
      </div>

      {/* Objective Box */}
      <div className="border border-gray-300 p-5 bg-white">
        <h2 className="text-lg font-bold text-[#3b82f6] mb-2 border-b border-gray-200 pb-1">
          2. Objective
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-2">
          The main objective of this project is to study and identify key lifestyle and medical factors that lead to disease susceptibility.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Create a simple web interface for users to enter their lifestyle habits and medical background.</li>
          <li>Analyze key risk indicators such as BMI, blood pressure, physical activity, and family heredity.</li>
          <li>Encourage early awareness and timely preventive health actions.</li>
        </ul>
      </div>

      {/* How the System Will Work in the Future Box */}
      <div className="border border-gray-300 p-5 bg-white">
        <h2 className="text-lg font-bold text-[#3b82f6] mb-2 border-b border-gray-200 pb-1">
          3. How the System Will Work in the Future
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          The future version will collect user information, process it and use a Machine Learning model to predict disease risk and provide preventive health recommendations.
        </p>
        <div className="border border-gray-200 bg-gray-50 p-3 text-xs text-gray-700 space-y-1">
          <p><strong>Step 1:</strong> User enters lifestyle and medical information through the web form.</p>
          <p><strong>Step 2:</strong> The data is processed and formatted as inputs for the model.</p>
          <p><strong>Step 3:</strong> The Machine Learning model predicts the risk level (Low, Moderate, High).</p>
          <p><strong>Step 4:</strong> The system displays the risk status along with preventive health suggestions.</p>
        </div>
      </div>
    </div>
  );
};
