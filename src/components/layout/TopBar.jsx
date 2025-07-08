import React from 'react';
import { User, Settings, LogOut, ChevronDown } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3 shadow-sm">
      <div className="flex justify-between items-center">
        
        {/* Page Title */}
        <div>
          <h1 className="text-lg font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            PTCL Order Management System
          </h1>
          <p className="text-xs text-gray-500 mt-0.5 flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
            Vendor Information Dashboard
          </p>
        </div>

        {/* Right Side - Profile Only */}
        <div className="flex items-center">
          
          {/* Profile Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-green-200">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold">PCRM Admin</p>
                <p className="text-xs text-gray-500">admin@ptcl.com.pk</p>
              </div>
              <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="py-2">
                
                {/* Profile Header */}
                <div className="px-3 py-2 border-b border-gray-100 bg-gradient-to-r from-green-50 to-green-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900">Admin User</p>
                      <p className="text-xs text-gray-600">PTCL Order Management</p>
                      <p className="text-xs text-green-600 font-medium">Administrator</p>
                    </div>
                  </div>
                </div>
                
                {/* Menu Items */}
                <div className="py-1">
                  <button className="flex items-center w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 group/item">
                    <div className="p-1 bg-gray-100 rounded-md mr-2 group-hover/item:bg-green-100 transition-colors">
                      <User className="w-3 h-3" />
                    </div>
                    <div>
                      <p className="font-medium">My Profile</p>
                      <p className="text-xs text-gray-500">View and edit profile</p>
                    </div>
                  </button>
                  
                  <button className="flex items-center w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 group/item">
                    <div className="p-1 bg-gray-100 rounded-md mr-2 group-hover/item:bg-green-100 transition-colors">
                      <Settings className="w-3 h-3" />
                    </div>
                    <div>
                      <p className="font-medium">Account Settings</p>
                      <p className="text-xs text-gray-500">Preferences and security</p>
                    </div>
                  </button>
                  
                  <hr className="my-1" />
                  
                  <button className="flex items-center w-full text-left px-3 py-2 text-xs text-red-600 hover:bg-red-50 transition-all duration-200 group/logout">
                    <div className="p-1 bg-red-100 rounded-md mr-2 group-hover/logout:bg-red-200 transition-colors">
                      <LogOut className="w-3 h-3 group-hover/logout:animate-pulse" />
                    </div>
                    <div>
                      <p className="font-semibold">Sign Out</p>
                      <p className="text-xs text-red-500">End current session</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;