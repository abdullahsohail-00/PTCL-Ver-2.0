import React, { useState } from 'react';
import { Filter, Download, RefreshCw } from 'lucide-react';
import HeaderSection from '../common/HeaderSection';
import SearchBar from '../common/SearchBar';
import ResultsTable from '../common/ResultsTable';

const CorporateCustomerOrders = () => {
  const [orders, setOrders] = useState([
    {
      name: "INSPECTOR GENERAL OF POLICE",
      mobile: "03332358471",
      email: "dtqspaab@gmail.com",
      address: "FLAT C 302 SRD FLOOR CIA POLICE RESIDENTIAL APPTT NEAR CIA CENTRE SADDER KARACHI",
      city: "Karachi",
      exchange: "EXCHGarden",
      region: "KTR-II",
      zone: "South",
      status: "Pending",
      ntn: "9030906-5"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState('All Zones');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate API refresh
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = Object.values(order).some(value => 
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesZone = selectedZone === 'All Zones' || order.zone === selectedZone;
    return matchesSearch && matchesZone;
  });

  const zones = ['All Zones', 'South', 'North', 'East', 'West'];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <HeaderSection title="Corporate Customer Orders" subtitle="View and manage corporate orders" />
      
      {/* Content */}
      <div className="bg-white border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
        {/* Filters and Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              onSearch={()=>{}}
              placeholder="Search orders..."
            />
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-3 w-3 text-gray-400" />
              </div>
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="block w-full pl-9 pr-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 hover:border-gray-400 transition-all duration-200"
              >
                {zones.map((zone, index) => (
                  <option key={index} value={zone}>{zone}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="flex items-center justify-center px-3 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
              >
                {isRefreshing ? (
                  <RefreshCw className="w-3 h-3 mr-1 animate-spin" />
                ) : (
                  <RefreshCw className="w-3 h-3 mr-1" />
                )}
                Refresh
              </button>
              <button className="flex items-center justify-center px-3 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all duration-200">
                <Download className="w-3 h-3 mr-1" />
                Export
              </button>
            </div>
          </div>
        </div>
        
        <ResultsTable
          columns={[
            { key: 'name', label: 'Name' },
            { key: 'mobile', label: 'Mobile No' },
            { key: 'email', label: 'Email' },
            { key: 'address', label: 'Address' },
            { key: 'city', label: 'City' },
            { key: 'exchange', label: 'Exchange' },
            { key: 'region', label: 'Region' },
            { key: 'zone', label: 'Zone' },
            { key: 'statusBadge', label: 'Status' },
            { key: 'ntn', label: 'NTN No' }
          ]}
          rows={filteredOrders.map((o)=>({
            ...o,
            statusBadge: (
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                o.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : o.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>{o.status}</span>
            )
          }))}
          renderActions={() => (
            <button className="text-green-600 hover:text-green-900 text-xs font-medium">View</button>
          )}
          pagination={{ currentPage:1, totalPages:1 }}
        />
        
        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="ml-2 relative inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-xs text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">1</span> of{' '}
                <span className="font-medium">1</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  disabled
                  className="relative inline-flex items-center px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  &lt;
                </button>
                <button
                  aria-current="page"
                  className="z-10 bg-green-50 border-green-500 text-green-600 relative inline-flex items-center px-3 py-1 border text-xs font-medium"
                >
                  1
                </button>
                <button
                  disabled
                  className="relative inline-flex items-center px-2 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  &gt;
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateCustomerOrders;