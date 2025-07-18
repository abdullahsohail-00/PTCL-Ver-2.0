import React, { useState } from 'react';
import { User, MapPin, CreditCard } from 'lucide-react';
import HeaderSection from '../../common/HeaderSection';
import SectionWrapper from '../../common/SectionWrapper';
import FormField from '../../common/FormField';
import RadioGroup from '../../common/RadioGroup';
import FormActions from '../../common/FormActions';

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

  // ---- replaced local InputField & RadioGroup with common components ----

  return (
    <div className="w-full">
      <HeaderSection title="DDS Existing Customer" subtitle="DDS existing customer order form" />

      <form onSubmit={handleSubmit}>
        <div className="bg-gray-50 border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
          {/* Top Row */}
          <div className="bg-white border-b border-gray-200 p-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <FormField label="Date" type="date" value={formData.date} onChange={v => handleInputChange('date', v)} required error={errors.date} />
              <FormField label="RD ID" value={formData.rdId} onChange={v => handleInputChange('rdId', v)} required error={errors.rdId} />
              <FormField label="RD Name" value={formData.rdName} onChange={v => handleInputChange('rdName', v)} required error={errors.rdName} />
              <FormField label="Sales Officer" value={formData.salesOfficer} onChange={v => handleInputChange('salesOfficer', v)} required error={errors.salesOfficer} />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column */}
            <div className="border-r border-gray-200">
              <SectionWrapper title="Customer Details" icon={User}>
                <FormField label="Exchange" value={formData.exchange} onChange={v => handleInputChange('exchange', v)} required error={errors.exchange} placeholder="Enter exchange name/code" />
                <FormField label="DC/MSAG IDs" value={formData.dcMsagIds} onChange={v => handleInputChange('dcMsagIds', v)} required error={errors.dcMsagIds} placeholder="Enter DC/MSAG IDs" />
                <FormField label="DP ID" value={formData.dpId} onChange={v => handleInputChange('dpId', v)} required error={errors.dpId} placeholder="Enter DP ID" />
                <FormField label="PSTN No" value={formData.pstnNo} onChange={v => handleInputChange('pstnNo', v)} required error={errors.pstnNo} placeholder="Enter PSTN number" />
                <FormField label="Name" value={formData.name} onChange={v => handleInputChange('name', v)} required error={errors.name} placeholder="Enter your name" />
                <FormField label="CNIC" value={formData.cnic} onChange={v => handleInputChange('cnic', v)} required error={errors.cnic} placeholder="Enter CNIC number" />
                <FormField label="Address" value={formData.address} onChange={v => handleInputChange('address', v)} required error={errors.address} placeholder="Enter your address" />
                <FormField label="Contact No" value={formData.contactNo} onChange={v => handleInputChange('contactNo', v)} required error={errors.contactNo} placeholder="03XX-XXXXXXX" />
              </SectionWrapper>
            </div>
            {/* Right Column */}
            <div>
              <SectionWrapper title="Location & Contact" icon={MapPin}>
                <FormField label="Latitude" value={formData.latitude} onChange={v => handleInputChange('latitude', v)} type="number" required error={errors.latitude} />
                <FormField label="Longitude" value={formData.longitude} onChange={v => handleInputChange('longitude', v)} type="number" required error={errors.longitude} />
                <FormField label="Email ID" value={formData.email} onChange={v => handleInputChange('email', v)} type="email" required error={errors.email} placeholder="example@email.com" />
                <FormField label="Sale Source" value={formData.saleSource} onChange={v => handleInputChange('saleSource', v)} options={["DDS", "Other"]} required error={errors.saleSource} placeholder="Select sale source" />
                <FormField label="Others" value={formData.others} onChange={v => handleInputChange('others', v)} type="text" required error={errors.others} placeholder="Enter additional details" />
                <FormField label="Region Name" value={formData.region} onChange={v => handleInputChange('region', v)} options={["North", "South", "East", "West", "Central"]} required error={errors.region} placeholder="Select region" />
              </SectionWrapper>

              <SectionWrapper title="Order Reason" icon={CreditCard}>
                <RadioGroup label="Customer Satisfaction" value={formData.customerSatisfaction} onChange={v => handleInputChange('customerSatisfaction', v)} />
                <RadioGroup label="Bill Not Received" value={formData.billNotReceived} onChange={v => handleInputChange('billNotReceived', v)} />
                <RadioGroup label="Expensive" value={formData.expensive} onChange={v => handleInputChange('expensive', v)} />
                <RadioGroup label="Frequent Disconnection" value={formData.frequentDisconnection} onChange={v => handleInputChange('frequentDisconnection', v)} />
                <RadioGroup label="Slow Speed" value={formData.slowSpeed} onChange={v => handleInputChange('slowSpeed', v)} />
                <RadioGroup label="No Browsing" value={formData.noBrowsing} onChange={v => handleInputChange('noBrowsing', v)} />
                <RadioGroup label="ODN" value={formData.odn} onChange={v => handleInputChange('odn', v)} options={["YES", "NO"]} />
                <RadioGroup label="FDH" value={formData.fdh} onChange={v => handleInputChange('fdh', v)} options={["YES", "NO"]} />
              </SectionWrapper>
            </div>
          </div>

          <FormActions primaryLabel="Submit" primaryDisabled={isSubmitting} isSubmitting={isSubmitting} onPrimary={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default DDSExistingCustomer;
