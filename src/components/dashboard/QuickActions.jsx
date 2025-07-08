import React from 'react';
import { Plus, UserPlus, Building, FileText } from 'lucide-react';

const QuickActions = ({ activeTab, setActiveTab }) => {
  const actionButtons = [
    {
      id: 'new-customer',
      title: 'New Customer Order',
      icon: Plus,
      primary: true
    },
    {
      id: 'new-corporate',
      title: 'New Corporate Order',
      icon: Building
    },
    {
      id: 'existing-customer',
      title: 'Existing Customer',
      icon: UserPlus
    },
    {
      id: 'order-details',
      title: 'Order Details',
      icon: FileText
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Quick Actions</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actionButtons.map((action) => (
          <button
            key={action.id}
            onClick={() => setActiveTab(action.id)}
            className={`p-4 rounded-xl font-medium transition-all duration-300 text-left ${
              action.primary
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
            }`}
          >
            <div className="flex items-center">
              <action.icon className="w-5 h-5 mr-3" />
              {action.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;