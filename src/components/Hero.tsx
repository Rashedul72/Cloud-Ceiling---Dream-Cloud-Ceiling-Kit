'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Zap, Music } from 'lucide-react';

const Hero = () => {
  const scrollToOrder = () => {
    const element = document.getElementById('order');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Video/HeaderBG.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Additional gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-green-900/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            🌙 আপনার ঘরকেই বানিয়ে ফেলুন{' '}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-[#58ac1c]"
            >
              Dream Cloud Ceiling!
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md"
          >
            ঘরে বসেই বানান Cloud Ceiling, কোনো ইলেকট্রিশিয়ান লাগবে না —<br />
            সব কিছু পাবেন একসাথে, <span className="font-semibold text-[#58ac1c]">Plug & Play System</span> সহ 🔌
          </motion.p>

          {/* Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
            >
              <Smartphone className="h-5 w-5 text-[#58ac1c]" />
              <span className="text-gray-800 font-medium">মোবাইল অ্যাপ</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
            >
              <Music className="h-5 w-5 text-[#58ac1c]" />
              <span className="text-gray-800 font-medium">ভয়েস/মিউজিক রিয়্যাকশন</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
            >
              <Zap className="h-5 w-5 text-[#58ac1c]" />
              <span className="text-gray-800 font-medium">RGB লাইটস</span>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          {/* <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToOrder}
            className="inline-flex items-center space-x-3 bg-[#58ac1c] hover:bg-[#4a8f16] text-white font-bold text-lg sm:text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
          >
            <span>🛒 এখনই অর্ডার করুন</span>
            <span className="text-sm">– সীমিত ১০০ জনের জন্য!</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button> */}

          {/* Small text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-sm text-white/80 space-y-1 drop-shadow-md"
          >
            <p>💵 শুধু ঢাকার ভিতরে Cash on Delivery</p>
            <p>📦 পার্সেল ওজন ৩–৪ কেজি</p>
            <p>🚚 ডেলিভারি চার্জ ২০০–৩০০ টাকা</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
