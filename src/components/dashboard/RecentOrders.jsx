import React from 'react';
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  XCircle, 
  AlertCircle,
  Eye,
  Edit,
  MoreHorizontal
} from 'lucide-react';

const RecentOrders = () => {
  const ordersData = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      type: 'New Customer',
      status: 'pending',
      date: '2025-07-04',
      amount: 'Rs 15,000',
      priority: 'high'
    },
    {
      id: 'ORD-002',
      customer: 'ABC Corporation',
      type: 'Corporate',
      status: 'completed',
      date: '2025-07-03',
      amount: 'Rs 85,000',
      priority: 'medium'
    },
    {
      id: 'ORD-003',
      customer: 'Jane Smith',
      type: 'Existing Customer',
      status: 'processing',
      date: '2025-07-02',
      amount: 'Rs 25,000',
      priority: 'low'
    },
    {
      id: 'ORD-004',
      customer: 'Tech Solutions Ltd',
      type: 'Corporate',
      status: 'completed',
      date: '2025-07-01',
      amount: 'Rs 150,000',
      priority: 'high'
    },
    {
      id: 'ORD-005',
      customer: 'Muhammad Ali',
      type: 'FF Customer',
      status: 'failed',
      date: '2025-06-30',
      amount: 'Rs 12,000',
      priority: 'medium'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'processing':
        return <Clock className="w-4 h-4" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4" />;
      case 'failed':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityClasses = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-50 border-l-red-500';
      case 'medium':
        return 'bg-yellow-50 border-l-yellow-500';
      case 'low':
        return 'bg-green-50 border-l-green-500';
      default:
        return 'bg-gray-50 border-l-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <FileText className="w-4 h-4 text-blue-600" />
              </div>
              Recent Orders
            </h3>
            <p className="text-gray-600 text-sm mt-1">Latest order activities and status updates</p>
          </div>
          
          <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
            View All Orders
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Order Details</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Customer</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Type</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Status</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Amount</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, index) => (
              <tr 
                key={order.id} 
                className={`border-l-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer ${
                  getPriorityClasses(order.priority)
                } ${index < ordersData.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <td className="py-4 px-6">
                  <div>
                    <p className="font-semibold text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                </td>
                
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {order.customer.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{order.customer}</p>
                      <p className="text-sm text-gray-500">Customer</p>
                    </div>
                  </div>
                </td>
                
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {order.type}
                  </span>
                </td>
                
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    getStatusClasses(order.status)
                  }`}>
                    {getStatusIcon(order.status)}
                    <span className="ml-1 capitalize">{order.status}</span>
                  </span>
                </td>
                
                <td className="py-4 px-6">
                  <p className="font-semibold text-gray-900">{order.amount}</p>
                </td>
                
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <p>Showing 5 of 150 orders</p>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-white transition-colors duration-200">
              Previous
            </button>
            <button className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;