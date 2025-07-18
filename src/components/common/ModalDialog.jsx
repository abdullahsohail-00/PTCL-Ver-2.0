import React from 'react';
import { X } from 'lucide-react';

/**
 * ModalDialog
 * -----------
 * Simple centered modal with overlay.
 * Props:
 *  - isOpen (bool)             : controls visibility
 *  - onClose (func)            : called when overlay/cancel/close icon clicked
 *  - title (string | node)
 *  - icon  (React component)   : optional icon shown before title
 *  - children (node)           : body content
 *  - primaryLabel (string)     : primary button label
 *  - onPrimary (func)
 *  - secondaryLabel (string)   : secondary button label (defaults Cancel)
 */
const ModalDialog = ({
  isOpen,
  onClose,
  title,
  icon: Icon = null,
  children,
  primaryLabel = 'Save',
  onPrimary = null,
  secondaryLabel = 'Cancel'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-96 relative animate-fadeIn">
        {/* Close icon */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title */}
        {title && (
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            {Icon && (
              <div className="p-2 bg-green-100 rounded-md mr-2">
                <Icon className="w-5 h-5 text-green-600" />
              </div>
            )}
            {title}
          </h3>
        )}

        {/* Body */}
        <div className="space-y-4">{children}</div>

        {/* Footer */}
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            {secondaryLabel}
          </button>
          <button
            onClick={onPrimary}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md"
          >
            {primaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDialog; 