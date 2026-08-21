import React from 'react';
import { Cpu, TrendingUp, HeartHandshake, Database, Server, CheckCircle } from 'lucide-react';

export const FutureScopeSection: React.FC = () => {
  const futurePoints = [
    {
      id: 'ml-integration',
      title: 'Machine Learning Model Integration',
      icon: Cpu,
      color: 'text-blue-700 bg-blue-50 border-blue-200',
      description:
        'Train and deploy robust machine learning algorithms such as Random Forest, Support Vector Machines (SVM), and Logistic Regression on validated open-source healthcare datasets (e.g. CDC BRFSS, Kaggle Health datasets).',
      points: [
        'Model training using Scikit-Learn in Python',
        'Model serialization using joblib / pickle',
        'Real-time prediction based on user feature vector',
      ],
    },
    {
      id: 'prediction-accuracy',
      title: 'Better Prediction Accuracy',
      icon: TrendingUp,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      description:
        'Enhance model generalization and accuracy through comprehensive feature engineering, hyperparameter tuning (GridSearchCV), cross-validation, and expanding dataset volume with diverse demographic samples.',
      points: [
        'Hyperparameter optimization and cross-validation',
        'Feature selection to identify highest risk contributors',
        'Reduction of false positives and false negatives',
      ],
    },
    {
      id: 'health-recommendations',
      title: 'Health Recommendations',
      icon: HeartHandshake,
      color: 'text-purple-700 bg-purple-50 border-purple-200',
      description:
        'Provide personalized lifestyle and dietary guidance based on individual risk scores (e.g., tailored physical exercise routines for sedentary users or sodium intake warnings for elevated BP).',
      points: [
        'Customized diet and daily step count recommendations',
        'Periodic reminders for routine medical check-ups',
        'Educational prevention tips based on family history',
      ],
    },
    {
      id: 'database-integration',
      title: 'Database Integration',
      icon: Database,
      color: 'text-amber-700 bg-amber-50 border-amber-200',
      description:
        'Incorporate a secure relational or document database (such as MySQL, SQLite, or PostgreSQL) to allow users to save their health assessment history, track progress over time, and compare changes.',
      points: [
        'User authentication and profile management',
        'Historical risk tracking logs and timeline graphs',
        'Exportable PDF health assessment summary reports',
      ],
    },
    {
      id: 'flask-backend',
      title: 'Flask Backend',
      icon: Server,
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200',
      description:
        'Develop a lightweight Python Flask REST API server to bridge the frontend user interface with the backend machine learning model and database services.',
      points: [
        'RESTful endpoints (/predict, /history, /feedback)',
        'JSON data parsing and input validation',
        'Seamless integration between React frontend and Python ML engine',
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Future Scope & Enhancements
        </h2>
        <p className="text-sm text-gray-600">
          Planned technical milestones and architecture enhancements for Phase-2 of this academic project.
        </p>
      </div>

      {/* Future Scope Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {futurePoints.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white border border-gray-300 rounded-lg p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3 pb-2 border-b border-gray-100">
                  <div className={`p-2 rounded border ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-1.5 border-t border-gray-100 pt-3">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    Planned Features:
                  </p>
                  {item.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Box */}
      <div className="bg-slate-50 border border-slate-300 rounded-lg p-5 text-center text-sm text-gray-700">
        <p className="font-medium text-gray-800">
          📌 Roadmap Summary: Transition from Current Frontend Prototype &rarr; Full-Stack ML Web Application (Flask + Scikit-Learn + Database).
        </p>
      </div>
    </div>
  );
};
