import React, { useState } from 'react';
import { Shield, List, CheckCircle, AlertCircle, Search, Filter, Download, RefreshCw } from 'lucide-react';

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
      {/* Header */}
      <div className="bg-gradient-to-t from-green-500 via-green-600 to-teal-600 rounded-t p-3 text-white shadow-md">
        <div className="flex items-center justify-between">
          
          <div className="flex-1 text-center">
            <h1 className="text-sm font-bold">Corporate Customer Orders</h1>
            <p className="text-green-100 text-xs">View and manage corporate orders</p>
          </div>
          
          
        </div>
      </div>
      
      {/* Content */}
      <div className="bg-white border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
        {/* Filters and Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-3 w-3 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-9 pr-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 hover:border-gray-400 transition-all duration-200"
              />
            </div>
            
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
        
        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mobile No
                </th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  City
                </th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Exchange
                </th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Region
                </th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Zone
                </th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NTN No
                </th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-xs font-medium text-gray-900">
                    {order.name}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">
                    {order.mobile}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">
                    {order.email}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500">
                    <div className="max-w-xs truncate">{order.address}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">
                    {order.city}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">
                    {order.exchange}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">
                    {order.region}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">
                    {order.zone}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full 
                      ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">
                    {order.ntn}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs font-medium">
                    <button className="text-green-600 hover:text-green-900">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredOrders.length === 0 && (
            <div className="bg-white p-8 text-center">
              <div className="flex flex-col items-center justify-center">
                <Search className="w-8 h-8 text-gray-400 mb-2" />
                <h3 className="text-sm font-medium text-gray-900">No orders found</h3>
                <p className="text-xs text-gray-500 mt-1">Try adjusting your search or filter to find what you're looking for.</p>
              </div>
            </div>
          )}
        </div>
        
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