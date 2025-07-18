import React, { useState } from 'react';
import { User, MapPin, CreditCard, AlertCircle } from 'lucide-react';
import HeaderSection from '../common/HeaderSection';
import SectionWrapper from '../common/SectionWrapper';
import FormField from '../common/FormField';
import FormActions from '../common/FormActions';

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
      <HeaderSection title="New Corporate Customer Order" subtitle="Create new corporate customer order" />

      {/* ✅ FORM START */}
      <form onSubmit={handleSubmit} className="bg-gray-50 border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
        <div className="bg-white border-b border-gray-200 p-3">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <FormField label="NTN" value={formData.ntn} onChange={(v)=>handleInputChange('ntn',v)} placeholder="1234567-8" required error={errors.ntn} />
            <FormField label="Name" value={formData.name} onChange={(v)=>handleInputChange('name',v)} placeholder="Enter company name" required error={errors.name} />
            <FormField label="Mobile No" value={formData.mobile} onChange={(v)=>handleInputChange('mobile',v)} type="tel" placeholder="03XX-XXXXXXX" required error={errors.mobile} />
            <FormField label="Email" value={formData.email} onChange={(v)=>handleInputChange('email',v)} type="email" placeholder="company@email.com" required error={errors.email} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="border-r border-gray-200">
            <SectionWrapper title="Personal Information" icon={User}>
              <div className="md:col-span-2">
                <TextAreaField label="Customer Address" value={formData.customerAddress} onChange={(v)=>handleInputChange('customerAddress',v)} placeholder="Enter complete company address" />
              </div>
              <FormField label="House/Flat No" value={formData.houseNo} onChange={(v)=>handleInputChange('houseNo',v)} placeholder="e.g., Office 123, Building 4A" />
              <FormField label="Storey/Floor" value={formData.floor} onChange={(v)=>handleInputChange('floor',v)} placeholder="e.g., Ground Floor, 5th Floor" />
              <FormField label="Street/Mohalla" value={formData.street} onChange={(v)=>handleInputChange('street',v)} placeholder="Enter street or area name" />
              <FormField label="Sector/Area/Housing Society" value={formData.sector} onChange={(v)=>handleInputChange('sector',v)} placeholder="e.g., Sector 15, Gulberg, DHA" />
              <FormField label="Zone" value={formData.zone} onChange={(v)=>handleInputChange('zone',v)} options={["Zone 1","Zone 2","Zone 3","Zone 4"]} />
              <FormField label="Region" value={formData.region} onChange={(v)=>handleInputChange('region',v)} options={["North","South","East","West","Central"]} />
            </SectionWrapper>
          </div>
          <div>
            <SectionWrapper title="Location Details" icon={MapPin}>
              <FormField label="City" value={formData.city} onChange={(v)=>handleInputChange('city',v)} options={["Lahore","Karachi","Islamabad","Rawalpindi","Faisalabad"]} />
              <FormField label="Exchange" value={formData.exchange} onChange={(v)=>handleInputChange('exchange',v)} options={["LAH-001","KHI-002","ISB-003","RWP-004"]} />
              <FormField label="Phone Number" value={formData.phoneNumber} onChange={(v)=>handleInputChange('phoneNumber',v)} type="tel" placeholder="042-XXXXXXX" />
              <FormField label="Nearest Land Mark" value={formData.landmark} onChange={(v)=>handleInputChange('landmark',v)} placeholder="e.g., Near XYZ Tower, Main Boulevard" />
              <FormField label="Latitude" value={formData.latitude} onChange={(v)=>handleInputChange('latitude',v)} type="number" placeholder="31.5204" />
              <FormField label="Longitude" value={formData.longitude} onChange={(v)=>handleInputChange('longitude',v)} type="number" placeholder="74.3587" />
              <FormField label="Order For" value={formData.orderFor} onChange={(v)=>handleInputChange('orderFor',v)} options={["PSTN","Broadband","IPTV","OTT"]} />
              <FormField label="E-Bill Activation" value={formData.ebillActivation} onChange={(v)=>handleInputChange('ebillActivation',v)} options={["Yes","No"]} />
              <FormField label="Select Type" value={formData.selectType} onChange={(v)=>handleInputChange('selectType',v)} options={["Corporate","Enterprise","SME","Government"]} />
              <FormField label="Select Package" value={formData.selectPackage} onChange={(v)=>handleInputChange('selectPackage',v)} options={["Basic","Standard","Premium","Enterprise"]} />
            </SectionWrapper>
          </div>
        </div>

        {/* Comments Section */}
        <SectionWrapper title="Additional Comments" icon={CreditCard}>
          <TextAreaField label="Comments" value={formData.comments} onChange={(v)=>handleInputChange('comments',v)} placeholder="Any extra instructions or notes" />
        </SectionWrapper>

        <FormActions primaryLabel="Submit Order" onPrimary={handleSubmit} isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};

export default NewCorporateCustomerOrder;
