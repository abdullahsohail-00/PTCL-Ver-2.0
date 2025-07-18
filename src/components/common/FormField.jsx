import React from 'react';
import { AlertCircle } from 'lucide-react';

/**
 * FormField
 * ---------
 * Handles both <input> and <select> rendering with unified styling / validation.
 * Props:
 *  - label (string)
 *  - value (string | number)
 *  - onChange (function)
 *  - type (string)          : input type, defaults to 'text'
 *  - required (boolean)
 *  - options (array|null)   : if provided, renders a <select> with given options
 *  - error (string)         : validation message displayed underneath
 *  - placeholder (string)
 *  - className (string)
 */
const FormField = ({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  options = null,
  error = '',
  placeholder = '',
  className = ''
}) => (
  <div className={`group ${className}`}>
    <div className="mb-1">
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`relative ${error ? 'border-red-300' : 'border-gray-300'} focus-within:border-green-500 transition-all duration-200`}
      >
        {options ? (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 hover:border-gray-400 transition-all duration-200"
          >
            <option value="">--Please Select--</option>
            {options.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 hover:border-gray-400 transition-all duration-200"
            placeholder={placeholder}
          />
        )}
      </div>
      {error && (
        <div className="flex items-center mt-1 text-red-600">
          <AlertCircle className="w-3 h-3 mr-1" />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  </div>
);

export default FormField; 