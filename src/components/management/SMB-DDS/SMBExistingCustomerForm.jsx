import React, { useState } from 'react';
import {
  User, MapPin, CreditCard, Settings, Shield, Building,
  CheckCircle, AlertCircle
} from 'lucide-react';
import SectionWrapper from '../../common/SectionWrapper';

const InputField = ({
  label, value, onChange, type = 'text', required = false,
  options = null, error = '', className = '', placeholder = '', isTextArea = false
}) => (
  <div className={`group ${className}`}>
    <div className="mb-1">
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className={`relative ${error ? 'border-red-300' : 'border-gray-300'} focus-within:border-green-500 transition-all duration-200`}>
        {options ? (
          <select
            name={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 hover:border-gray-400 transition-all duration-200"
          >
            <option value="">--Select--</option>
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        ) : isTextArea ? (
          <textarea
            name={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 hover:border-gray-400 transition-all duration-200 resize-none"
            rows="3"
            placeholder={placeholder}
          />
        ) : (
          <input
            name={label}
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

const SMBExistingCustomerForm = () => {
  const [formData, setFormData] = useState({
    date: '2025-07-14',
    rdId: '',
    rdName: '',
    salesOfficersName: '',
    regionName: '',
    exchange: '',
    areaCode: '',
    psnNo: '',
    personName: '',
    businessName: '',
    latitude: '',
    longitude: '',
    address: '',
    mobileNo: '',
    emailId: '',
    noOfEmployeesWorking: '',
    industrialSegment: '',
    smbProductsPitched: '',
    serviceIssues: '',
    customerSatisfaction: '',
    billReceived: '',
    valueForMoney: '',
    otherFeedback: ''
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
    if (!formData.date.trim()) newErrors.date = 'Date is required';
    if (!formData.rdId.trim()) newErrors.rdId = 'RD ID is required';
    if (!formData.rdName.trim()) newErrors.rdName = 'RD Name is required';
    if (!formData.salesOfficersName.trim()) newErrors.salesOfficersName = 'Sales Officers Name is required';
    if (!formData.personName.trim()) newErrors.personName = 'Person Name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business Name is required';
    if (!formData.mobileNo.trim()) newErrors.mobileNo = 'Mobile No is required';
    if (!formData.emailId.trim()) newErrors.emailId = 'Email ID is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('SMB Existing Customer submitted:', formData);
      alert('SMB Existing Customer submitted successfully!');
      setFormData({
        date: '2025-07-14',
        rdId: '',
        rdName: '',
        salesOfficersName: '',
        regionName: '',
        exchange: '',
        areaCode: '',
        psnNo: '',
        personName: '',
        businessName: '',
        latitude: '',
        longitude: '',
        address: '',
        mobileNo: '',
        emailId: '',
        noOfEmployeesWorking: '',
        industrialSegment: '',
        smbProductsPitched: '',
        serviceIssues: '',
        customerSatisfaction: '',
        billReceived: '',
        valueForMoney: '',
        otherFeedback: ''
      });
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-t from-green-500 via-green-600 to-teal-600 rounded-t p-3 text-white shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo - removed as per request */}
          
          <div className="flex-1 text-center">
            <h1 className="text-sm font-bold">SMB Existing Customer</h1>
            <p className="text-green-100 text-xs">Update existing SMB customer</p>
          </div>
          
          {/* Security Badge - removed as per request */}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-gray-50 border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
        {/* Top Row - Date, RD ID, RD Name, Sales Officers Name */}
        <div className="bg-white border-b border-gray-200 p-3">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <InputField label="Date" type="date" value={formData.date} onChange={(val) => handleInputChange('date', val)} required error={errors.date} />
            <InputField label="RD ID" value={formData.rdId} onChange={(val) => handleInputChange('rdId', val)} placeholder="Enter RD ID" required error={errors.rdId} />
            <InputField label="RD Name" value={formData.rdName} onChange={(val) => handleInputChange('rdName', val)} placeholder="Enter RD Name" required error={errors.rdName} />
            <InputField label="Sales Officers Name" value={formData.salesOfficersName} onChange={(val) => handleInputChange('salesOfficersName', val)} placeholder="Enter Sales Officers Name" required error={errors.salesOfficersName} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column - Business Information */}
          <div className="border-r border-gray-200">
            <SectionWrapper title="Business Information" icon={Building}>
              <InputField label="Region Name" value={formData.regionName} onChange={(val) => handleInputChange('regionName', val)} options={['AJK', 'Punjab', 'Sindh', 'KPK', 'Balochistan']} />
              <InputField label="Exchange" value={formData.exchange} onChange={(val) => handleInputChange('exchange', val)} options={['Select Exchange Name', 'LAH-001', 'KHI-002', 'ISB-003', 'RWP-004', 'FSD-005']} />
              <InputField label="Area Code" value={formData.areaCode} onChange={(val) => handleInputChange('areaCode', val)} placeholder="Enter Area Code" />
              <InputField label="Psn No" value={formData.psnNo} onChange={(val) => handleInputChange('psnNo', val)} placeholder="Enter PSN Number" />
              <InputField label="Person Name" value={formData.personName} onChange={(val) => handleInputChange('personName', val)} required placeholder="Enter Person Name" error={errors.personName} />
              <InputField label="Business Name" value={formData.businessName} onChange={(val) => handleInputChange('businessName', val)} required placeholder="Enter Business Name" error={errors.businessName} />
              <InputField label="No Of Employees Working" value={formData.noOfEmployeesWorking} onChange={(val) => handleInputChange('noOfEmployeesWorking', val)} type="number" placeholder="Enter number of employees" />
              <InputField label="Industrial Segment" value={formData.industrialSegment} onChange={(val) => handleInputChange('industrialSegment', val)} options={['Information Technology', 'Manufacturing', 'Retail', 'Healthcare', 'Education', 'Finance']} />
            </SectionWrapper>

            <SectionWrapper title="Service Information" icon={Settings}>
              <InputField label="SMB Products Pitched" value={formData.smbProductsPitched} onChange={(val) => handleInputChange('smbProductsPitched', val)} options={['Static IP sold', 'Dynamic IP', 'Fiber Connection', 'Dedicated Line']} />
              <InputField label="Service Issues" value={formData.serviceIssues} onChange={(val) => handleInputChange('serviceIssues', val)} options={['Frequent disconnection', 'Slow speed', 'No connection', 'Billing issues', 'Technical support']} />
              <InputField label="Customer Satisfaction" value={formData.customerSatisfaction} onChange={(val) => handleInputChange('customerSatisfaction', val)} options={['Yes', 'No', 'Partially']} />
              <InputField label="Bill Received" value={formData.billReceived} onChange={(val) => handleInputChange('billReceived', val)} options={['Yes', 'No']} />
              <div className="md:col-span-2">
                <InputField label="Value For Money" value={formData.valueForMoney} onChange={(val) => handleInputChange('valueForMoney', val)} placeholder="Enter value assessment" />
              </div>
            </SectionWrapper>
          </div>

          {/* Right Column - Contact Information & Location */}
          <div>
            <SectionWrapper title="Contact Information" icon={User}>
              <InputField label="Mobile No" value={formData.mobileNo} onChange={(val) => handleInputChange('mobileNo', val)} type="tel" placeholder="03XX-XXXXXXX" required error={errors.mobileNo} />
              <InputField label="Email ID" value={formData.emailId} onChange={(val) => handleInputChange('emailId', val)} type="email" placeholder="example@email.com" required error={errors.emailId} />
              <div className="md:col-span-2">
                <InputField label="Address" value={formData.address} onChange={(val) => handleInputChange('address', val)} placeholder="Enter complete address" isTextArea />
              </div>
            </SectionWrapper>

            <SectionWrapper title="Location Details" icon={MapPin}>
              <InputField label="Latitude" value={formData.latitude} onChange={(val) => handleInputChange('latitude', val)} type="number" placeholder="31.479626" />
              <InputField label="Longitude" value={formData.longitude} onChange={(val) => handleInputChange('longitude', val)} type="number" placeholder="74.303743" />
              <div className="md:col-span-2">
                <InputField label="Other Feedback" value={formData.otherFeedback} onChange={(val) => handleInputChange('otherFeedback', val)} placeholder="Enter any additional feedback" isTextArea />
              </div>
            </SectionWrapper>
          </div>
        </div>

        {/* Submit Button */}
        <div className="p-3 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
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

export default SMBExistingCustomerForm;