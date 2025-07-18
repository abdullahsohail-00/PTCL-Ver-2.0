import React from 'react';
import { User, MapPin, CreditCard, Settings } from 'lucide-react';
import HeaderSection from '../common/HeaderSection';
import SectionWrapper from '../common/SectionWrapper';

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
    <div className="bg-white rounded border border-slate-200 p-2 hover:shadow-sm hover:border-green-300 transition-shadow duration-200">
      <label className="block text-xs font-medium text-slate-600 mb-0.5">
        {label}
      </label>
      <div className="text-xs font-semibold text-slate-900 truncate">
        {value || '-'}
      </div>
    </div>
  );

  const StatusBadge = ({ active }) => (
    <div className="bg-white rounded border border-slate-200 p-2 hover:shadow-sm hover:border-green-300 transition-shadow duration-200">
      <label className="block text-xs font-medium text-slate-600 mb-0.5">Status</label>
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
      <HeaderSection title="Vendor Information" subtitle="Read-only display for verification purposes" />
      
      {/* Ultra Compact Form Content */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-50 border-x border-b border-slate-200 rounded-b shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          
          {/* Left Column */}
          <div className="border-r border-slate-200">
            <SectionWrapper title="Personal Information" icon={User}>
              <DisplayField label="Full Name" value={vendorData.fullName} />
              <DisplayField label="CNIC" value={vendorData.cnic} />
              <DisplayField label="Mobile" value={vendorData.mobile} />
              <StatusBadge active={vendorData.active} />
            </SectionWrapper>

            <SectionWrapper title="Account Information" icon={CreditCard}>
              <DisplayField label="PCRM Number" value={vendorData.pcrmNumber} />
              <DisplayField label="Sales Point Name" value={vendorData.salesPointName} />
              <DisplayField label="Bank Account Number" value={vendorData.bankAccountNumber} />
              <DisplayField label="Third Party EPI" value={vendorData.thirdPartyEpi} />
            </SectionWrapper>
          </div>
          
          {/* Right Column */}
          <div>
            <SectionWrapper title="Location Details" icon={MapPin}>
              <DisplayField label="Admin Region" value={vendorData.adminRegion} />
              <DisplayField label="Retailer Address" value={vendorData.retailerAddress} />
              <DisplayField label="Territories" value={vendorData.territories} />
              <DisplayField label="Latitude" value={vendorData.latitude} />
              <DisplayField label="Longitude" value={vendorData.longitude} />
              <DisplayField label="Company Name" value={vendorData.companyName} />
            </SectionWrapper>

            <SectionWrapper title="Technical Details" icon={Settings}>
              <DisplayField label="Region" value={vendorData.region} />
              <DisplayField label="Exchange" value={vendorData.exchange} />
              <DisplayField label="Designation" value={vendorData.designation} />
              <DisplayField label="Ufone Wallet" value={vendorData.ufoneWallet} />
              <DisplayField label="OSID" value={vendorData.osid} />
            </SectionWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorInfoDisplay;