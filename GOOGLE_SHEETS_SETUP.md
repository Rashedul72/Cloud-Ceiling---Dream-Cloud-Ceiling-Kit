# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets to automatically collect all form submissions from your Cloud Ceiling landing page.

## 📋 What You'll Get

Every time someone submits the order form, a new row will be added to your Google Sheet with:
- ⏰ Timestamp
- 👤 Customer Name
- 📞 Phone Number
- 📍 Address
- 📦 Package Selected
- 🚚 Delivery Area
- 🌐 Source

---

## 🚀 Step-by-Step Setup

### Step 1: Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"Blank"** to create a new spreadsheet
3. Name it: **"Cloud Ceiling Orders"**
4. In the first row, add these column headers:

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| Timestamp | Name | Phone | Address | Package | Delivery Area | Source |

---

### Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. **Copy and paste this entire script:**

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Format timestamp
    var timestamp = new Date(data.timestamp);
    var formattedTime = Utilities.formatDate(timestamp, "Asia/Dhaka", "yyyy-MM-dd HH:mm:ss");
    
    // Prepare row data
    var rowData = [
      formattedTime,           // Timestamp
      data.name || '',         // Name
      data.phone || '',        // Phone
      data.address || '',      // Address
      data.package || '',      // Package
      data.deliveryArea || '', // Delivery Area
      data.source || ''        // Source
    ];
    
    // Append to sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Order saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify setup
function testPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: 'Test Customer',
        phone: '01712345678',
        address: 'Test Address, Dhaka',
        package: '100 - 120',
        deliveryArea: 'inside_dhaka',
        source: 'Cloud Ceiling Landing Page'
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. Click the **disk icon** (💾) to save
5. Name the project: **"Cloud Ceiling Form Handler"**

---

### Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the **gear icon** (⚙️) next to "Select type"
3. Choose **"Web app"**
4. Configure settings:
   - **Description:** "Cloud Ceiling Form Submission Handler"
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone
5. Click **Deploy**
6. **Authorize access:**
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to Cloud Ceiling Form Handler (unsafe)**
   - Click **Allow**
7. **Copy the Web App URL** - It looks like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```
   ⚠️ **SAVE THIS URL!** You'll need it in the next step.
   https://script.google.com/macros/s/AKfycbwHKwDsDFaxiO5vXkz_Pij2VUoUauWQntcZkUlBSeA5_74ejUuCwdiUdB_wNd09vdTe2w/exec

---

### Step 4: Test the Script (Optional but Recommended)

1. In Apps Script editor, click on **testPost** function (dropdown)
2. Click **Run** (▶️ play button)
3. Check your Google Sheet - you should see a test order appear!
4. If it works, delete the test row

---

### Step 5: URL Already Configured! ✅

Your Google Sheets URL is already hardcoded in the project:
```
https://script.google.com/macros/s/AKfycbwHKwDsDFaxiO5vXkz_Pij2VUoUauWQntcZkUlBSeA5_74ejUuCwdiUdB_wNd09vdTe2w/exec
```

If you ever need to change it, edit `src/components/OrderForm.tsx` line 87.

---

### Step 6: Rebuild and Deploy

```bash
# Rebuild your site
npm run build

# Upload the contents of 'out' folder to wholesalebd.shop
```

---

## ✅ Testing Your Integration

1. Visit your website: **wholesalebd.shop**
2. Fill out and submit the order form
3. Check your Google Sheet - a new row should appear within 1-2 seconds!
4. You should see:
   - Current timestamp in Dhaka timezone
   - All form data in proper columns

---

## 📊 Google Sheet Tips

### Make It Look Better:
1. **Format headers:**
   - Bold the first row
   - Add background color
   - Freeze the header row: View → Freeze → 1 row

2. **Auto-resize columns:**
   - Select all columns
   - Double-click between any column letters

3. **Add data validation:**
   - Highlight duplicate phone numbers
   - Color-code by package type

### Share with Team:
1. Click **Share** button
2. Add team members' emails
3. Set permissions (View/Edit)

### Get Notifications:
1. Tools → Notification rules
2. Set up email alerts when a row is added

---

## 🔧 Troubleshooting

### Orders Not Appearing?
1. **Check .env.local file:**
   - Make sure URL is correct
   - No extra spaces
   - Starts with `NEXT_PUBLIC_GOOGLE_SHEETS_URL=`

2. **Check Apps Script:**
   - Make sure it's deployed as "Anyone" can access
   - Check Apps Script logs: View → Executions

3. **Check browser console:**
   - Open DevTools (F12)
   - Look for errors when submitting form

### "Permission Denied" Error?
1. Re-deploy the script
2. Make sure "Who has access" is set to **Anyone**

### Timestamp Wrong?
1. In Apps Script, change timezone:
   ```javascript
   Utilities.formatDate(timestamp, "Asia/Dhaka", "yyyy-MM-dd HH:mm:ss")
   ```

---

## 🎯 Next Steps

Once this is working, you can:
1. **Export orders:** File → Download → CSV
2. **Create reports:** Use Google Sheets formulas
3. **Integrate with other tools:** Zapier, Make.com, etc.
4. **Add email notifications:** Apps Script can send emails

---

## 📞 Need Help?

If you get stuck:
1. Check Apps Script logs: View → Executions
2. Test with the `testPost()` function
3. Make sure the Google Sheet is not protected
4. Verify the Web App URL is correct in `.env.local`

---

**Your Google Sheets integration is ready! 🎉**

