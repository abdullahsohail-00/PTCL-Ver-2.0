import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import HeaderSection from '../common/HeaderSection';
import FormField from '../common/FormField';
import FormActions from '../common/FormActions';

const RestoreOrderForm = () => {
  const [formData, setFormData] = useState({
    pstnNumber: '',
    cnic: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.pstnNumber.trim()) newErrors.pstnNumber = 'PSTN Number is required';
    if (!formData.cnic.trim()) newErrors.cnic = 'CNIC is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Restore Order submitted:', formData);
      alert('Restore Order submitted successfully!');
      setFormData({
        pstnNumber: '',
        cnic: ''
      });
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <HeaderSection title="Restore Order" subtitle="Restore service order" />

      {/* Form Content */}
      <div className="bg-gray-50 border-x-2 border-b-2 border-gray-200 rounded-b-lg shadow-lg">
        {/* Form Fields */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              <RotateCcw className="w-5 h-5 text-green-600 mr-2" />
              <h2 className="text-sm font-semibold text-gray-800">Restore Order</h2>
            </div>
          </div>

          <div className="space-y-4">
            <FormField
              label="PSTN Number"
              value={formData.pstnNumber}
              onChange={(val) => handleInputChange('pstnNumber', val)}
              placeholder="Enter PSTN Number"
              required
              error={errors.pstnNumber}
            />

            <FormField
              label="CNIC"
              value={formData.cnic}
              onChange={(val) => handleInputChange('cnic', val)}
              placeholder="Enter CNIC"
              required
              error={errors.cnic}
            />
          </div>
        </div>

        <FormActions
          primaryLabel="Submit"
          onPrimary={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
};

export default RestoreOrderForm;