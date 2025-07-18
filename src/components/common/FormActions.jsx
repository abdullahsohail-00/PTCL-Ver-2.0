import React from 'react';
import { CheckCircle } from 'lucide-react';

/**
 * FormActions
 * -----------
 * Provides a centered primary action button and optional secondary buttons.
 * Props:
 *  - primaryLabel (string)
 *  - onPrimary (func)
 *  - primaryDisabled (bool)
 *  - isSubmitting (bool)   : when true shows spinner & disabled
 *  - secondary (array)     : [{label, onClick}]
 */
const FormActions = ({
  primaryLabel = 'Submit',
  onPrimary,
  primaryDisabled = false,
  isSubmitting = false,
  secondary = []
}) => (
  <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
    <div className="flex justify-center gap-2 flex-wrap">
      {/* Secondary buttons */}
      {secondary.map(({ label, onClick }, idx) => (
        <button
          key={idx}
          type="button"
          onClick={onClick}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-300 transition-all duration-200"
        >
          {label}
        </button>
      ))}

      {/* Primary button */}
      <button
        type="button"
        onClick={onPrimary}
        disabled={primaryDisabled || isSubmitting}
        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-2 rounded-lg text-xs font-semibold hover:from-green-600 hover:to-green-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
      >
        {isSubmitting ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2" />
            Submitting...
          </div>
        ) : (
          <>
            <CheckCircle className="w-3 h-3 mr-2" />
            {primaryLabel}
          </>
        )}
      </button>
    </div>
  </div>
);

export default FormActions; 