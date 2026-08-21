import React from 'react';
import { Users, GraduationCap, BookOpen, Code, Lightbulb, HelpCircle } from 'lucide-react';

export const ProjectInfoSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Title Card */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Project Details & Viva Presentation Notes
        </h2>
        <p className="text-sm text-gray-600">
          Academic submission details and quick answers to common mini project viva questions.
        </p>
      </div>

      {/* College & Team Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Project Meta Card */}
        <div className="bg-white border border-gray-300 rounded-lg p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
            <div className="p-1.5 bg-blue-50 text-blue-700 rounded">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Academic Submission</h3>
          </div>

          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <span className="text-xs text-gray-500 font-semibold block uppercase">Project Title</span>
              <strong className="text-gray-900 text-sm">
                Early Disease Risk Prediction using Lifestyle and Medical History
              </strong>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <span className="text-xs text-gray-500 font-semibold block uppercase">Course</span>
                <span className="text-gray-800">B.Tech (Computer Science & Engg.)</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 font-semibold block uppercase">Semester</span>
                <span className="text-gray-800">3rd / 4th Semester</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <span className="text-xs text-gray-500 font-semibold block uppercase">Project Type</span>
                <span className="text-gray-800">College Mini Project</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 font-semibold block uppercase">Current Phase</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs font-medium">Phase-1: Frontend Demo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team & Guide Info Card */}
        <div className="bg-white border border-gray-300 rounded-lg p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
            <div className="p-1.5 bg-green-50 text-green-700 rounded">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Student Team</h3>
          </div>

          <div className="space-y-3 text-sm text-gray-700">
            <div className="bg-gray-50 p-3 rounded border border-gray-200">
              <p className="font-semibold text-gray-900">Project Team Members:</p>
              <ul className="text-xs text-gray-600 mt-1 space-y-1">
                <li>• Student 1 &mdash; Roll No: 22CS01 (UI Design & Form Structure)</li>
                <li>• Student 2 &mdash; Roll No: 22CS14 (Feature Identification & Medical Research)</li>
                <li>• Student 3 &mdash; Roll No: 22CS29 (Data Validation & Project Documentation)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-3 rounded border border-gray-200">
              <p className="font-semibold text-gray-900">Project Guide / Mentor:</p>
              <p className="text-xs text-gray-600 mt-0.5">
                Department of Computer Science & Engineering / Information Technology
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Viva / Teacher Explanation Guide Card */}
      <div className="bg-white border border-gray-300 rounded-lg p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
          <div className="p-1.5 bg-amber-50 text-amber-700 rounded">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 text-lg">
            Quick Questions & Answers for Viva / Teacher Presentation
          </h3>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          <div className="border-l-3 border-blue-600 pl-3 py-1 bg-slate-50 rounded-r">
            <p className="font-bold text-gray-900 text-sm">
              Q1: What is the main motivation behind this mini project?
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              <strong>Answer:</strong> Most people do not know their early risk level for chronic lifestyle diseases (like diabetes or hypertension). By collecting daily lifestyle data and hereditary medical history, we can classify risk early before severe health complications develop.
            </p>
          </div>

          <div className="border-l-3 border-blue-600 pl-3 py-1 bg-slate-50 rounded-r">
            <p className="font-bold text-gray-900 text-sm">
              Q2: Why does the current demo not give an actual ML prediction?
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              <strong>Answer:</strong> As per Phase-1 specifications, this is the frontend user interface prototype designed to validate input parameters, ensure proper form data capture, and establish the user workflow. In Phase-2, we will integrate the Flask backend and train a Random Forest / Logistic Regression classifier on medical datasets.
            </p>
          </div>

          <div className="border-l-3 border-blue-600 pl-3 py-1 bg-slate-50 rounded-r">
            <p className="font-bold text-gray-900 text-sm">
              Q3: What parameters are selected for risk prediction and why?
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              <strong>Answer:</strong> We selected 9 primary clinical and behavioral indicators: Age, Gender, BMI, Blood Pressure, Smoking, Alcohol, Physical Activity, Family Medical History, and Blood Sugar. These are standard baseline risk factors identified by global health organizations (WHO, CDC).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
