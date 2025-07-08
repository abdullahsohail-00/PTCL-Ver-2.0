import React from 'react';
import { User, MapPin, CreditCard, Settings, Shield } from 'lucide-react';
import FormSection from './FormSection';

const VendorInfoDisplay = () => {
  const vendorData = {
    fullName: 'John Doe',
    cnic: '11111-2222222-3',
    mobile: '03000000000',
    active: true,
    adminRegion: 'TTR, RTR, NTR',
    retailerAddress: '123 Main Street, Lahore',
    territories: 'Central Punjab',
    latitude: '31.5204',
    longitude: '74.3587',
    companyName: 'PTCL Retailer Services',
    pcrmNumber: '184',
    salesPointName: 'Main Branch Lahore',
    bankAccountNumber: '1234567890',
    thirdPartyEpi: 'EPI-001',
    region: 'Punjab',
    exchange: 'LAH-001',
    designation: 'Senior Sales Officer',
    ufoneWallet: 'UW-12345',
    osid: 'OS-789'
  };

  const DisplayField = ({ label, value }) => (
    <div className="bg-white rounded border border-gray-200 p-2 hover:shadow-sm transition-shadow duration-200">
      <label className="block text-xs font-medium text-gray-600 mb-0.5">
        {label}
      </label>
      <div className="text-xs font-semibold text-gray-900 truncate">
        {value || '-'}
      </div>
    </div>
  );

  const StatusBadge = ({ active }) => (
    <div className="bg-white rounded border border-gray-200 p-2 hover:shadow-sm transition-shadow duration-200">
      <label className="block text-xs font-medium text-gray-600 mb-0.5">Status</label>
      <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
        active 
          ? 'bg-green-100 text-green-800' 
          : 'bg-red-100 text-red-800'
      }`}>
        <div className={`w-1 h-1 rounded-full mr-1 ${
          active ? 'bg-green-500' : 'bg-red-500'
        }`} />
        {active ? 'Active' : 'Inactive'}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Ultra Compact Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-t p-3 text-white shadow-md">
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
              <User className="w-3 h-3" />
            </div>
          </div>
          
          {/* Title */}
          <div className="flex-1 text-center">
            <h1 className="text-sm font-bold">Vendor Information</h1>
            <p className="text-green-100 text-xs">Read-only display for verification purposes</p>
          </div>
          
          {/* Security Badge */}
          <div className="flex items-center space-x-1 bg-white bg-opacity-20 px-2 py-1 rounded-full">
            <Shield className="w-3 h-3" />
            <span className="text-xs">Secured</span>
          </div>
        </div>
      </div>
      
      {/* Ultra Compact Form Content */}
      <div className="bg-gray-50 border-x border-b border-gray-200 rounded-b shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          
          {/* Left Column */}
          <div className="border-r border-gray-200">
            {/* Personal Information */}
            <FormSection title="Personal Information" icon={User}>
              <DisplayField label="Full Name" value={vendorData.fullName} />
              <DisplayField label="CNIC" value={vendorData.cnic} />
              <DisplayField label="Mobile" value={vendorData.mobile} />
              <StatusBadge active={vendorData.active} />
            </FormSection>

            {/* Account Information */}
            <FormSection title="Account Information" icon={CreditCard}>
              <DisplayField label="PCRM Number" value={vendorData.pcrmNumber} />
              <DisplayField label="Sales Point Name" value={vendorData.salesPointName} />
              <DisplayField label="Bank Account Number" value={vendorData.bankAccountNumber} />
              <DisplayField label="Third Party EPI" value={vendorData.thirdPartyEpi} />
            </FormSection>
          </div>
          
          {/* Right Column */}
          <div>
            {/* Location Details */}
            <FormSection title="Location Details" icon={MapPin}>
              <DisplayField label="Admin Region" value={vendorData.adminRegion} />
              <DisplayField label="Retailer Address" value={vendorData.retailerAddress} />
              <DisplayField label="Territories" value={vendorData.territories} />
              <DisplayField label="Latitude" value={vendorData.latitude} />
              <DisplayField label="Longitude" value={vendorData.longitude} />
              <DisplayField label="Company Name" value={vendorData.companyName} />
            </FormSection>

            {/* Technical Details */}
            <FormSection title="Technical Details" icon={Settings}>
              <DisplayField label="Region" value={vendorData.region} />
              <DisplayField label="Exchange" value={vendorData.exchange} />
              <DisplayField label="Designation" value={vendorData.designation} />
              <DisplayField label="Ufone Wallet" value={vendorData.ufoneWallet} />
              <DisplayField label="OSID" value={vendorData.osid} />
            </FormSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorInfoDisplay;