// OrdersTable.jsx
import React from 'react';

const OrdersTable = () => {
  // Sample data for demonstration
  const orders = [
    { name: 'SHOAIB AHMED', cnic: '3630235453625', email: 'shoaibahmed@gmail.com', mobile: '03036593933', city: 'Multan', orderBy: 'FSAMTR.SAMSHAH' },
    { name: 'ZAHID KHAN', cnic: '3630247184477', email: 'zahidkh1@gmail.com', mobile: '03147234841', city: 'Multan', orderBy: 'FSAMTR.SAMSHAH' },
    // ... more rows
  ];

  return (
    <div className="overflow-x-auto">
      <h2 className="font-semibold text-base mb-2">Pending Orders</h2>
      <table className="w-full bg-white border rounded shadow text-xs">
        <thead className="bg-green-700 text-white">
          <tr>
            <th className="px-2 py-1 whitespace-nowrap">Name</th>
            <th className="px-2 py-1 whitespace-nowrap">CNIC</th>
            <th className="px-2 py-1 whitespace-nowrap">Email</th>
            <th className="px-2 py-1 whitespace-nowrap">Mobile</th>
            <th className="px-2 py-1 whitespace-nowrap">City</th>
            <th className="px-2 py-1 whitespace-nowrap">Order By</th>
            <th className="px-2 py-1 whitespace-nowrap">View</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={idx} className="border-b">
              <td className="px-2 py-1 whitespace-nowrap">{order.name}</td>
              <td className="px-2 py-1 whitespace-nowrap">{order.cnic}</td>
              <td className="px-2 py-1 whitespace-nowrap">{order.email}</td>
              <td className="px-2 py-1 whitespace-nowrap">{order.mobile}</td>
              <td className="px-2 py-1 whitespace-nowrap">{order.city}</td>
              <td className="px-2 py-1 whitespace-nowrap">{order.orderBy}</td>
              <td className="px-2 py-1 text-blue-600 cursor-pointer whitespace-nowrap">View</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable; 