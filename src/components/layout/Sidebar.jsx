import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Settings, 
  Shield, 
  ChevronDown, 
  ChevronsLeft,
  ChevronsRight,
  Building2
} from 'lucide-react';

const Sidebar = ({ collapsed, activeTab, setActiveTab, toggleSidebar }) => {
  const [expandedMenu, setExpandedMenu] = useState('orders');

  const navigationItems = [
    { 
      id: 'orders', 
      label: 'Orders', 
      icon: ShoppingCart,
      color: 'from-green-500 to-green-600',
      submenu: [
        { id: 'new-customer', label: 'New Customer Order' },
        { id: 'new-corporate', label: 'New Corporate Customer Order' },
        { id: 'existing-customer', label: 'Existing Customer Order' },
        { id: 'corporate-orders', label: 'Corporate Customer Orders' },
        { id: 'new-ff', label: 'New FF Customer Order' }
      ]
    },
    { 
      id: 'management', 
      label: 'Management', 
      icon: Settings,
      color: 'from-purple-500 to-purple-600',
      submenu: [
        { id: 'order-details', label: 'Order Details' },
        { id: 'tpn-rd-ids', label: 'TPN/RD IDs' },
        { id: 'user-management', label: 'User Management' },
        { id: 'vendor-management', label: 'Vendor Management' },
        { id: 'dds', label: 'DDS' },
        { id: 'smb-dds', label: 'SMB DDS' }
      ]
    },
    { 
      id: 'administration', 
      label: 'Administration', 
      icon: Shield,
      color: 'from-red-500 to-red-600',
      submenu: [
        { id: 'create-user', label: 'Create User' },
        { id: 'user-status', label: 'User Status' },
        { id: 'vendor-code', label: 'Insert Vendor Code' }
      ]
    }
  ];

  const handleMenuClick = (item) => {
    if (item.submenu) {
      if (collapsed) {
        toggleSidebar();
        setExpandedMenu(item.id);
      } else {
        setExpandedMenu(expandedMenu === item.id ? null : item.id);
      }
    } else {
      setActiveTab(item.id);
    }
  };

  const handleSubMenuClick = (subItem) => {
    setActiveTab(subItem.id);
  };

  const isItemActive = (item) => {
    return activeTab === item.id || item.submenu?.some(sub => sub.id === activeTab);
  };

  return (
    <div className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 shadow-lg transition-all duration-300 z-40 flex flex-col ${
      collapsed ? 'w-14' : 'w-52'
    }`}>
      
      {/* Logo Section */}
      <div className={`border-b border-gray-200 bg-gradient-to-br from-green-50 to-emerald-50 ${collapsed ? 'p-2' : 'p-3'}`}>
        {!collapsed && (
          <div className="flex items-center justify-center">
            <img 
              src="https://ptcl.com.pk/images/ptcl-logo-plain.svg" 
              alt="PTCL Logo" 
              className="h-8 w-auto object-contain hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Fallback if logo doesn't load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md" style={{display: 'none'}}>
              <Building2 className="w-4 h-4 text-white" />
            </div>
          </div>
        )}
        
        {collapsed && (
          <div className="flex justify-center">
            <img 
              src="https://ptcl.com.pk/images/ptcl-logo-plain.svg" 
              alt="PTCL Logo" 
              className="h-6 w-auto object-contain hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                // Fallback if logo doesn't load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300" style={{display: 'none'}}>
              <Building2 className="w-4 h-4 text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Navigation Menu - Takes remaining space */}
      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
        {navigationItems.map((item) => (
          <div key={item.id} className="relative">
            {/* Main Menu Button */}
            <button
              onClick={() => handleMenuClick(item)}
              className={`group w-full flex items-center rounded-lg transition-all duration-300 transform hover:scale-105 ${
                collapsed ? 'px-2 py-3 justify-center' : 'px-3 py-2'
              } ${
                isItemActive(item)
                  ? `bg-gradient-to-r ${item.color} text-white shadow-md border border-white border-opacity-30`
                  : `text-gray-700 hover:bg-gradient-to-r ${item.color} hover:text-white hover:shadow-sm border border-transparent hover:border-white hover:border-opacity-30`
              }`}
            >
              {/* Icon */}
              <div className={`rounded-md transition-all duration-300 flex items-center justify-center ${
                collapsed ? 'p-0' : 'p-1.5 mr-2'
              } ${
                isItemActive(item)
                  ? 'bg-white bg-opacity-20' 
                  : 'bg-gray-100 group-hover:bg-white group-hover:bg-opacity-20'
              }`}>
                <item.icon className={`w-4 h-4 transition-colors duration-300 ${
                  isItemActive(item) 
                    ? 'text-white' 
                    : 'text-gray-600 group-hover:text-white'
                }`} />
              </div>
              
              {/* Label and Arrow */}
              {!collapsed && (
                <>
                  <span className="font-medium flex-1 text-left text-xs">{item.label}</span>
                  {item.submenu && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                      expandedMenu === item.id ? 'rotate-180' : ''
                    }`} />
                  )}
                </>
              )}
            </button>

            {/* Submenu */}
            {item.submenu && !collapsed && expandedMenu === item.id && (
              <div className="mt-1 ml-4 space-y-0.5 animate-in slide-in-from-top-2 duration-300">
                {item.submenu.map((subItem) => (
                  <button
                    key={subItem.id}
                    onClick={() => handleSubMenuClick(subItem)}
                    className={`group w-full flex items-center px-3 py-1.5 rounded-md text-xs transition-all duration-300 transform hover:scale-105 ${
                      activeTab === subItem.id
                        ? `bg-gradient-to-r ${item.color} text-white shadow-sm font-medium`
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800 hover:shadow-sm'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full mr-2 transition-all duration-300 ${
                      activeTab === subItem.id 
                        ? 'bg-white' 
                        : 'bg-gray-300 group-hover:bg-gray-400'
                    }`} />
                    <span className="font-medium truncate">{subItem.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Tooltip for Collapsed State */}
            {collapsed && item.submenu && (
              <div className="absolute left-full top-0 ml-2 hidden group-hover:block z-50">
                <div className="bg-gray-900 text-white rounded-lg py-2 px-3 shadow-xl min-w-44 border border-gray-700">
                  <div className="font-medium mb-2 text-green-300 text-xs border-b border-gray-700 pb-1">
                    {item.label}
                  </div>
                  <div className="space-y-1">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleSubMenuClick(subItem)}
                        className="block w-full text-left py-1 px-2 text-xs hover:text-green-300 hover:bg-gray-800 transition-colors rounded"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Collapse Toggle Button - Logo Only */}
      <div className="border-t border-gray-200 p-2">
        <button
          onClick={toggleSidebar}
          className="w-full flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 hover:from-green-100 hover:to-green-200 transition-all duration-300 transform hover:scale-105 group border border-transparent hover:border-green-300"
          title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {collapsed ? (
            <ChevronsRight className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
          ) : (
            <ChevronsLeft className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;