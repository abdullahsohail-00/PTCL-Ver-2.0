import React, { useState } from 'react';
import { User, MapPin, CreditCard, Settings, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import FormSection from '../../vendorinformation/FormSection';

const DDSExistingCustomer = () => {
  const [formData, setFormData] = useState({
    date: '',
    rdId: '',
    rdName: '',
    salesOfficer: '',
    region: '',
    exchange: '',
    dcMsagIds: '',
    dpId: '',
    pstnNo: '',
    name: '',
    cnic: '',
    address: '',
    contactNo: '',
    customerSatisfaction: '',
    billNotReceived: '',
    expensive: '',
    frequentDisconnection: '',
    slowSpeed: '',
    noBrowsing: '',
    odn: '',
    fdh: '',
    latitude: '',
    longitude: '',
    email: '',
    saleSource: '',
    others: ''
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
    if (!formData.rdId) newErrors.rdId = 'RD ID is required';
    if (!formData.rdName) newErrors.rdName = 'RD Name is required';
    if (!formData.salesOfficer) newErrors.salesOfficer = 'Sales Officer is required';
    if (!formData.region) newErrors.region = 'Region is required';
    if (!formData.exchange) newErrors.exchange = 'Exchange is required';
    if (!formData.dcMsagIds) newErrors.dcMsagIds = 'DC/MSAG IDs is required';
    if (!formData.dpId) newErrors.dpId = 'DP ID is required';
    if (!formData.pstnNo) newErrors.pstnNo = 'PSTN No is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.cnic) newErrors.cnic = 'CNIC is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.contactNo) newErrors.contactNo = 'Contact No is required';
    if (!formData.latitude) newErrors.latitude = 'Latitude is required';
    if (!formData.longitude) newErrors.longitude = 'Longitude is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.saleSource) newErrors.saleSource = 'Sale Source is required';
    if (!formData.others) newErrors.others = 'Others is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      alert('DDS Existing Customer submitted!');
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
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-t-lg p-3 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://ptcl.com.pk/images/ptcl-logo-plain.svg" 
              alt="PTCL Logo" 
              className="h-6 w-auto object-contain bg-white p-1 rounded"
              onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded flex items-center justify-center" style={{display: 'none'}}>
              <User className="w-3 h-3" />
            </div>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-sm font-bold">DDS Existing Customer</h1>
            <p className="text-green-100 text-xs">DDS existing customer order form</p>
          </div>
          <div className="flex items-center space-x-1 bg-white bg-opacity-20 px-2 py-1 rounded-full">
            <Shield className="w-3 h-3" />
            <span className="text-xs">Secured</span>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-50 border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
          {/* Top Row */}
          <div className="bg-white border-b border-gray-200 p-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <InputField label="Date" type="date" value={formData.date} onChange={v => handleInputChange('date', v)} required error={errors.date} />
              <InputField label="RD ID" value={formData.rdId} onChange={v => handleInputChange('rdId', v)} required error={errors.rdId} />
              <InputField label="RD Name" value={formData.rdName} onChange={v => handleInputChange('rdName', v)} required error={errors.rdName} />
              <InputField label="Sales Officer" value={formData.salesOfficer} onChange={v => handleInputChange('salesOfficer', v)} required error={errors.salesOfficer} />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column */}
            <div className="border-r border-gray-200">
              <FormSection title="Customer Details" icon={User}>
                <InputField label="Exchange" value={formData.exchange} onChange={v => handleInputChange('exchange', v)} required error={errors.exchange} placeholder="Enter exchange name/code" />
                <InputField label="DC/MSAG IDs" value={formData.dcMsagIds} onChange={v => handleInputChange('dcMsagIds', v)} required error={errors.dcMsagIds} placeholder="Enter DC/MSAG IDs" />
                <InputField label="DP ID" value={formData.dpId} onChange={v => handleInputChange('dpId', v)} required error={errors.dpId} placeholder="Enter DP ID" />
                <InputField label="PSTN No" value={formData.pstnNo} onChange={v => handleInputChange('pstnNo', v)} required error={errors.pstnNo} placeholder="Enter PSTN number" />
                <InputField label="Name" value={formData.name} onChange={v => handleInputChange('name', v)} required error={errors.name} placeholder="Enter your name" />
                <InputField label="CNIC" value={formData.cnic} onChange={v => handleInputChange('cnic', v)} required error={errors.cnic} placeholder="Enter CNIC number" />
                <InputField label="Address" value={formData.address} onChange={v => handleInputChange('address', v)} required error={errors.address} placeholder="Enter your address" />
                <InputField label="Contact No" value={formData.contactNo} onChange={v => handleInputChange('contactNo', v)} required error={errors.contactNo} placeholder="03XX-XXXXXXX" />
              </FormSection>
            
            </div>
            {/* Right Column */}
            <div>
              <FormSection title="Location & Contact" icon={MapPin}>
                <InputField label="Latitude" value={formData.latitude} onChange={v => handleInputChange('latitude', v)} type="number" required error={errors.latitude} />
                <InputField label="Longitude" value={formData.longitude} onChange={v => handleInputChange('longitude', v)} type="number" required error={errors.longitude} />
                <InputField label="Email ID" value={formData.email} onChange={v => handleInputChange('email', v)} type="email" required error={errors.email} placeholder="example@email.com" />
                <InputField label="Sale Source" value={formData.saleSource} onChange={v => handleInputChange('saleSource', v)} options={["DDS", "Other"]} required error={errors.saleSource} placeholder="Select sale source" />
                <InputField label="Others" value={formData.others} onChange={v => handleInputChange('others', v)} type="text" required error={errors.others} placeholder="Enter additional details" />
                <InputField label="Region Name" value={formData.region} onChange={v => handleInputChange('region', v)} options={["North", "South", "East", "West", "Central"]} required error={errors.region} placeholder="Select region" />
                </FormSection>
                <FormSection title="Order Reason" icon={CreditCard}>
                <RadioGroup label="Customer Satisfaction" value={formData.customerSatisfaction} onChange={v => handleInputChange('customerSatisfaction', v)} />
                <RadioGroup label="Bill Not Received" value={formData.billNotReceived} onChange={v => handleInputChange('billNotReceived', v)} />
                <RadioGroup label="Expensive" value={formData.expensive} onChange={v => handleInputChange('expensive', v)} />
                <RadioGroup label="Frequent Disconnection" value={formData.frequentDisconnection} onChange={v => handleInputChange('frequentDisconnection', v)} />
                <RadioGroup label="Slow Speed" value={formData.slowSpeed} onChange={v => handleInputChange('slowSpeed', v)} />
                <RadioGroup label="No Browsing" value={formData.noBrowsing} onChange={v => handleInputChange('noBrowsing', v)} />
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

export default DDSExistingCustomer;
