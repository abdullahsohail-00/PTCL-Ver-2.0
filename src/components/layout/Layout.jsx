import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import VendorInfoDisplay from '../vendorinformation/VendorInfoDisplay';
import NewCustomerOrder from '../orders/NewCustomerOrder';
import NewCorporateCustomerOrder from '../orders/NewCorporateCustomerOrder';
import NewFFCustomerOrder from '../orders/NewFFCustomerOrder';
import ExistingCustomerNewOrder from '../orders/ExistingCustomerNewOrder';
import CorporateCustomerOrders from '../orders/CorporateCustomerOrders';
import OrderDetailsPage from '../management/OrderDetailsPage';
import TPNRDIDsPage from '../management/TPNRDIDsPage';
import CreateUserPage from '../management/CreateUserPage';
import UserStatusPage from '../management/UserStatusPage';
import InsertVendorCodePage from '../administration/InsertVendorCodePage';
import DDSNewCustomer from '../management/DDS/DDSNewCustomer';
import DDSExistingCustomer from '../management/DDS/DDSExistingCustomer';
import DDSRetailer from '../management/DDS/DDSRetailer';
import DDSNewCustomerDetail from '../management/DDS/DDSNewCustomerDetail';
import DDSExistingCustomerDetails from '../management/DDS/DDSExistingCustomerDetails';
import DDSRetailerDetails from '../management/DDS/DDSRetailerDetails';
import DDSSummary from '../management/DDS/DDSSummary';
import SMBNewCustomerForm from '../management/SMB-DDS/SMBNewCustomerForms';
import SMBExistingCustomerForm from '../management/SMB-DDS/SMBExistingCustomerForm';
import SMBNewCustomerDetails from '../management/SMB-DDS/SMBNewCustomerDetails';
import SMBExistingCustomerDetails from '../management/SMB-DDS/SMBExistingCustomerDetails';
import SMBSummary from '../management/SMB-DDS/SMBSummary';

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
        return <CorporateCustomerOrders />;
      case 'new-ff':
        return <NewFFCustomerOrder />;
      case 'order-details':
        return <OrderDetailsPage />;
      case 'tpn-rd-ids':
        return <TPNRDIDsPage />;
      case 'vendor-information':
        return <VendorInfoDisplay />;
      case 'dds-new-customer':
        return <DDSNewCustomer />;
      case 'dds-existing-customers':
        return <DDSExistingCustomer />;
      case 'dds-retailer':
        return <DDSRetailer />;
      case 'dds-summary':
        return <DDSSummary />;
      case 'smb-new-customer':
        return <SMBNewCustomerForm />;
      case 'smb-existing-customer':
        return <SMBExistingCustomerForm/>;
      case 'create-user':
        return <CreateUserPage />;
      case 'user-status':
        return <UserStatusPage />;
      case 'vendor-code':
        return <InsertVendorCodePage />;
      case 'dds-new-customers-detail':
        return <DDSNewCustomerDetail />;
      case 'dds-existing-customers-detail':
        return <DDSExistingCustomerDetails />;
      case 'dds-retailer-detail':
        return <DDSRetailerDetails />;
      case 'smb-new-customer-details':
        return <SMBNewCustomerDetails />;
      case 'smb-existing-customer-details':
        return <SMBExistingCustomerDetails />;
      case 'smb-summary':
        return <SMBSummary />;
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
          // All other pages: centered container with padding
          <div className="flex-1 p-2 overflow-x-hidden">
            <div className={`mx-auto ${
              [
                'new-customer',
                'create-user',
                'new-corporate',
                'new-ff',
                'existing-customer',
                'dds-new-customer',
                'dds-existing-customers',
                'dds-retailer',
                'smb-new-customer',
                'smb-existing-customer'
              ].includes(activeTab)
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