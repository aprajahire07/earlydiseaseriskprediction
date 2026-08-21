import React, { useState } from 'react';
import { RiskFormData, initialFormData, sampleStudentData } from '../types';
import { 
  FileText, 
  RotateCcw, 
  Sparkles, 
  Info, 
  CheckCircle2, 
  AlertTriangle, 
  Calculator,
  X
} from 'lucide-react';

export const PredictionForm: React.FC = () => {
  // State for storing form inputs
  const [formData, setFormData] = useState<RiskFormData>(initialFormData);
  
  // State for BMI Calculator modal/helper
  const [showBmiCalc, setShowBmiCalc] = useState<boolean>(false);
  const [calcHeight, setCalcHeight] = useState<string>('170');
  const [calcWeight, setCalcWeight] = useState<string>('68');
  
  // State for showing the prediction message/modal
  const [showResultModal, setShowResultModal] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  // List of family medical history options
  const familyHistoryOptions = [
    'Diabetes (Type 1 / Type 2)',
    'Hypertension (High BP)',
    'Cardiovascular / Heart Disease',
    'High Cholesterol',
    'Stroke',
    'No Known Family History',
  ];

  // Handle standard input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle checkbox changes for Family Medical History
  const handleFamilyHistoryChange = (option: string) => {
    setFormData((prev) => {
      let updated: string[];
      if (option === 'No Known Family History') {
        // If "No Known Family History" is selected, clear other options
        updated = prev.familyMedicalHistory.includes(option) ? [] : [option];
      } else {
        // Remove "No Known Family History" if a specific disease is checked
        const withoutNone = prev.familyMedicalHistory.filter(
          (item) => item !== 'No Known Family History'
        );
        if (withoutNone.includes(option)) {
          updated = withoutNone.filter((item) => item !== option);
        } else {
          updated = [...withoutNone, option];
        }
      }
      return { ...prev, familyMedicalHistory: updated };
    });
  };

  // Helper function to calculate BMI: weight(kg) / [height(m)]^2
  const calculateBMIHelper = () => {
    const h = parseFloat(calcHeight);
    const w = parseFloat(calcWeight);
    if (h > 0 && w > 0) {
      const heightInMeters = h / 100;
      const bmiValue = (w / (heightInMeters * heightInMeters)).toFixed(1);
      setFormData((prev) => ({
        ...prev,
        bmi: bmiValue,
      }));
      setShowBmiCalc(false);
    }
  };

  // Reset form to initial empty values
  const handleReset = () => {
    setFormData(initialFormData);
    setFormErrors([]);
    setShowResultModal(false);
  };

  // Load sample student dataset for quick viva presentation
  const handleLoadSample = () => {
    setFormData(sampleStudentData);
    setFormErrors([]);
  };

  // Handle form submission (Phase 1 Frontend Prototype)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: string[] = [];

    // Basic form validation check
    if (!formData.age || parseInt(formData.age) <= 0 || parseInt(formData.age) > 120) {
      errors.push('Please enter a valid Age (between 1 and 120).');
    }
    if (!formData.gender) {
      errors.push('Please select Gender.');
    }
    if (!formData.bmi) {
      errors.push('Please enter or calculate your BMI.');
    }
    if (!formData.bloodPressure) {
      errors.push('Please select Blood Pressure level.');
    }
    if (!formData.smokingHabit) {
      errors.push('Please select Smoking Habit.');
    }
    if (!formData.alcoholConsumption) {
      errors.push('Please select Alcohol Consumption.');
    }
    if (!formData.physicalActivity) {
      errors.push('Please select Physical Activity level.');
    }

    if (errors.length > 0) {
      setFormErrors(errors);
      window.scrollTo({ top: 100, behavior: 'smooth' });
      return;
    }

    setFormErrors([]);
    setShowResultModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Form Header Card */}
      <div className="bg-white border border-gray-300 rounded-lg p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 pb-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-700" />
              <span>Lifestyle & Medical History Input Form</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Please enter the patient or user parameters below for early disease risk evaluation.
            </p>
          </div>

          {/* Quick Viva Helper Button */}
          <button
            type="button"
            id="btn-load-sample"
            onClick={handleLoadSample}
            className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-300 text-xs font-medium px-3 py-1.5 rounded transition-colors cursor-pointer self-start sm:self-auto"
            title="Click to pre-fill the form with sample data for demonstration"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Load Sample Data</span>
          </button>
        </div>

        {/* Validation Errors Notice */}
        {formErrors.length > 0 && (
          <div className="mb-5 bg-red-50 border border-red-300 text-red-800 p-3 rounded text-sm">
            <div className="flex items-center gap-2 font-semibold mb-1">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Please fill in the required fields:</span>
            </div>
            <ul className="list-disc list-inside text-xs space-y-0.5 ml-1">
              {formErrors.map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* 1. Age */}
            <div className="bg-gray-50/70 p-4 rounded border border-gray-200">
              <label htmlFor="input-age" className="block text-sm font-semibold text-gray-800 mb-1">
                1. Age <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="input-age"
                  name="age"
                  min="1"
                  max="120"
                  placeholder="e.g. 45"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-600"
                  required
                />
                <span className="text-xs text-gray-500 font-medium whitespace-nowrap">years</span>
              </div>
              <p className="text-[11px] text-gray-500 mt-1">Target range: 18 - 85 years</p>
            </div>

            {/* 2. Gender */}
            <div className="bg-gray-50/70 p-4 rounded border border-gray-200">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                2. Gender <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-5 pt-1">
                {['Male', 'Female', 'Other'].map((g) => (
                  <label key={g} className="flex items-center gap-1.5 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={formData.gender === g}
                      onChange={handleInputChange}
                      className="text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span>{g}</span>
                  </label>
                ))}
              </div>
              <p className="text-[11px] text-gray-500 mt-2">Biological gender category</p>
            </div>

            {/* 3. BMI (Body Mass Index) */}
            <div className="bg-gray-50/70 p-4 rounded border border-gray-200">
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="input-bmi" className="block text-sm font-semibold text-gray-800">
                  3. BMI (Body Mass Index) <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => setShowBmiCalc(!showBmiCalc)}
                  className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium cursor-pointer"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>{showBmiCalc ? 'Close Calculator' : 'Calculate BMI'}</span>
                </button>
              </div>

              {/* BMI Helper Tool Accordion */}
              {showBmiCalc && (
                <div className="bg-blue-50 border border-blue-200 p-3 rounded mb-2 text-xs text-gray-800">
                  <p className="font-semibold text-blue-900 mb-1.5">Quick BMI Calculator Tool</p>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div>
                      <label className="block text-[11px] text-gray-600 mb-0.5">Height (cm)</label>
                      <input
                        type="number"
                        value={calcHeight}
                        onChange={(e) => setCalcHeight(e.target.value)}
                        className="w-full bg-white border border-gray-300 rounded px-2 py-1 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-gray-600 mb-0.5">Weight (kg)</label>
                      <input
                        type="number"
                        value={calcWeight}
                        onChange={(e) => setCalcWeight(e.target.value)}
                        className="w-full bg-white border border-gray-300 rounded px-2 py-1 text-xs"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={calculateBMIHelper}
                    className="bg-blue-700 text-white px-3 py-1 rounded text-xs hover:bg-blue-800 cursor-pointer font-medium"
                  >
                    Apply Calculated BMI
                  </button>
                </div>
              )}

              <input
                type="number"
                step="0.1"
                id="input-bmi"
                name="bmi"
                placeholder="e.g. 24.5 (Normal: 18.5 - 24.9)"
                value={formData.bmi}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-600"
                required
              />
              <p className="text-[11px] text-gray-500 mt-1">Normal: 18.5–24.9 | Overweight: 25–29.9 | Obese: 30+</p>
            </div>

            {/* 4. Blood Pressure */}
            <div className="bg-gray-50/70 p-4 rounded border border-gray-200">
              <label htmlFor="select-bp" className="block text-sm font-semibold text-gray-800 mb-1">
                4. Blood Pressure <span className="text-red-500">*</span>
              </label>
              <select
                id="select-bp"
                name="bloodPressure"
                value={formData.bloodPressure}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-600"
                required
              >
                <option value="">-- Select Blood Pressure Category --</option>
                <option value="Normal (< 120/80 mmHg)">Normal (&lt; 120/80 mmHg)</option>
                <option value="120-129 / <80 (Elevated)">Elevated (120-129 / &lt;80 mmHg)</option>
                <option value="130-139 / 80-89 (Stage 1 Hypertension)">Stage 1 Hypertension (130-139 / 80-89 mmHg)</option>
                <option value=">= 140 / >= 90 (Stage 2 Hypertension)">Stage 2 Hypertension (&ge; 140 / &ge; 90 mmHg)</option>
                <option value="Low Blood Pressure (< 90/60 mmHg)">Low Blood Pressure (&lt; 90/60 mmHg)</option>
              </select>
              <p className="text-[11px] text-gray-500 mt-1">Resting arterial blood pressure</p>
            </div>

            {/* 5. Smoking Habit */}
            <div className="bg-gray-50/70 p-4 rounded border border-gray-200">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                5. Smoking Habit <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-4 pt-1">
                {['Non-Smoker', 'Occasional', 'Regular'].map((smk) => (
                  <label key={smk} className="flex items-center gap-1.5 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="smokingHabit"
                      value={smk}
                      checked={formData.smokingHabit === smk}
                      onChange={handleInputChange}
                      className="text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span>{smk}</span>
                  </label>
                ))}
              </div>
              <p className="text-[11px] text-gray-500 mt-2">Tobacco or cigarette usage frequency</p>
            </div>

            {/* 6. Alcohol Consumption */}
            <div className="bg-gray-50/70 p-4 rounded border border-gray-200">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                6. Alcohol Consumption <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-4 pt-1">
                {['None', 'Occasional', 'Regular'].map((alc) => (
                  <label key={alc} className="flex items-center gap-1.5 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="alcoholConsumption"
                      value={alc}
                      checked={formData.alcoholConsumption === alc}
                      onChange={handleInputChange}
                      className="text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span>{alc}</span>
                  </label>
                ))}
              </div>
              <p className="text-[11px] text-gray-500 mt-2">Alcohol consumption pattern</p>
            </div>

            {/* 7. Physical Activity */}
            <div className="bg-gray-50/70 p-4 rounded border border-gray-200">
              <label htmlFor="select-activity" className="block text-sm font-semibold text-gray-800 mb-1">
                7. Physical Activity <span className="text-red-500">*</span>
              </label>
              <select
                id="select-activity"
                name="physicalActivity"
                value={formData.physicalActivity}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-600"
                required
              >
                <option value="">-- Select Activity Level --</option>
                <option value="Sedentary (Low)">Sedentary (Little or no exercise / desk job)</option>
                <option value="Moderate (3-4 days/week)">Moderate (Light workout / walk 3-4 days a week)</option>
                <option value="Active (Daily)">Active (Intense workout / daily sports)</option>
              </select>
              <p className="text-[11px] text-gray-500 mt-1">Weekly exercise and mobility pattern</p>
            </div>

            {/* 8. Blood Sugar Level (Optional) */}
            <div className="bg-gray-50/70 p-4 rounded border border-gray-200">
              <label htmlFor="input-sugar" className="block text-sm font-semibold text-gray-800 mb-1">
                8. Blood Sugar Level <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                id="input-sugar"
                name="bloodSugarLevel"
                placeholder="e.g. 95 mg/dL or Normal / Fasting"
                value={formData.bloodSugarLevel}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-blue-600"
              />
              <p className="text-[11px] text-gray-500 mt-1">Fasting normal range: 70–99 mg/dL</p>
            </div>

          </div>

          {/* 9. Family Medical History */}
          <div className="bg-gray-50/70 p-4 rounded border border-gray-200">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              9. Family Medical History <span className="text-gray-500 font-normal text-xs">(Select all that apply)</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 mt-2">
              {familyHistoryOptions.map((opt) => (
                <label
                  key={opt}
                  className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 bg-white p-2.5 rounded border border-gray-200 hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.familyMedicalHistory.includes(opt)}
                    onChange={() => handleFamilyHistoryChange(opt)}
                    className="mt-0.5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
            <p className="text-[11px] text-gray-500 mt-2">
              Hereditary health indicators among first-degree relatives (parents, siblings).
            </p>
          </div>

          {/* Form Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="submit"
              id="btn-predict-risk-submit"
              className="bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-2.5 rounded transition-colors shadow-xs cursor-pointer text-sm flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Predict Risk</span>
            </button>

            <button
              type="button"
              id="btn-reset-form"
              onClick={handleReset}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2.5 rounded border border-gray-300 transition-colors cursor-pointer text-sm flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Form</span>
            </button>
          </div>
        </form>
      </div>

      {/* RESULT MODAL / STUDENT PROTOTYPE NOTICE */}
      {showResultModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg border border-gray-300 max-w-xl w-full p-6 shadow-lg relative animate-in fade-in zoom-in-95 duration-150">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowResultModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Info className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  Phase-1 Project Demonstration
                </h3>
                <p className="text-xs text-gray-500">
                  Early Disease Risk Prediction System
                </p>
              </div>
            </div>

            {/* The Mandatory User-Requested Text */}
            <div className="bg-blue-50 border-2 border-blue-300 p-4 rounded-md mb-5">
              <p className="text-sm font-semibold text-blue-900 leading-relaxed text-center">
                &ldquo;Prediction feature will be connected with the Machine Learning model in the next phase.&rdquo;
              </p>
            </div>

            {/* Summary of Entered Parameters */}
            <div className="border border-gray-200 rounded p-3 mb-4 bg-gray-50 text-xs text-gray-700">
              <p className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">
                Captured Input Feature Vector (Ready for Model Input):
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                <div><span className="text-gray-500">Age:</span> <strong className="text-gray-900">{formData.age} yrs</strong></div>
                <div><span className="text-gray-500">Gender:</span> <strong className="text-gray-900">{formData.gender || 'Not specified'}</strong></div>
                <div><span className="text-gray-500">BMI:</span> <strong className="text-gray-900">{formData.bmi}</strong></div>
                <div><span className="text-gray-500">BP:</span> <strong className="text-gray-900">{formData.bloodPressure || 'N/A'}</strong></div>
                <div><span className="text-gray-500">Smoking:</span> <strong className="text-gray-900">{formData.smokingHabit || 'N/A'}</strong></div>
                <div><span className="text-gray-500">Alcohol:</span> <strong className="text-gray-900">{formData.alcoholConsumption || 'N/A'}</strong></div>
                <div><span className="text-gray-500">Physical Activity:</span> <strong className="text-gray-900">{formData.physicalActivity || 'N/A'}</strong></div>
                <div><span className="text-gray-500">Blood Sugar:</span> <strong className="text-gray-900">{formData.bloodSugarLevel || 'Not specified'}</strong></div>
              </div>
              <div className="mt-2 pt-1 border-t border-gray-200">
                <span className="text-gray-500">Family History:</span>{' '}
                <strong className="text-gray-900">
                  {formData.familyMedicalHistory.length > 0
                    ? formData.familyMedicalHistory.join(', ')
                    : 'None selected'}
                </strong>
              </div>
            </div>

            {/* Note & Close button */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <span className="text-[11px] text-gray-500">
                Phase-2 will integrate Flask + Scikit-Learn.
              </span>
              <button
                type="button"
                id="btn-close-modal"
                onClick={() => setShowResultModal(false)}
                className="bg-gray-800 hover:bg-gray-900 text-white text-xs font-semibold px-4 py-2 rounded transition-colors cursor-pointer"
              >
                Okay, Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
