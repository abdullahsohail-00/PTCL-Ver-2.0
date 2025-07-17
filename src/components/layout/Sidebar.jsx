import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Settings, 
  Shield, 
  ChevronDown, 
  ChevronsLeft,
  ChevronsRight,
  Building2,
  Info,
  Users,
  Database,
  UserPlus,
  Activity,
  FileText,
  Package,
  UserCheck,
  BarChart3,
  Code,
  Plus,
  X,
  Menu,
  RotateCcw,
  Map
} from 'lucide-react';

const Sidebar = ({ collapsed, activeTab, setActiveTab, toggleSidebar, isMobileMenuOpen, toggleMobileMenu }) => {
  const [expandedSubmenus, setExpandedSubmenus] = useState({});

  // Navigation items with PTCL dark theme
  const navigationItems = [
    // Vendor Info Section
    { 
      id: 'vendor-information', 
      label: 'Vendor Information', 
      icon: Info,
      color: 'from-green-500 to-green-600',
      category: 'vendor'
    },
    
    // Orders Section
    { 
      id: 'new-customer', 
      label: 'New Customer Order', 
      icon: Plus,
      color: 'from-green-500 to-green-600',
      category: 'orders'
    },
    { 
      id: 'new-corporate', 
      label: 'New Corporate Order', 
      icon: Building2,
      color: 'from-green-500 to-green-600',
      category: 'orders'
    },
    { 
      id: 'existing-customer', 
      label: 'Existing Customer Order', 
      icon: UserCheck,
      color: 'from-green-500 to-green-600',
      category: 'orders'
    },
    { 
      id: 'corporate-orders', 
      label: 'Corporate Orders', 
      icon: Package,
      color: 'from-green-500 to-green-600',
      category: 'orders'
    },
    { 
      id: 'new-ff', 
      label: 'New FF Customer Order', 
      icon: ShoppingCart,
      color: 'from-green-500 to-green-600',
      category: 'orders'
    },
    
    // Management Section
    { 
      id: 'order-details', 
      label: 'Order Details', 
      icon: FileText,
      color: 'from-green-600 to-green-700',
      category: 'management'
    },
    { 
      id: 'tpn-rd-ids', 
      label: 'TPN/RD IDs', 
      icon: Database,
      color: 'from-green-600 to-green-700',
      category: 'management'
    },
    
    // User Management Subsection
    { 
      id: 'user-management', 
      label: 'User Management', 
      icon: Users,
      color: 'from-green-600 to-green-700',
      category: 'management',
      submenu: [
        { id: 'create-user', label: 'Create User', icon: UserPlus },
        { id: 'user-status', label: 'User Status', icon: Activity }
      ]
    },
    
    // DDS Subsection
    { 
      id: 'dds', 
      label: 'DDS', 
      icon: BarChart3,
      color: 'from-green-600 to-green-700',
      category: 'management',
      submenu: [
        { id: 'dds-new-customer', label: 'New Customer', icon: Plus },
        { id: 'dds-existing-customers', label: 'Existing Customers', icon: Users },
        { id: 'dds-retailer', label: 'Retailer', icon: Building2 },
        { id: 'dds-new-customers-detail', label: 'New Customers Detail', icon: FileText },
        { id: 'dds-existing-customers-detail', label: 'Existing Customers Detail', icon: FileText },
        { id: 'dds-retailer-detail', label: 'Retailer Detail', icon: FileText },
        { id: 'dds-summary', label: 'Summary', icon: BarChart3 }
      ]
    },
    
    // SMB DDS Subsection
    { 
      id: 'smb-dds', 
      label: 'SMB DDS', 
      icon: Database,
      color: 'from-green-600 to-green-700',
      category: 'management',
      submenu: [
        { id: 'smb-new-customer', label: 'New Customers', icon: Plus },
        { id: 'smb-existing-customer', label: 'Existing Customers', icon: Users },
        { id: 'smb-new-customer-details', label: 'New Customer Details', icon: FileText },
        { id: 'smb-existing-customer-details', label: 'Existing Customer Details', icon: FileText },
        { id: 'smb-summary', label: 'Summary', icon: BarChart3 }
      ]
    },
    
    // Administration Section
    { 
      id: 'vendor-code', 
      label: 'Insert Vendor Code', 
      icon: Code,
      color: 'from-green-700 to-green-800',
      category: 'administration'
    },
    { 
      id: 'restore-order', 
      label: 'Restore Order', 
      icon: RotateCcw,
      color: 'from-green-700 to-green-800',
      category: 'administration'
    },
    { 
      id: 'feasibility-maps', 
      label: 'Feasibility Maps', 
      icon: Map,
      color: 'from-green-700 to-green-800',
      category: 'administration'
    }
  ];

  const handleMenuClick = (item) => {
    if (item.submenu) {
      // On mobile, don't auto-expand sidebar when clicking submenu
      if (collapsed && window.innerWidth >= 768) {
        toggleSidebar();
      }
      setExpandedSubmenus(prev => ({
        ...prev,
        [item.id]: !prev[item.id]
      }));
    } else {
      setActiveTab(item.id);
      // Auto-close mobile menu when selecting a tab
      if (window.innerWidth < 768) {
        toggleMobileMenu();
      }
    }
  };

  const handleSubMenuClick = (subItem) => {
    setActiveTab(subItem.id);
    // Auto-close mobile menu when selecting a sub-tab
    if (window.innerWidth < 768) {
      toggleMobileMenu();
    }
  };

  const isSubItemActive = (subItem) => {
    return activeTab === subItem.id;
  };

  return (
    <>
      {/* Mobile Menu Button - Dark theme with PTCL green */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 left-4 z-50 p-2.5 bg-slate-800 text-gray-300 rounded-lg shadow-xl border border-slate-600 hover:bg-slate-700 hover:text-white hover:border-green-500 transition-all duration-300"
        aria-label="Toggle mobile menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar - Dark Professional Theme */}
      <div className={`fixed left-0 top-0 h-full bg-gradient-to-b from-slate-800 via-slate-900 to-gray-900 border-r border-slate-700 shadow-2xl transition-all duration-300 z-50 flex flex-col
        ${collapsed ? 'w-16' : 'w-64'} 
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0
      `}>
      
        {/* Logo Section - PTCL Green Header */}
        <div className={`border-b border-slate-700 bg-gradient-to-r from-green-600 via-green-500 to-teal-600 ${collapsed ? 'p-3' : 'p-4'} relative`}>
          {/* Mobile Close Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden absolute top-3 right-3 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white transition-colors duration-200 border border-slate-600"
            aria-label="Close mobile menu"
          >
            <X className="w-4 h-4" />
          </button>

          {!collapsed && (
            <div className="flex items-center justify-center pr-10 md:pr-0">
              <img 
                src="https://ptcl.com.pk/images/ptcl-logo-plain.svg" 
                alt="PTCL Logo" 
                className="h-8 w-auto object-contain hover:scale-105 transition-transform duration-300 filter brightness-0 invert"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-8 h-8 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center shadow-lg" style={{display: 'none'}}>
                <Building2 className="w-5 h-5 text-white" />
              </div>
            </div>
          )}
          
          {collapsed && (
            <div className="flex justify-center">
              <img 
                src="https://ptcl.com.pk/images/ptcl-logo-plain.svg" 
                alt="PTCL Logo" 
                className="h-7 w-auto object-contain hover:scale-105 transition-transform duration-300 filter brightness-0 invert"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300" style={{display: 'none'}}>
                <Building2 className="w-5 h-5 text-white" />
              </div>
            </div>
          )}
        </div>

        {/* Navigation Menu - Dark Theme */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
          {navigationItems.map((item) => (
            <div key={item.id} className="relative">
              {/* Main Menu Button */}
              <button
                onClick={() => handleMenuClick(item)}
                className={`group w-full flex items-center rounded-lg transition-all duration-300 ${
                  collapsed ? 'px-2 py-3 justify-center' : 'px-3 py-2.5'
                } ${
                  activeTab === item.id || (item.submenu && item.submenu.some(sub => sub.id === activeTab))
                    ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg border border-green-400'
                    : 'text-gray-300 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-600 hover:text-white hover:shadow-md border border-slate-600 hover:border-green-500 bg-slate-800/50'
                }`}
              >
                {/* Icon */}
                <div className={`rounded-md transition-all duration-300 flex items-center justify-center ${
                  collapsed ? 'p-0' : 'p-1.5 mr-3'
                } ${
                  activeTab === item.id || (item.submenu && item.submenu.some(sub => sub.id === activeTab))
                    ? 'bg-white/20 shadow-inner' 
                    : 'bg-slate-700/70 group-hover:bg-slate-600/70'
                }`}>
                  <item.icon className={`w-4 h-4 transition-all duration-300 ${
                    activeTab === item.id || (item.submenu && item.submenu.some(sub => sub.id === activeTab))
                      ? 'text-white' 
                      : 'text-gray-400 group-hover:text-green-400'
                  }`} />
                </div>
                
                {/* Label and Arrow */}
                {!collapsed && (
                  <>
                    <span className="font-medium flex-1 text-left text-sm">{item.label}</span>
                    {item.submenu && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        expandedSubmenus[item.id] ? 'rotate-180' : ''
                      }`} />
                    )}
                  </>
                )}
              </button>

              {/* Submenu */}
              {item.submenu && !collapsed && expandedSubmenus[item.id] && (
                <div className="mt-1 ml-6 space-y-1 animate-in slide-in-from-top-2 duration-300">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => handleSubMenuClick(subItem)}
                      className={`group w-full flex items-center px-3 py-2 rounded-md text-sm transition-all duration-300 ${
                        isSubItemActive(subItem)
                          ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md font-medium border border-green-400'
                          : 'text-gray-400 hover:bg-slate-700/70 hover:text-gray-200 border border-slate-600 hover:border-slate-500 bg-slate-800/30'
                      }`}
                    >
                      <div className={`rounded-sm p-1.5 mr-3 transition-all duration-300 ${
                        isSubItemActive(subItem)
                          ? 'bg-white/20' 
                          : 'bg-slate-700/50 group-hover:bg-slate-600/50'
                      }`}>
                        {subItem.icon && <subItem.icon className={`w-3.5 h-3.5 ${
                          isSubItemActive(subItem) ? 'text-white' : 'text-gray-400 group-hover:text-green-400'
                        }`} />}
                      </div>
                      <span className="font-medium truncate flex-1 text-left">{subItem.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Tooltip for Collapsed State */}
              {collapsed && (
                <div className="absolute left-full top-0 ml-2 hidden group-hover:block z-50 md:block">
                  <div className="bg-slate-800 text-gray-300 rounded-lg py-3 px-4 shadow-2xl border border-slate-600 min-w-52">
                    <div className="font-semibold mb-2 text-green-400 text-sm border-b border-slate-600 pb-2">
                      {item.label}
                    </div>
                    {item.submenu && (
                      <div className="space-y-1 mt-2">
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => handleSubMenuClick(subItem)}
                            className="flex items-center w-full text-left py-2 px-3 text-sm hover:text-green-400 hover:bg-slate-700 transition-colors rounded-md"
                          >
                            {subItem.icon && <subItem.icon className="w-4 h-4 mr-3 text-gray-400" />}
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Collapse Toggle Button */}
        <div className="border-t border-slate-700 p-3">
          <button
            onClick={toggleSidebar}
            className={`w-full flex items-center justify-center ${collapsed ? 'p-2.5' : 'p-2.5'} rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 hover:from-green-600 hover:to-green-500 transition-all duration-300 group border border-slate-600 hover:border-green-500 shadow-lg text-gray-300 hover:text-white`}
            title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {collapsed ? (
              <ChevronsRight className="w-5 h-5 transition-colors duration-300" />
            ) : (
              <div className="flex items-center">
                <ChevronsLeft className="w-5 h-5 transition-colors duration-300 mr-3" />
                <span className="text-sm font-medium">Collapse</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;