'use client';

import { PIXEL_ID } from '@/lib/facebook-pixel';
import { PIXEL_CONFIG } from '@/config/pixel';

const MetaPixel = () => {
  // Add noscript fallback for users with JavaScript disabled
  return (
    <>
      {PIXEL_CONFIG.ENABLED && PIXEL_ID !== 'YOUR_PIXEL_ID' && (
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      )}
    </>
  );
};

export default MetaPixel;
