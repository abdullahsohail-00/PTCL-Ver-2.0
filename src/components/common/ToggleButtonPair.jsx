import React from 'react';

/**
 * ToggleButtonPair
 * ----------------
 * Two-option segmented control (e.g., Map / Satellite).
 * Props:
 *  - value (string)          : currently selected value
 *  - onChange (func)         : newValue => void
 *  - options (array)         : [{ value, label, icon:IconComponent }]
 *  - size (string)           : 'sm' | 'md' (affects padding)
 */
const sizeClasses = {
  sm: 'px-3 py-1 text-xs',
  md: 'px-4 py-2 text-sm'
};

const ToggleButtonPair = ({ value, onChange, options, size = 'sm' }) => (
  <div className="flex items-center space-x-1 bg-gray-100 rounded">
    {options.map(({ value: val, label, icon: Icon }) => {
      const selected = value === val;
      return (
        <button
          key={val}
          onClick={() => onChange && onChange(val)}
          className={`flex items-center rounded transition-all duration-200 ${sizeClasses[size]} ${
            selected ? 'bg-green-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'
          }`}
        >
          {Icon && <Icon className="w-3 h-3 inline mr-1" />}
          {label}
        </button>
      );
    })}
  </div>
);

export default ToggleButtonPair; 