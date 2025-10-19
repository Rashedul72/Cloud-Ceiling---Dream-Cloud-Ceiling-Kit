'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductOverview from '@/components/ProductOverview';
import Pricing from '@/components/Pricing';
import Support from '@/components/Support';
import Warning from '@/components/Warning';
import Review from '@/components/Review';
import OrderForm from '@/components/OrderForm';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import ScrollAnimation from '@/components/ScrollAnimation';
import { useScrollTracking } from '@/hooks/useScrollTracking';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize scroll tracking
  useScrollTracking();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ScrollAnimation>
          <Hero />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <ProductOverview />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <Pricing />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <Support />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <Warning />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <Review />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <OrderForm />
        </ScrollAnimation>
      </main>
      
      <ScrollAnimation delay={0.2}>
        <Footer />
      </ScrollAnimation>
    </div>
  );
}
