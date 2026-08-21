import React, { useState } from 'react';

// Interface defining the lifestyle and medical history inputs
interface FormDataState {
  age: string;
  gender: string;
  bmi: string;
  bloodPressure: string;
  smokingHabit: string;
  alcoholConsumption: string;
  physicalActivity: string;
  familyMedicalHistory: string[];
  bloodSugarLevel: string;
}

const initialFormValues: FormDataState = {
  age: '',
  gender: '',
  bmi: '',
  bloodPressure: '',
  smokingHabit: '',
  alcoholConsumption: '',
  physicalActivity: '',
  familyMedicalHistory: [],
  bloodSugarLevel: '',
};

// 2. Risk Prediction Form Component
export const PredictionForm: React.FC = () => {
  // State for form inputs
  const [formData, setFormData] = useState<FormDataState>(initialFormValues);
  // State to show the prediction message
  const [showMessage, setShowMessage] = useState<boolean>(false);
  // State for simple form validation error message
  const [errorMessage, setErrorMessage] = useState<string>('');

  // List of medical history options for checkboxes
  const familyHistoryList = [
    'Diabetes',
    'High Blood Pressure (Hypertension)',
    'Heart Disease',
    'High Cholesterol',
    'None',
  ];

  // Handle standard input and select changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle checkbox selection for family medical history
  const handleCheckboxChange = (disease: string) => {
    setFormData((prev) => {
      let updatedList = [...prev.familyMedicalHistory];
      if (disease === 'None') {
        updatedList = updatedList.includes('None') ? [] : ['None'];
      } else {
        updatedList = updatedList.filter((item) => item !== 'None');
        if (updatedList.includes(disease)) {
          updatedList = updatedList.filter((item) => item !== disease);
        } else {
          updatedList.push(disease);
        }
      }
      return { ...prev, familyMedicalHistory: updatedList };
    });
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.age || !formData.gender || !formData.bmi || !formData.bloodPressure || 
        !formData.smokingHabit || !formData.alcoholConsumption || !formData.physicalActivity) {
      setErrorMessage('Please fill in all the required fields marked with *');
      setShowMessage(false);
      return;
    }

    setErrorMessage('');
    setShowMessage(true);
  };

  // Reset form handler
  const handleReset = () => {
    setFormData(initialFormValues);
    setShowMessage(false);
    setErrorMessage('');
  };

  // Sample data filler for teacher demonstration
  const handleFillSample = () => {
    setFormData({
      age: '42',
      gender: 'Male',
      bmi: '26.8',
      bloodPressure: '135/85 mmHg (Elevated)',
      smokingHabit: 'Occasional',
      alcoholConsumption: 'Occasional',
      physicalActivity: 'Moderate',
      familyMedicalHistory: ['Diabetes', 'High Blood Pressure (Hypertension)'],
      bloodSugarLevel: '105 mg/dL',
    });
    setErrorMessage('');
    setShowMessage(false);
  };

  return (
    <div className="bg-white border border-gray-300 rounded p-5 sm:p-6 space-y-6">
      {/* Form Header */}
      <div className="border-b border-gray-200 pb-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Disease Risk Prediction Form
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Enter patient details to assess early disease risk based on lifestyle and medical factors.
          </p>
        </div>
        <button
          type="button"
          onClick={handleFillSample}
          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 px-2.5 py-1.5 rounded cursor-pointer"
          title="Fills the form with sample inputs for viva presentation"
        >
          Load Sample Values
        </button>
      </div>

      {/* Error Message Box */}
      {errorMessage && (
        <div className="bg-red-50 border border-red-300 text-red-700 text-xs sm:text-sm p-3 rounded">
          {errorMessage}
        </div>
      )}

      {/* Main Input Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* 1. Age */}
          <div className="border border-gray-200 p-3 rounded bg-gray-50">
            <label htmlFor="age-input" className="block text-sm font-semibold text-gray-800 mb-1">
              Age <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              id="age-input"
              name="age"
              min="1"
              max="120"
              placeholder="e.g. 45"
              value={formData.age}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-600"
              required
            />
            <span className="text-[11px] text-gray-500">In years (e.g. 18 - 80)</span>
          </div>

          {/* 2. Gender */}
          <div className="border border-gray-200 p-3 rounded bg-gray-50">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Gender <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-800">
              {['Male', 'Female', 'Other'].map((item) => (
                <label key={item} className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value={item}
                    checked={formData.gender === item}
                    onChange={handleChange}
                    className="cursor-pointer"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 3. BMI */}
          <div className="border border-gray-200 p-3 rounded bg-gray-50">
            <label htmlFor="bmi-input" className="block text-sm font-semibold text-gray-800 mb-1">
              BMI (Body Mass Index) <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              step="0.1"
              id="bmi-input"
              name="bmi"
              placeholder="e.g. 24.5"
              value={formData.bmi}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-600"
              required
            />
            <span className="text-[11px] text-gray-500">Formula: Weight(kg) / [Height(m)]²</span>
          </div>

          {/* 4. Blood Pressure */}
          <div className="border border-gray-200 p-3 rounded bg-gray-50">
            <label htmlFor="bp-select" className="block text-sm font-semibold text-gray-800 mb-1">
              Blood Pressure <span className="text-red-600">*</span>
            </label>
            <select
              id="bp-select"
              name="bloodPressure"
              value={formData.bloodPressure}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-600"
              required
            >
              <option value="">-- Select Blood Pressure --</option>
              <option value="Normal (< 120/80 mmHg)">Normal (&lt; 120/80 mmHg)</option>
              <option value="120-129 / <80 mmHg (Elevated)">Elevated (120-129 / &lt;80 mmHg)</option>
              <option value="130-139 / 80-89 mmHg (Stage 1 Hypertension)">Stage 1 Hypertension (130-139 / 80-89 mmHg)</option>
              <option value=">= 140 / >= 90 mmHg (Stage 2 Hypertension)">Stage 2 Hypertension (&ge; 140 / &ge; 90 mmHg)</option>
              <option value="Low Blood Pressure (< 90/60 mmHg)">Low Blood Pressure (&lt; 90/60 mmHg)</option>
            </select>
          </div>

          {/* 5. Smoking Habit */}
          <div className="border border-gray-200 p-3 rounded bg-gray-50">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Smoking Habit <span className="text-red-600">*</span>
            </label>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-800">
              {['Non-Smoker', 'Occasional', 'Regular'].map((item) => (
                <label key={item} className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="smokingHabit"
                    value={item}
                    checked={formData.smokingHabit === item}
                    onChange={handleChange}
                    className="cursor-pointer"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 6. Alcohol Consumption */}
          <div className="border border-gray-200 p-3 rounded bg-gray-50">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Alcohol Consumption <span className="text-red-600">*</span>
            </label>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-800">
              {['None', 'Occasional', 'Regular'].map((item) => (
                <label key={item} className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="alcoholConsumption"
                    value={item}
                    checked={formData.alcoholConsumption === item}
                    onChange={handleChange}
                    className="cursor-pointer"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 7. Physical Activity */}
          <div className="border border-gray-200 p-3 rounded bg-gray-50">
            <label htmlFor="activity-select" className="block text-sm font-semibold text-gray-800 mb-1">
              Physical Activity <span className="text-red-600">*</span>
            </label>
            <select
              id="activity-select"
              name="physicalActivity"
              value={formData.physicalActivity}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-600"
              required
            >
              <option value="">-- Select Activity Level --</option>
              <option value="Sedentary (Little or no exercise)">Sedentary (Little or no exercise)</option>
              <option value="Moderate (3-4 days per week)">Moderate (3-4 days per week)</option>
              <option value="Active (Daily exercise/sports)">Active (Daily exercise/sports)</option>
            </select>
          </div>

          {/* 8. Blood Sugar Level (Optional) */}
          <div className="border border-gray-200 p-3 rounded bg-gray-50">
            <label htmlFor="sugar-input" className="block text-sm font-semibold text-gray-800 mb-1">
              Blood Sugar Level <span className="text-gray-500 font-normal text-xs">(Optional)</span>
            </label>
            <input
              type="text"
              id="sugar-input"
              name="bloodSugarLevel"
              placeholder="e.g. 95 mg/dL or Normal"
              value={formData.bloodSugarLevel}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-600"
            />
            <span className="text-[11px] text-gray-500">Fasting normal range: 70 - 99 mg/dL</span>
          </div>

        </div>

        {/* 9. Family Medical History */}
        <div className="border border-gray-200 p-3 rounded bg-gray-50">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Family Medical History <span className="text-gray-500 font-normal text-xs">(Select applicable options)</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {familyHistoryList.map((disease) => (
              <label key={disease} className="flex items-center gap-2 bg-white border border-gray-200 p-2 rounded text-xs sm:text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.familyMedicalHistory.includes(disease)}
                  onChange={() => handleCheckboxChange(disease)}
                  className="cursor-pointer"
                />
                <span>{disease}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="submit"
            id="btn-predict-risk"
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium px-6 py-2 rounded text-sm border border-blue-700 cursor-pointer"
          >
            Predict Risk
          </button>

          <button
            type="button"
            id="btn-reset"
            onClick={handleReset}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded text-sm border border-gray-300 cursor-pointer"
          >
            Reset
          </button>
        </div>
      </form>

      {/* Prediction Output Notification (As explicitly requested by user) */}
      {showMessage && (
        <div className="mt-4 border-2 border-blue-400 bg-blue-50 p-4 rounded text-gray-800 space-y-3">
          <div className="font-bold text-blue-900 text-sm sm:text-base">
            System Message:
          </div>
          
          <p className="text-sm font-medium text-gray-900 bg-white border border-blue-200 p-3 rounded">
            &ldquo;Prediction feature will be connected with the Machine Learning model in the next phase.&rdquo;
          </p>

          {/* Simple summary table of entered features */}
          <div className="text-xs text-gray-700 pt-1">
            <p className="font-semibold text-gray-800 mb-1">Captured Form Inputs:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white p-2.5 rounded border border-gray-200">
              <div>Age: <strong>{formData.age}</strong></div>
              <div>Gender: <strong>{formData.gender}</strong></div>
              <div>BMI: <strong>{formData.bmi}</strong></div>
              <div>BP: <strong>{formData.bloodPressure}</strong></div>
              <div>Smoking: <strong>{formData.smokingHabit}</strong></div>
              <div>Alcohol: <strong>{formData.alcoholConsumption}</strong></div>
              <div>Activity: <strong>{formData.physicalActivity}</strong></div>
              <div>Sugar: <strong>{formData.bloodSugarLevel || 'N/A'}</strong></div>
            </div>
            {formData.familyMedicalHistory.length > 0 && (
              <p className="mt-1.5 text-gray-600">
                Family History: <strong>{formData.familyMedicalHistory.join(', ')}</strong>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
