'use client';

import { Cloud, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Cloud className="h-8 w-8 text-[#58ac1c]" />
              <span className="text-2xl font-bold">Cloud Ceiling</span>
            </div>
            <p className="text-gray-400 text-sm">
              আপনার ঘরকেই বানিয়ে ফেলুন Dream Cloud Ceiling
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              ©️ ২০২৫ wholesalebd | তৈরি করেছে Top1Team
            </p>
            <p className="text-gray-500 text-xs">
              সব অধিকার সংরক্ষিত
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-2 mb-2">
              <Phone className="h-5 w-5 text-[#58ac1c]" />
              <span className="text-sm font-semibold">WhatsApp:</span>
            </div>
            <a
              href="https://wa.me/8801342226632"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58ac1c] hover:text-[#4a8f16] transition-colors duration-200 font-semibold"
            >
              01342226632
            </a>
          </div>
        </div>

        {/* Bottom border and back to top */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center">
          <div className="text-gray-500 text-sm">
            <p>🌥️ Dream Cloud Ceiling - আপনার স্বপ্নের সিলিং</p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-[#58ac1c] transition-colors duration-200"
          >
            <span className="text-sm">উপরে যান</span>
            <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center hover:border-[#58ac1c] transition-colors duration-200">
              <div className="w-1 h-1 bg-current rounded-full"></div>
            </div>
          </button>
        </div>

        {/* Additional info */}
        <div className="mt-8 text-center">
          <div className="bg-gray-800 rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-gray-300 text-sm mb-2">
              🚚 <span className="font-semibold">ডেলিভারি:</span> শুধু ঢাকার ভিতরে
            </p>
            <p className="text-gray-300 text-sm">
              💰 <span className="font-semibold">পেমেন্ট:</span> Cash on Delivery
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
