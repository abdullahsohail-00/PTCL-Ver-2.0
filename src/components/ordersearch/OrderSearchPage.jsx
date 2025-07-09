// OrderSearchPage.jsx
import React, { useState } from 'react';
import OrderFilters from './OrderFilters';
import OrdersTable from './OrdersTable';
import OrderDetailsTable from './OrderDetailsTable';

const PTCLHeader = ({ title, subtitle }) => (
  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-t-lg p-3 text-white shadow-lg mb-0">
    <div className="flex items-center justify-between">
      {/* Logo */}
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
          {/* fallback icon */}
        </div>
      </div>
      {/* Title */}
      <div className="flex-1 text-center">
        <h1 className="text-sm font-bold">{title}</h1>
        <p className="text-green-100 text-xs">{subtitle}</p>
      </div>
      {/* Security Badge (optional) */}
      <div className="flex items-center space-x-1 bg-white bg-opacity-20 px-2 py-1 rounded-full">
        <span className="text-xs">Order System</span>
      </div>
    </div>
  </div>
);

const OrderSearchPage = () => {
  const [showTables, setShowTables] = useState(false);

  // Handler for filter form submit
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    setShowTables(true);
  };

  // Handler for back button
  const handleBack = () => setShowTables(false);

  return (
    <div className="w-full max-w-full mx-auto">
      <PTCLHeader 
        title="Order Details Search"
        subtitle={showTables ? 'View and manage PTCL orders' : 'Search for PTCL orders by filters'}
      />
      <div className="bg-gray-50 border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg p-0 w-full">
        {!showTables ? (
          <div className="p-6">
            <form onSubmit={handleFilterSubmit}>
              <OrderFilters />
            </form>
          </div>
        ) : (
          <div className="p-0">
            <div className="flex justify-between items-center px-6 pt-6 pb-2">
              <button
                onClick={handleBack}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-lg text-xs font-semibold hover:from-green-600 hover:to-green-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                ← Back to Search
              </button>
              <span className="text-xs text-gray-500">Showing results for selected filters</span>
            </div>
            <div className="px-2 pb-6 w-full">
              {/* Pending Orders Table */}
              <div className="w-full mb-8">
                <div className="w-full">
                  <OrdersTable />
                </div>
              </div>
              {/* Order Details Table */}
              <div className="w-full">
                <div className="w-full">
                  <OrderDetailsTable />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSearchPage; 