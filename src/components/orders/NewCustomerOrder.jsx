import React, { useState } from 'react';
import { User, MapPin, CreditCard, ShoppingCart } from 'lucide-react';
import HeaderSection from '../common/HeaderSection';
import SectionWrapper from '../common/SectionWrapper';
import FormField from '../common/FormField';
import FormActions from '../common/FormActions';
import FileUploadRow from '../common/FileUploadRow';

const NewCustomerOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cnic: '',
    mobile: '',
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
    ebillActivation: ''
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
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.cnic.trim()) newErrors.cnic = 'CNIC is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Order submitted:', formData);
      alert('Order submitted successfully!');
      setIsSubmitting(false);
    }, 1500);
  };

  // local InputField removed – use FormField instead

  return (
    <div className="w-full">
      <HeaderSection title="New Customer Order" subtitle="Create new customer order" />

      {/* Form Content - Following hand-drawn layout */}
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
            
            {/* Left Column - Personal Info & Order Details */}
            <div className="border-r border-gray-200">
              <SectionWrapper title="Personal Information" icon={User}>
                <div className="md:col-span-2">
                  <FormField
                    label="Customer Address"
                    value={formData.customerAddress}
                    onChange={(value) => handleInputChange('customerAddress', value)}
                    placeholder="Enter complete address"
                  />
                </div>
                <FormField
                  label="House/Flat No"
                  value={formData.houseNo}
                  onChange={(value) => handleInputChange('houseNo', value)}
                  placeholder="e.g., House 123, Flat 4A"
                />
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
                <FormField
                  label="Zone"
                  value={formData.zone}
                  onChange={(value) => handleInputChange('zone', value)}
                  options={['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4']}
                />
                <FormField
                  label="Region"
                  value={formData.region}
                  onChange={(value) => handleInputChange('region', value)}
                  options={['North', 'South', 'East', 'West', 'Central']}
                />
              </SectionWrapper>

              {/* Order Details */}
              <SectionWrapper title="Order Details" icon={CreditCard}>
                <FormField
                  label="Order For"
                  value={formData.orderFor}
                  onChange={(value) => handleInputChange('orderFor', value)}
                  options={['PSTN', 'Broadband', 'IPTV', 'OTT']}
                />
                <FormField
                  label="E-Bill Activation"
                  value={formData.ebillActivation}
                  onChange={(value) => handleInputChange('ebillActivation', value)}
                  options={['Yes', 'No']}
                />
              </SectionWrapper>
            </div>
            
            {/* Right Column - Location Details */}
            <div>
              {/* Location Information */}
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
              </SectionWrapper>
            </div>
          </div>

          {/* Bottom Row - Upload Documents */}
          <div className="bg-white border-t border-gray-200 p-3">
            <div className="flex items-center mb-3">
              {/* Settings icon removed as per request */}
              <h3 className="text-sm font-semibold text-gray-800">Upload Documents</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <FileUploadRow label="SOP" />
              <FileUploadRow label="CNIC" />
              <FileUploadRow label="Utility Bill" />
            </div>
          </div>

          {/* Submit Button */}
          <FormActions primaryLabel="Submit Order" onPrimary={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </form>
    </div>
  );
};

export default NewCustomerOrder;