import React from 'react';
import { AlertCircle } from 'lucide-react';

/**
 * RadioGroup
 * ----------
 * Inline radio-button set with validation styling.
 * Props:
 *  - label (string)
 *  - value (string)
 *  - onChange (func)
 *  - options (array[string]) default ['YES','NO','Other']
 *  - required (boolean)
 *  - error (string)
 */
const RadioGroup = ({ label, value, onChange, options = ['YES', 'NO', 'Other'], required = false, error = '' }) => (
  <div className="mb-1">
    <label className="block text-xs font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="flex items-center space-x-4">
      {options.map((opt) => (
        <label key={opt} className="flex items-center text-xs font-medium text-gray-700">
          <input
            type="radio"
            name={label}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="mr-1 accent-green-500"
          />
          {opt}
        </label>
      ))}
    </div>
    {error && (
      <div className="flex items-center mt-1 text-red-600">
        <AlertCircle className="w-3 h-3 mr-1" />
        <span className="text-xs">{error}</span>
      </div>
    )}
  </div>
);

export default RadioGroup; 