import React from 'react';

// 4. Future Scope Component
export const FutureScopeSection: React.FC = () => {
  const futurePoints = [
    {
      title: 'Machine Learning Model Integration',
      description:
        'Integrating trained classification algorithms (like Random Forest, Logistic Regression, or Decision Trees) using Python Scikit-Learn to evaluate user risk levels based on medical datasets.',
    },
    {
      title: 'Better Prediction Accuracy',
      description:
        'Improving accuracy with hyperparameter tuning, testing on larger healthcare datasets, and identifying the most critical lifestyle factors.',
    },
    {
      title: 'Health Recommendations',
      description:
        'Providing customized preventive advice such as diet adjustments, daily physical activity routines, and suggestions to consult a doctor if risk is elevated.',
    },
    {
      title: 'Database Integration',
      description:
        'Adding a database (e.g., MySQL, SQLite, or MongoDB) to securely store user history, view past assessment trends, and track health changes over time.',
    },
    {
      title: 'Flask Backend',
      description:
        'Building a lightweight Python Flask backend REST API to connect the web interface with the Machine Learning model and database.',
    },
  ];

  return (
    <div className="bg-white border border-gray-300 rounded p-5 sm:p-6 space-y-6">
      {/* Section Header */}
      <div className="border-b border-gray-200 pb-3">
        <h2 className="text-xl font-bold text-gray-900">
          Future Scope
        </h2>
        <p className="text-xs sm:text-sm text-gray-600">
          Key enhancements planned for the next development phase of this project.
        </p>
      </div>

      {/* List of 5 Future Scope Points */}
      <div className="space-y-3">
        {futurePoints.map((item, index) => (
          <div key={index} className="border border-gray-200 p-3.5 rounded bg-gray-50">
            <h3 className="font-bold text-gray-900 text-sm mb-1">
              {index + 1}. {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
