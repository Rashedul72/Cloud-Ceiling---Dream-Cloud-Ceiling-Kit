// Meta Pixel Configuration
// Replace 'YOUR_PIXEL_ID' with your actual Meta Pixel ID from Facebook Business Manager

export const PIXEL_CONFIG = {
  // Your Meta Pixel ID - Get this from Facebook Business Manager > Events Manager
  PIXEL_ID: '1524932278925670', // Your actual Pixel ID
  
  // Enable/disable pixel tracking (enabled by default for static export)
  ENABLED: true, // Set to false if you want to disable tracking
  
  // Debug mode (shows pixel events in console)
  DEBUG: false, // Set to true for debugging
};

// Instructions for setup:
// 1. Go to Facebook Business Manager (business.facebook.com)
// 2. Navigate to Events Manager
// 3. Create a new Pixel or use existing one
// 4. Copy the Pixel ID and replace 'YOUR_PIXEL_ID' above
// 5. Test the pixel using Facebook Pixel Helper browser extension
// 6. Verify events in Events Manager > Test Events
