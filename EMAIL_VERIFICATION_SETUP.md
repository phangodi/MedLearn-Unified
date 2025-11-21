# Email Verification Setup Guide

This guide explains how to customize Firebase email templates to make them look professional and branded for Lara's MedLearn.

## 🚀 What We've Implemented

### Code Changes (Already Done ✅)
1. **Email verification enforcement** - Users MUST verify their email before accessing the platform
2. **Verify Email page** - Professional UI for users to verify their email
3. **Resend verification** - Users can resend the verification email if needed
4. **OAuth exemption** - Google/Apple sign-ins are auto-verified (no extra step needed)
5. **Custom action handler** - Created `AuthActionPage.tsx` to handle verification links from custom domain
6. **Route added** - `/__/auth/action` route handles email verification links

### How It Works
- **Email/Password Signup:** User gets verification email → Must click link → Can access platform
- **Google/Apple OAuth:** Automatically verified (email already verified by provider)
- **Protection:** Unverified users are redirected to `/verify-email` page
- **Resend:** Users can request a new verification email if needed

---

## 📧 Customize Firebase Email Templates (Required)

Currently, your verification emails look like spam because they show "project-779787501928" instead of "Lara's MedLearn". Here's how to fix this:

### Step 1: Set Custom Action URL (REQUIRED - Unlocks Email Editor)

1. **Go to Firebase Console:**
   ```
   https://console.firebase.google.com/project/medlearn-dev/authentication/emails
   ```

2. **Scroll to the bottom** and find **"Customize action URL"** or **"Action URL"** section

3. **Enter your action URL:**

   For **production (Netlify)**:
   ```
   https://medlearn-szeged.netlify.app/__/auth/action
   ```

   For **local development** (if testing):
   ```
   http://localhost:5173/__/auth/action
   ```

4. **Click "Save"**

5. **Now the email body editor will be UNLOCKED!** ✅

### Step 2: Customize Email Verification Template

Now that the action URL is set, the email body should be editable:
1. Click on **Email address verification** in the template list
2. You'll see three editable sections:

#### A. Sender Name (From)
**Current:** `noreply@medlearn-dev.firebaseapp.com`
**Change to:** `Lara's MedLearn <noreply@medlearn-dev.firebaseapp.com>`

*Note: The email address will remain `@firebaseapp.com` unless you set up a custom SMTP server (see Advanced section below).*

#### B. Subject Line
**Current:** `Verify your email for project-779787501928`
**Change to:** `Verify your email for Lara's MedLearn`

#### C. Email Body
**Current:** Generic Firebase template
**Recommended template:**

```
Hello %DISPLAY_NAME%,

Welcome to Lara's MedLearn! 🎓

We're excited to have you join our community of medical students. To get started, please verify your email address by clicking the button below:

%LINK%

This link will expire in 1 hour for security reasons.

If you didn't create an account with Lara's MedLearn, you can safely ignore this email.

Questions? Reply to this email or visit our community page for support.

Best regards,
The Lara's MedLearn Team

---
Lara's MedLearn - Free Medical Education Platform
www.medlearn-szeged.com
```

#### D. Customization Tips
- Use `%DISPLAY_NAME%` to insert the user's name
- Use `%LINK%` to insert the verification link (Firebase will automatically style it as a button)
- Use `%EMAIL%` if you want to show the user's email in the body
- Keep it concise and professional
- Add your branding colors/emojis if desired

### Step 3: Save Changes
1. Click **Save** at the bottom of the template editor
2. Firebase will immediately start using the new template

### Step 4: Test the New Template
1. Create a new test account with an email you can access
2. Check the inbox - you should see the new professional email
3. Verify that the link works correctly

---

## 📋 Other Email Templates to Customize

While you're in the Templates section, customize these as well:

### 1. Password Reset
**Subject:** `Reset your password for Lara's MedLearn`
**Body:** Similar professional format with password reset instructions

### 2. Email Change
**Subject:** `Verify your new email address - Lara's MedLearn`
**Body:** Confirm the email change for security

### 3. SMS Verification (if using phone auth in the future)
Customize SMS templates if you add phone authentication later

---

## 🎨 Advanced: Custom Email Domain (Optional)

To send emails from your own domain (e.g., `noreply@medlearn-szeged.com` instead of `@firebaseapp.com`), you have two options:

### Option 1: Firebase Extensions (Easiest - Paid)
1. Install the **Trigger Email** Firebase Extension
2. Use SendGrid, Mailgun, or similar SMTP provider
3. Configure DNS records for your domain
4. Cost: ~$5-10/month depending on email volume

### Option 2: Custom SMTP Server (More Control)
1. Set up your own SMTP server (requires technical setup)
2. Use Firebase Admin SDK to send custom emails
3. More control but more maintenance

**Recommendation:** Start with the default Firebase email. The customized template will look professional enough. Only switch to custom domain if users complain about deliverability or spam issues.

---

## 🛡️ Security Best Practices

### Rate Limiting (Already Built-in ✅)
Firebase automatically limits email sends to prevent abuse:
- Max 5 verification emails per hour per user
- Our code catches this error and shows: "Too many requests. Please wait a few minutes."

### Preventing Fake Emails
Current protections:
- ✅ **Email verification** - Users must access a real email inbox
- ✅ **No access without verification** - Unverified users can't use the platform
- ✅ **Rate limiting** - Prevents spam signups

Additional options (implement if spam becomes an issue):
- **reCAPTCHA v3** - Add invisible captcha to signup form
- **Disposable email blocking** - Block temporary email services (e.g., 10minutemail)
- **Domain validation** - Require .edu emails for medical students (optional)

---

## 📊 How Other Companies Handle This

### Common Verification Methods

1. **Email Link (What we use ✅)**
   - **Used by:** GitHub, LinkedIn, most SaaS platforms
   - **Pros:** Simple, secure, works on any device
   - **Cons:** Requires checking email
   - **Our Implementation:** ✅ Click link → Automatically verified → Redirect to dashboard

2. **6-Digit Code (Alternative approach)**
   - **Used by:** Twitter, Instagram, banking apps
   - **Pros:** Feels more modern, stays on the same page
   - **Cons:** More complex to implement, requires code input UI
   - **Firebase Support:** ❌ Not natively supported (would require custom implementation)

3. **Magic Link (No password)**
   - **Used by:** Slack, Notion, some modern apps
   - **Pros:** No password needed, one-click login
   - **Cons:** Less familiar to users, requires email for every login
   - **Firebase Support:** ⚠️ Requires custom implementation

### Industry Standard
**Email verification link is the most common and trusted method.** It's what users expect and what Firebase supports natively. Your current implementation follows best practices used by:
- GitHub
- Firebase documentation
- Google Workspace
- Most educational platforms

---

## 🧪 Testing Checklist

Before deploying to production, test:

- [ ] Create new account with email/password
- [ ] Receive verification email within 1 minute
- [ ] Email looks professional (name, subject, body)
- [ ] Click verification link → Redirects to dashboard
- [ ] Try to access dashboard before verifying → Blocked
- [ ] Click "Resend Email" → Receive new email
- [ ] Try to resend 5+ times → See rate limit error
- [ ] Sign in with Google → Auto-verified, no extra step
- [ ] Sign in with Apple → Auto-verified, no extra step

---

## 🚨 Important Notes

### For Developers
- OAuth providers (Google, Apple) automatically set `emailVerified: true`
- Only email/password signups need manual verification
- The `ProtectedRoute` component checks `user.emailVerified` for ALL routes
- Verification status is checked on every page load (can't bypass)

### For Users
- Verification emails expire after 1 hour
- Users can request unlimited resends (with rate limiting)
- If they close the browser before verifying, they'll be redirected to `/verify-email` on next visit
- Once verified, they never see the page again

### For Deployment
- **Critical:** Ensure `VITE_USE_FIREBASE_EMULATORS` is NOT set on Netlify
- Email templates are global (same for dev, staging, production)
- Test in production after deploying to ensure emails are sent correctly

---

## 📝 Summary

**What You Did (Code):** ✅ Implemented email verification enforcement
**What You Need to Do (Firebase Console):**
1. Go to Firebase Console → Authentication → Templates
2. Customize "Email address verification" template
3. Change sender name to "Lara's MedLearn"
4. Change subject to "Verify your email for Lara's MedLearn"
5. Update email body with professional branding
6. Save and test with a new account

**Result:**
- ✅ Users can't access the platform without verifying their email
- ✅ Professional, branded verification emails
- ✅ Protection against fake email signups
- ✅ OAuth users skip verification (already verified by provider)

---

## Need Help?

- **Firebase Email Templates Docs:** https://firebase.google.com/docs/auth/custom-email-handler
- **Firebase Auth Docs:** https://firebase.google.com/docs/auth/web/manage-users
- **Testing:** Use a service like https://temp-mail.org/ to test verification flow (but note: you may want to block these domains in production!)
