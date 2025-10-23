// Meta Pixel (Facebook Pixel) utility functions
import { PIXEL_CONFIG } from '@/config/pixel';

declare global {
  interface Window {
    fbq: any;
  }
}

export const PIXEL_ID = PIXEL_CONFIG.PIXEL_ID;

// Initialize Facebook Pixel
export const initFacebookPixel = () => {
  if (!PIXEL_CONFIG.ENABLED || PIXEL_ID === 'YOUR_PIXEL_ID') {
    if (PIXEL_CONFIG.DEBUG) {
      console.warn('Meta Pixel not initialized: Please set your PIXEL_ID in src/config/pixel.ts');
    }
    return;
  }

  if (typeof window !== 'undefined' && !window.fbq) {
    // Load Facebook Pixel script
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);
  }
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: any) => {
  if (!PIXEL_CONFIG.ENABLED || PIXEL_ID === 'YOUR_PIXEL_ID') {
    if (PIXEL_CONFIG.DEBUG) {
      console.log('Meta Pixel Event (not sent):', eventName, parameters);
    }
    return;
  }

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
    if (PIXEL_CONFIG.DEBUG) {
      console.log('Meta Pixel Event sent:', eventName, parameters);
    }
  }
};

// Track form submission
export const trackFormSubmission = (formData: any) => {
  const packageValue = getPackageValue(formData.package);
  
  // Track as Lead (someone interested)
  trackEvent('Lead', {
    content_name: 'Cloud Ceiling Order Form',
    content_category: 'Home Decoration',
    value: packageValue,
    currency: 'BDT'
  });
  
  // Also track as Purchase (order placed)
  trackEvent('Purchase', {
    content_name: 'Cloud Ceiling Kit',
    content_type: 'product',
    value: packageValue,
    currency: 'BDT',
    content_ids: [formData.package],
    contents: [{
      id: formData.package,
      quantity: 1
    }]
  });
  
  // Also track as custom event
  trackEvent('CloudCeiling_FormSubmission', {
    package_size: formData.package,
    delivery_area: formData.deliveryArea,
    form_type: 'order_form',
    value: packageValue,
    currency: 'BDT'
  });
};

// Track page views
export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('CloudCeiling_ButtonClick', {
    button_name: buttonName,
    location: location,
    value: 0,
    currency: 'BDT'
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('CloudCeiling_ScrollDepth', {
    scroll_depth: depth,
    value: 0,
    currency: 'BDT'
  });
};

// Get package value for conversion tracking
const getPackageValue = (packageSize: string): number => {
  const values: { [key: string]: number } = {
    '50': 3000,
    '100 - 120': 5500,
    '200 - 240': 8999
  };
  return values[packageSize] || 0;
};

// Track video interactions
export const trackVideoPlay = () => {
  trackEvent('CloudCeiling_VideoPlay', {
    video_name: 'Header Background Video',
    value: 0,
    currency: 'BDT'
  });
};

// Track pricing section views
export const trackPricingView = () => {
  trackEvent('CloudCeiling_PricingView', {
    section: 'pricing',
    value: 0,
    currency: 'BDT'
  });
};

// Track product overview views
export const trackProductView = () => {
  trackEvent('CloudCeiling_ProductView', {
    section: 'product_overview',
    value: 0,
    currency: 'BDT'
  });
};
