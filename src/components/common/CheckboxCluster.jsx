import React from 'react';

/**
 * CheckboxCluster
 * ---------------
 * Renders a horizontal group of checkboxes with custom colors.
 * Props:
 *  - options : [{ value:string, label:string, colorClass:string }]
 *  - selected : object { [value]:bool }
 *  - onToggle : function(value) => void
 */
const CheckboxCluster = ({ options = [], selected = {}, onToggle }) => (
  <div className="flex items-center space-x-4">
    {options.map(({ value, label, colorClass }) => (
      <div key={value} className="flex items-center">
        <input
          type="checkbox"
          id={value}
          checked={!!selected[value]}
          onChange={() => onToggle && onToggle(value)}
          className={`w-3 h-3 ${colorClass} border-gray-300 rounded focus:ring-1 ${colorClass.replace('text-', 'focus:ring-')}`}
        />
        <label htmlFor={value} className={`ml-1 text-xs font-medium ${colorClass}`}>
          {label}
        </label>
      </div>
    ))}
  </div>
);

export default CheckboxCluster; 