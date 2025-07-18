import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

/**
 * SearchBar
 * ---------
 * Generic text input with an inline search icon/button.
 * Props:
 *  - value (string)
 *  - onChange (function), receives new value
 *  - onSearch (function)  : called when icon clicked or Enter pressed
 *  - placeholder (string)
 *  - className (string)   : additional wrapper classes (optional)
 *  - inputClass (string)  : additional classes for the input element (optional)
 */
const SearchBar = ({
  value,
  onChange,
  onSearch,
  placeholder = 'Search...',
  className = '',
  inputClass = ''
}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && typeof onSearch === 'function') {
      onSearch();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => typeof onChange === 'function' && onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className={`w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 hover:border-gray-400 transition-all duration-200 ${inputClass}`}
      />
      <SearchIcon
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 cursor-pointer hover:text-green-500"
        onClick={() => typeof onSearch === 'function' && onSearch()}
      />
    </div>
  );
};

export default SearchBar; 