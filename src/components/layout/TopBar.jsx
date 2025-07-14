import React, { useState } from 'react';
import { User, Settings, LogOut } from 'lucide-react';

const TopBar = ({ activeTab }) => {
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
      case 'vendor-management':
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
    // Add sign out logic here
    alert('Signing out...');
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">PTCL Order Management System</h1>
          <p className="text-sm text-gray-600">• {getPageSubtitle()}</p>
        </div>
        <div className="flex items-center space-x-3 relative">
          <div 
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 shadow-md hover:bg-green-600 transition-colors duration-200 cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold">PCRM Admin</div>
              <div className="text-xs text-green-100">admin@ptcl.com.pk</div>
            </div>
            <div className={`text-xs transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
              ▼
            </div>
          </div>

          {/* Dropdown Menu - Exact match */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-white border-2 border-green-400 rounded-xl shadow-lg z-50 overflow-hidden">
              {/* Top section with green background */}
              <div className="bg-green-500 text-white px-3 py-2 flex items-center space-x-2 rounded-t-xl">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">PCRM Admin</div>
                  <div className="text-xs text-green-100">admin@ptcl.com.pk</div>
                </div>
                <div className="text-xs">▼</div>
              </div>

              {/* Menu items */}
              <div className="py-2">
                {/* Admin User section */}
                <div className="px-3 py-2 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Admin User</div>
                      <div className="text-xs text-green-600">PTCL Order Management</div>
                      <div className="text-xs text-green-500">Administrator</div>
                    </div>
                  </div>
                </div>

                {/* My Profile */}
                <div className="px-3 py-2 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">My Profile</div>
                      <div className="text-xs text-gray-500">View and edit profile</div>
                    </div>
                  </div>
                </div>

                {/* Account Settings */}
                <div className="px-3 py-2 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <Settings className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Account Settings</div>
                      <div className="text-xs text-gray-500">Preferences and security</div>
                    </div>
                  </div>
                </div>

                {/* Sign Out */}
                <div 
                  className="px-3 py-2 hover:bg-red-50 cursor-pointer"
                  onClick={handleSignOut}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <LogOut className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-red-600">Sign Out</div>
                      <div className="text-xs text-red-500">End current session</div>
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