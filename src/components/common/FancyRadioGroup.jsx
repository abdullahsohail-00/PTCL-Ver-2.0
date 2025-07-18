import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

/**
 * FancyRadioGroup
 * ---------------
 * A visually rich radio-button grid (taken from ExistingCustomerNewOrder design).
 * Props:
 *  - label (string)
 *  - value (string)
 *  - onChange (func)
 *  - options (array[string])
 *  - required (bool)
 *  - error (string)
 */
const FancyRadioGroup = ({ label, value, onChange, options = [], required = false, error = '' }) => (
  <div className="group">
    <div className="mb-1">
      <label className="block text-xs font-medium text-gray-700 mb-3">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {options.map((option, index) => (
          <label key={index} className="relative cursor-pointer group">
            <input
              type="radio"
              value={option}
              checked={value === option}
              onChange={(e) => onChange && onChange(e.target.value)}
              className="sr-only"
            />
            <div
              className={`
                relative flex items-center justify-center px-4 py-3 rounded-xl border-2 transition-all duration-300
                ${
                  value === option
                    ? 'border-green-500 bg-green-50 shadow-lg shadow-green-100'
                    : 'border-gray-300 bg-white hover:border-green-300 hover:bg-green-50'
                }
                group-hover:transform group-hover:scale-105
              `}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`
                    w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300
                    ${
                      value === option
                        ? 'border-green-500 bg-green-500'
                        : 'border-gray-300 bg-white group-hover:border-green-400'
                    }
                  `}
                >
                  {value === option && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                </div>
                <span
                  className={`
                    text-sm font-semibold transition-all duration-300
                    ${value === option ? 'text-green-700' : 'text-gray-700'}
                  `}
                >
                  {option}
                </span>
              </div>
              {value === option && (
                <div className="absolute top-1 right-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
              )}
            </div>
          </label>
        ))}
      </div>
      {error && (
        <div className="flex items-center mt-2 text-red-600">
          <AlertCircle className="w-3 h-3 mr-1" />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  </div>
);

export default FancyRadioGroup; 