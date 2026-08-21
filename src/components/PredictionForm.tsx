import React, { useState } from 'react';

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

  // Submission state
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string>('');

  // Handle family history checkbox toggle
  const handleCheckboxChange = (disease: string) => {
    if (familyMedicalHistory.includes(disease)) {
      setFamilyMedicalHistory(familyMedicalHistory.filter((item) => item !== disease));
    } else {
      setFamilyMedicalHistory([...familyMedicalHistory, disease]);
    }
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation check
    if (!age || !gender || !bmi || !bloodPressure || !smokingHabit || !alcoholConsumption || !physicalActivity) {
      setValidationError('Please fill in all the required fields.');
      setIsSubmitted(false);
      return;
    }

    setValidationError('');
    setIsSubmitted(true);
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
    setIsSubmitted(false);
    setValidationError('');
  };

  return (
    <div className="border border-gray-300 p-5 sm:p-6 bg-white space-y-5">
      <div className="border-b border-gray-200 pb-2">
        <h2 className="text-lg font-bold text-[#3b82f6]">
          Risk Prediction Form
        </h2>
        <p className="text-xs text-gray-600">
          Enter your lifestyle and medical details below.
        </p>
      </div>

      {/* Validation Message */}
      {validationError && (
        <div className="border border-red-300 bg-red-50 text-red-700 text-xs p-2.5">
          {validationError}
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

        {/* 4. Blood Pressure */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Blood Pressure *
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
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            id="btn-submit-form"
            className="bg-[#3b82f6] hover:bg-blue-600 text-white font-bold px-5 py-2 border border-blue-700 cursor-pointer text-sm"
          >
            Check Risk
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-4 py-2 border border-gray-300 cursor-pointer text-sm"
          >
            Reset
          </button>
        </div>
      </form>

      {/* Output Message after Submit */}
      {isSubmitted && (
        <div className="border border-blue-300 bg-blue-50 p-4 text-sm text-blue-900 mt-4">
          <p className="font-bold mb-1">Status:</p>
          <p>Prediction model will be added in the next phase.</p>
        </div>
      )}
    </div>
  );
};
