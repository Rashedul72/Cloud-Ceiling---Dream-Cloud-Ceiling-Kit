import { useEffect } from 'react';
import { trackScrollDepth } from '@/lib/facebook-pixel';

export const useScrollTracking = () => {
  useEffect(() => {
    let ticking = false;
    let maxScrollDepth = 0;

    const updateScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track significant scroll milestones
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        
        // Track at 25%, 50%, 75%, and 100% scroll depth
        if (scrollPercent >= 25 && maxScrollDepth < 50) {
          trackScrollDepth(25);
        } else if (scrollPercent >= 50 && maxScrollDepth < 75) {
          trackScrollDepth(50);
        } else if (scrollPercent >= 75 && maxScrollDepth < 100) {
          trackScrollDepth(75);
        } else if (scrollPercent >= 100) {
          trackScrollDepth(100);
        }
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDepth);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
};
