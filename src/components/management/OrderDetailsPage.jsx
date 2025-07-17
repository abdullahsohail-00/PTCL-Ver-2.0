import React, { useState, useEffect } from 'react';
import { User, MapPin, CreditCard, Settings, Shield, Search, Calendar, Filter, Download, Eye, CheckCircle, XCircle, Clock, Truck, Package } from 'lucide-react';

const OrderDetailsPage = () => {
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    orderType: 'New',
    status: 'ALL'
  });

  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [selectedOrders, setSelectedOrders] = useState([]);

  // Add custom styles for scrollbar
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .custom-table-scroll::-webkit-scrollbar {
        height: 10px;
      }
      .custom-table-scroll::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }
      .custom-table-scroll::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
      }
      .custom-table-scroll::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    setShowOrderDetails(true);
    console.log('Fetching orders with filters:', filters);
  };

  const handleExportToExcel = () => {
    console.log('Exporting to Excel...');
    alert('Exporting data to Excel...');
  };

  // Sample data for pending orders
  const pendingOrdersData = [
    {
      id: 1,
      name: "SHOAIB AHMED",
      cnic: "36302354523625",
      email: "shoaibahmed@gmail.com",
      mobile: "03036599393",
      city: "Multan",
      orderBy: "F.SAMTR.SAMSHAH"
    },
    {
      id: 2,
      name: "ZAHID KHAN",
      cnic: "36302471847477",
      email: "zahidkhan1@gmail.com",
      mobile: "03147234841",
      city: "Multan",
      orderBy: "F.SAMTR.SAMSHAH"
    },
    {
      id: 3,
      name: "RAMZAN ABDULLAH",
      cnic: "36302693742441",
      email: "ramzanabdullah@gmail.com",
      mobile: "03035366750",
      city: "Multan",
      orderBy: "F.SAMTR.SAMSHAH"
    },
    {
      id: 4,
      name: "BASHIR KHATOON",
      cnic: "31201030937752",
      email: "addu5253@gmail.com",
      mobile: "03257200495",
      city: "Multan",
      orderBy: "F.SAMTR.SAMSHAH"
    },
    {
      id: 5,
      name: "MUHAMMAD JAMSHAID",
      cnic: "36304414042299",
      email: "jamshaidqureshi72@gmail.com",
      mobile: "03007363048",
      city: "Bahawalpur",
      orderBy: "F.SAMTR.GHULM"
    }
  ];

  // Sample data for detailed orders
  const detailedOrdersData = [
    {
      id: 1,
      name: "Arsalan JAn",
      cnic: "14301709314459",
      email: "no@email.com",
      mobile: "03330454243",
      city: "Islamabad",
      orderStatus: "Rejected",
      approvedBy: "37835",
      approvalDate: "4/7/2023 10:44:20 AM",
      remarks: "bill not attached",
      errorMessage: "",
      orderId: "",
      status: "Rejected",
      offerSelected: "50 percent off MRC Winback",
      previousOperator: "Nayatel",
      previousOperatorSOP: "View Bill",
      previousOperatorCNIC: "View Bill",
      previousOperatorUtilityBill: "View Bill"
    },
    {
      id: 2,
      name: "SAIMA NAZ",
      cnic: "35202244728868",
      email: "asimirshaddkhan36@gmail.com",
      mobile: "03218880076",
      city: "Lahore",
      orderStatus: "Rejected",
      approvedBy: "43222",
      approvalDate: "4/8/2023 8:44:45 AM",
      remarks: "please fill correct information.",
      errorMessage: "",
      orderId: "",
      status: "Rejected",
      offerSelected: "Without discount (Regular Packages)",
      previousOperator: "Transworld",
      previousOperatorSOP: "View Bill",
      previousOperatorCNIC: "View Bill",
      previousOperatorUtilityBill: "View Bill"
    },
    {
      id: 3,
      name: "Arsalan Jan",
      cnic: "14301709314459",
      email: "no@email.com",
      mobile: "03330454243",
      city: "Islamabad",
      orderStatus: "Approved",
      approvedBy: "37835",
      approvalDate: "4/7/2023 10:53:35 AM",
      remarks: "Approved",
      errorMessage: "",
      orderId: "35459208183",
      status: "Approved",
      offerSelected: "3 Months Winback without Installation",
      previousOperator: "Nayatel",
      previousOperatorSOP: "View Bill",
      previousOperatorCNIC: "View Bill",
      previousOperatorUtilityBill: "View Bill"
    }
  ];

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status.toLowerCase()) {
      case 'approved':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'rejected':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return <CheckCircle className="w-3 h-3 text-green-600" />;
      case 'rejected':
        return <XCircle className="w-3 h-3 text-red-600" />;
      case 'pending':
        return <Clock className="w-3 h-3 text-yellow-600" />;
      default:
        return <Clock className="w-3 h-3 text-gray-600" />;
    }
  };

  const PendingOrdersTable = () => (
    <div className="w-full bg-white rounded-lg border border-gray-200 mb-6">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center">
          <Clock className="w-4 h-4 mr-2 text-orange-600" />
          Pending Orders
        </h3>
      </div>
      
      <div className="w-full overflow-x-auto custom-table-scroll" style={{ maxHeight: '400px' }}>
        <table className="w-full" style={{ minWidth: '900px' }}>
          <thead className="bg-green-500 text-white sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Name</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase">CNIC</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Email</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Mobile</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase">City</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Order By</th>
              <th className="px-4 py-3 text-center text-xs font-semibold uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pendingOrdersData.map((order, index) => (
              <tr key={order.id} className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="px-4 py-3 text-xs font-medium text-gray-900 whitespace-nowrap">{order.name}</td>
                <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{order.cnic}</td>
                <td className="px-4 py-3 text-xs text-blue-600 hover:text-blue-800 whitespace-nowrap">{order.email}</td>
                <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{order.mobile}</td>
                <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{order.city}</td>
                <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{order.orderBy}</td>
                <td className="px-4 py-3 text-center whitespace-nowrap">
                  <button className="bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1 rounded text-xs font-medium inline-flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const DetailedOrdersTable = () => (
    <div className="w-full bg-white rounded-lg border border-gray-200 mb-6">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center">
          <Package className="w-4 h-4 mr-2 text-blue-600" />
          Order Details
        </h3>
        <button
          onClick={handleExportToExcel}
          className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded text-xs font-medium flex items-center"
        >
          <Download className="w-3 h-3 mr-1" />
          Export to Excel
        </button>
      </div>
      
      <div className="w-full overflow-x-auto custom-table-scroll" style={{ maxHeight: '400px' }}>
        <table className="w-full" style={{ minWidth: '1800px' }}>
          <thead className="bg-green-500 text-white sticky top-0 z-10">
            <tr>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Name</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">CNIC</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Email</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Mobile</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">City</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Order Status</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Approved By</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Approval Date</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Remarks</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Error Message</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Order ID</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Status</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Offer Selected</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Previous Operator</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Previous Operator's SOP</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">CNIC</th>
              <th className="px-3 py-3 text-left text-xs font-semibold uppercase">Utility Bill</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {detailedOrdersData.map((order, index) => (
              <tr key={order.id} className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="px-3 py-3 text-xs font-medium text-gray-900 whitespace-nowrap">{order.name}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{order.cnic}</td>
                <td className="px-3 py-3 text-xs text-blue-600 hover:text-blue-800 whitespace-nowrap">{order.email}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{order.mobile}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{order.city}</td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(order.orderStatus)}
                    <span className={getStatusBadge(order.orderStatus)}>
                      {order.orderStatus}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{order.approvedBy}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{order.approvalDate}</td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">
                  <div className="max-w-[200px]" title={order.remarks}>
                    {order.remarks}
                  </div>
                </td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{order.errorMessage || '-'}</td>
                <td className="px-3 py-3 text-xs text-blue-600 font-medium whitespace-nowrap">{order.orderId || '-'}</td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <span className={getStatusBadge(order.status)}>
                    {order.status}
                  </span>
                </td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">
                  <div className="max-w-[200px]" title={order.offerSelected}>
                    {order.offerSelected}
                  </div>
                </td>
                <td className="px-3 py-3 text-xs text-gray-600 whitespace-nowrap">{order.previousOperator}</td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <button className="bg-green-100 hover:bg-green-200 text-green-700 px-2 py-1 rounded text-xs font-medium">
                    {order.previousOperatorSOP}
                  </button>
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                    {order.previousOperatorCNIC}
                  </button>
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-2 py-1 rounded text-xs font-medium">
                    {order.previousOperatorUtilityBill}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="h-full w-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-t from-green-500 via-green-600 to-teal-600 rounded-t p-3 text-white shadow-md mx-4 mt-4">
        <div className="flex items-center justify-between">
          {/* Logo - removed as per request */}
          
          <div className="flex-1 text-center px-2">
            <h1 className="text-sm font-bold">Order Details</h1>
            <p className="text-green-100 text-xs hidden sm:block">Manage and track all customer orders</p>
          </div>
          
          {/* Security Badge - removed as per request */}
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white mx-4 mb-4 rounded-b-lg shadow-lg flex-1 overflow-hidden">
        {/* Filter Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Start Date:</label>
              <input
                type="date"
                value={filters.startDate}
                onChange={(e) => handleFilterChange('startDate', e.target.value)}
                className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">End Date:</label>
              <input
                type="date"
                value={filters.endDate}
                onChange={(e) => handleFilterChange('endDate', e.target.value)}
                className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Order Type:</label>
              <select
                value={filters.orderType}
                onChange={(e) => handleFilterChange('orderType', e.target.value)}
                className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option value="New">New</option>
                <option value="Corporate">Corporate</option>
                <option value="FF">Flash/Fiber</option>
                <option value="Existing">Existing</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Status:</label>
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option value="ALL">ALL</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded text-xs font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md flex items-center justify-center space-x-1"
              >
                <Search className="w-3 h-3" />
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {!showOrderDetails ? (
          <div className="p-8 text-center text-gray-500">
            <Filter className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-sm">Please select filters and click Submit to view order details</p>
          </div>
        ) : (
          <div className="p-4 overflow-auto">
            <PendingOrdersTable />
            <DetailedOrdersTable />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetailsPage;