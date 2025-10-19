'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { trackPricingView, trackButtonClick } from '@/lib/facebook-pixel';
import { useEffect } from 'react';

const Pricing = () => {
  const packages = [
    {
      size: "50 স্কয়ার ফিট",
      price: "৳3000",
      originalPrice: "৳4000",
      features: [
        "লাইট পার হওয়া Cloud Fiber",
        "RGB Smart Light (32 ফিট)",
        "গন্ধবিহীন Glue",
        "Two Side Adhesive Tape",
        "Brush Set",
        "ভিডিও গাইড"
      ],
      popular: false
    },
    {
      size: "100 - 120 স্কয়ার ফিট",
      price: "৳5500",
      originalPrice: "৳7000",
      features: [
        "লাইট পার হওয়া Cloud Fiber",
        "RGB Smart Light (63 ফিট)",
        "গন্ধবিহীন Glue",
        "Two Side Adhesive Tape",
        "Brush Set",
        "ভিডিও গাইড",
        "অতিরিক্ত ফাইবার"
      ],
      popular: true
    },
    {
      size: "200 - 240 স্কয়ার ফিট",
      price: "৳8999",
      originalPrice: "৳12000",
      features: [
        "লাইট পার হওয়া Cloud Fiber",
        "RGB Smart Light (126 ফিট)",
        "গন্ধবিহীন Glue",
        "Two Side Adhesive Tape",
        "Brush Set",
        "ভিডিও গাইড",
        "অতিরিক্ত ফাইবার",
        "প্রিমিয়াম সাপোর্ট"
      ],
      popular: false
    }
  ];

  const scrollToOrder = () => {
    const element = document.getElementById('order');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      trackButtonClick('Pricing_ScrollToOrder', 'pricing_section');
    }
  };

  useEffect(() => {
    // Track when pricing section comes into view
    trackPricingView();
  }, []);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            💸 আপনার পছন্দ অনুযায়ী প্যাকেজ বেছে নিন
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            সব প্যাকেজে পাবেন সম্পূর্ণ সেটআপ সহ সব কিছু
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                pkg.popular
                  ? 'border-[#58ac1c] transform scale-105'
                  : 'border-gray-200 hover:border-[#58ac1c]/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#58ac1c] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>সবচেয়ে জনপ্রিয়</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.size}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-[#58ac1c]">
                      {pkg.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {pkg.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    সবকিছু সহ ফুল সেটআপ
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-[#58ac1c] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              📦 ডেলিভারি তথ্য
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">ডেলিভারি চার্জ:</span> ২০০–৩০০ টাকা
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">পার্সেল ওজন:</span> ৩–৪ কেজি
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">ডেলিভারি এলাকা:</span> ঢাকার ভিতরে
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">পেমেন্ট:</span> Cash on Delivery
                </p>
              </div>
            </div>
          </div>
{/* 
          <button
            onClick={scrollToOrder}
            className="mt-8 inline-flex items-center space-x-2 bg-[#58ac1c] hover:bg-[#4a8f16] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span>👉 এখনই অর্ডার দিন</span>
            <span className="text-sm">– Limited Offer</span>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
