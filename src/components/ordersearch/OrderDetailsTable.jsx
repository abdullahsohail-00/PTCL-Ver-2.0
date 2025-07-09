// OrderDetailsTable.jsx
import React from 'react';

const OrderDetailsTable = () => {
  // Sample data for demonstration
  const details = [
    { name: 'Arsalan JAn', cnic: '1430170931459', email: 'no@email.com', mobile: '03330454243', city: 'Islamabad', orderStatus: 'Rejected', approvedBy: '37845', approvalDate: '4/1/2023 10:44:20 AM', remarks: 'bill not attached', errorMessage: '', orderId: '', orderStatus2: 'Rejected', other: '50 pair off White', offer: '50 percent off MRC. Winback', prevOperator: 'Nayatel' },
    { name: 'SAIMA NAZ', cnic: '3520224472686', email: 'asmirshadkhan36@gmail.com', mobile: '03218880762', city: 'Lahore', orderStatus: 'Rejected', approvedBy: '43222', approvalDate: '4/8/2023 8:44:45 AM', remarks: 'please fill correct information.', errorMessage: '', orderId: '', orderStatus2: 'Rejected', other: 'Win', offer: 'Without discount (Regular Packages)', prevOperator: 'Transworld' },
    // ... more rows
  ];

  return (
    <div className="overflow-x-auto">
      <h2 className="font-semibold text-base mb-2">Order Details</h2>
      <table className="w-full bg-white border rounded shadow text-xs">
        <thead className="bg-green-700 text-white">
          <tr>
            <th className="px-2 py-1 whitespace-nowrap">Name</th>
            <th className="px-2 py-1 whitespace-nowrap">CNIC</th>
            <th className="px-2 py-1 whitespace-nowrap">Email</th>
            <th className="px-2 py-1 whitespace-nowrap">Mobile</th>
            <th className="px-2 py-1 whitespace-nowrap">City</th>
            <th className="px-2 py-1 whitespace-nowrap">Order Status</th>
            <th className="px-2 py-1 whitespace-nowrap">Approved By</th>
            <th className="px-2 py-1 whitespace-nowrap">Approval Date</th>
            <th className="px-2 py-1 whitespace-nowrap">Remarks</th>
            <th className="px-2 py-1 whitespace-nowrap">Error Message</th>
            <th className="px-2 py-1 whitespace-nowrap">OrderId</th>
            <th className="px-2 py-1 whitespace-nowrap">Order Status</th>
            <th className="px-2 py-1 whitespace-nowrap">Other</th>
            <th className="px-2 py-1 whitespace-nowrap">Offer Selected</th>
            <th className="px-2 py-1 whitespace-nowrap">Previous Operator</th>
            <th className="px-2 py-1 whitespace-nowrap">Previous Operator's Bill</th>
            <th className="px-2 py-1 whitespace-nowrap">SOF</th>
            <th className="px-2 py-1 whitespace-nowrap">CNIC</th>
            <th className="px-2 py-1 whitespace-nowrap">Utility bill</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, idx) => (
            <tr key={idx} className="border-b">
              <td className="px-2 py-1 whitespace-nowrap">{detail.name}</td>
              <td className="px-2 py-1 whitespace-nowrap">{detail.cnic}</td>
              <td className="px-2 py-1 whitespace-nowrap">{detail.email}</td>
              <td className="px-2 py-1 whitespace-nowrap">{detail.mobile}</td>
              <td className="px-2 py-1 whitespace-nowrap">{detail.city}</td>
              <td className="px-2 py-1 whitespace-nowrap">{detail.orderStatus}</td>
              <td className="px-2 py-1 whitespace-nowrap">{detail.approvedBy}</td>
              <td className="px-2 py-1 whitespace-nowrap">{detail.approvalDate}</td>
              <td className="px-2 py-1 whitespace-nowrap">{detail.remarks}</td>
              <td className="px-2 py-1 whitespace-nowrap">{detail.errorMessage}</td>
              <td className="px-2 py-1 whitespace-nowrap">{detail.orderId}</td>
              <td className="px-2 py-1 whitespace-nowrap">{detail.orderStatus2}</td>
              <td className="px-2 py-1 whitespace-nowrap">{detail.other}</td>
              <td className="px-2 py-1 whitespace-nowrap">{detail.offer}</td>
              <td className="px-2 py-1 whitespace-nowrap">{detail.prevOperator}</td>
              <td className="px-2 py-1 whitespace-nowrap text-green-700 font-semibold cursor-pointer">View Bill</td>
              <td className="px-2 py-1 whitespace-nowrap text-green-700 font-semibold cursor-pointer">View Bill</td>
              <td className="px-2 py-1 whitespace-nowrap text-green-700 font-semibold cursor-pointer">View Bill</td>
              <td className="px-2 py-1 whitespace-nowrap text-green-700 font-semibold cursor-pointer">View Bill</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetailsTable; 