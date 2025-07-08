import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import VendorInfoDisplay from '../forms/VendorInfoDisplay';

const Layout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('new-customer');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      {/* Sidebar */}
      <Sidebar 
        collapsed={sidebarCollapsed}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        toggleSidebar={toggleSidebar}
      />
      
      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        sidebarCollapsed ? 'ml-14' : 'ml-52'
      }`}>
        
        {/* Top Bar */}
        <TopBar />
        
        {/* Notice Banner */}
        <div className="mx-6 mt-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-l-blue-400 border border-blue-200 rounded-r-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                <span className="text-blue-600 text-sm">ℹ️</span>
              </div>
              <div>
                <p className="text-xs text-blue-800 leading-relaxed">
                  <strong className="font-semibold">Important Notice:</strong> Dear User, You are requested to verify your info displayed on this page & send correct info to HQs Sales team for update, if incorrect/missing. In case of any wrong info, user will not be eligible for sale incentives. Thank you.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content Area - Full Width Vendor Form */}
        <div className="flex-1 p-4">
          <div className="max-w-6xl mx-auto">
            <VendorInfoDisplay />
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-gradient-to-r from-green-600 to-green-700 text-white py-3 mt-6 shadow-lg">
          <div className="px-6">
            <div className="text-center">
              <p className="text-xs font-medium">© 2025 PTCL. All rights reserved. Developed & Powered by PTCL IT Team</p>
            </div>
          </div>
        </footer>
        
      </div>
    </div>
  );
};

export default Layout;