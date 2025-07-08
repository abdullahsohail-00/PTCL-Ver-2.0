import React from 'react';

const FormSection = ({ title, children, icon: Icon }) => (
  <div className="p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-300">
    <div className="flex items-center mb-3">
      <div className="p-1.5 bg-gradient-to-r from-green-100 to-green-200 rounded-md mr-2 shadow-sm">
        <Icon className="w-4 h-4 text-green-600" />
      </div>
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {children}
    </div>
  </div>
);

export default FormSection;