# Deployment Guide: GitHub to Hostseba

## ✅ Step 2: Configure GitHub Secrets

### **Get Your FTP Credentials from Hostseba**

1. **Log in to Hostseba cPanel**
   - Go to your Hostseba account
   - Click on **cPanel** or **File Manager**

2. **Find Your FTP Details**
   - Look for **FTP Accounts** in cPanel
   - Your FTP credentials should be:
     - **FTP Server**: `ftp.yourdomain.com` or `yourdomain.com`
     - **Username**: Usually your cPanel username (check welcome email)
     - **Password**: Your cPanel password
     - **Port**: 21 (default)

### **Add Secrets to GitHub**

1. **Go to Your GitHub Repository**
   - Navigate to: `https://github.com/YOUR_USERNAME/YOUR_REPO`

2. **Open Settings**
   - Click on **Settings** tab at the top

3. **Navigate to Secrets**
   - In the left sidebar, click **Secrets and variables**
   - Click **Actions**

4. **Add Three Secrets** (Click "New repository secret" for each):

   **Secret 1: FTP_SERVER**
   - Name: `FTP_SERVER`
   - Value: `ftp.yourdomain.com` (replace with your actual domain)
   - Click **Add secret**

   **Secret 2: FTP_USERNAME**
   - Name: `FTP_USERNAME`
   - Value: Your cPanel username (e.g., `username123`)
   - Click **Add secret**

   **Secret 3: FTP_PASSWORD**
   - Name: `FTP_PASSWORD`
   - Value: Your cPanel password
   - Click **Add secret**

### **How to Find Your FTP Details in Hostseba:**

#### **Method 1: From Welcome Email**
- Check the welcome email from Hostseba
- Look for "FTP Details" or "Account Information"

#### **Method 2: From cPanel**
1. Log in to Hostseba cPanel
2. Go to **FTP Accounts**
3. You'll see your main FTP account listed
4. Note the server, username, and password

#### **Method 3: Contact Hostseba Support**
If you can't find your FTP details:
- Email: support@hostseba.com
- Ask for: "FTP credentials for my hosting account"

---

## ✅ Step 3: Push the Workflow File to GitHub

After adding the secrets, push the workflow file:

```bash
# Add the new workflow file
git add .github/workflows/deploy.yml

# Commit the changes
git commit -m "Add GitHub Actions deployment workflow"

# Push to GitHub
git push origin main
```

(Or push to `master` if that's your default branch)

---

## ✅ Step 4: Trigger Deployment

### **Option 1: Automatic Deployment**
- Every time you push to `main` or `master` branch, it will automatically deploy

### **Option 2: Manual Deployment**
1. Go to your GitHub repo
2. Click **Actions** tab
3. Click **Deploy to Hostseba** workflow
4. Click **Run workflow** button
5. Select branch and click **Run workflow**

---

## ✅ Step 5: Monitor Deployment

1. **Go to Actions Tab**
   - Visit: `https://github.com/YOUR_USERNAME/YOUR_REPO/actions`

2. **Check Deployment Status**
   - You'll see the deployment running
   - Green checkmark ✅ = Success
   - Red X ❌ = Failed (check logs)

3. **View Logs**
   - Click on the workflow run
   - Click on "deploy" job
   - Check each step for details

---

## 🔍 Common Issues & Solutions

### **Issue 1: FTP Connection Failed**
**Solution:**
- Check if FTP_SERVER is correct (try with and without `ftp.` prefix)
- Verify username and password are correct
- Try using domain IP address instead of domain name

### **Issue 2: Permission Denied**
**Solution:**
- Check if your cPanel user has FTP access
- Verify the server-dir path: `./public_html/`
- Contact Hostseba to enable FTP access if disabled

### **Issue 3: Files Not Updating**
**Solution:**
- Clear the `public_html` folder in cPanel first
- Set `dangerous-clean-slate: true` in deploy.yml (use carefully!)
- Manually delete old files via cPanel File Manager

### **Issue 4: Wrong Server Path**
Different hosts use different paths. Try:
- `./public_html/`
- `/public_html/`
- `./`
- `/`

---

## 📋 Quick Checklist

- [ ] GitHub repository created and code pushed
- [ ] FTP credentials obtained from Hostseba
- [ ] Three secrets added to GitHub (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD)
- [ ] Workflow file (.github/workflows/deploy.yml) pushed to GitHub
- [ ] Deployment triggered and successful
- [ ] Website accessible at your domain

---

## 🎯 Next Steps After Deployment

1. **Visit your website**: `https://yourdomain.com`
2. **Test all features**:
   - Form submission
   - Video playback
   - Mobile responsiveness
   - All images loading
3. **Add Meta Pixel ID** in `src/config/pixel.ts`
4. **Verify Meta Pixel** with Facebook Pixel Helper extension
5. **Test WhatsApp integration** from the order form

---

## 🆘 Need Help?

If deployment fails:
1. Check the GitHub Actions logs for error messages
2. Verify your FTP credentials in Hostseba cPanel
3. Try manual FTP upload first to test credentials
4. Contact Hostseba support if FTP is not working

**Your Cloud Ceiling landing page will be live after successful deployment!** 🚀

