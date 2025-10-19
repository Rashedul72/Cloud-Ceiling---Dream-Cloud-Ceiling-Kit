# Meta Pixel Setup Guide for Cloud Ceiling Landing Page

## 🎯 Overview
This landing page is now integrated with Meta Pixel (Facebook Pixel) for comprehensive tracking and analytics. You can track user interactions, form submissions, and conversions in Meta Business Suite.

## 📊 What's Being Tracked

### 1. **Page Views**
- Initial page load
- Section views (Product, Pricing, etc.)

### 2. **Form Interactions**
- Order form submissions
- Form validation errors
- Button clicks

### 3. **User Engagement**
- Video play events
- Scroll depth (25%, 50%, 75%, 100%)
- Button clicks throughout the site

### 4. **Conversion Events**
- Lead generation (form submissions)
- Custom events for Cloud Ceiling specific actions

## 🚀 Setup Instructions

### Step 1: Get Your Meta Pixel ID
1. Go to [Facebook Business Manager](https://business.facebook.com)
2. Navigate to **Events Manager**
3. Click **"Connect Data Sources"** → **"Web"**
4. Choose **"Facebook Pixel"**
5. Enter your website URL: `https://yourdomain.com`
6. Copy your **Pixel ID** (looks like: `123456789012345`)

### Step 2: Configure the Pixel
1. Open `src/config/pixel.ts`
2. Replace `'YOUR_PIXEL_ID'` with your actual Pixel ID:
   ```typescript
   export const PIXEL_CONFIG = {
     PIXEL_ID: '123456789012345', // Your actual Pixel ID
     ENABLED: true,
     DEBUG: false
   };
   ```

### Step 3: Test the Integration
1. Install [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) Chrome extension
2. Visit your website
3. Open the extension to see if pixel is firing
4. Check browser console for debug messages (if DEBUG is enabled)

### Step 4: Verify in Meta Business Suite
1. Go to **Events Manager** in Facebook Business Manager
2. Click on your Pixel
3. Go to **"Test Events"** tab
4. Visit your website and perform actions
5. You should see events appearing in real-time

## 📈 Events You'll See in Meta Business Suite

### Standard Events
- **PageView** - When users visit the page
- **Lead** - When form is submitted (with conversion value)

### Custom Events
- **CloudCeiling_FormSubmission** - Form submission with package details
- **CloudCeiling_ButtonClick** - Button interactions
- **CloudCeiling_VideoPlay** - Video engagement
- **CloudCeiling_ScrollDepth** - User engagement depth
- **CloudCeiling_PricingView** - Pricing section views
- **CloudCeiling_ProductView** - Product section views

## 🎯 Conversion Tracking

### Lead Generation
- **Event**: Lead
- **Value**: Based on selected package (৳3000, ৳5500, or ৳8999)
- **Currency**: BDT
- **Content Name**: Cloud Ceiling Order Form

### Custom Conversions
You can create custom conversions in Meta Business Suite for:
- Form submissions
- High-value leads (200 sq ft package)
- Video engagement
- Scroll depth milestones

## 🔧 Configuration Options

### Development vs Production
```typescript
// In src/config/pixel.ts
export const PIXEL_CONFIG = {
  PIXEL_ID: 'your-pixel-id',
  ENABLED: process.env.NODE_ENV === 'production', // Only track in production
  DEBUG: process.env.NODE_ENV === 'development'   // Show debug logs in development
};
```

### Environment Variables
You can also use environment variables:
```bash
# .env.local
NEXT_PUBLIC_PIXEL_ID=your-pixel-id
NEXT_PUBLIC_ENABLE_PIXEL=true
```

## 📊 Analytics Dashboard

### In Meta Business Suite, you'll see:
1. **Real-time Events** - Live tracking of user actions
2. **Audience Insights** - Demographics and interests
3. **Conversion Tracking** - Form submission rates
4. **Custom Audiences** - Create retargeting audiences
5. **Lookalike Audiences** - Find similar customers

### Key Metrics to Monitor:
- **Conversion Rate** - Form submissions / Page views
- **Engagement Rate** - Users who scroll 75%+ / Total users
- **Video Engagement** - Users who interact with video
- **Package Preferences** - Most popular package sizes

## 🎯 Retargeting Opportunities

### Create Custom Audiences for:
1. **Website Visitors** - All users who visited your site
2. **Form Starters** - Users who began filling the form
3. **High Engagers** - Users who scrolled 75%+
4. **Video Viewers** - Users who played the video
5. **Pricing Viewers** - Users who viewed pricing section

### Lookalike Audiences:
- Create lookalike audiences based on form completers
- Target similar users in Bangladesh
- Scale your advertising reach

## 🚨 Troubleshooting

### Pixel Not Firing?
1. Check if PIXEL_ID is correctly set
2. Verify ENABLED is true
3. Check browser console for errors
4. Use Facebook Pixel Helper extension

### Events Not Appearing?
1. Wait 5-10 minutes for data to appear
2. Check if you're in the correct Facebook Business Manager account
3. Verify the pixel is properly installed
4. Test with Facebook Pixel Helper

### Debug Mode
Enable debug mode to see all events in console:
```typescript
DEBUG: true
```

## 📞 Support

If you need help with Meta Pixel setup:
1. Check [Facebook Pixel Documentation](https://developers.facebook.com/docs/facebook-pixel/)
2. Use [Facebook Business Help Center](https://www.facebook.com/business/help)
3. Test with [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)

---

**Ready to track your Cloud Ceiling landing page performance! 🚀**
