'use client';

import { AlertTriangle, Copy, Shield } from 'lucide-react';

const Warning = () => {
  return (
    <section id="warning" className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-2xl p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-yellow-800 mb-6">
                  ⚠️ Interior Company দের জন্য বার্তা
                </h2>
                
                <div className="space-y-6 text-lg text-yellow-800 leading-relaxed">
                  <div className="bg-white/50 rounded-xl p-6">
                    <div className="flex items-start space-x-3">
                      <Copy className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-2">
                          আমাদের প্ল্যান বা আইডিয়া কপি করবেন না।
                        </p>
                        <p>
                          দেশে তো আইন নাই, কিন্তু আল্লাহর বিচার তো আছেই 🙏
                        </p>
                        <p className="mt-2">
                          তাই অনুগ্রহ করে নিজের আইডিয়া দিয়ে কাজ করুন।
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/50 rounded-xl p-6">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-2">
                          সীমিত সময়ের অফার
                        </p>
                        <p>
                          এই অফার শুধুমাত্র ১০০ জনের Dream পূরণের জন্য সীমিত সময়ের জন্য।
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="mt-8 flex justify-center space-x-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-yellow-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Warning;
