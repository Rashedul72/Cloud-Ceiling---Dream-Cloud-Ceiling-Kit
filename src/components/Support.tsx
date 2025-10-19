'use client';

import { Video, Phone, ArrowUp, Clock, MessageCircle } from 'lucide-react';

const Support = () => {
  const supportFeatures = [
    {
      icon: <Video className="h-8 w-8 text-[#58ac1c]" />,
      title: "ভিডিও গাইড",
      description: "সহজ ভিডিও টিউটোরিয়াল যেখানে পুরো প্রক্রিয়া দেখানো থাকবে"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-[#58ac1c]" />,
      title: "ভিডিও কল সাপোর্ট",
      description: "২৪/৭ আমাদের টিম থাকবে ভিডিও কল সাপোর্টে"
    },
    {
      icon: <ArrowUp className="h-8 w-8 text-[#58ac1c]" />,
      title: "সহজ সেটআপ",
      description: "শুধু একটা উঁচু মই থাকলেই, ঘরে বসে তৈরি করতে পারবেন"
    }
  ];

  return (
    <section id="support" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            📞 ভিডিও গাইড + ভিডিও কল সাপোর্ট সহ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            সেটআপে কোনো সমস্যা হলে চিন্তা করবেন না! আমরা আপনাকে সাহায্য করবো
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main support message */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-[#58ac1c]/10 p-4 rounded-full">
                <Clock className="h-12 w-12 text-[#58ac1c]" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              সেটআপে কোনো সমস্যা হলে চিন্তা করবেন না!
            </h3>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                আমরা আপনাকে দেবো একটা সহজ ভিডিও টিউটোরিয়াল, যেখানে পুরো প্রক্রিয়া দেখানো থাকবে।
              </p>
              <p>
                তারপরও যদি বুঝতে সমস্যা হয়, আমাদের টিম থাকবে ভিডিও কল সাপোর্টে ২৪/৭ 💬
              </p>
              <p className="font-semibold text-[#58ac1c]">
                শুধু একটা উঁচু মই থাকলেই, ঘরে বসে আপনি তৈরি করতে পারবেন আপনার Dream Cloud Ceiling!
              </p>
            </div>

            {/* Contact info */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-center space-x-2 text-lg font-semibold text-gray-900">
                <Phone className="h-6 w-6 text-[#58ac1c]" />
                <span>সাপোর্টের জন্য কল করুন: 01342226632</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
