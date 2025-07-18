import React from 'react';

/**
 * FileUploadRow
 * -------------
 * Label + "Choose File" button row with filename preview placeholder.
 * Props:
 *  - label (string)
 *  - fileName (string)     : currently selected file name (optional)
 *  - onChoose (func)       : callback when file selected, receives File object
 *  - className (string)
 */
const FileUploadRow = ({ label, fileName = 'No file chosen', onChoose, className = '' }) => {
  // Hidden input ref
  const inputRef = React.useRef(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file && onChoose) {
      onChoose(file);
    }
  };

  return (
    <div className={`group ${className}`}>
      <label className="block text-xs font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={handleClick}
          className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded text-xs font-medium text-gray-700 transition-colors border border-gray-300"
        >
          Choose File
        </button>
        <span className="text-xs text-gray-500 truncate max-w-xs">{fileName}</span>
        <input type="file" ref={inputRef} onChange={handleChange} className="hidden" />
      </div>
    </div>
  );
};

export default FileUploadRow; 