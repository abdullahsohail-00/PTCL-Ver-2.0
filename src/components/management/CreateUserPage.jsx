import React, { useState } from 'react';
import { Shield, UserPlus, CheckCircle, AlertCircle, User, MapPin, Settings, Upload } from 'lucide-react';

const CreateUserPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    cnic: '',
    cell: '',
    password: '',
    confirmPassword: '',
    userRole: '',
    isParent: false,
    userType: '',
    vendorsCode: '',
    salePointName: '',
    bankAccountNumber: '',
    territoriesOfIds: '',
    retailerAddress: '',
    gisLatitude: '',
    gisLongitude: '',
    region: '',
    companyName: '',
    osIsd: '',
    thirdPartyNumericEpi: '',
    exchange: '',
    designation: '',
    ufoneWallet: ''
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
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.cnic.trim()) newErrors.cnic = 'CNIC is required';
    if (!formData.cell.trim()) newErrors.cell = 'Cell is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    if (!formData.confirmPassword.trim()) newErrors.confirmPassword = 'Confirm Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.userRole.trim()) newErrors.userRole = 'User Role is required';
    if (!formData.userType.trim()) newErrors.userType = 'User Type is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('User created:', formData);
      alert('User created successfully!');
      setIsSubmitting(false);
    }, 1500);
  };

  const InputField = ({ label, value, onChange, type = 'text', required = false, options = null, error = '', className = '', placeholder = '' }) => (
    <div className={className}>
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className={`relative ${error ? 'border-red-300' : 'border-gray-300'} focus-within:border-green-500 transition-all duration-200`}>
        {options ? (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 hover:border-gray-400 transition-all duration-200"
          >
            <option value="">--Please Select--</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
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
  );

  const RadioField = ({ label, value, onChange, options, required = false, error = '' }) => (
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="grid grid-cols-2 gap-3">
        {options.map((option, index) => (
          <label key={index} className="relative cursor-pointer group">
            <input
              type="radio"
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
            <div className={`
              relative flex items-center justify-center px-3 py-2 rounded-lg border-2 transition-all duration-300
              ${value === option 
                ? 'border-green-500 bg-green-50 shadow-md' 
                : 'border-gray-300 bg-white hover:border-green-300 hover:bg-green-50'
              }
            `}>
              <div className="flex items-center space-x-2">
                <div className={`
                  w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300
                  ${value === option 
                    ? 'border-green-500 bg-green-500' 
                    : 'border-gray-300 bg-white'
                  }
                `}>
                  {value === option && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  )}
                </div>
                <span className={`text-xs font-medium ${value === option ? 'text-green-700' : 'text-gray-700'}`}>
                  {option}
                </span>
              </div>
            </div>
          </label>
        ))}
      </div>
      {error && (
        <div className="flex items-center mt-1 text-red-600">
          <AlertCircle className="w-3 h-3 mr-1" />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );

  const CheckboxField = ({ label, value, onChange }) => (
    <div>
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
        />
        <span className="text-xs font-medium text-gray-700">{label}</span>
      </label>
    </div>
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-t-lg p-3 text-white shadow-lg">
        <div className="flex items-center justify-between">
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
              <UserPlus className="w-3 h-3" />
            </div>
          </div>
          
          <div className="flex-1 text-center">
            <h1 className="text-sm font-bold">Create User</h1>
            <p className="text-green-100 text-xs">Sign up new user account</p>
          </div>
          
          <div className="flex items-center space-x-1 bg-white bg-opacity-20 px-2 py-1 rounded-full">
            <Shield className="w-3 h-3" />
            <span className="text-xs">Secured</span>
          </div>
        </div>
      </div>
      
      {/* Form Content */}
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-50 border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
          <div className="bg-white p-6">
            
            {/* Basic Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <InputField
                label="Full Name"
                value={formData.fullName}
                onChange={(value) => handleInputChange('fullName', value)}
                placeholder="Enter full name"
                required
                error={errors.fullName}
              />
              <InputField
                label="Username"
                value={formData.username}
                onChange={(value) => handleInputChange('username', value)}
                placeholder="Enter username"
                required
                error={errors.username}
              />
              <InputField
                label="CNIC"
                value={formData.cnic}
                onChange={(value) => handleInputChange('cnic', value)}
                placeholder="12345-1234567-1"
                required
                error={errors.cnic}
              />
              <InputField
                label="Cell"
                value={formData.cell}
                onChange={(value) => handleInputChange('cell', value)}
                placeholder="03XX-XXXXXXX"
                required
                error={errors.cell}
              />
            </div>

            {/* Account Security Section */}
            <div className="border-l-4 border-l-green-400 bg-green-50 p-4 rounded-r-lg mb-6">
              <div className="flex items-center mb-3">
                <Shield className="w-4 h-4 text-green-600 mr-2" />
                <h3 className="text-sm font-semibold text-green-800">Account Security</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField
                  label="Password"
                  value={formData.password}
                  onChange={(value) => handleInputChange('password', value)}
                  type="password"
                  placeholder="Enter password"
                  required
                  error={errors.password}
                />
                <InputField
                  label="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(value) => handleInputChange('confirmPassword', value)}
                  type="password"
                  placeholder="Confirm password"
                  required
                  error={errors.confirmPassword}
                />
                <InputField
                  label="User Role"
                  value={formData.userRole}
                  onChange={(value) => handleInputChange('userRole', value)}
                  options={['Admin', 'Manager', 'User', 'Supervisor']}
                  required
                  error={errors.userRole}
                />
              </div>
            </div>

            {/* User Configuration Section */}
            <div className="border-l-4 border-l-blue-400 bg-blue-50 p-4 rounded-r-lg mb-6">
              <div className="flex items-center mb-3">
                <Settings className="w-4 h-4 text-blue-600 mr-2" />
                <h3 className="text-sm font-semibold text-blue-800">User Configuration</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RadioField
                  label="User Type"
                  value={formData.userType}
                  onChange={(value) => handleInputChange('userType', value)}
                  options={['TPN', 'RD']}
                  required
                  error={errors.userType}
                />
                <InputField
                  label="Vendors Code"
                  value={formData.vendorsCode}
                  onChange={(value) => handleInputChange('vendorsCode', value)}
                  options={['VEN001', 'VEN002', 'VEN003']}
                />
                <CheckboxField
                  label="Is Parent"
                  value={formData.isParent}
                  onChange={(value) => handleInputChange('isParent', value)}
                />
              </div>
            </div>

            {/* Business Information Section */}
            <div className="border-l-4 border-l-purple-400 bg-purple-50 p-4 rounded-r-lg mb-6">
              <div className="flex items-center mb-3">
                <User className="w-4 h-4 text-purple-600 mr-2" />
                <h3 className="text-sm font-semibold text-purple-800">Business Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <InputField
                  label="Sale Point Name"
                  value={formData.salePointName}
                  onChange={(value) => handleInputChange('salePointName', value)}
                  placeholder="Enter sale point name"
                />
                <InputField
                  label="Bank Account #"
                  value={formData.bankAccountNumber}
                  onChange={(value) => handleInputChange('bankAccountNumber', value)}
                  placeholder="Enter bank account"
                />
                <InputField
                  label="Territories of IDs"
                  value={formData.territoriesOfIds}
                  onChange={(value) => handleInputChange('territoriesOfIds', value)}
                  options={['T1', 'T2', 'T3', 'T4']}
                />
                <InputField
                  label="Region"
                  value={formData.region}
                  onChange={(value) => handleInputChange('region', value)}
                  placeholder="Enter region"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <InputField
                  label="Retailer Address"
                  value={formData.retailerAddress}
                  onChange={(value) => handleInputChange('retailerAddress', value)}
                  placeholder="Enter retailer address"
                />
                <InputField
                  label="Company Name"
                  value={formData.companyName}
                  onChange={(value) => handleInputChange('companyName', value)}
                  placeholder="Enter company name"
                />
              </div>
            </div>

            {/* Location Details Section */}
            <div className="border-l-4 border-l-orange-400 bg-orange-50 p-4 rounded-r-lg mb-6">
              <div className="flex items-center mb-3">
                <MapPin className="w-4 h-4 text-orange-600 mr-2" />
                <h3 className="text-sm font-semibold text-orange-800">Location Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <InputField
                  label="GIS (Latitude)"
                  value={formData.gisLatitude}
                  onChange={(value) => handleInputChange('gisLatitude', value)}
                  type="number"
                  placeholder="31.5204"
                />
                <InputField
                  label="GIS (Longitude)"
                  value={formData.gisLongitude}
                  onChange={(value) => handleInputChange('gisLongitude', value)}
                  type="number"
                  placeholder="74.3587"
                />
                <InputField
                  label="Exchange"
                  value={formData.exchange}
                  onChange={(value) => handleInputChange('exchange', value)}
                  placeholder="Enter exchange"
                />
                <InputField
                  label="Designation"
                  value={formData.designation}
                  onChange={(value) => handleInputChange('designation', value)}
                  placeholder="Enter designation"
                />
              </div>
            </div>

            {/* Additional Details Section */}
            <div className="border-l-4 border-l-gray-400 bg-gray-50 p-4 rounded-r-lg">
              <div className="flex items-center mb-3">
                <Settings className="w-4 h-4 text-gray-600 mr-2" />
                <h3 className="text-sm font-semibold text-gray-800">Additional Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField
                  label="OS/SD"
                  value={formData.osIsd}
                  onChange={(value) => handleInputChange('osIsd', value)}
                  placeholder="Enter OS/SD"
                />
                <InputField
                  label="Third Party Numeric EPI"
                  value={formData.thirdPartyNumericEpi}
                  onChange={(value) => handleInputChange('thirdPartyNumericEpi', value)}
                  placeholder="Enter EPI"
                />
                <InputField
                  label="Ufone Wallet"
                  value={formData.ufoneWallet}
                  onChange={(value) => handleInputChange('ufoneWallet', value)}
                  placeholder="Enter ufone wallet"
                />
              </div>
            </div>

          </div>

          {/* Submit Button */}
          <div className="p-3 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-2 rounded-lg text-xs font-semibold hover:from-green-600 hover:to-green-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div>
                    Creating User...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-3 h-3 mr-2" />
                    Create User
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateUserPage;