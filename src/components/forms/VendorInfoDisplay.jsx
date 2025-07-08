import React from 'react';
import { User, MapPin, CreditCard, Settings, Eye, Shield } from 'lucide-react';
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

  const DisplayField = ({ label, value, type = 'text' }) => (
    <div className="space-y-1.5 group">
      <label className="block text-xs font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-200">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value || '-'}
          disabled
          className="w-full px-3 py-2 text-xs border border-gray-200 rounded-md bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 cursor-not-allowed transition-all duration-300 hover:shadow-sm group-hover:border-green-300 font-medium"
        />
        <Eye className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
      </div>
    </div>
  );

  const StatusBadge = ({ active }) => (
    <div className="space-y-1.5">
      <label className="block text-xs font-medium text-gray-700">Status</label>
      <div className={`inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium shadow-sm transition-all duration-300 hover:scale-105 ${
        active 
          ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300' 
          : 'bg-gradient-to-r from-red-100 to-red-200 text-red-800 border border-red-300'
      }`}>
        <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
          active ? 'bg-green-500' : 'bg-red-500'
        } animate-pulse`} />
        {active ? 'Active' : 'Inactive'}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 rounded-t-xl p-4 text-white shadow-lg mb-0">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white border-opacity-30 mx-auto mb-2">
              <User className="w-6 h-6" />
            </div>
            <h1 className="text-lg font-bold mb-1">Vendor Information</h1>
            <p className="text-green-100 text-xs font-medium mb-1">Read-only display for verification purposes</p>
            <div className="flex items-center justify-center">
              <Shield className="w-3 h-3 mr-1" />
              <span className="text-xs text-green-200 font-medium">Secured & Verified Data</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Form Content */}
      <div className="bg-white border-x border-b border-gray-200 rounded-b-xl shadow-lg">
        
        {/* Grid Layout for Form Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          
          {/* Left Column */}
          <div className="border-r border-gray-200">
            {/* Personal Information */}
            <FormSection title="Personal Information" icon={User}>
              <DisplayField
                label="Full Name"
                value={vendorData.fullName}
              />
              <DisplayField
                label="CNIC"
                value={vendorData.cnic}
              />
              <DisplayField
                label="Mobile"
                value={vendorData.mobile}
                type="tel"
              />
              <StatusBadge active={vendorData.active} />
            </FormSection>

            {/* Account Information */}
            <FormSection title="Account Information" icon={CreditCard}>
              <DisplayField
                label="PCRM Number"
                value={vendorData.pcrmNumber}
              />
              <DisplayField
                label="Sales Point Name"
                value={vendorData.salesPointName}
              />
              <DisplayField
                label="Bank Account Number"
                value={vendorData.bankAccountNumber}
              />
              <DisplayField
                label="Third Party EPI"
                value={vendorData.thirdPartyEpi}
              />
            </FormSection>
          </div>
          
          {/* Right Column */}
          <div>
            {/* Location Details */}
            <FormSection title="Location Details" icon={MapPin}>
              <DisplayField
                label="Admin Region"
                value={vendorData.adminRegion}
              />
              <DisplayField
                label="Retailer Address"
                value={vendorData.retailerAddress}
              />
              <DisplayField
                label="Territories"
                value={vendorData.territories}
              />
              <DisplayField
                label="Latitude"
                value={vendorData.latitude}
                type="number"
              />
              <DisplayField
                label="Longitude"
                value={vendorData.longitude}
                type="number"
              />
              <DisplayField
                label="Company Name"
                value={vendorData.companyName}
              />
            </FormSection>

            {/* Technical Details */}
            <FormSection title="Technical Details" icon={Settings}>
              <DisplayField
                label="Region"
                value={vendorData.region}
              />
              <DisplayField
                label="Exchange"
                value={vendorData.exchange}
              />
              <DisplayField
                label="Designation"
                value={vendorData.designation}
              />
              <DisplayField
                label="Ufone Wallet"
                value={vendorData.ufoneWallet}
              />
              <DisplayField
                label="OSID"
                value={vendorData.osid}
              />
            </FormSection>
          </div>
        </div>

        {/* Info Footer */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-gray-200 rounded-b-xl">
          <div className="flex items-center justify-center">
            <div className="text-center max-w-xl">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 text-sm">ℹ️</span>
              </div>
              <h3 className="text-sm text-blue-800 font-semibold mb-1">Information Display Only</h3>
              <p className="text-xs text-blue-600 leading-relaxed">
                This information is read-only for vendor verification purposes. 
                Contact your administrator for any updates or changes to this data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorInfoDisplay;