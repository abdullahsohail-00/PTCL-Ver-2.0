import React from 'react';

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  icon: Icon,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-all duration-200';
  
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-green-100 text-green-800',
    secondary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
    purple: 'bg-purple-100 text-purple-800',
    pink: 'bg-pink-100 text-pink-800',
    indigo: 'bg-indigo-100 text-indigo-800',
    
    // Outline variants
    'outline-default': 'border border-gray-300 text-gray-700 bg-transparent',
    'outline-primary': 'border border-green-300 text-green-700 bg-transparent',
    'outline-secondary': 'border border-blue-300 text-blue-700 bg-transparent',
    'outline-success': 'border border-green-300 text-green-700 bg-transparent',
    'outline-warning': 'border border-yellow-300 text-yellow-700 bg-transparent',
    'outline-danger': 'border border-red-300 text-red-700 bg-transparent',
    
    // Solid variants
    'solid-primary': 'bg-green-600 text-white',
    'solid-secondary': 'bg-blue-600 text-white',
    'solid-success': 'bg-green-600 text-white',
    'solid-warning': 'bg-yellow-600 text-white',
    'solid-danger': 'bg-red-600 text-white',
    'solid-info': 'bg-blue-600 text-white'
  };
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-sm'
  };
  
  const variantClasses = variants[variant] || variants.default;
  const sizeClasses = sizes[size] || sizes.md;
  
  return (
    <span
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-3 h-3 mr-1" />}
      {children}
    </span>
  );
};

export default Badge;