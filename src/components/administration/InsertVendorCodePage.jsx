import React, { useState, useEffect } from 'react';
import { User, Search, Download, Edit, Plus } from 'lucide-react';
import HeaderSection from '../common/HeaderSection';
import SearchBar from '../common/SearchBar';
import ResultsTable from '../common/ResultsTable';
import ModalDialog from '../common/ModalDialog';

const InsertVendorCodePage = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    vendorCode: '',
    vendorName: ''
  });

  const [showResults, setShowResults] = useState(false);
  const [showInsertDialog, setShowInsertDialog] = useState(false);
  const [newVendor, setNewVendor] = useState({
    vendorName: '',
    vendorCode: ''
  });

  // Add custom styles for scrollbar
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .custom-table-scroll::-webkit-scrollbar {
        height: 10px;
      }
      .custom-table-scroll::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }
      .custom-table-scroll::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
      }
      .custom-table-scroll::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleSearchChange = (field, value) => {
    setSearchCriteria(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    setShowResults(true);
    console.log('Searching with criteria:', searchCriteria);
  };

  const handleExportToExcel = () => {
    console.log('Exporting to Excel...');
    alert('Exporting data to Excel...');
  };

  const handleInsertData = () => {
    setShowInsertDialog(true);
  };

  const handleSaveNewVendor = () => {
    console.log('Saving new vendor:', newVendor);
    setShowInsertDialog(false);
    setNewVendor({ vendorName: '', vendorCode: '' });
    // Add vendor to list
    alert('Vendor code inserted successfully!');
  };

  const handleEdit = (vendor) => {
    console.log('Editing vendor:', vendor);
    setNewVendor({ vendorName: vendor.vendorName, vendorCode: vendor.vendorCode });
    setShowInsertDialog(true);
  };

  // Sample vendor data based on the screenshot
  const vendorData = [
    { id: 1627, vendorCode: '4090', vendorName: 'SME', salesPointName: '-' },
    { id: 1626, vendorCode: '4305387', vendorName: 'Sughra rana', salesPointName: '-' },
    { id: 1625, vendorCode: '132449', vendorName: 'ZAHOOR AND CO', salesPointName: '-' },
    { id: 1624, vendorCode: '4305377', vendorName: 'KomKonsult Private Limited', salesPointName: 'RD_K2_KOMKONSULT' },
    { id: 1623, vendorCode: '2222', vendorName: 'RDUCMOTELE', salesPointName: '-' },
    { id: 1622, vendorCode: '333', vendorName: 'Ufone Franchises', salesPointName: '-' },
    { id: 1621, vendorCode: '4305376', vendorName: 'RDU_Q_MOEEZCOM', salesPointName: '-' },
    { id: 1620, vendorCode: '6210936', vendorName: 'RDU_F_BRITRAJPTELE', salesPointName: '-' },
    { id: 1619, vendorCode: '6211176', vendorName: 'RDU_F_HASEBTELECOM', salesPointName: '-' },
    { id: 1618, vendorCode: '6210720', vendorName: 'RDU_F_BANACOMM', salesPointName: '-' },
    { id: 1617, vendorCode: '6211025', vendorName: 'RDU_M_LATIFCOMM', salesPointName: '-' },
    { id: 1616, vendorCode: '6211026', vendorName: 'RDU_M_FATIMACOMM', salesPointName: '-' },
    { id: 1615, vendorCode: '6211156', vendorName: 'RDU_M_PARMADINATE', salesPointName: '-' },
    { id: 1614, vendorCode: '6211160', vendorName: 'RDU_M_PAKISTANCOMM', salesPointName: '-' },
    { id: 1613, vendorCode: '6211179', vendorName: 'RDU_F_MATENTELECOM', salesPointName: '-' }
  ];

  // After vendorData definition, add columns array
  const columns = [
    { key: 'id', label: 'Vendor ID' },
    { key: 'vendorCode', label: 'Vendor Code' },
    { key: 'vendorName', label: 'Vendor Name' },
    { key: 'salesPointName', label: 'Sales Point Name' }
  ];

  return (
    <div className="h-full w-full flex flex-col bg-gray-50">
      <HeaderSection title="Insert Vendor Code" subtitle="Manage and insert vendor codes" />

      {/* Main Content */}
      <div className="bg-white mx-4 mb-4 rounded-b-lg shadow-lg flex-1 overflow-hidden">
        {/* Search Section */}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-wrap items-end gap-4 justify-center">
            {/* Vendor Code / Name Selection */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Vendor Code / Vendor Name:</label>
              <select
                value={searchCriteria.vendorCode}
                onChange={(e) => handleSearchChange('vendorCode', e.target.value)}
                className="px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option value="">Please Select</option>
                <option value="4090">4090 - SME</option>
                <option value="4305387">4305387 - Sughra rana</option>
                <option value="132449">132449 - ZAHOOR AND CO</option>
                <option value="4305377">4305377 - KomKonsult Private Limited</option>
              </select>
            </div>

            {/* Search Field */}
            <SearchBar
              value={searchCriteria.vendorName}
              onChange={(v) => handleSearchChange('vendorName', v)}
              onSearch={handleSearch}
              placeholder="Search vendor..."
              className="w-full max-w-md"
            />

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded text-xs font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md flex items-center space-x-1"
              >
                <Search className="w-3 h-3" />
                <span>Search</span>
              </button>
              
              <button
                onClick={handleExportToExcel}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded text-xs font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md flex items-center space-x-1"
              >
                <Download className="w-3 h-3" />
                <span>Export to Excel</span>
              </button>
            </div>
          </div>
        </div>

        {/* Insert Data Section */}
        <div className="p-4 bg-white border-b border-gray-200">
          <button
            onClick={handleInsertData}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded text-xs font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md flex items-center space-x-1"
          >
            <Plus className="w-3 h-3" />
            <span>Insert Data</span>
          </button>
        </div>

        {/* Content */}
        {!showResults ? (
          <div className="p-8 text-center text-gray-500">
            <Plus className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-sm">Please select vendor code or search to view vendor codes</p>
          </div>
        ) : (
          <div className="p-4 overflow-auto">
            <ResultsTable
              columns={columns}
              rows={vendorData}
              renderActions={(row) => (
                <button
                  onClick={() => handleEdit(row)}
                  className="bg-orange-100 hover:bg-orange-200 text-orange-700 p-1.5 rounded transition-colors"
                >
                  <Edit className="w-3 h-3" />
                </button>
              )}
              pagination={{ currentPage: 1, totalPages: 10, onPageChange: (p)=>console.log('page', p) }}
            />
          </div>
        )}
      </div>

      {/* Insert Data Dialog */}
      {showInsertDialog && (
        <ModalDialog
          isOpen={showInsertDialog}
          onClose={() => setShowInsertDialog(false)}
          title="Insert Data"
          icon={Plus}
          primaryLabel="Insert"
          onPrimary={handleSaveNewVendor}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vendor Name<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                value={newVendor.vendorName}
                onChange={(e) => setNewVendor(prev => ({ ...prev, vendorName: e.target.value }))}
                className="w-full px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Enter vendor name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vendor Code<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                value={newVendor.vendorCode}
                onChange={(e) => setNewVendor(prev => ({ ...prev, vendorCode: e.target.value }))}
                className="w-full px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Enter vendor code"
              />
            </div>
          </div>
        </ModalDialog>
      )}
    </div>
  );
};

export default InsertVendorCodePage;