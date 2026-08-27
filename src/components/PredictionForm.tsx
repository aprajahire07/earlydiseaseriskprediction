import React, { useState } from 'react';

// Structure of the response expected from the FastAPI backend
interface PredictionResult {
  risk_percentage?: number | string;
  risk_score?: number | string;
  probability?: number | string;
  risk_level?: string;
  prediction?: string;
  target_disease?: string;
  suspected_disease?: string;
  primary_risk?: string;
  disease?: string;
  recommendation?: string | string[];
  recommendations?: string | string[];
  message?: string;
}

export const PredictionForm: React.FC = () => {
  // Form input states
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [bmi, setBmi] = useState<string>('');
  const [bloodPressure, setBloodPressure] = useState<string>('');
  const [smokingHabit, setSmokingHabit] = useState<string>('');
  const [alcoholConsumption, setAlcoholConsumption] = useState<string>('');
  const [physicalActivity, setPhysicalActivity] = useState<string>('');
  const [familyMedicalHistory, setFamilyMedicalHistory] = useState<string[]>([]);
  const [bloodSugarLevel, setBloodSugarLevel] = useState<string>('');

  // Backend API URL (Default: Live FastAPI ngrok public server)
  const [apiUrl, setApiUrl] = useState<string>('https://apply-fragile-thaw.ngrok-free.dev/predict');
  const [showApiSettings, setShowApiSettings] = useState<boolean>(false);

  // Request & Response states
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [validationError, setValidationError] = useState<string>('');
  const [apiError, setApiError] = useState<string>('');

  // Handle family history checkbox toggle
  const handleCheckboxChange = (disease: string) => {
    if (familyMedicalHistory.includes(disease)) {
      setFamilyMedicalHistory(familyMedicalHistory.filter((item) => item !== disease));
    } else {
      setFamilyMedicalHistory([...familyMedicalHistory, disease]);
    }
  };

  // Helper to load sample student testing data
  const handleLoadSample = () => {
    setAge('45');
    setGender('Male');
    setBmi('26.4');
    setBloodPressure('Stage 1 Hypertension');
    setSmokingHabit('Occasional');
    setAlcoholConsumption('Occasional');
    setPhysicalActivity('Sedentary');
    setFamilyMedicalHistory(['High Blood Pressure', 'Diabetes']);
    setBloodSugarLevel('110 mg/dL');
    setValidationError('');
    setApiError('');
    setResult(null);
  };

  // Handle form submission to FastAPI backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset previous messages
    setValidationError('');
    setApiError('');
    setResult(null);

    // Validation check
    if (!age || !gender || !bmi || !bloodPressure || !smokingHabit || !alcoholConsumption || !physicalActivity) {
      setValidationError('Please fill in all the required fields marked with *');
      return;
    }

    // Prepare JSON payload for FastAPI /predict endpoint
    const payload = {
      age: Number(age) || age,
      gender: gender,
      bmi: parseFloat(bmi) || bmi,
      blood_pressure: bloodPressure,
      bloodPressure: bloodPressure,
      smoking_habit: smokingHabit,
      smokingHabit: smokingHabit,
      alcohol_consumption: alcoholConsumption,
      alcoholConsumption: alcoholConsumption,
      physical_activity: physicalActivity,
      physicalActivity: physicalActivity,
      family_medical_history: familyMedicalHistory,
      familyMedicalHistory: familyMedicalHistory,
      blood_sugar_level: bloodSugarLevel || 'Normal',
      bloodSugarLevel: bloodSugarLevel || 'Normal',
    };

    setLoading(true);

    try {
      const response = await fetch(apiUrl.trim(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'ngrok-skip-browser-warning': 'true',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}: ${response.statusText}`);
      }

      const data: PredictionResult = await response.json();
      setResult(data);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Unable to connect to FastAPI backend';
      setApiError(
        `${errorMessage}. Please ensure your FastAPI server is running at ${apiUrl} and CORS is enabled.`
      );
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setAge('');
    setGender('');
    setBmi('');
    setBloodPressure('');
    setSmokingHabit('');
    setAlcoholConsumption('');
    setPhysicalActivity('');
    setFamilyMedicalHistory([]);
    setBloodSugarLevel('');
    setResult(null);
    setValidationError('');
    setApiError('');
  };

  // Format percentage helper
  const getDisplayPercentage = (res: PredictionResult): string => {
    const val = res.risk_percentage ?? res.risk_score ?? res.probability;
    if (val === undefined || val === null) return 'N/A';
    if (typeof val === 'number') {
      // If decimal between 0 and 1, convert to %
      if (val <= 1 && val > 0) {
        return `${(val * 100).toFixed(1)}%`;
      }
      return `${val}%`;
    }
    return String(val).includes('%') ? String(val) : `${val}%`;
  };

  // Format risk level helper
  const getDisplayLevel = (res: PredictionResult): string => {
    return res.risk_level || res.prediction || 'Assessed';
  };

  // Format target/suspected disease helper
  const getTargetDisease = (res: PredictionResult): string => {
    return res.target_disease || res.suspected_disease || res.primary_risk || res.disease || 'N/A';
  };

  // Format recommendations helper
  const getRecommendations = (res: PredictionResult): string[] => {
    const rec = res.recommendation || res.recommendations || res.message;
    if (!rec) return ['Maintain a balanced diet, exercise regularly, and consult a healthcare professional for regular check-ups.'];
    if (Array.isArray(rec)) return rec;
    return [rec];
  };

  // Badge color based on risk level
  const getRiskColorClasses = (level: string) => {
    const l = level.toLowerCase();
    if (l.includes('high') || l.includes('severe') || l.includes('danger')) {
      return 'border-red-500 bg-red-50 text-red-800';
    }
    if (l.includes('moderate') || l.includes('medium') || l.includes('warning')) {
      return 'border-yellow-500 bg-yellow-50 text-yellow-800';
    }
    return 'border-green-500 bg-green-50 text-green-800';
  };

  return (
    <div className="border border-gray-300 p-5 sm:p-6 bg-white space-y-5">
      {/* Header */}
      <div className="border-b border-gray-200 pb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-[#3b82f6]">
            Risk Prediction Form
          </h2>
          <p className="text-xs text-gray-600">
            Enter lifestyle and medical parameters to send a POST request to FastAPI backend (<code className="bg-gray-100 px-1 py-0.5 rounded text-gray-800 font-mono text-[11px]">{apiUrl}</code>).
          </p>
        </div>

        <div className="flex gap-2 text-xs">
          <button
            type="button"
            onClick={handleLoadSample}
            className="border border-gray-300 bg-gray-50 hover:bg-gray-100 text-gray-700 px-2.5 py-1 cursor-pointer font-medium"
            title="Load sample values for testing"
          >
            Load Sample Data
          </button>
          <button
            type="button"
            onClick={() => setShowApiSettings(!showApiSettings)}
            className="border border-gray-300 bg-gray-50 hover:bg-gray-100 text-gray-700 px-2.5 py-1 cursor-pointer font-medium"
          >
            {showApiSettings ? 'Hide Endpoint' : 'API Endpoint'}
          </button>
        </div>
      </div>

      {/* Optional API Endpoint Config */}
      {showApiSettings && (
        <div className="border border-blue-200 bg-blue-50 p-3 text-xs space-y-1.5">
          <label className="block font-bold text-gray-700">
            FastAPI Backend Endpoint URL:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={apiUrl}
              onChange={(e) => setApiUrl(e.target.value)}
              placeholder="https://apply-fragile-thaw.ngrok-free.dev/predict"
              className="flex-1 border border-gray-300 bg-white p-1.5 font-mono text-xs"
            />
            <button
              type="button"
              onClick={() => setApiUrl('https://apply-fragile-thaw.ngrok-free.dev/predict')}
              className="border border-gray-300 bg-white hover:bg-gray-100 px-2 py-1 text-gray-700 cursor-pointer"
            >
              Reset to Default URL
            </button>
          </div>
          <p className="text-[11px] text-gray-600">
            Ensure your FastAPI backend has CORS enabled: <code className="bg-white px-1 py-0.5 border border-gray-200 font-mono">CORSMiddleware(allow_origins=["*"])</code>
          </p>
        </div>
      )}

      {/* Validation Message */}
      {validationError && (
        <div className="border border-red-300 bg-red-50 text-red-700 text-xs p-2.5">
          <strong>Validation Error:</strong> {validationError}
        </div>
      )}

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* 1. Age */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Age *
          </label>
          <input
            type="number"
            min="1"
            max="120"
            placeholder="Enter age (e.g. 45)"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border border-gray-300 p-2 text-sm"
            required
          />
        </div>

        {/* 2. Gender */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Gender *
          </label>
          <div className="flex gap-4 text-sm text-gray-700">
            {['Male', 'Female', 'Other'].map((g) => (
              <label key={g} className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={gender === g}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span>{g}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 3. BMI */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            BMI (Body Mass Index) *
          </label>
          <input
            type="number"
            step="0.1"
            placeholder="Enter BMI (e.g. 24.5)"
            value={bmi}
            onChange={(e) => setBmi(e.target.value)}
            className="w-full border border-gray-300 p-2 text-sm"
            required
          />
        </div>

        {/* 4. Blood Pressure Level */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Blood Pressure Level *
          </label>
          <select
            value={bloodPressure}
            onChange={(e) => setBloodPressure(e.target.value)}
            className="w-full border border-gray-300 p-2 text-sm bg-white"
            required
          >
            <option value="">-- Select Blood Pressure Level --</option>
            <option value="Normal">Normal (&lt; 120/80 mmHg)</option>
            <option value="Elevated">Elevated (120-129 / &lt; 80 mmHg)</option>
            <option value="Stage 1 Hypertension">Stage 1 Hypertension (130-139 / 80-89 mmHg)</option>
            <option value="Stage 2 Hypertension">Stage 2 Hypertension (&ge; 140 / &ge; 90 mmHg)</option>
            <option value="Low Blood Pressure">Low Blood Pressure (&lt; 90/60 mmHg)</option>
          </select>
        </div>

        {/* 5. Smoking Habit */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Smoking Habit *
          </label>
          <div className="flex gap-4 text-sm text-gray-700">
            {['Non-Smoker', 'Occasional', 'Regular'].map((s) => (
              <label key={s} className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="smoking"
                  value={s}
                  checked={smokingHabit === s}
                  onChange={(e) => setSmokingHabit(e.target.value)}
                />
                <span>{s}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 6. Alcohol Consumption */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Alcohol Consumption *
          </label>
          <div className="flex gap-4 text-sm text-gray-700">
            {['None', 'Occasional', 'Regular'].map((a) => (
              <label key={a} className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="alcohol"
                  value={a}
                  checked={alcoholConsumption === a}
                  onChange={(e) => setAlcoholConsumption(e.target.value)}
                />
                <span>{a}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 7. Physical Activity */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Physical Activity *
          </label>
          <select
            value={physicalActivity}
            onChange={(e) => setPhysicalActivity(e.target.value)}
            className="w-full border border-gray-300 p-2 text-sm bg-white"
            required
          >
            <option value="">-- Select Physical Activity Level --</option>
            <option value="Sedentary">Sedentary (No exercise)</option>
            <option value="Moderate">Moderate (3-4 days/week)</option>
            <option value="Active">Active (Daily exercise)</option>
          </select>
        </div>

        {/* 8. Family Medical History */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Family Medical History
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
            {['Diabetes', 'High Blood Pressure', 'Heart Disease', 'High Cholesterol'].map((item) => (
              <label key={item} className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={familyMedicalHistory.includes(item)}
                  onChange={() => handleCheckboxChange(item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 9. Blood Sugar Level */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Blood Sugar Level <span className="text-gray-400 font-normal text-xs">(Optional)</span>
          </label>
          <input
            type="text"
            placeholder="e.g. 95 mg/dL or Normal"
            value={bloodSugarLevel}
            onChange={(e) => setBloodSugarLevel(e.target.value)}
            className="w-full border border-gray-300 p-2 text-sm"
          />
        </div>

        {/* Submit & Reset Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            id="btn-submit-form"
            disabled={loading}
            className={`font-bold px-6 py-2 border text-sm flex items-center gap-2 cursor-pointer ${
              loading
                ? 'bg-blue-300 border-blue-400 text-white cursor-not-allowed'
                : 'bg-[#3b82f6] hover:bg-blue-600 text-white border-blue-700'
            }`}
          >
            {loading ? (
              <>
                {/* Simple CSS Loading Spinner */}
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Calculating Risk...</span>
              </>
            ) : (
              <span>Check Risk</span>
            )}
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            disabled={loading}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-4 py-2 border border-gray-300 cursor-pointer text-sm"
          >
            Reset
          </button>
        </div>
      </form>

      {/* Loading Indicator Box */}
      {loading && (
        <div className="border border-blue-200 bg-blue-50 p-3 text-xs text-blue-800 flex items-center gap-2">
          <span className="inline-block w-3.5 h-3.5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></span>
          <span>Sending request to FastAPI backend (<code className="font-mono">{apiUrl}</code>)...</span>
        </div>
      )}

      {/* Error Message Box */}
      {apiError && !loading && (
        <div className="border border-red-300 bg-red-50 p-4 text-sm text-red-900 space-y-2">
          <p className="font-bold text-red-800">Connection Error:</p>
          <p className="text-xs text-red-700 leading-relaxed">{apiError}</p>
          
          <div className="border-t border-red-200 pt-2 text-xs text-gray-700">
            <p className="font-semibold mb-1">FastAPI Troubleshooting Tips for Mini Project:</p>
            <ul className="list-disc list-inside space-y-0.5 text-[11px] text-gray-600">
              <li>Start your backend in terminal: <code className="bg-white px-1 py-0.5 border border-gray-300 font-mono">uvicorn main:app --reload --port 8000</code></li>
              <li>Ensure CORS middleware is enabled in FastAPI:
                <pre className="bg-white p-2 mt-1 border border-gray-300 font-mono text-[10px] overflow-x-auto">
{`from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)`}
                </pre>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Result Card: Displayed right below Check Risk button when API returns response */}
      {result && !loading && (
        <div className="border-2 border-gray-300 p-5 bg-white space-y-4">
          <div className="border-b border-gray-200 pb-2 flex justify-between items-center">
            <h3 className="font-bold text-base text-gray-900">
              Prediction Result
            </h3>
            <span className="text-xs text-gray-500 font-mono">
              FastAPI Response (200 OK)
            </span>
          </div>

          {/* Top Row: 3 Separate Equal-Width Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            
            {/* Box 1: RISK LEVEL */}
            <div className={`border p-4 text-center flex flex-col justify-center items-center ${getRiskColorClasses(getDisplayLevel(result))}`}>
              <div className="text-[11px] font-bold uppercase tracking-wider mb-1.5 opacity-90">
                RISK LEVEL
              </div>
              <div className="text-xl font-extrabold tracking-tight">
                {getDisplayLevel(result)}
              </div>
            </div>

            {/* Box 2: SUSPECTED CONDITION / TARGET DISEASE */}
            <div className="border border-blue-300 bg-blue-50/70 p-4 text-center flex flex-col justify-center items-center text-blue-950">
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-800 mb-1.5">
                SUSPECTED CONDITION / TARGET DISEASE
              </div>
              <div className="text-lg font-bold text-blue-900 leading-snug">
                {getTargetDisease(result)}
              </div>
            </div>

            {/* Box 3: CALCULATED RISK PROBABILITY */}
            <div className="border border-indigo-300 bg-indigo-50/70 p-4 text-center flex flex-col justify-center items-center text-indigo-950">
              <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-800 mb-1.5">
                CALCULATED RISK PROBABILITY
              </div>
              <div className="text-xl font-extrabold text-indigo-900">
                {getDisplayPercentage(result)}
              </div>
            </div>

          </div>

          {/* Bottom Full-Width Rectangle Card: Recommendations array in clean bullet points */}
          <div className="border border-gray-300 bg-gray-50 p-4 w-full">
            <h4 className="font-bold text-xs uppercase tracking-wider text-gray-700 mb-2.5 border-b border-gray-200 pb-1.5">
              Recommendations & Guidance
            </h4>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-800">
              {getRecommendations(result).map((rec, idx) => (
                <li key={idx} className="leading-relaxed pl-1">
                  {rec}
                </li>
              ))}
            </ul>
          </div>

          {/* Input Summary */}
          <div className="text-[11px] text-gray-500 border-t border-gray-200 pt-2 flex flex-wrap gap-x-4 gap-y-1">
            <span>Age: <strong>{age}</strong></span>
            <span>Gender: <strong>{gender}</strong></span>
            <span>BMI: <strong>{bmi}</strong></span>
            <span>BP: <strong>{bloodPressure}</strong></span>
            <span>Smoking: <strong>{smokingHabit}</strong></span>
            <span>Activity: <strong>{physicalActivity}</strong></span>
          </div>
        </div>
      )}
    </div>
  );
};
