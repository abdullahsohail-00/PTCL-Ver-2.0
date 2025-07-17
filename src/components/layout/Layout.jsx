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
import RestoreOrderForm from '../administration/RestoreOrderForm';
import LoginPage from '../auth/LoginPage';
import FeasibilityMapsPage from '../administration/FeasibilityMapsPage';


const Layout = ({ onLogout }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('vendor-information');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Auto-close mobile menu when selecting a tab
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(false);
    }
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
      case 'restore-order':
        return <RestoreOrderForm />;
      case 'feasibility-maps':
        return <FeasibilityMapsPage />;
       
      default:
        return <VendorInfoDisplay />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 flex overflow-hidden">
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Enhanced Mobile Support */}
      <Sidebar 
        collapsed={sidebarCollapsed}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        toggleSidebar={toggleSidebar}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      
      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 overflow-hidden ${
        sidebarCollapsed ? 'md:ml-14' : 'md:ml-60'
      } ml-0`}>
        
        {/* Top Bar */}
        <TopBar 
          activeTab={activeTab} 
          onLogout={onLogout}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
        
        {/* Compact Notice Banner - Only show on vendor-information */}
        {activeTab === 'vendor-information' && (
          <div className="mx-2 md:mx-4 mt-2">
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-l-4 border-l-blue-500 border border-blue-200 rounded-r-lg p-3 shadow-sm">
              <div className="flex items-start md:items-center">
                <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5 md:mt-0">
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
          // All other pages: responsive container with padding
          <div className="flex-1 p-2 md:p-4 overflow-x-hidden">
            <div className={`mx-auto w-full ${
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
                ? 'max-w-7xl px-2 md:px-4'
                : 'max-w-5xl px-2 md:px-4'
            }`}>
              <div className="w-full overflow-x-auto">
                {renderContent()}
              </div>
            </div>
          </div>
        )}
        
        {/* Responsive Footer */}
        <footer className="bg-gradient-to-t from-green-600 via-green-700 to-teal-700 text-white py-2 md:py-3 shadow-lg">
          <div className="px-2 md:px-4">
            <div className="text-center">
              <p className="text-xs md:text-sm">© 2025 PTCL. All rights reserved. Developed & Powered by PTCL IT Team</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;