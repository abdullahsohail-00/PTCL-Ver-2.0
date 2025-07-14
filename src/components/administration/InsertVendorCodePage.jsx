import React, { useState, useEffect } from 'react';
import { User, Search, Download, Shield, Edit, Plus } from 'lucide-react';

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

  const ResultsTable = () => (
    <div className="w-full bg-white rounded-lg border border-gray-200 mb-6">
      <div className="w-full overflow-x-auto custom-table-scroll" style={{ maxHeight: '600px' }}>
        <table className="w-full">
          <thead className="bg-green-500 text-white sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Edit</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Vendor ID</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Vendor Code</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Vendor Name</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Sales Point Name</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {vendorData.map((vendor, index) => (
              <tr key={vendor.id} className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleEdit(vendor)}
                    className="bg-orange-100 hover:bg-orange-200 text-orange-700 p-1.5 rounded transition-colors"
                  >
                    <Edit className="w-3 h-3" />
                  </button>
                </td>
                <td className="px-4 py-3 text-xs font-medium text-gray-900">{vendor.id}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{vendor.vendorCode}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{vendor.vendorName}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{vendor.salesPointName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex items-center justify-center">
        <div className="flex space-x-1">
          <button className="px-3 py-1 text-xs bg-green-500 text-white rounded">1</button>
          <button className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded">2</button>
          <button className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded">3</button>
          <button className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded">4</button>
          <button className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded">5</button>
          <span className="px-3 py-1 text-xs text-gray-500">...</span>
          <button className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded">10</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full w-full flex flex-col bg-gray-50">
      {/* Header */}
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
              <Plus className="w-3 h-3" />
            </div>
          </div>
          
          <div className="flex-1 text-center px-2">
            <h1 className="text-sm font-bold">Insert Vendor Code</h1>
            <p className="text-green-100 text-xs hidden sm:block">Manage and insert vendor codes</p>
          </div>
          
          <div className="flex items-center space-x-1 bg-white bg-opacity-20 px-2 py-1 rounded-full">
            <Shield className="w-3 h-3" />
            <span className="text-xs hidden sm:inline">Secured</span>
          </div>
        </div>
      </div>

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
            <div className="w-full max-w-md">
              <input
                type="text"
                value={searchCriteria.vendorName}
                onChange={(e) => handleSearchChange('vendorName', e.target.value)}
                placeholder="Search vendor..."
                className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

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
            <ResultsTable />
          </div>
        )}
      </div>

      {/* Insert Data Dialog */}
      {showInsertDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-96">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <div className="p-2 bg-green-100 rounded-md mr-2">
                <Plus className="w-5 h-5 text-green-600" />
              </div>
              Insert Data
            </h3>
            
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

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setShowInsertDialog(false)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNewVendor}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md"
              >
                Insert
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsertVendorCodePage;