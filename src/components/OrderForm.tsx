'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface OrderFormData {
  name: string;
  phone: string;
  address: string;
  package: string;
  deliveryArea: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  address?: string;
  package?: string;
  deliveryArea?: string;
}

const OrderForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    phone: '',
    address: '',
    package: '',
    deliveryArea: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'নাম কমপক্ষে ২ অক্ষর হতে হবে';
    }

    if (!formData.phone || formData.phone.length < 11) {
      newErrors.phone = 'ফোন নম্বর কমপক্ষে ১১ ডিজিট হতে হবে';
    } else if (!/^01[3-9]\d{8}$/.test(formData.phone)) {
      newErrors.phone = 'সঠিক ফোন নম্বর দিন';
    }

    if (!formData.address || formData.address.length < 10) {
      newErrors.address = 'ঠিকানা কমপক্ষে ১০ অক্ষর হতে হবে';
    }

    if (!formData.package) {
      newErrors.package = 'প্যাকেজ নির্বাচন করুন';
    }

    if (!formData.deliveryArea) {
      newErrors.deliveryArea = 'ডেলিভারি এলাকা নির্বাচন করুন';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof OrderFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Order submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        address: '',
        package: '',
        deliveryArea: '',
      });
      setErrors({});
    }, 3000);
  };

  const packages = [
    { value: '50', label: '50 স্কয়ার ফিট - ৳3000' },
    { value: '100', label: '100 স্কয়ার ফিট - ৳5500' },
    { value: '200', label: '200 স্কয়ার ফিট - ৳8999' },
  ];

  const deliveryAreas = [
    { value: 'inside_dhaka', label: 'ঢাকার ভিতরে' },
    { value: 'outside_dhaka', label: 'ঢাকার বাইরে' },
  ];

  if (isSubmitted) {
    return (
      <section id="order" className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🎉 অর্ডার সফলভাবে জমা হয়েছে!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              আমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো। ধন্যবাদ!
            </p>
            <div className="bg-green-100 rounded-xl p-4">
              <p className="text-green-800 font-semibold">
                📞 আমাদের WhatsApp: 01342226632
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            🛒 এখনই অর্ডার করুন আপনার Cloud Ceiling Kit
          </h2>
          <p className="text-xl text-gray-600">
            আপনার তথ্য দিন এবং অর্ডার কনফার্ম করুন
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  নাম *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#58ac1c] focus:border-transparent transition-all duration-200"
                  placeholder="আপনার পূর্ণ নাম"
                />
                {errors.name && (
                  <div className="flex items-center space-x-1 mt-2 text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm">{errors.name}</span>
                  </div>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ফোন নম্বর *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#58ac1c] focus:border-transparent transition-all duration-200"
                  placeholder="01XXXXXXXXX"
                />
                {errors.phone && (
                  <div className="flex items-center space-x-1 mt-2 text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm">{errors.phone}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                সম্পূর্ণ ঠিকানা *
              </label>
              <textarea
                rows={3}
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#58ac1c] focus:border-transparent transition-all duration-200"
                placeholder="বিস্তারিত ঠিকানা, এলাকা, থানা, জেলা"
              />
              {errors.address && (
                <div className="flex items-center space-x-1 mt-2 text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm">{errors.address}</span>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Package Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  প্যাকেজ নির্বাচন করুন *
                </label>
                <select
                  value={formData.package}
                  onChange={(e) => handleInputChange('package', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#58ac1c] focus:border-transparent transition-all duration-200"
                >
                  <option value="">প্যাকেজ নির্বাচন করুন</option>
                  {packages.map((pkg) => (
                    <option key={pkg.value} value={pkg.value}>
                      {pkg.label}
                    </option>
                  ))}
                </select>
                {errors.package && (
                  <div className="flex items-center space-x-1 mt-2 text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm">{errors.package}</span>
                  </div>
                )}
              </div>

              {/* Delivery Area */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ডেলিভারি এলাকা *
                </label>
                <select
                  value={formData.deliveryArea}
                  onChange={(e) => handleInputChange('deliveryArea', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#58ac1c] focus:border-transparent transition-all duration-200"
                >
                  <option value="">এলাকা নির্বাচন করুন</option>
                  {deliveryAreas.map((area) => (
                    <option key={area.value} value={area.value}>
                      {area.label}
                    </option>
                  ))}
                </select>
                {errors.deliveryArea && (
                  <div className="flex items-center space-x-1 mt-2 text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm">{errors.deliveryArea}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                💳 পেমেন্ট শর্তাবলী
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>💵 শুধু ঢাকার ভিতরে Cash on Delivery</p>
                <p>🚚 ঢাকার বাইরে অগ্রিম পেমেন্টে ডেলিভারি</p>
                <p>📦 ডেলিভারি চার্জ: ২০০–৩০০ টাকা</p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#58ac1c] hover:bg-[#4a8f16] disabled:bg-gray-400 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>অর্ডার জমা হচ্ছে...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>🔥 অর্ডার কনফার্ম করুন</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
