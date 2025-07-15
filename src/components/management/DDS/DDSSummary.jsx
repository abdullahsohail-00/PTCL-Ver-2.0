import React, { useState } from 'react';
import { Shield, Search, Filter, Download } from 'lucide-react';

const DDSSummary = () => {
  const [filters, setFilters] = useState({
    fromDate: '',
    toDate: ''
  });
  const [error, setError] = useState('');

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleExportToExcel = (e) => {
    e.preventDefault();
    if (!filters.fromDate || !filters.toDate) {
      setError('Both dates are required');
      return;
    }
    setError('');
    alert('Exporting to Excel...');
  };

  return (
    <div className="h-full w-full flex flex-col bg-gray-50">
      {/* Header - Consistent with OrderDetailsPage */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-t-lg p-3 text-white shadow-lg mx-4 mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://ptcl.com.pk/images/ptcl-logo-plain.svg" 
              alt="PTCL Logo" 
              className="h-6 w-auto object-contain bg-white p-1 rounded"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded flex items-center justify-center" style={{display: 'none'}}>
              <Search className="w-3 h-3" />
            </div>
          </div>
          <div className="flex-1 text-center px-2">
            <h1 className="text-sm font-bold">DDS Summary</h1>
            <p className="text-green-100 text-xs hidden sm:block">Filter and export DDS Summary</p>
          </div>
          <div className="flex items-center space-x-1 bg-white bg-opacity-20 px-2 py-1 rounded-full">
            <Shield className="w-3 h-3" />
            <span className="text-xs hidden sm:inline">Secured</span>
          </div>
        </div>
      </div>

      {/* Main Content - Card with Date Filters and Export Button */}
      <div className="bg-white mx-4 mb-4 rounded-b-lg shadow-lg flex-1 overflow-hidden flex items-center justify-center">
        <form onSubmit={handleExportToExcel} className="w-full max-w-md p-8 flex flex-col items-center border border-green-200 rounded-lg shadow-lg bg-white mt-8 mb-8">
          <div className="w-full grid grid-cols-1 gap-6 mb-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">From Date<span className="text-red-500">*</span></label>
              <input
                type="date"
                value={filters.fromDate}
                onChange={e => handleFilterChange('fromDate', e.target.value)}
                className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">To Date<span className="text-red-500">*</span></label>
              <input
                type="date"
                value={filters.toDate}
                onChange={e => handleFilterChange('toDate', e.target.value)}
                className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
            </div>
          </div>
          {error && <div className="text-red-600 text-xs mb-4">{error}</div>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export to Excel</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default DDSSummary; 




