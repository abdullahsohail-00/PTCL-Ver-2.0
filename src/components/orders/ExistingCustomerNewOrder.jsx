import React, { useState } from 'react';
// Icons no longer used directly here; kept in FancyRadioGroup component
import HeaderSection from '../common/HeaderSection';
import FormField from '../common/FormField';
import FormActions from '../common/FormActions';
import FancyRadioGroup from '../common/FancyRadioGroup';

const ExistingCustomerNewOrder = () => {
  const [formData, setFormData] = useState({
    pstnNumber: '',
    latitude: '',
    longitude: '',
    applyFor: ''
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
    
    if (!formData.pstnNumber.trim()) newErrors.pstnNumber = 'PSTN Number is required';
    if (!formData.applyFor.trim()) newErrors.applyFor = 'Apply For is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Existing Customer Order submitted:', formData);
      alert('Existing Customer Order submitted successfully!');
      setIsSubmitting(false);
    }, 1500);
  };

  // Removed local InputField – using FormField instead

  return (
    <div className="w-full">
      <HeaderSection title="Existing Customer New Order" subtitle="Create new order for existing customer" />
      
      {/* Form Content */}
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-50 border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
          {/* Main Content - Centered Simple Form */}
          <div className="bg-white p-6">
            <div className="max-w-md mx-auto space-y-4">
              
              {/* PSTN Number */}
              <FormField
                label="PSTN Number"
                value={formData.pstnNumber}
                onChange={(value) => handleInputChange('pstnNumber', value)}
                placeholder="Enter PSTN number"
                required
                error={errors.pstnNumber}
              />

              {/* Latitude */}
              <FormField
                label="Latitude"
                value={formData.latitude}
                onChange={(value) => handleInputChange('latitude', value)}
                type="number"
                placeholder="31.5204"
              />

              {/* Longitude */}
              <FormField
                label="Longitude"
                value={formData.longitude}
                onChange={(value) => handleInputChange('longitude', value)}
                type="number"
                placeholder="74.3587"
              />

              {/* Apply For - Radio Buttons */}
              <FancyRadioGroup
                label="Apply For"
                value={formData.applyFor}
                onChange={(value) => handleInputChange('applyFor', value)}
                options={['Broadband', 'IPTV', 'OTT']}
                required
                error={errors.applyFor}
              />

            </div>
          </div>

          {/* Submit Button */}
          <div className="p-3 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <FormActions
              primaryLabel="Submit Order"
              onPrimary={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExistingCustomerNewOrder;