import React, { useState } from 'react';
import { User, MapPin, CreditCard, Settings, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import FormSection from '../../vendorinformation/FormSection';

const DDSNewCustomer = () => {
  const [formData, setFormData] = useState({
    date: '',
    salesOfficer: '',
    exchange: '',
    region: '',
    dcMsagIds: '',
    dpId: '',
    name: '',
    address: '',
    contactNo: '',
    orderBooked: '',
    competitionName: '',
    poorExperience: '',
    wirelessUser: '',
    expensive: '',
    networkCapacityIssue: '',
    odn: '',
    fdh: '',
    latitude: '',
    longitude: '',
    email: '',
    details: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.salesOfficer) newErrors.salesOfficer = 'Sales Officer is required';
    if (!formData.exchange) newErrors.exchange = 'Exchange is required';
    if (!formData.region) newErrors.region = 'Region is required';
    if (!formData.dcMsagIds) newErrors.dcMsagIds = 'DC/MSAG IDs is required';
    if (!formData.dpId) newErrors.dpId = 'DP ID is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.contactNo) newErrors.contactNo = 'Contact No is required';
    if (!formData.latitude) newErrors.latitude = 'Latitude is required';
    if (!formData.longitude) newErrors.longitude = 'Longitude is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.details) newErrors.details = 'Details are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      alert('DDS New Customer submitted!');
      setIsSubmitting(false);
    }, 1200);
  };

  const InputField = ({ label, value, onChange, type = 'text', required = false, options = null, error = '', className = '', placeholder = '' }) => (
    <div className={`group ${className}`}>
      <div className="mb-1">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className={`relative ${error ? 'border-red-300' : 'border-gray-300'} focus-within:border-green-500 transition-all duration-200`}>
          {options ? (
            <select
              value={value}
              onChange={e => onChange(e.target.value)}
              className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 hover:border-gray-400 transition-all duration-200"
            >
              <option value="">--Please Select--</option>
              {options.map((option, idx) => (
                <option key={idx} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              value={value}
              onChange={e => onChange(e.target.value)}
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

  const RadioGroup = ({ label, value, onChange, required = false, error = '', options = ['YES', 'NO', 'Other'] }) => (
    <div className="mb-1">
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center space-x-4">
        {options.map(opt => (
          <label key={opt} className="flex items-center text-xs font-medium text-gray-700">
            <input
              type="radio"
              name={label}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="mr-1 accent-green-500"
            />
            {opt}
          </label>
        ))}
      </div>
      {error && (
        <div className="flex items-center mt-1 text-red-600">
          <AlertCircle className="w-3 h-3 mr-1" />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-t from-green-500 via-green-600 to-teal-600 rounded-t p-3 text-white shadow-md">
        <div className="flex items-center justify-between">
          
          <div className="flex-1 text-center">
            <h1 className="text-sm font-bold">DDS New Customer</h1>
            <p className="text-green-100 text-xs">Create DDS new customer order</p>
          </div>
          
          
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-50 border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
          {/* Top Row */}
          <div className="bg-white border-b border-gray-200 p-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <InputField label="Date" type="date" value={formData.date} onChange={v => handleInputChange('date', v)} required error={errors.date} />
              <InputField label="Sales Officer" value={formData.salesOfficer} onChange={v => handleInputChange('salesOfficer', v)} required error={errors.salesOfficer} />
              <InputField label="Exchange" value={formData.exchange} onChange={v => handleInputChange('exchange', v)} required error={errors.exchange} placeholder="Enter exchange name/code" />
              <InputField label="Region Name" value={formData.region} onChange={v => handleInputChange('region', v)} options={["North", "South", "East", "West", "Central"]} required error={errors.region} placeholder="Select region" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column */}
            <div className="border-r border-gray-200">
              <FormSection title="Customer Details" icon={User}>
                <InputField label="DC/MSAG IDs" value={formData.dcMsagIds} onChange={v => handleInputChange('dcMsagIds', v)} required error={errors.dcMsagIds} placeholder="Enter DC/MSAG IDs" />
                <InputField label="DP ID" value={formData.dpId} onChange={v => handleInputChange('dpId', v)} required error={errors.dpId} placeholder="Enter DP ID" />
                <InputField label="Name" value={formData.name} onChange={v => handleInputChange('name', v)} required error={errors.name} placeholder="Enter your name" />
                <InputField label="Address" value={formData.address} onChange={v => handleInputChange('address', v)} required error={errors.address} placeholder="Enter your address" />
                <InputField label="Contact No" value={formData.contactNo} onChange={v => handleInputChange('contactNo', v)} required error={errors.contactNo} placeholder="03XX-XXXXXXX" />
                <RadioGroup label="Order Booked" value={formData.orderBooked} onChange={v => handleInputChange('orderBooked', v)} options={["YES", "NO", "Other"]} />
                <InputField label="Competition Name" value={formData.competitionName} onChange={v => handleInputChange('competitionName', v)} placeholder="Enter competition name (if any)" />
              </FormSection>
            
            </div>
            {/* Right Column */}
            <div>
              <FormSection title="Location & Contact" icon={MapPin}>
                <InputField label="Latitude" value={formData.latitude} onChange={v => handleInputChange('latitude', v)} type="number" required error={errors.latitude} />
                <InputField label="Longitude" value={formData.longitude} onChange={v => handleInputChange('longitude', v)} type="number" required error={errors.longitude} />
                <InputField label="Email ID" value={formData.email} onChange={v => handleInputChange('email', v)} type="email" required error={errors.email} placeholder="example@email.com" />
                <InputField label="Details" value={formData.details} onChange={v => handleInputChange('details', v)} type="text" required error={errors.details} placeholder="Enter additional details" />
              </FormSection>
              <FormSection title="Order Reason" icon={CreditCard}>
                <RadioGroup label="Poor experience" value={formData.poorExperience} onChange={v => handleInputChange('poorExperience', v)} />
                <RadioGroup label="Wireless User" value={formData.wirelessUser} onChange={v => handleInputChange('wirelessUser', v)} />
                <RadioGroup label="Expensive" value={formData.expensive} onChange={v => handleInputChange('expensive', v)} />
                <RadioGroup label="Network Capacity Issue" value={formData.networkCapacityIssue} onChange={v => handleInputChange('networkCapacityIssue', v)} />
                <RadioGroup label="ODN" value={formData.odn} onChange={v => handleInputChange('odn', v)} options={["YES", "NO"]} />
                <RadioGroup label="FDH" value={formData.fdh} onChange={v => handleInputChange('fdh', v)} options={["YES", "NO"]} />
              </FormSection>
            
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

export default DDSNewCustomer;
