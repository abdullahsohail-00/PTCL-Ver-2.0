import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import VendorInfoDisplay from '../vendorinformation/VendorInfoDisplay';
import NewCustomerOrder from '../orders/NewCustomerOrder';
import NewCorporateCustomerOrder from '../orders/NewCorporateCustomerOrder';
import NewFFCustomerOrder from '../orders/NewFFCustomerOrder';
import ExistingCustomerNewOrder from '../orders/ExistingCustomerNewOrder';
import { OrderSearchPage } from '../ordersearch';

const Layout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  // Changed default active tab to vendor-management
  const [activeTab, setActiveTab] = useState('vendor-management');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'new-customer':
        return <NewCustomerOrder />;
      case 'new-corporate':
        return <NewCorporateCustomerOrder />;
      case 'existing-customer':
        return <ExistingCustomerNewOrder />;
      case 'corporate-orders':
        return <div className="p-8 text-center text-gray-500">Corporate Customer Orders - Coming Soon</div>;
      case 'new-ff':
        return <NewFFCustomerOrder />;
      case 'order-details':
        return <OrderSearchPage />;
      case 'tpn-rd-ids':
        return <div className="p-8 text-center text-gray-500">TPN/RD IDs - Coming Soon</div>;
      case 'user-management':
        return <div className="p-8 text-center text-gray-500">User Management - Coming Soon</div>;
      case 'vendor-management':
        return <VendorInfoDisplay />;
      case 'dds':
        return <div className="p-8 text-center text-gray-500">DDS - Coming Soon</div>;
      case 'smb-dds':
        return <div className="p-8 text-center text-gray-500">SMB DDS - Coming Soon</div>;
      case 'create-user':
        return <div className="p-8 text-center text-gray-500">Create User - Coming Soon</div>;
      case 'user-status':
        return <div className="p-8 text-center text-gray-500">User Status - Coming Soon</div>;
      case 'vendor-code':
        return <div className="p-8 text-center text-gray-500">Insert Vendor Code - Coming Soon</div>;
      default:
        // Default to vendor-management instead of new-customer
        return <VendorInfoDisplay />;
    }
  };

  // Function to get page title based on active tab
  const getPageTitle = () => {
    switch (activeTab) {
      case 'new-customer':
        return 'Customer Order Management System';
      case 'new-corporate':
        return 'Corporate Customer Order System';
      case 'existing-customer':
        return 'Existing Customer Order System';
      case 'corporate-orders':
        return 'Corporate Customer Orders System';
      case 'new-ff':
        return 'FF Customer Order System';
      case 'order-details':
        return 'Order Details Management System';
      case 'tpn-rd-ids':
        return 'TPN/RD IDs Management System';
      case 'user-management':
        return 'User Management System';
      case 'vendor-management':
        return 'Vendor Information Dashboard';
      case 'dds':
        return 'DDS Management System';
      case 'smb-dds':
        return 'SMB DDS Management System';
      case 'create-user':
        return 'User Creation System';
      case 'user-status':
        return 'User Status Management System';
      case 'vendor-code':
        return 'Vendor Code Management System';
      default:
        return 'Vendor Information Dashboard';
    }
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
        <TopBar activeTab={activeTab} />
        
        {/* Compact Notice Banner - Only show on vendor-management */}
        {activeTab === 'vendor-management' && (
          <div className="mx-4 mt-2">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-l-blue-400 border border-blue-200 rounded-r-lg p-3 shadow-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 text-xs">ℹ️</span>
                </div>
                <div>
                  <p className="text-xs text-blue-800 leading-tight">
                    <strong>Important Notice:</strong> Dear User, You are requested to verify your info displayed on this page & send correct info to HQs Sales team for update, if incorrect/missing. In case of any wrong info, user will not be eligible for sale incentives. Thank you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Dynamic Content Based on Active Tab */}
        <div className="flex-1 p-2">
          <div className={`mx-auto ${activeTab === 'new-customer' || activeTab === 'new-corporate' || activeTab === 'new-ff' || activeTab === 'existing-customer' ? 'max-w-6xl px-4' : 'max-w-4xl'}`}>
            {renderContent()}
          </div>
        </div>
        
        {/* Compact Footer */}
        <footer className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 shadow-lg">
          <div className="px-4">
            <div className="text-center">
              <p className="text-xs">© 2025 PTCL. All rights reserved. Developed & Powered by PTCL IT Team</p>
            </div>
          </div>
        </footer>
        
      </div>
    </div>
  );
};

export default Layout;