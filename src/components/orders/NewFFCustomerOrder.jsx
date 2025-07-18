import React, { useState } from 'react';
import { User, MapPin, Wifi, AlertCircle } from 'lucide-react';
import HeaderSection from '../common/HeaderSection';
import SectionWrapper from '../common/SectionWrapper';
import FormField from '../common/FormField';
import FormActions from '../common/FormActions';
import FileUploadRow from '../common/FileUploadRow';

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

  // Use shared FormField instead of local InputField
  /* const InputField removed */

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
      <HeaderSection title="Flash/Fiber Customer Order" subtitle="Create new flash/fiber customer order" />

      {/* Form Content */}
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-50 border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
          {/* Top Row - CNIC, Name, Mobile, Email */}
          <div className="bg-white border-b border-gray-200 p-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <FormField
                label="CNIC"
                value={formData.cnic}
                onChange={(value) => handleInputChange('cnic', value)}
                placeholder="12345-1234567-1"
                required
                error={errors.cnic}
              />
              <FormField
                label="Name"
                value={formData.name}
                onChange={(value) => handleInputChange('name', value)}
                placeholder="Enter full name"
                required
                error={errors.name}
              />
              <FormField
                label="Mobile No"
                value={formData.mobile}
                onChange={(value) => handleInputChange('mobile', value)}
                type="tel"
                placeholder="03XX-XXXXXXX"
                required
                error={errors.mobile}
              />
              <FormField
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
              <SectionWrapper title="Personal Information" icon={User}>
                <div className="md:col-span-2">
                  <FormField label="Customer Address" value={formData.customerAddress} onChange={(v)=>handleInputChange('customerAddress',v)} placeholder="Enter complete address" />
                </div>
                <FormField label="House/Flat No" value={formData.houseNo} onChange={(v)=>handleInputChange('houseNo',v)} placeholder="e.g., House 123" />
                <FormField
                  label="Storey/Floor"
                  value={formData.floor}
                  onChange={(value) => handleInputChange('floor', value)}
                  placeholder="e.g., Ground Floor, 2nd Floor"
                />
                <FormField
                  label="Street/Mohalla"
                  value={formData.street}
                  onChange={(value) => handleInputChange('street', value)}
                  placeholder="Enter street or mohalla name"
                />
                <FormField
                  label="Sector/Area/Housing Society"
                  value={formData.sector}
                  onChange={(value) => handleInputChange('sector', value)}
                  placeholder="e.g., Sector 15, DHA Phase 5"
                />
              </SectionWrapper>
            </div>
            
            {/* Right Column - Location & Service Details */}
            <div>
              <SectionWrapper title="Location Details" icon={MapPin}>
                <FormField
                  label="City"
                  value={formData.city}
                  onChange={(value) => handleInputChange('city', value)}
                  options={['Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad']}
                />
                <FormField
                  label="Exchange"
                  value={formData.exchange}
                  onChange={(value) => handleInputChange('exchange', value)}
                  options={['LAH-001', 'KHI-002', 'ISB-003', 'RWP-004']}
                />
                <FormField
                  label="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(value) => handleInputChange('phoneNumber', value)}
                  type="tel"
                  placeholder="042-XXXXXXX"
                />
                <FormField
                  label="Nearest Land Mark"
                  value={formData.landmark}
                  onChange={(value) => handleInputChange('landmark', value)}
                  placeholder="e.g., Near XYZ Mall, Main Market"
                />
                <FormField
                  label="Latitude"
                  value={formData.latitude}
                  onChange={(value) => handleInputChange('latitude', value)}
                  type="number"
                  placeholder="31.5204"
                />
                <FormField
                  label="Longitude"
                  value={formData.longitude}
                  onChange={(value) => handleInputChange('longitude', value)}
                  type="number"
                  placeholder="74.3587"
                />
                <FormField
                  label="Offer"
                  value={formData.offer}
                  onChange={(value) => handleInputChange('offer', value)}
                  placeholder="Without discount (Regular Packages)"
                />
                <FormField
                  label="Dataline"
                  value={formData.dataline}
                  onChange={(value) => handleInputChange('dataline', value)}
                  placeholder="15 Mbps"
                />
                <FormField
                  label="Installation Charges"
                  value={formData.installationCharges}
                  onChange={(value) => handleInputChange('installationCharges', value)}
                  placeholder="5000"
                />
                <FormField
                  label="Previous Operator's Name"
                  value={formData.previousOperatorName}
                  onChange={(value) => handleInputChange('previousOperatorName', value)}
                  placeholder="Nayatel"
                />
                <FormField
                  label="Previous Operator's Speed"
                  value={formData.previousOperatorSpeed}
                  onChange={(value) => handleInputChange('previousOperatorSpeed', value)}
                  placeholder="5 Mbps"
                />
              </SectionWrapper>
            </div>
          </div>

          {/* Bottom Row - Upload Documents */}
          <div className="bg-white border-t border-gray-200 p-3">
            <div className="flex items-center mb-3">
              {/* Settings icon removed as per request */}
              <h3 className="text-sm font-semibold text-gray-800">Upload Documents</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
              <FileUploadRow label="Previous Operator's Bill" />
              <FileUploadRow label="SOP" />
              <FileUploadRow label="CNIC" />
              <FileUploadRow label="Utility Bill" />
            </div>
          </div>

          <FormActions primaryLabel="Submit Order" onPrimary={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </form>
    </div>
  );
};

export default NewFFCustomerOrder;