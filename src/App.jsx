import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import VendorInfoDisplay from '../forms/VendorInfoDisplay';
import StatsCards from '../dashboard/StatsCards';
import QuickActions from '../dashboard/QuickActions';
import RecentOrders from '../dashboard/RecentOrders';
import { Card, Badge } from '../ui';

const Layout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar 
        collapsed={sidebarCollapsed}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        toggleSidebar={toggleSidebar}
      />
      
      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        sidebarCollapsed ? 'ml-16' : 'ml-64'
      }`}>
        
        {/* Top Bar */}
        <TopBar />
        
        {/* Notice Banner */}
        <div className="mx-6 mt-4">
          <Card className="border-l-4 border-l-blue-400 bg-blue-50 border-blue-200" padding="p-4">
            <div className="flex items-center">
              <Badge variant="info" className="mr-3">ℹ️</Badge>
              <div>
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Dear User, You are requested to verify your info displayed on this page & send correct info to HQs Sales team for update, if incorrect/missing. In case of any wrong info, user will not be eligible for sale incentives. Thank you.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            
            {/* Left Column - Vendor Info (Static) */}
            <div className="xl:col-span-1">
              <VendorInfoDisplay />
            </div>
            
            {/* Right Column - Dashboard Content */}
            <div className="xl:col-span-2 space-y-6">
              <StatsCards />
              <QuickActions activeTab={activeTab} setActiveTab={setActiveTab} />
              <RecentOrders />
            </div>
            
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-green-600 text-white py-4 mt-8">
          <div className="px-6">
            <div className="text-center">
              <p className="text-sm">© 2025 PTCL. All rights reserved. Developed & Powered by PTCL IT Team</p>
            </div>
          </div>
        </footer>
        
      </div>
    </div>
  );
};

export default Layout;