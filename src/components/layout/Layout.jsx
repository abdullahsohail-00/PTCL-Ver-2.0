import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import VendorInfoDisplay from '../vendorinformation/VendorInfoDisplay';
import NewCustomerOrder from '../orders/NewCustomerOrder';
import NewCorporateCustomerOrder from '../orders/NewCorporateCustomerOrder';
import NewFFCustomerOrder from '../orders/NewFFCustomerOrder';
import ExistingCustomerNewOrder from '../orders/ExistingCustomerNewOrder';
import OrderDetailsPage from '../management/OrderDetailsPage';
import TPNRDIDsPage from '../management/TPNRDIDsPage';
import CreateUserPage from '../management/CreateUserPage';
import UserStatusPage from '../management/UserStatusPage';
import InsertVendorCodePage from '../administration/InsertVendorCodePage';

const Layout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  // Changed default active tab to vendor-management
  const [activeTab, setActiveTab] = useState('vendor-information');

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
        return <OrderDetailsPage />;
      case 'tpn-rd-ids':
        return <TPNRDIDsPage />;
      case 'user-management':
        return <div className="p-8 text-center text-gray-500">User Management - Coming Soon</div>;
      case 'vendor-information':
        return <VendorInfoDisplay />;
      case 'dds':
        return <div className="p-8 text-center text-gray-500">DDS - Coming Soon</div>;
      case 'dds-new-customer':
        return <div className="p-8 text-center text-gray-500">DDS New Customer - Coming Soon</div>;
      case 'dds-existing-customer':
        return <div className="p-8 text-center text-gray-500">DDS Existing Customer - Coming Soon</div>;
      case 'dds-retailer':
        return <div className="p-8 text-center text-gray-500">DDS Retailer - Coming Soon</div>;
      case 'dds-new-customer-bulk':
        return <div className="p-8 text-center text-gray-500">DDS New Customer Bulk - Coming Soon</div>;
      case 'dds-existing-customer-bulk':
        return <div className="p-8 text-center text-gray-500">DDS Existing Customer Bulk - Coming Soon</div>;
      case 'dds-retailer-details':
        return <div className="p-8 text-center text-gray-500">DDS Retailer Details - Coming Soon</div>;
      case 'dds-summary':
        return <div className="p-8 text-center text-gray-500">DDS Summary - Coming Soon</div>;
      case 'smb-dds':
        return <div className="p-8 text-center text-gray-500">SMB DDS - Coming Soon</div>;
      case 'smb-new-customer':
        return <div className="p-8 text-center text-gray-500">SMB New Customer - Coming Soon</div>;
      case 'smb-existing-customer':
        return <div className="p-8 text-center text-gray-500">SMB Existing Customer - Coming Soon</div>;
      case 'smb-new-customer-bulk':
        return <div className="p-8 text-center text-gray-500">SMB New Customer Bulk - Coming Soon</div>;
      case 'smb-existing-customer-bulk':
        return <div className="p-8 text-center text-gray-500">SMB Existing Customer Bulk - Coming Soon</div>;
      case 'smb-summary':
        return <div className="p-8 text-center text-gray-500">SMB Summary - Coming Soon</div>;
      case 'create-user':
        return <CreateUserPage />;
      case 'user-status':
        return <UserStatusPage />;
      case 'vendor-code':
        return <InsertVendorCodePage />;
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
      case 'vendor-information':
        return 'Vendor Information Dashboard';
      case 'dds':
        return 'DDS Management System';
      case 'dds-new-customer':
        return 'DDS New Customer System';
      case 'dds-existing-customer':
        return 'DDS Existing Customer System';
      case 'dds-retailer':
        return 'DDS Retailer System';
      case 'dds-new-customer-bulk':
        return 'DDS New Customer Bulk System';
      case 'dds-existing-customer-bulk':
        return 'DDS Existing Customer Bulk System';
      case 'dds-retailer-details':
        return 'DDS Retailer Details System';
      case 'dds-summary':
        return 'DDS Summary System';
      case 'smb-dds':
        return 'SMB DDS Management System';
      case 'smb-new-customer':
        return 'SMB New Customer System';
      case 'smb-existing-customer':
        return 'SMB Existing Customer System';
      case 'smb-new-customer-bulk':
        return 'SMB New Customer Bulk System';
      case 'smb-existing-customer-bulk':
        return 'SMB Existing Customer Bulk System';
      case 'smb-summary':
        return 'SMB Summary System';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar 
        collapsed={sidebarCollapsed}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        toggleSidebar={toggleSidebar}
      />
      
      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 overflow-hidden ${
        sidebarCollapsed ? 'ml-12' : 'ml-64'
      }`}>
        
        {/* Top Bar */}
        <TopBar activeTab={activeTab} />
        
        {/* Compact Notice Banner - Only show on vendor-information */}
        {activeTab === 'vendor-information' && (
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
        {activeTab === 'order-details' || activeTab === 'tpn-rd-ids' || activeTab === 'user-status' || activeTab === 'vendor-code' ? (
          // Special handling for pages that need full width - no padding
          <div className="flex-1 overflow-hidden">
            {renderContent()}
          </div>
        ) : (
          // Regular container for other pages
          <div className="flex-1 p-2 overflow-x-hidden">
            <div className={`mx-auto ${
              activeTab === 'new-customer' || 
              activeTab === 'new-corporate' || 
              activeTab === 'new-ff' || 
              activeTab === 'existing-customer' 
                ? 'max-w-6xl px-4' 
                : 'max-w-4xl'
            }`}>
              {renderContent()}
            </div>
          </div>
        )}
        
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