import React, { useState } from 'react';
import {
  RotateCcw, Shield, Building, CheckCircle, AlertCircle
} from 'lucide-react';

const InputField = ({
  label, value, onChange, type = 'text', required = false,
  error = '', className = '', placeholder = ''
}) => (
  <div className={`group ${className}`}>
    <div className="mb-1">
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className={`relative ${error ? 'border-red-300' : 'border-gray-300'} focus-within:border-green-500 transition-all duration-200`}>
        <input
          name={label}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 hover:border-gray-400 transition-all duration-200"
          placeholder={placeholder}
        />
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

const RestoreOrderForm = () => {
  const [formData, setFormData] = useState({
    pstnNumber: '',
    cnic: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.pstnNumber.trim()) newErrors.pstnNumber = 'PSTN Number is required';
    if (!formData.cnic.trim()) newErrors.cnic = 'CNIC is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Restore Order submitted:', formData);
      alert('Restore Order submitted successfully!');
      setFormData({
        pstnNumber: '',
        cnic: ''
      });
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-t-lg p-3 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {!logoError ? (
              <img
                src="https://ptcl.com.pk/images/ptcl-logo-plain.svg"
                alt="PTCL Logo"
                className="h-6 w-auto object-contain bg-white p-1 rounded"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-6 h-6 bg-white bg-opacity-20 rounded flex items-center justify-center">
                <Building className="w-3 h-3" />
              </div>
            )}
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-sm font-bold">Restore Order</h1>
            <p className="text-green-100 text-xs">Restore service order</p>
          </div>
          <div className="flex items-center space-x-1 bg-white bg-opacity-20 px-2 py-1 rounded-full">
            <Shield className="w-3 h-3" />
            <span className="text-xs">Secured</span>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-gray-50 border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
        {/* Form Fields */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              <RotateCcw className="w-5 h-5 text-green-600 mr-2" />
              <h2 className="text-sm font-semibold text-gray-800">Restore Order</h2>
            </div>
          </div>
          
          <div className="space-y-4">
            <InputField 
              label="PSTN Number" 
              value={formData.pstnNumber} 
              onChange={(val) => handleInputChange('pstnNumber', val)} 
              placeholder="Enter PSTN Number"
              required 
              error={errors.pstnNumber} 
            />
            
            <InputField 
              label="CNIC" 
              value={formData.cnic} 
              onChange={(val) => handleInputChange('cnic', val)} 
              placeholder="Enter CNIC"
              required 
              error={errors.cnic} 
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex justify-center">
            <button
              type="submit"
              onClick={handleSubmit}
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
    </div>
  );
};

export default RestoreOrderForm;