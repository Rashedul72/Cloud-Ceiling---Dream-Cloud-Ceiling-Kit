'use client';

import { useEffect } from 'react';
import { initFacebookPixel, trackPageView } from '@/lib/facebook-pixel';

const MetaPixel = () => {
  useEffect(() => {
    // Initialize Facebook Pixel when component mounts
    initFacebookPixel();
    
    // Track initial page view
    trackPageView();
  }, []);

  return null; // This component doesn't render anything
};

export default MetaPixel;
