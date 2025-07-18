import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';


const Layout = ({ onLogout }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // -------------------------------------------------------------------------
  //  MAP ROUTE PATHS <--> TAB IDS (for Sidebar highlight & TopBar subtitle)
  // -------------------------------------------------------------------------
  const idToPath = {
    'vendor-information': '/vendor-info',
    'new-customer': '/new-customer-order',
    'new-corporate': '/new-corporate-customer-order',
    'existing-customer': '/existing-customer-new-order',
    'corporate-orders': '/corporate-customer-orders',
    'new-ff': '/new-ffc-customer-order',

    'order-details': '/order-details',
    'tpn-rd-ids': '/tpnrids',
    'create-user': '/create-user',
    'user-status': '/user-status',

    // DDS
    'dds-existing-customers': '/dds-existing-customer',
    'dds-existing-customers-detail': '/dds-existing-customer-details',
    'dds-new-customer': '/dds-new-customer',
    'dds-new-customers-detail': '/dds-new-customer-detail',
    'dds-retailer': '/dds-retailer',
    'dds-retailer-detail': '/dds-retailer-details',
    'dds-summary': '/dds-summary',

    // SMB DDS (potential extra)
    'smb-new-customer': '/smb-new-customer',
    'smb-existing-customer': '/smb-existing-customer',
    'smb-new-customer-details': '/smb-new-customer-details',
    'smb-existing-customer-details': '/smb-existing-customer-details',
    'smb-summary': '/smb-summary',

    // Administration
    'vendor-code': '/insert-vendor-code',
    'restore-order': '/restore-order',
    'feasibility-maps': '/feasibility-maps'
  };

  // Reverse mapping for quick lookup
  const pathToId = Object.entries(idToPath).reduce((acc, [id, path]) => {
    acc[path] = id;
    return acc;
  }, {});

  const activeTab = pathToId[location.pathname] || 'vendor-information';

  // Navigate when Sidebar asks for tab change
  const handleTabChange = (tabId) => {
    const targetPath = idToPath[tabId];
    if (targetPath && location.pathname !== targetPath) {
      navigate(targetPath);
    }
    // Auto-close mobile menu on small screens
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const fullWidthTabs = ['order-details', 'tpn-rd-ids', 'user-status', 'vendor-code'];
  const wideTabs = [
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 flex overflow-hidden">
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        collapsed={sidebarCollapsed}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        toggleSidebar={toggleSidebar}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      
      {/* Main Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 overflow-hidden ${
        sidebarCollapsed ? 'md:ml-14' : 'md:ml-60'
        } ml-0`}
      >
        {/* Top Bar */}
        <TopBar 
          activeTab={activeTab} 
          onLogout={onLogout}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
        
        {/* Info Banner */}
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
        
        {/* Routed Content */}
        {fullWidthTabs.includes(activeTab) ? (
          <div className="flex-1 overflow-hidden">
            <Outlet />
          </div>
        ) : (
          <div className="flex-1 p-2 md:p-4 overflow-x-hidden">
            <div
              className={`mx-auto w-full ${
                wideTabs.includes(activeTab)
                ? 'max-w-7xl px-2 md:px-4'
                : 'max-w-5xl px-2 md:px-4'
              }`}
            >
              <div className="w-full overflow-x-auto">
                <Outlet />
              </div>
            </div>
          </div>
        )}
        
        {/* Footer */}
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