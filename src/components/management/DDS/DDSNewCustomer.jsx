import React, { useState } from 'react';
import { User, MapPin, CreditCard } from 'lucide-react';
import HeaderSection from '../../common/HeaderSection';
import SectionWrapper from '../../common/SectionWrapper';
import FormField from '../../common/FormField';
import RadioGroup from '../../common/RadioGroup';
import FormActions from '../../common/FormActions';

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

  // Removed local InputField and RadioGroup - using common components instead

  return (
    <div className="w-full">
      <HeaderSection title="DDS New Customer" subtitle="Create DDS new customer order" />
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-50 border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
          {/* Top Row */}
          <div className="bg-white border-b border-gray-200 p-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <FormField label="Date" type="date" value={formData.date} onChange={v => handleInputChange('date', v)} required error={errors.date} />
              <FormField label="Sales Officer" value={formData.salesOfficer} onChange={v => handleInputChange('salesOfficer', v)} required error={errors.salesOfficer} />
              <FormField label="Exchange" value={formData.exchange} onChange={v => handleInputChange('exchange', v)} required error={errors.exchange} placeholder="Enter exchange name/code" />
              <FormField label="Region Name" value={formData.region} onChange={v => handleInputChange('region', v)} options={["North", "South", "East", "West", "Central"]} required error={errors.region} placeholder="Select region" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column */}
            <div className="border-r border-gray-200">
              <SectionWrapper title="Customer Details" icon={User}>
                <FormField label="DC/MSAG IDs" value={formData.dcMsagIds} onChange={v => handleInputChange('dcMsagIds', v)} required error={errors.dcMsagIds} placeholder="Enter DC/MSAG IDs" />
                <FormField label="DP ID" value={formData.dpId} onChange={v => handleInputChange('dpId', v)} required error={errors.dpId} placeholder="Enter DP ID" />
                <FormField label="Name" value={formData.name} onChange={v => handleInputChange('name', v)} required error={errors.name} placeholder="Enter your name" />
                <FormField label="Address" value={formData.address} onChange={v => handleInputChange('address', v)} required error={errors.address} placeholder="Enter your address" />
                <FormField label="Contact No" value={formData.contactNo} onChange={v => handleInputChange('contactNo', v)} required error={errors.contactNo} placeholder="03XX-XXXXXXX" />
                <RadioGroup label="Order Booked" value={formData.orderBooked} onChange={v => handleInputChange('orderBooked', v)} options={["YES", "NO", "Other"]} />
                <FormField label="Competition Name" value={formData.competitionName} onChange={v => handleInputChange('competitionName', v)} placeholder="Enter competition name (if any)" />
              </SectionWrapper>
            </div>
            {/* Right Column */}
            <div>
              <SectionWrapper title="Location & Contact" icon={MapPin}>
                <FormField label="Latitude" value={formData.latitude} onChange={v => handleInputChange('latitude', v)} type="number" required error={errors.latitude} />
                <FormField label="Longitude" value={formData.longitude} onChange={v => handleInputChange('longitude', v)} type="number" required error={errors.longitude} />
                <FormField label="Email ID" value={formData.email} onChange={v => handleInputChange('email', v)} type="email" required error={errors.email} placeholder="example@email.com" />
                <FormField label="Details" value={formData.details} onChange={v => handleInputChange('details', v)} type="text" required error={errors.details} placeholder="Enter additional details" />
              </SectionWrapper>
              <SectionWrapper title="Order Reason" icon={CreditCard}>
                <RadioGroup label="Poor experience" value={formData.poorExperience} onChange={v => handleInputChange('poorExperience', v)} />
                <RadioGroup label="Wireless User" value={formData.wirelessUser} onChange={v => handleInputChange('wirelessUser', v)} />
                <RadioGroup label="Expensive" value={formData.expensive} onChange={v => handleInputChange('expensive', v)} />
                <RadioGroup label="Network Capacity Issue" value={formData.networkCapacityIssue} onChange={v => handleInputChange('networkCapacityIssue', v)} />
                <RadioGroup label="ODN" value={formData.odn} onChange={v => handleInputChange('odn', v)} options={["YES", "NO"]} />
                <RadioGroup label="FDH" value={formData.fdh} onChange={v => handleInputChange('fdh', v)} options={["YES", "NO"]} />
              </SectionWrapper>
            </div>
          </div>
          {/* Submit Button */}
          <FormActions primaryLabel="Submit" onPrimary={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </form>
    </div>
  );
};

export default DDSNewCustomer;
