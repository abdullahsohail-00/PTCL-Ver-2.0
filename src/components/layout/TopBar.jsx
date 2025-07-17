import React, { useState } from 'react';
import { User, Settings, LogOut, Menu, X } from 'lucide-react';

const TopBar = ({ activeTab, onLogout, isMobileMenuOpen, toggleMobileMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to get page subtitle based on active tab
  const getPageSubtitle = () => {
    switch (activeTab) {
      case 'new-customer':
        return 'Customer Order Management Dashboard';
      case 'new-corporate':
        return 'Corporate Customer Order Dashboard';
      case 'existing-customer':
        return 'Existing Customer Order Dashboard';
      case 'corporate-orders':
        return 'Corporate Customer Orders Dashboard';
      case 'new-ff':
        return 'FF Customer Order Dashboard';
      case 'order-details':
        return 'Order Details Management Dashboard';
      case 'tpn-rd-ids':
        return 'TPN/RD IDs Management Dashboard';
      case 'user-management':
        return 'User Management Dashboard';
      case 'vendor-information':
        return 'Vendor Information Dashboard';
      case 'dds':
        return 'DDS Management Dashboard';
      case 'smb-dds':
        return 'SMB DDS Management Dashboard';
      case 'create-user':
        return 'User Creation Dashboard';
      case 'user-status':
        return 'User Status Management Dashboard';
      case 'vendor-code':
        return 'Vendor Code Management Dashboard';
      default:
        return 'Vendor Information Dashboard';
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    if (onLogout) {
      onLogout();
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 shadow-xl border-b border-slate-700 px-3 md:px-6 py-3 relative z-30">
      <div className="flex items-center justify-between">
        {/* Left Side - Logo and Title */}
        <div className="flex items-center space-x-3">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg bg-slate-700 text-gray-300 shadow-md hover:bg-green-600 hover:text-white border border-slate-600 hover:border-green-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-800"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          {/* Title Section */}
          <div className="flex-1 min-w-0">
            <h1 className="text-lg md:text-xl font-semibold text-white truncate">
              PTCL Order Management System
            </h1>
            <p className="text-xs md:text-sm text-gray-400 truncate">
              • {getPageSubtitle()}
            </p>
          </div>
        </div>

        {/* Right Side - User Profile */}
        <div className="flex items-center space-x-3 relative flex-shrink-0">
          <div 
            className="bg-gradient-to-r from-green-600 to-green-500 text-white px-3 md:px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg hover:from-green-500 hover:to-green-400 hover:shadow-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-800 border border-green-400"
            onClick={toggleDropdown}
            role="button"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-3 h-3 md:w-4 md:h-4" />
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-xs md:text-sm font-semibold">PCRM Admin</div>
              <div className="text-xs text-green-100">admin@ptcl.com.pk</div>
            </div>
            <div className={`text-xs transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
              ▼
            </div>
          </div>

          {/* Dropdown Menu - Dark Theme */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-64 md:w-72 bg-slate-800 border-2 border-green-500 rounded-xl shadow-2xl z-50 overflow-hidden">
              {/* Top section with PTCL green background */}
              <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-3 py-2 flex items-center space-x-2 rounded-t-xl">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold truncate">PCRM Admin</div>
                  <div className="text-xs text-green-100 truncate">admin@ptcl.com.pk</div>
                </div>
                <div className="text-xs flex-shrink-0">▼</div>
              </div>

              {/* Menu items */}
              <div className="py-2 max-h-64 overflow-y-auto">
                {/* Admin User section */}
                <div className="px-3 py-2 hover:bg-slate-700 cursor-pointer transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-white truncate">Admin User</div>
                      <div className="text-xs text-green-400 truncate">PTCL Order Management</div>
                      <div className="text-xs text-green-300 truncate">Administrator</div>
                    </div>
                  </div>
                </div>

                {/* My Profile */}
                <div className="px-3 py-2 hover:bg-slate-700 cursor-pointer transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white">My Profile</div>
                      <div className="text-xs text-gray-400">View and edit profile</div>
                    </div>
                  </div>
                </div>

                {/* Account Settings */}
                <div className="px-3 py-2 hover:bg-slate-700 cursor-pointer transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <Settings className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white">Account Settings</div>
                      <div className="text-xs text-gray-400">Preferences and security</div>
                    </div>
                  </div>
                </div>

                {/* Sign Out */}
                <div 
                  className="px-3 py-2 hover:bg-red-900/30 cursor-pointer transition-colors duration-200 border-t border-slate-700 mt-1"
                  onClick={handleSignOut}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <LogOut className="w-4 h-4 text-red-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-red-400">Sign Out</div>
                      <div className="text-xs text-red-300">End current session</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default TopBar;