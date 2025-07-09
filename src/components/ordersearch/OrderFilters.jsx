// OrderFilters.jsx
import React from 'react';

const OrderFilters = () => {
  return (
    <div className="flex flex-wrap gap-4 items-end mb-6">
      <div>
        <label className="block text-sm font-medium mb-1">Start Date<span className="text-red-500">*</span></label>
        <input type="date" className="border rounded px-2 py-1 w-40" required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">End Date<span className="text-red-500">*</span></label>
        <input type="date" className="border rounded px-2 py-1 w-40" required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Order Type</label>
        <select className="border rounded px-2 py-1 w-32">
          <option>New</option>
          <option>All</option>
        </select>
      </div>
      <div>
        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">Submit</button>
      </div>
    </div>
  );
};

export default OrderFilters; 