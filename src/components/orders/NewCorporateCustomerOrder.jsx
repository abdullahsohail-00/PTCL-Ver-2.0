import React, { useState } from 'react';
import { User, MapPin, CreditCard, Settings, Shield, Building, CheckCircle, AlertCircle } from 'lucide-react';

const FormSection = ({ title, icon: Icon, children }) => (
  <div className="bg-white border-b border-gray-200 p-3">
    <div className="flex items-center mb-3">
      <Icon className="w-4 h-4 text-green-600 mr-2" />
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {children}
    </div>
  </div>
);

const NewCorporateCustomerOrder = () => {
  const [formData, setFormData] = useState({
    ntn: '',
    name: '',
    mobile: '',
    email: '',
    customerAddress: '',
    houseNo: '',
    floor: '',
    street: '',
    sector: '',
    zone: '',
    region: '',
    city: '',
    exchange: '',
    phoneNumber: '',
    landmark: '',
    latitude: '',
    longitude: '',
    orderFor: '',
    ebillActivation: '',
    selectType: '',
    selectPackage: '',
    comments: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.ntn.trim()) newErrors.ntn = 'NTN is required';
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
    
    setTimeout(() => {
      console.log('Corporate Order submitted:', formData);
      alert('Corporate Order submitted successfully!');
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
      <div className="bg-gradient-to-t from-green-500 via-green-600 to-teal-600 rounded-t-lg p-3 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex-1 text-center">
            <h1 className="text-sm font-bold">New Corporate Customer Order</h1>
            <p className="text-green-100 text-xs">Create new corporate customer order</p>
          </div>
        </div>
      </div>

      {/* ✅ FORM START */}
      <form onSubmit={handleSubmit} className="bg-gray-50 border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
        <div className="bg-white border-b border-gray-200 p-3">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <InputField label="NTN" value={formData.ntn} onChange={(value) => handleInputChange('ntn', value)} placeholder="1234567-8" required error={errors.ntn} />
            <InputField label="Name" value={formData.name} onChange={(value) => handleInputChange('name', value)} placeholder="Enter company name" required error={errors.name} />
            <InputField label="Mobile No" value={formData.mobile} onChange={(value) => handleInputChange('mobile', value)} type="tel" placeholder="03XX-XXXXXXX" required error={errors.mobile} />
            <InputField label="Email" value={formData.email} onChange={(value) => handleInputChange('email', value)} type="email" placeholder="company@email.com" required error={errors.email} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="border-r border-gray-200">
            <FormSection title="Personal Information" icon={User}>
              <div className="md:col-span-2">
                <TextAreaField label="Customer Address" value={formData.customerAddress} onChange={(value) => handleInputChange('customerAddress', value)} placeholder="Enter complete company address" />
              </div>
              <InputField label="House/Flat No" value={formData.houseNo} onChange={(value) => handleInputChange('houseNo', value)} placeholder="e.g., Office 123, Building 4A" />
              <InputField label="Storey/Floor" value={formData.floor} onChange={(value) => handleInputChange('floor', value)} placeholder="e.g., Ground Floor, 5th Floor" />
              <InputField label="Street/Mohalla" value={formData.street} onChange={(value) => handleInputChange('street', value)} placeholder="Enter street or area name" />
              <InputField label="Sector/Area/Housing Society" value={formData.sector} onChange={(value) => handleInputChange('sector', value)} placeholder="e.g., Sector 15, Gulberg, DHA" />
              <InputField label="Zone" value={formData.zone} onChange={(value) => handleInputChange('zone', value)} options={['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4']} />
              <InputField label="Region" value={formData.region} onChange={(value) => handleInputChange('region', value)} options={['North', 'South', 'East', 'West', 'Central']} />
            </FormSection>
          </div>

          <div>
            <FormSection title="Location Details" icon={MapPin}>
              <InputField label="City" value={formData.city} onChange={(value) => handleInputChange('city', value)} options={['Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad']} />
              <InputField label="Exchange" value={formData.exchange} onChange={(value) => handleInputChange('exchange', value)} options={['LAH-001', 'KHI-002', 'ISB-003', 'RWP-004']} />
              <InputField label="Phone Number" value={formData.phoneNumber} onChange={(value) => handleInputChange('phoneNumber', value)} type="tel" placeholder="042-XXXXXXX" />
              <InputField label="Nearest Land Mark" value={formData.landmark} onChange={(value) => handleInputChange('landmark', value)} placeholder="e.g., Near XYZ Tower, Main Boulevard" />
              <InputField label="Latitude" value={formData.latitude} onChange={(value) => handleInputChange('latitude', value)} type="number" placeholder="31.5204" />
              <InputField label="Longitude" value={formData.longitude} onChange={(value) => handleInputChange('longitude', value)} type="number" placeholder="74.3587" />
              <InputField label="Order For" value={formData.orderFor} onChange={(value) => handleInputChange('orderFor', value)} options={['PSTN', 'Broadband', 'IPTV', 'OTT']} />
              <InputField label="E-Bill Activation" value={formData.ebillActivation} onChange={(value) => handleInputChange('ebillActivation', value)} options={['Yes', 'No']} />
              <InputField label="Select Type" value={formData.selectType} onChange={(value) => handleInputChange('selectType', value)} options={['Corporate', 'Enterprise', 'SME', 'Government']} />
              <InputField label="Select Package" value={formData.selectPackage} onChange={(value) => handleInputChange('selectPackage', value)} options={['Basic', 'Standard', 'Premium', 'Enterprise']} />
            </FormSection>
          </div>
        </div>

        <div className="bg-white border-t border-gray-200 p-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-3">
                <Settings className="w-4 h-4 text-green-600 mr-2" />
                <h3 className="text-sm font-semibold text-gray-800">Upload Documents</h3>
              </div>
              <div className="space-y-3">
                <div className="group">
                  <label className="block text-xs font-medium text-gray-700 mb-1">NTN</label>
                  <div className="flex items-center space-x-2">
                    <button className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded text-xs font-medium text-gray-700 transition-colors border border-gray-300">Choose File</button>
                    <span className="text-xs text-gray-500">No file chosen</span>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-xs font-medium text-gray-700 mb-1">Utility Bill</label>
                  <div className="flex items-center space-x-2">
                    <button className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded text-xs font-medium text-gray-700 transition-colors border border-gray-300">Choose File</button>
                    <span className="text-xs text-gray-500">No file chosen</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <CreditCard className="w-4 h-4 text-green-600 mr-2" />
                <h3 className="text-sm font-semibold text-gray-800">Comments</h3>
              </div>
              <TextAreaField label="Comments" value={formData.comments} onChange={(value) => handleInputChange('comments', value)} placeholder="Enter any additional comments or requirements..." />
              <div className="mt-3 text-center">
                <div className="bg-orange-100 border border-orange-300 rounded-lg px-3 py-2 inline-block">
                  <span className="text-xs font-medium text-orange-800">Installation charges are Rs. 5,500 standard for all</span>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </form>
      {/* ✅ FORM END */}
    </div>
  );
};

export default NewCorporateCustomerOrder;
