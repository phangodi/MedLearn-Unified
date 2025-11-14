# Firebase Setup Guide for MedLearn

This guide will help you set up Firebase for local development and testing using Firebase Emulators.

## 📋 Prerequisites

- Node.js 18+ installed
- npm installed
- Firebase account (free tier is sufficient)

---

## 🚀 Quick Start

### Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase

```bash
firebase login
```

This will open your browser for authentication.

---

## 🔧 Firebase Project Setup

### Option A: Create New Firebase Project (Recommended for Testing)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"**
3. Project name: `medlearn-dev` (or your choice)
4. Enable Google Analytics: **YES** (recommended)
5. Click **Create Project**

### Option B: Use Existing Project

If you already have a Firebase project, you can use that instead.

---

## 🌐 Add Web App to Firebase Project

1. In Firebase Console, click the **Web icon** (`</>`)
2. App nickname: `MedLearn Web`
3. Enable Firebase Hosting: **YES**
4. Click **Register app**

You'll see a config object like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "medlearn-dev.firebaseapp.com",
  projectId: "medlearn-dev",
  storageBucket: "medlearn-dev.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
  measurementId: "G-XXXXXXXXXX"
};
```

**Save this config!** You'll need it in the next step.

---

## ⚙️ Configure Environment Variables

1. **Copy the environment template:**

```bash
cd client
cp .env.example .env.local
```

2. **Edit `.env.local`** and add your Firebase config:

```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_from_firebase_console
VITE_FIREBASE_AUTH_DOMAIN=medlearn-dev.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=medlearn-dev
VITE_FIREBASE_STORAGE_BUCKET=medlearn-dev.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX

# Super Admin Email (KEEP THIS PRIVATE!)
# First user with this email becomes super admin automatically
VITE_SUPER_ADMIN_EMAIL=your_admin_email@example.com

# Use Firebase Emulators for local testing
VITE_USE_FIREBASE_EMULATORS=true
```

**⚠️ IMPORTANT:** Never commit `.env.local` to Git! It's already in `.gitignore`.

---

## 🔐 Enable Authentication Providers

In Firebase Console:

1. Go to **Authentication** → **Get Started**
2. Click **Sign-in method** tab
3. Enable these providers:

### Google Sign-In
- Click **Google** → **Enable**
- Support email: your-email@example.com
- **Save**

### Email/Password
- Click **Email/Password** → **Enable**
- Email link sign-in: **NO** (leave disabled)
- **Save**

### Apple Sign-In
- Click **Apple** → **Enable**
- Follow Apple's setup guide (requires Apple Developer account)
- **Save**

---

## 💾 Enable Firestore Database

1. Go to **Firestore Database** → **Create database**
2. Start mode: **Production mode**
3. Location: Choose closest to you (e.g., `us-central1`)
4. Click **Enable**

---

## 📦 Enable Cloud Storage

1. Go to **Storage** → **Get Started**
2. Start mode: **Production mode**
3. Location: **Same as Firestore** (for consistency)
4. Click **Done**

---

## 🧪 Initialize Firebase Emulators (LOCAL TESTING)

This is the **recommended way** to test without touching production data.

### 1. Initialize Firebase in Your Project

```bash
cd /path/to/MedLearn-Unified
firebase init
```

### 2. Select Features

Use spacebar to select, then Enter:

```
◉ Firestore
◉ Storage
◉ Emulators
◯ Hosting (optional)
```

### 3. Configure Firestore

```
? What file should be used for Firestore Rules?
  ▸ firestore.rules (already exists)

? What file should be used for Firestore indexes?
  ▸ firestore.indexes.json (already exists)
```

### 4. Configure Storage

```
? What file should be used for Storage Rules?
  ▸ storage.rules (already exists)
```

### 5. Select Emulators

```
◉ Authentication Emulator
◉ Firestore Emulator
◉ Storage Emulator
```

### 6. Accept Default Ports

```
? Which port do you want to use for the auth emulator? 9099
? Which port do you want to use for the firestore emulator? 8080
? Which port do you want to use for the storage emulator? 9199
? Would you like to enable the Emulator UI? Yes
? Which port do you want to use for the Emulator UI? 4000
```

### 7. Download Emulators

```
? Would you like to download the emulators now? Yes
```

---

## 🎮 Running the Application

### Terminal 1: Start Firebase Emulators

```bash
firebase emulators:start
```

You should see:

```
┌─────────────────────────────────────────────────────┐
│ ✔  All emulators ready!                            │
├─────────────────────────────────────────────────────┤
│ ┌───────────┬────────────────┬─────────────────┐   │
│ │ Emulator  │ Host:Port      │ View in Browser │   │
│ ├───────────┼────────────────┼─────────────────┤   │
│ │ Auth      │ localhost:9099 │                 │   │
│ │ Firestore │ localhost:8080 │                 │   │
│ │ Storage   │ localhost:9199 │                 │   │
│ └───────────┴────────────────┴─────────────────┘   │
│                                                     │
│ 📊 View Emulator UI: http://localhost:4000         │
└─────────────────────────────────────────────────────┘
```

**Leave this terminal running!**

### Terminal 2: Start Development Server

```bash
cd client
npm run dev
```

Open: http://localhost:5173

---

## ✅ Testing the System

### 1. Create Your Admin Account

1. Go to http://localhost:5173
2. Click **"Sign up"**
3. **IMPORTANT:** Use the email you set in `VITE_SUPER_ADMIN_EMAIL`
4. Fill in your name and password
5. Click **Sign Up**

Your account will automatically become a super admin!

### 2. Test Features

- Create posts
- Upload files
- Add tags
- Test pin/unpin (you'll see admin buttons)
- Test delete posts

### 3. View Emulator Data

Open http://localhost:4000 to see:
- All users in Firestore
- All posts
- Uploaded files in Storage
- Authentication logs

---

## 🗑️ Clearing Test Data

### Method 1: Restart Emulators

Just stop and restart the emulators:

```bash
# Ctrl+C in the emulator terminal
firebase emulators:start
```

All data is lost when emulators restart (this is good for testing!).

### Method 2: Clear Specific Data

In the Emulator UI (http://localhost:4000):
- Go to Firestore tab
- Select a collection
- Click **Delete collection**

---

## 🚀 Deploying to Production

When you're ready to go live:

### 1. Update Environment

In `.env.local`, change:

```bash
VITE_USE_FIREBASE_EMULATORS=false
```

### 2. Deploy Security Rules

```bash
firebase deploy --only firestore:rules
firebase deploy --only storage:rules
```

### 3. Deploy Hosting (Optional)

```bash
cd client
npm run build
firebase deploy --only hosting
```

---

## 🔒 Security Notes

### ✅ What's Safe to Commit to GitHub

- `firebase.json`
- `firestore.rules`
- `storage.rules`
- `.env.example`
- All source code files

### ❌ NEVER Commit These

- `.env.local` (contains your Firebase config and admin email)
- `firebase-debug.log`
- Any files with real API keys

Already protected by `.gitignore`:
- `*.local` (includes `.env.local`)
- `firebase-debug.log`

---

## 🆘 Troubleshooting

### Error: "Firebase not initialized"

**Fix:** Make sure `.env.local` exists and has all required variables.

### Error: "Failed to connect to emulators"

**Fix:** Make sure emulators are running in another terminal.

### Error: "Permission denied"

**Fix:** Check your Firestore rules. Emulators use the same rules!

### Can't sign in with Google/Apple in emulators

**Expected behavior!** Social sign-in doesn't work in emulators.
Use Email/Password for testing, or test social sign-in in production.

---

## 📚 Next Steps

1. **Test locally with emulators** ← Start here!
2. **Add more users** (friends, colleagues)
3. **Test all features** (posts, uploads, admin functions)
4. **When satisfied**, switch to production
5. **Deploy** and share with medical students!

---

## 🎉 You're All Set!

Your Firebase setup is complete. Happy coding! 🚀

If you need help, check:
- [Firebase Docs](https://firebase.google.com/docs)
- [Emulators Guide](https://firebase.google.com/docs/emulator-suite)
