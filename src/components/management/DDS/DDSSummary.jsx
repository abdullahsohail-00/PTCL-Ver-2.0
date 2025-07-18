import React, { useState } from 'react';
import { Download } from 'lucide-react';
import HeaderSection from '../../common/HeaderSection';
import FormField from '../../common/FormField';
import FormActions from '../../common/FormActions';

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
      <HeaderSection title="DDS Summary" subtitle="Filter and export DDS Summary" />
      <div className="bg-white mx-4 mb-4 rounded-b-lg shadow-lg flex-1 overflow-hidden flex items-center justify-center">
        <form onSubmit={handleExportToExcel} className="w-full max-w-md p-8 flex flex-col items-center border border-green-200 rounded-lg shadow-lg bg-white mt-8 mb-8">
          <div className="w-full grid grid-cols-1 gap-6 mb-6">
            <FormField
              label="From Date"
              type="date"
              value={filters.fromDate}
              onChange={value => handleFilterChange('fromDate', value)}
              required
            />
            <FormField
              label="To Date"
              type="date"
              value={filters.toDate}
              onChange={value => handleFilterChange('toDate', value)}
              required
            />
          </div>
          {error && <div className="text-red-600 text-xs mb-4">{error}</div>}
          <FormActions
            primaryLabel="Export to Excel"
            onPrimary={handleExportToExcel}
          />
        </form>
      </div>
    </div>
  );
};

export default DDSSummary; 




