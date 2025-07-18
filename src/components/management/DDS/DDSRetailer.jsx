import React, { useState } from 'react';
import { User, MapPin, CreditCard, Settings, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import SectionWrapper from '../../common/SectionWrapper';

const DDSRetailer = () => {
  const [formData, setFormData] = useState({
    date: '',
    outletName: '',
    address: '',
    contactNo: '',
    rdId: '',
    salesOfficer: '',
    region: '',
    routeName: '',
    dcMsagIds: '',
    dcCount: '',
    dpId: '',
    dpCount: '',
    wirelineCall: '',
    wirelessCall: '',
    mix: '',
    conventional: '',
    nonConventional: '',
    retailCategory: '',
    lastMonthSalesWireless: '',
    lastMonthSalesWireline: '',
    availableStockCharji: '',
    availableStockWingle: '',
    todaysSecondarySalesWireless: '',
    todaysSecondaryMTDWireline: '',
    visibility: '',
    tradeLettersCommunication: '',
    latitude: '',
    longitude: '',
    email: '',
    saleSource: '',
    comments: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    [
      'date','outletName','address','contactNo','rdId','salesOfficer','region','routeName','dcMsagIds','dcCount','dpId','dpCount','wirelineCall','wirelessCall','mix','conventional','nonConventional','retailCategory','lastMonthSalesWireless','lastMonthSalesWireline','availableStockCharji','availableStockWingle','todaysSecondarySalesWireless','todaysSecondaryMTDWireline','visibility','tradeLettersCommunication','latitude','longitude','email','saleSource','comments'
    ].forEach(field => {
      if (!formData[field]) newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} is required`;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      alert('DDS Retailer submitted!');
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

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-t from-green-500 via-green-600 to-teal-600 rounded-t p-3 text-white shadow-md">
        <div className="flex items-center justify-between">
          
          <div className="flex-1 text-center">
            <h1 className="text-sm font-bold">DDS Retailer</h1>
            <p className="text-green-100 text-xs">DDS retailer order form</p>
          </div>
          
          
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-50 border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
          <div className="bg-white border-b border-gray-200 p-3">
            {/* Retailer Details Group 1 */}
            <h3 className="col-span-4 text-xs font-semibold text-green-700 mb-2 mt-2 uppercase tracking-wide">Retailer Details - Basic Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <InputField label="Date" type="date" value={formData.date} onChange={v => handleInputChange('date', v)} required error={errors.date} placeholder="Enter date" />
              <InputField label="Outlet Name" value={formData.outletName} onChange={v => handleInputChange('outletName', v)} required error={errors.outletName} placeholder="Enter outlet name" />
              <InputField label="Address" value={formData.address} onChange={v => handleInputChange('address', v)} required error={errors.address} placeholder="Enter address" />
              <InputField label="Contact No" value={formData.contactNo} onChange={v => handleInputChange('contactNo', v)} required error={errors.contactNo} placeholder="03XX-XXXXXXX" />
              <InputField label="RD ID" value={formData.rdId} onChange={v => handleInputChange('rdId', v)} required error={errors.rdId} placeholder="Enter RD ID" />
              <InputField label="Sales Officer" value={formData.salesOfficer} onChange={v => handleInputChange('salesOfficer', v)} required error={errors.salesOfficer} placeholder="Enter sales officer name" />
              <InputField label="Region Name" value={formData.region} onChange={v => handleInputChange('region', v)} options={["North", "South", "East", "West", "Central"]} required error={errors.region} placeholder="Select region" />
              <InputField label="Route Name" value={formData.routeName} onChange={v => handleInputChange('routeName', v)} required error={errors.routeName} placeholder="Enter route name" />
            </div>
            {/* Retailer Details Group 2 */}
            <h3 className="col-span-4 text-xs font-semibold text-green-700 mb-2 mt-6 uppercase tracking-wide">Retailer Details - Technical & Sales</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <InputField label="DC/MSAG IDs" value={formData.dcMsagIds} onChange={v => handleInputChange('dcMsagIds', v)} required error={errors.dcMsagIds} placeholder="Enter DC/MSAG IDs" />
              <InputField label="DC Count" value={formData.dcCount} onChange={v => handleInputChange('dcCount', v)} required error={errors.dcCount} placeholder="Enter DC count" />
              <InputField label="DP ID" value={formData.dpId} onChange={v => handleInputChange('dpId', v)} required error={errors.dpId} placeholder="Enter DP ID" />
              <InputField label="DP Count" value={formData.dpCount} onChange={v => handleInputChange('dpCount', v)} required error={errors.dpCount} placeholder="Enter DP count" />
              <InputField label="Wireline Call" value={formData.wirelineCall} onChange={v => handleInputChange('wirelineCall', v)} required error={errors.wirelineCall} placeholder="Enter wireline call count" />
              <InputField label="Wireless Call" value={formData.wirelessCall} onChange={v => handleInputChange('wirelessCall', v)} required error={errors.wirelessCall} placeholder="Enter wireless call count" />
              <InputField label="Mix" value={formData.mix} onChange={v => handleInputChange('mix', v)} required error={errors.mix} placeholder="Enter mix" />
              <InputField label="Conventional" value={formData.conventional} onChange={v => handleInputChange('conventional', v)} required error={errors.conventional} placeholder="Enter conventional" />
              <InputField label="Non Conventional" value={formData.nonConventional} onChange={v => handleInputChange('nonConventional', v)} required error={errors.nonConventional} placeholder="Enter non-conventional" />
              <InputField label="Retail Category" value={formData.retailCategory} onChange={v => handleInputChange('retailCategory', v)} required error={errors.retailCategory} placeholder="Enter retail category" />
              <InputField label="Last Month Sales Wireless" value={formData.lastMonthSalesWireless} onChange={v => handleInputChange('lastMonthSalesWireless', v)} required error={errors.lastMonthSalesWireless} placeholder="Enter last month wireless sales" />
              <InputField label="Last Month Sales Wireline" value={formData.lastMonthSalesWireline} onChange={v => handleInputChange('lastMonthSalesWireline', v)} required error={errors.lastMonthSalesWireline} placeholder="Enter last month wireline sales" />
            </div>
            {/* Stock & Sales Section */}
            <h3 className="col-span-4 text-xs font-semibold text-green-700 mb-2 mt-6 uppercase tracking-wide">Stock & Sales</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <InputField label="Available Stock Charji" value={formData.availableStockCharji} onChange={v => handleInputChange('availableStockCharji', v)} required error={errors.availableStockCharji} placeholder="Enter available Charji stock" />
              <InputField label="Available Stock Wingle" value={formData.availableStockWingle} onChange={v => handleInputChange('availableStockWingle', v)} required error={errors.availableStockWingle} placeholder="Enter available Wingle stock" />
              <InputField label="Todays Secondary Sales Wireless" value={formData.todaysSecondarySalesWireless} onChange={v => handleInputChange('todaysSecondarySalesWireless', v)} required error={errors.todaysSecondarySalesWireless} placeholder="Enter today's secondary wireless sales" />
              <InputField label="Todays Secondary MTD Wireline" value={formData.todaysSecondaryMTDWireline} onChange={v => handleInputChange('todaysSecondaryMTDWireline', v)} required error={errors.todaysSecondaryMTDWireline} placeholder="Enter today's secondary MTD wireline sales" />
            </div>
            {/* Other Details Section */}
            <h3 className="col-span-4 text-xs font-semibold text-green-700 mb-2 mt-6 uppercase tracking-wide">Other Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <InputField label="Visibility" value={formData.visibility} onChange={v => handleInputChange('visibility', v)} options={["Yes", "No"]} required error={errors.visibility} placeholder="Select visibility" />
              <InputField label="Trade Letters Communication" value={formData.tradeLettersCommunication} onChange={v => handleInputChange('tradeLettersCommunication', v)} options={["Yes", "No"]} required error={errors.tradeLettersCommunication} placeholder="Select trade letters communication" />
              <InputField label="Latitude" value={formData.latitude} onChange={v => handleInputChange('latitude', v)} type="number" required error={errors.latitude} placeholder="Enter latitude" />
              <InputField label="Longitude" value={formData.longitude} onChange={v => handleInputChange('longitude', v)} type="number" required error={errors.longitude} placeholder="Enter longitude" />
              <InputField label="Email ID" value={formData.email} onChange={v => handleInputChange('email', v)} type="email" required error={errors.email} placeholder="example@email.com" />
              <InputField label="Sale Source" value={formData.saleSource} onChange={v => handleInputChange('saleSource', v)} options={["DDS", "Other"]} required error={errors.saleSource} placeholder="Select sale source" />
              <InputField label="Comments" value={formData.comments} onChange={v => handleInputChange('comments', v)} type="text" required error={errors.comments} placeholder="Enter comments or additional info" />
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

export default DDSRetailer;
