'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { trackProductView } from '@/lib/facebook-pixel';
import { useEffect } from 'react';

const ProductOverview = () => {
  const packageItems = [
    {
      image: "/images/2.jpeg",
      title: "লাইট পার হওয়া Cloud Fiber",
      description: "Cloud ☁️ - উচ্চমানের ফাইবার যা আলোকে সুন্দরভাবে ছড়িয়ে দেয়"
    },
    {
      image: "/images/1.jpeg",
      title: "RGB Smart Light",
      description: "মোবাইল অ্যাপ ও মাইক্রোফোন কন্ট্রোল সহ"
    },
    {
      image: "/images/4.jpeg",
      title: "গন্ধবিহীন Glue",
      description: "Puppy Gum Paste - নিরাপদ ও সহজ ব্যবহার"
    },
    {
      image: "/images/3.jpeg",
      title: "Two Side Adhesive Tape",
      description: "শক্তিশালী আঠালো টেপ"
    },
    {
      image: "/images/5.jpeg",
      title: "Brush Set",
      description: "পেশাদার ব্রাশ সেট"
    }
  ];

  useEffect(() => {
    // Track when product section comes into view
    trackProductView();
  }, []);

  return (
    <section id="product" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            🎁 সব একসাথে – এক প্যাকেজেই Dream Setup!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            এই প্যাকেজে পাবেন সব কিছু যা আপনার Cloud Ceiling তৈরি করার জন্য প্রয়োজন
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Product image collage */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                {/* Product items arranged in a collage */}
                {[
                  { src: "/images/2.jpeg", alt: "Cloud Fiber", bg: "from-blue-50 to-blue-100" },
                  { src: "/images/1.jpeg", alt: "RGB Light", bg: "from-purple-50 to-purple-100" },
                  { src: "/images/4.jpeg", alt: "Puppy Glue", bg: "from-green-50 to-green-100" },
                  { src: "/images/3.jpeg", alt: "Adhesive Tape", bg: "from-yellow-50 to-yellow-100" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-br ${item.bg} p-6 rounded-xl text-center overflow-hidden`}
                  >
                    <div className="relative w-full h-32 mb-4">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-700">{item.alt}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src="/images/5.jpeg"
                    alt="Brush Set"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700">Brush Set + Video Guide</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Package contents */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              {packageItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional features */}
            <div className="mt-8 bg-[#58ac1c]/10 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Check className="h-6 w-6 text-[#58ac1c]" />
                <h3 className="text-lg font-semibold text-gray-900">
                  সহজ ভিডিও গাইড (Step-by-step)
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                শুধু Plug & Play — একাই বানাতে পারবেন আপনার Dream Ceiling!
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>✅</span>
                <span>কোনো ইলেকট্রিশিয়ান লাগবে না</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Tutorial Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              🎥 ভিডিও টিউটোরিয়াল দেখুন
            </h3>
            <p className="text-xl text-gray-600">
              কিভাবে Cloud Ceiling সেটআপ করবেন তা ধাপে ধাপে শিখুন
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative aspect-video bg-gray-900">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full"
                  poster="/images/1.jpeg"
                >
                  <source src="/Video/tutorial.mp4" type="video/mp4" />
                  আপনার ব্রাউজার ভিডিও প্লেব্যাক সমর্থন করে না।
                </video>
              </div>
              
              {/* Video Description */}
              <div className="p-6 bg-gradient-to-r from-[#58ac1c]/5 to-green-50">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#58ac1c] rounded-full flex items-center justify-center">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      সম্পূর্ণ ইনস্টলেশন গাইড
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      এই ভিডিওতে আপনি দেখতে পাবেন কিভাবে সহজেই Cloud Ceiling সেটআপ করতে হয়। 
                      কোনো ইলেকট্রিশিয়ান ছাড়াই ঘরে বসে আপনি নিজেই তৈরি করতে পারবেন।
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-[#58ac1c]">✓</span>
                        <span className="text-gray-600">Step by Step</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#58ac1c]">✓</span>
                        <span className="text-gray-600">বাংলায় গাইড</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#58ac1c]">✓</span>
                        <span className="text-gray-600">সহজ প্রক্রিয়া</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#58ac1c]">✓</span>
                        <span className="text-gray-600">DIY Friendly</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Note */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                ভিডিও দেখেও যদি বুঝতে সমস্যা হয়, আমরা আছি সাহায্যের জন্য
              </p>
              <div className="inline-flex items-center space-x-2 bg-[#58ac1c] text-white px-6 py-3 rounded-full font-semibold">
                <span>📞</span>
                <span>২৪/৭ ভিডিও কল সাপোর্ট উপলব্ধ</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductOverview;
