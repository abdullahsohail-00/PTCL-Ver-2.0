import React from 'react';

const FormSection = ({ title, children, icon: Icon }) => (
  <div className="p-2 border-b border-gray-200 last:border-b-0">
    <div className="flex items-center mb-2">
      <div className="p-1 bg-green-100 rounded mr-1.5">
        <Icon className="w-3 h-3 text-green-600" />
      </div>
      <h3 className="text-xs font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {children}
    </div>
  </div>
);

export default FormSection;
