import React, { useState } from 'react';
import { User, MapPin, Settings, Shield, Wifi, CheckCircle, AlertCircle } from 'lucide-react';
import FormSection from '../vendorinformation/FormSection';

const NewFFCustomerOrder = () => {
  const [formData, setFormData] = useState({
    cnic: '',
    name: '',
    mobile: '',
    email: '',
    customerAddress: '',
    houseNo: '',
    floor: '',
    street: '',
    sector: '',
    city: '',
    exchange: '',
    phoneNumber: '',
    landmark: '',
    latitude: '',
    longitude: '',
    offer: '',
    dataline: '',
    installationCharges: '',
    previousOperatorName: '',
    previousOperatorSpeed: '',
    previousOperatorBill: '',
    comments: ''
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
    
    if (!formData.cnic.trim()) newErrors.cnic = 'CNIC is required';
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('FF Customer Order submitted:', formData);
      alert('FF Customer Order submitted successfully!');
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

  const TextAreaField = ({ label, value, onChange, required = false, error = '', placeholder = '' }) => (
    <div className="group">
      <div className="mb-1">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 hover:border-gray-400 transition-all duration-200 resize-vertical"
          placeholder={placeholder}
          rows={3}
        />
        {error && (
          <div className="flex items-center mt-1 text-red-600">
            <AlertCircle className="w-3 h-3 mr-1" />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Header - Same as Corporate Customer Order */}
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
              <Wifi className="w-3 h-3" />
            </div>
          </div>
          
          {/* Title */}
          <div className="flex-1 text-center">
            <h1 className="text-sm font-bold">Flash/Fiber Customer Order</h1>
            <p className="text-green-100 text-xs">Create new flash/fiber customer order</p>
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
          {/* Top Row - CNIC, Name, Mobile, Email */}
          <div className="bg-white border-b border-gray-200 p-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <InputField
                label="CNIC"
                value={formData.cnic}
                onChange={(value) => handleInputChange('cnic', value)}
                placeholder="12345-1234567-1"
                required
                error={errors.cnic}
              />
              <InputField
                label="Name"
                value={formData.name}
                onChange={(value) => handleInputChange('name', value)}
                placeholder="Enter full name"
                required
                error={errors.name}
              />
              <InputField
                label="Mobile No"
                value={formData.mobile}
                onChange={(value) => handleInputChange('mobile', value)}
                type="tel"
                placeholder="03XX-XXXXXXX"
                required
                error={errors.mobile}
              />
              <InputField
                label="Email"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
                type="email"
                placeholder="example@email.com"
                required
                error={errors.email}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Left Column - Personal Info */}
            <div className="border-r border-gray-200">
              {/* Personal Information */}
              <FormSection title="Personal Information" icon={User}>
                <div className="md:col-span-2">
                  <TextAreaField
                    label="Customer Address"
                    value={formData.customerAddress}
                    onChange={(value) => handleInputChange('customerAddress', value)}
                    placeholder="Enter complete address"
                  />
                </div>
                <InputField
                  label="House/Flat No"
                  value={formData.houseNo}
                  onChange={(value) => handleInputChange('houseNo', value)}
                  placeholder="e.g., House 123, Flat 4A"
                />
                <InputField
                  label="Storey/Floor"
                  value={formData.floor}
                  onChange={(value) => handleInputChange('floor', value)}
                  placeholder="e.g., Ground Floor, 2nd Floor"
                />
                <InputField
                  label="Street/Mohalla"
                  value={formData.street}
                  onChange={(value) => handleInputChange('street', value)}
                  placeholder="Enter street or mohalla name"
                />
                <InputField
                  label="Sector/Area/Housing Society"
                  value={formData.sector}
                  onChange={(value) => handleInputChange('sector', value)}
                  placeholder="e.g., Sector 15, DHA Phase 5"
                />
              </FormSection>
            </div>
            
            {/* Right Column - Location & Service Details */}
            <div>
              {/* Location Information */}
              <FormSection title="Location Details" icon={MapPin}>
                <InputField
                  label="City"
                  value={formData.city}
                  onChange={(value) => handleInputChange('city', value)}
                  options={['Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad']}
                />
                <InputField
                  label="Exchange"
                  value={formData.exchange}
                  onChange={(value) => handleInputChange('exchange', value)}
                  options={['LAH-001', 'KHI-002', 'ISB-003', 'RWP-004']}
                />
                <InputField
                  label="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(value) => handleInputChange('phoneNumber', value)}
                  type="tel"
                  placeholder="042-XXXXXXX"
                />
                <InputField
                  label="Nearest Land Mark"
                  value={formData.landmark}
                  onChange={(value) => handleInputChange('landmark', value)}
                  placeholder="e.g., Near XYZ Mall, Main Market"
                />
                <InputField
                  label="Latitude"
                  value={formData.latitude}
                  onChange={(value) => handleInputChange('latitude', value)}
                  type="number"
                  placeholder="31.5204"
                />
                <InputField
                  label="Longitude"
                  value={formData.longitude}
                  onChange={(value) => handleInputChange('longitude', value)}
                  type="number"
                  placeholder="74.3587"
                />
                <InputField
                  label="Offer"
                  value={formData.offer}
                  onChange={(value) => handleInputChange('offer', value)}
                  placeholder="Without discount (Regular Packages)"
                />
                <InputField
                  label="Dataline"
                  value={formData.dataline}
                  onChange={(value) => handleInputChange('dataline', value)}
                  placeholder="15 Mbps"
                />
                <InputField
                  label="Installation Charges"
                  value={formData.installationCharges}
                  onChange={(value) => handleInputChange('installationCharges', value)}
                  placeholder="5000"
                />
                <InputField
                  label="Previous Operator's Name"
                  value={formData.previousOperatorName}
                  onChange={(value) => handleInputChange('previousOperatorName', value)}
                  placeholder="Nayatel"
                />
                <InputField
                  label="Previous Operator's Speed"
                  value={formData.previousOperatorSpeed}
                  onChange={(value) => handleInputChange('previousOperatorSpeed', value)}
                  placeholder="5 Mbps"
                />
              </FormSection>
            </div>
          </div>

          {/* Bottom Row - Upload Documents */}
          <div className="bg-white border-t border-gray-200 p-3">
            <div className="flex items-center mb-3">
              <Settings className="w-4 h-4 text-green-600 mr-2" />
              <h3 className="text-sm font-semibold text-gray-800">Upload Documents</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
              <div className="group">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Previous Operator's Bill
                </label>
                <div className="flex items-center space-x-2">
                  <button className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded text-xs font-medium text-gray-700 transition-colors border border-gray-300">
                    Choose File
                  </button>
                  <span className="text-xs text-gray-500">No file chosen</span>
                </div>
              </div>
              <div className="group">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  SOP
                </label>
                <div className="flex items-center space-x-2">
                  <button className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded text-xs font-medium text-gray-700 transition-colors border border-gray-300">
                    Choose File
                  </button>
                  <span className="text-xs text-gray-500">No file chosen</span>
                </div>
              </div>
              <div className="group">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  CNIC
                </label>
                <div className="flex items-center space-x-2">
                  <button className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded text-xs font-medium text-gray-700 transition-colors border border-gray-300">
                    Choose File
                  </button>
                  <span className="text-xs text-gray-500">No file chosen</span>
                </div>
              </div>
              <div className="group">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Utility Bill
                </label>
                <div className="flex items-center space-x-2">
                  <button className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded text-xs font-medium text-gray-700 transition-colors border border-gray-300">
                    Choose File
                  </button>
                  <span className="text-xs text-gray-500">No file chosen</span>
                </div>
              </div>
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
                    Submitting Order...
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

export default NewFFCustomerOrder;