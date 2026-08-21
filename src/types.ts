/**
 * Types and Interfaces for Early Disease Risk Prediction System
 * B.Tech College Mini Project (Phase-1 Frontend Prototype)
 */

// Interface for storing the lifestyle and medical history inputs
export interface RiskFormData {
  age: string;
  gender: 'Male' | 'Female' | 'Other' | '';
  heightCm?: string; // Optional helper for BMI calculation
  weightKg?: string; // Optional helper for BMI calculation
  bmi: string;
  bloodPressure: string;
  smokingHabit: 'Non-Smoker' | 'Occasional' | 'Regular' | '';
  alcoholConsumption: 'None' | 'Occasional' | 'Regular' | '';
  physicalActivity: 'Sedentary (Low)' | 'Moderate (3-4 days/week)' | 'Active (Daily)' | '';
  familyMedicalHistory: string[];
  bloodSugarLevel: string; // Optional: Fasting Blood Sugar (mg/dL) or status
}

// Initial default empty state for the form
export const initialFormData: RiskFormData = {
  age: '',
  gender: '',
  heightCm: '',
  weightKg: '',
  bmi: '',
  bloodPressure: '',
  smokingHabit: '',
  alcoholConsumption: '',
  physicalActivity: '',
  familyMedicalHistory: [],
  bloodSugarLevel: '',
};

// Sample dummy dataset for quick testing during viva/demonstration
export const sampleStudentData: RiskFormData = {
  age: '45',
  gender: 'Male',
  heightCm: '172',
  weightKg: '78',
  bmi: '26.4',
  bloodPressure: '135/85 (Prehypertension)',
  smokingHabit: 'Occasional',
  alcoholConsumption: 'Occasional',
  physicalActivity: 'Sedentary (Low)',
  familyMedicalHistory: ['Diabetes', 'Hypertension'],
  bloodSugarLevel: '110 mg/dL (Borderline)',
};
