import React, { useState } from 'react';
import { Shield, Phone, CheckCircle, AlertCircle } from 'lucide-react';

const ExistingCustomerNewOrder = () => {
  const [formData, setFormData] = useState({
    pstnNumber: '',
    latitude: '',
    longitude: '',
    applyFor: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.pstnNumber.trim()) newErrors.pstnNumber = 'PSTN Number is required';
    if (!formData.applyFor.trim()) newErrors.applyFor = 'Apply For is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Existing Customer Order submitted:', formData);
      alert('Existing Customer Order submitted successfully!');
      setIsSubmitting(false);
    }, 1500);
  };

  const InputField = ({ label, value, onChange, type = 'text', required = false, options = null, error = '', className = '', placeholder = '' }) => (
    <div className={`group ${className}`}>
      <div className="mb-1">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className={`relative ${
          error ? 'border-red-300' : 'border-gray-300'
        } focus-within:border-green-500 transition-all duration-200`}>
          {options ? (
            <select
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 hover:border-gray-400 transition-all duration-200"
            >
              <option value="">--Please Select--</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 hover:border-gray-400 transition-all duration-200"
              placeholder={placeholder}
            />
          )}
        </div>
        {error && (
          <div className="flex items-center mt-1 text-red-600">
            <AlertCircle className="w-3 h-3 mr-1" />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    </div>
  );

  const RadioField = ({ label, value, onChange, options, required = false, error = '' }) => (
    <div className="group">
      <div className="mb-1">
        <label className="block text-xs font-medium text-gray-700 mb-3">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {options.map((option, index) => (
            <label key={index} className="relative cursor-pointer group">
              <input
                type="radio"
                value={option}
                checked={value === option}
                onChange={(e) => onChange(e.target.value)}
                className="sr-only"
              />
              <div className={`
                relative flex items-center justify-center px-4 py-3 rounded-xl border-2 transition-all duration-300
                ${value === option 
                  ? 'border-green-500 bg-green-50 shadow-lg shadow-green-100' 
                  : 'border-gray-300 bg-white hover:border-green-300 hover:bg-green-50'
                }
                group-hover:transform group-hover:scale-105
              `}>
                <div className="flex items-center space-x-3">
                  <div className={`
                    w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300
                    ${value === option 
                      ? 'border-green-500 bg-green-500' 
                      : 'border-gray-300 bg-white group-hover:border-green-400'
                    }
                  `}>
                    {value === option && (
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <span className={`
                    text-sm font-semibold transition-all duration-300
                    ${value === option ? 'text-green-700' : 'text-gray-700'}
                  `}>
                    {option}
                  </span>
                </div>
                {value === option && (
                  <div className="absolute top-1 right-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                )}
              </div>
            </label>
          ))}
        </div>
        {error && (
          <div className="flex items-center mt-2 text-red-600">
            <AlertCircle className="w-3 h-3 mr-1" />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Header - Same as FF Customer Order */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-t-lg p-3 text-white shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://ptcl.com.pk/images/ptcl-logo-plain.svg" 
              alt="PTCL Logo" 
              className="h-6 w-auto object-contain bg-white p-1 rounded"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded flex items-center justify-center" style={{display: 'none'}}>
              <Phone className="w-3 h-3" />
            </div>
          </div>
          
          {/* Title */}
          <div className="flex-1 text-center">
            <h1 className="text-sm font-bold">Existing Customer New Order</h1>
            <p className="text-green-100 text-xs">Create new order for existing customer</p>
          </div>
          
          {/* Security Badge */}
          <div className="flex items-center space-x-1 bg-white bg-opacity-20 px-2 py-1 rounded-full">
            <Shield className="w-3 h-3" />
            <span className="text-xs">Secured</span>
          </div>
        </div>
      </div>
      
      {/* Form Content */}
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-50 border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
          {/* Main Content - Centered Simple Form */}
          <div className="bg-white p-6">
            <div className="max-w-md mx-auto space-y-4">
              
              {/* PSTN Number */}
              <InputField
                label="PSTN Number"
                value={formData.pstnNumber}
                onChange={(value) => handleInputChange('pstnNumber', value)}
                placeholder="Enter PSTN number"
                required
                error={errors.pstnNumber}
              />

              {/* Latitude */}
              <InputField
                label="Latitude"
                value={formData.latitude}
                onChange={(value) => handleInputChange('latitude', value)}
                type="number"
                placeholder="31.5204"
              />

              {/* Longitude */}
              <InputField
                label="Longitude"
                value={formData.longitude}
                onChange={(value) => handleInputChange('longitude', value)}
                type="number"
                placeholder="74.3587"
              />

              {/* Apply For - Radio Buttons */}
              <RadioField
                label="Apply For"
                value={formData.applyFor}
                onChange={(value) => handleInputChange('applyFor', value)}
                options={['Broadband', 'IPTV', 'OTT']}
                required
                error={errors.applyFor}
              />

            </div>
          </div>

          {/* Submit Button */}
          <div className="p-3 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-2 rounded-lg text-xs font-semibold hover:from-green-600 hover:to-green-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    Submit
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExistingCustomerNewOrder;