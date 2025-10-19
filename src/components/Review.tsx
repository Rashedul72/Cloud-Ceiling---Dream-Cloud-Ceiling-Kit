'use client';

import { Video, Star, Users, Heart } from 'lucide-react';

const Review = () => {
  return (
    <section id="review" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full">
                  <Video className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                🎥 কাজ শেষ হলে একটা রিভিউ ভিডিও দিতে হবে
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  কাজ শেষ হলে একটা ছোট ভিডিও দিবেন,
                </p>
                <p className="text-xl font-semibold text-[#58ac1c]">
                  যাতে পরের Genz Dreamer রাও আপনার মতো করে Inspire হয় 🌥️
                </p>
              </div>

              {/* Community benefits */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    কমিউনিটি বিল্ডিং
                  </h3>
                  <p className="text-gray-600 text-sm">
                    অন্যান্য গ্রাহকদের সাহায্য করুন
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    সত্যিকারের রিভিউ
                  </h3>
                  <p className="text-gray-600 text-sm">
                    আসল গ্রাহকের অভিজ্ঞতা শেয়ার করুন
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    অনুপ্রেরণা দিন
                  </h3>
                  <p className="text-gray-600 text-sm">
                    নতুন গ্রাহকদের সাহস দিন
                  </p>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-12 bg-gradient-to-r from-[#58ac1c]/10 to-green-500/10 rounded-xl p-6">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  আপনার সাফল্যের গল্প শেয়ার করুন!
                </p>
                <p className="text-gray-700">
                  ভিডিও রিভিউ দিয়ে অন্যান্য গ্রাহকদের সাহায্য করুন এবং আমাদের কমিউনিটির অংশ হন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
