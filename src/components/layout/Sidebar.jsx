import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Settings, 
  Shield, 
  ChevronDown, 
  ChevronsLeft,
  ChevronsRight,
  Building2,
  Info
} from 'lucide-react';

const Sidebar = ({ collapsed, activeTab, setActiveTab, toggleSidebar }) => {
  const [expandedMenu, setExpandedMenu] = useState('orders');
  // Add state for expanded submenus under Management
  const [expandedSubmenus, setExpandedSubmenus] = useState({});

  const navigationItems = [
    { 
      id: 'vendor-info', 
      label: 'Vendor Info', 
      icon: Info,
      color: 'from-blue-500 to-blue-600',
      submenu: [
        { id: 'vendor-information', label: 'Vendor Information' }
      ]
    },
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
        { 
          id: 'user-management', 
          label: 'User Management',
          submenu: [
            { id: 'create-user', label: 'Create User' },
            { id: 'user-status', label: 'User Status' }
          ]
        },
        { 
          id: 'dds', 
          label: 'DDS',
          submenu: [
            { id: 'dds-new-customers', label: 'DDS New Customers' },
            { id: 'dds-existing-customers', label: 'DDS Existing Customers' },
            { id: 'dds-retailer', label: 'DDS Retailer' },
            { id: 'dds-new-customers-detail', label: 'DDS New Customers Detail' },
            { id: 'dds-existing-customers-detail', label: 'DDS Existing Customers Detail' },
            { id: 'dds-retailer-detail', label: 'DDS Retailer Detail' },
            { id: 'dds-summary', label: 'DDS Summary' }
          ]
        },
        { 
          id: 'smb-dds', 
          label: 'SMB DDS',
          submenu: [
            { id: 'smb-new-customer', label: 'SMB New Customers' },
            { id: 'smb-existing-customer', label: 'SMB Existing Customers' },
            { id: 'smb-new-customers-detail', label: 'SMB New Customers Detail' },
            { id: 'smb-existing-customers-detail', label: 'SMB Existing Customers Detail' },
            { id: 'smb-summary', label: 'SMB Summary' }
          ]
        }
      ]
    },
    { 
      id: 'administration', 
      label: 'Administration', 
      icon: Shield,
      color: 'from-red-500 to-red-600',
      submenu: [
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
    // If submenu has its own submenu, toggle its expansion
    if (subItem.submenu && (subItem.id === 'user-management' || subItem.id === 'dds' || subItem.id === 'smb-dds')) {
      setExpandedSubmenus((prev) => ({
        ...prev,
        [subItem.id]: !prev[subItem.id],
      }));
    } else {
      setActiveTab(subItem.id);
    }
  };

  const isItemActive = (item) => {
    return activeTab === item.id || item.submenu?.some(sub => {
      if (sub.submenu) {
        return sub.submenu.some(subSub => subSub.id === activeTab);
      }
      return sub.id === activeTab;
    });
  };

  const isSubItemActive = (subItem) => {
    if (subItem.submenu) {
      return subItem.submenu.some(sub => sub.id === activeTab);
    }
    return activeTab === subItem.id;
  };

  return (
    <div className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 shadow-lg transition-all duration-300 z-40 flex flex-col ${
      collapsed ? 'w-12' : 'w-64'
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
                  <div key={subItem.id}>
                    <button
                      onClick={() => handleSubMenuClick(subItem)}
                      className={`group w-full flex items-center px-3 py-1.5 rounded-md text-xs transition-all duration-300 transform hover:scale-105 ${
                        isSubItemActive(subItem)
                          ? `bg-gradient-to-r ${item.color} text-white shadow-sm font-medium`
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800 hover:shadow-sm'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 transition-all duration-300 ${
                        isSubItemActive(subItem) 
                          ? 'bg-white' 
                          : 'bg-gray-300 group-hover:bg-gray-400'
                      }`} />
                      <span className="font-medium truncate flex-1 text-left">{subItem.label}</span>
                      {/* Chevron for submenus */}
                      {(subItem.id === 'user-management' || subItem.id === 'dds' || subItem.id === 'smb-dds') && subItem.submenu && (
                        <ChevronDown className={`w-3 h-3 ml-1 transition-transform duration-300 ${
                          expandedSubmenus[subItem.id] ? 'rotate-180' : ''
                        }`} />
                      )}
                    </button>
                    {/* Sub-submenu for User Management, DDS, SMB DDS */}
                    {(subItem.id === 'user-management' || subItem.id === 'dds' || subItem.id === 'smb-dds') && subItem.submenu && expandedSubmenus[subItem.id] && (
                      <div className="mt-0.5 ml-6 space-y-0.5">
                        {subItem.submenu.map((subSubItem) => (
                          <button
                            key={subSubItem.id}
                            onClick={() => handleSubMenuClick(subSubItem)}
                            className={`group w-full flex items-center px-3 py-1 rounded-md text-xs transition-all duration-300 transform hover:scale-105 ${
                              activeTab === subSubItem.id
                                ? `bg-gradient-to-r ${item.color} text-white shadow-sm font-medium`
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                            }`}
                          >
                            <div className={`w-1 h-1 rounded-full mr-2 transition-all duration-300 ${
                              activeTab === subSubItem.id 
                                ? 'bg-white' 
                                : 'bg-gray-300 group-hover:bg-gray-400'
                            }`} />
                            <span className="font-medium truncate text-left">{subSubItem.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
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
                      <div key={subItem.id}>
                        <button
                          onClick={() => subItem.submenu ? null : handleSubMenuClick(subItem)}
                          className="block w-full text-left py-1 px-2 text-xs hover:text-green-300 hover:bg-gray-800 transition-colors rounded"
                        >
                          {subItem.label}
                        </button>
                        {subItem.submenu && (
                          <div className="ml-4 mt-1">
                            {subItem.submenu.map((subSubItem) => (
                              <button
                                key={subSubItem.id}
                                onClick={() => handleSubMenuClick(subSubItem)}
                                className="block w-full text-left py-0.5 px-2 text-xs text-gray-400 hover:text-green-200 hover:bg-gray-700 transition-colors rounded"
                              >
                                → {subSubItem.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
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
          className={`w-full flex items-center justify-center ${collapsed ? 'p-3' : 'p-1.5'} rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 hover:from-green-100 hover:to-green-200 transition-all duration-300 transform hover:scale-105 group border border-transparent hover:border-green-300`}
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