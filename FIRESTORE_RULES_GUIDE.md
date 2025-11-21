# Firestore Security Rules Management Guide

## Overview

This project uses Firebase Firestore for the Community page backend. Firestore requires security rules to control read/write access to data. We maintain **two sets of rules**:

1. **Emulator Mode Rules** - For local development with Firebase emulators
2. **Production Rules** - For deployed environments (staging, production)

## Rule Locations

- **Rules file**: `/firestore.rules` (project root)
- **Firebase project**: `medlearn-dev`

## ⚠️ Critical: Rules Must Match Environment

### For Local Development (with Firebase Emulators)

When testing locally with emulators (`VITE_USE_FIREBASE_EMULATORS=true`):

**Firestore rules should be in EMULATOR MODE**

### For Staging/Production Deployment

When deploying to Netlify or any live environment:

**Firestore rules MUST be in PRODUCTION MODE**

---

## How to Switch Between Modes

### Switch to EMULATOR MODE (Local Development)

**When to use**: Testing locally with Firebase emulators

**Steps**:

1. Open `/firestore.rules`

2. **Uncomment** the emulator mode block (lines 5-10):
   ```javascript
   /* EMULATOR MODE: Uncomment this for local testing with Firebase emulators
   // Allow all reads and writes for testing
   match /{document=**} {
     allow read, write: if true;
   }
   */
   ```

   Should become:
   ```javascript
   // EMULATOR MODE: Uncomment this for local testing with Firebase emulators
   // Allow all reads and writes for testing
   match /{document=**} {
     allow read, write: if true;
   }
   ```

3. **Comment out** the production rules (lines 12-70):
   - Add `/*` before line 12 (before `// PRODUCTION RULES`)
   - Add `*/` after line 70 (after the closing brace)

4. **Deploy to Firebase** (optional, only if testing emulator rules sync):
   ```bash
   firebase use medlearn-dev
   firebase deploy --only firestore:rules
   ```

---

### Switch to PRODUCTION MODE (Before Deployment) ✅

**When to use**: Before deploying to Netlify staging or production

**Steps**:

1. Open `/firestore.rules`

2. **Comment out** the emulator mode block (lines 5-10):
   ```javascript
   /* EMULATOR MODE: Uncomment this for local testing with Firebase emulators
   // Allow all reads and writes for testing
   match /{document=**} {
     allow read, write: if true;
   }
   */
   ```

3. **Uncomment** the production rules (should be lines 12-70):
   - Ensure `// PRODUCTION RULES - Active for deployment` is NOT commented out
   - All helper functions and collection rules should be active

4. **Deploy to Firebase** (REQUIRED):
   ```bash
   firebase use medlearn-dev
   firebase deploy --only firestore:rules
   ```

5. **Verify deployment**:
   - Check Firebase Console: https://console.firebase.google.com/project/medlearn-dev/firestore/rules
   - Ensure rules show as "Published" with recent timestamp

---

## Production Rules Explained

The production rules enforce proper security:

### Helper Functions
- `isSignedIn()` - Checks if user is authenticated
- `isOwner(userId)` - Checks if user owns the document
- `isAdmin()` - Checks if user has admin privileges
- `isSuperAdmin()` - Checks if user is a super admin

### Collection Rules

#### Users (`/users/{userId}`)
- **Read**: Anyone (for displaying user profiles)
- **Create**: Owner only, when signed in
- **Update**: Owner only, cannot modify `isAdmin` field
- **Delete**: Admins only

#### Posts (`/posts/{postId}`)
- **Read**: Anyone
- **Create**: Signed-in users only
- **Update**: Any signed-in user (for likes, bookmarks, views)
- **Delete**: Admins only

#### Comments (`/comments/{commentId}`)
- **Read**: Anyone
- **Create**: Signed-in users only
- **Update/Delete**: Comment author or admins

#### Announcements (`/announcements/{announcementId}`)
- **Read**: Signed-in users
- **Create/Update/Delete**: Super admins only

#### Dashboard Message (`/dashboardMessage/current`)
- **Read**: Signed-in users
- **Write**: Super admins only

---

## 🚨 Pre-Deployment Checklist

**BEFORE deploying to Netlify, ALWAYS:**

- [ ] Check `/firestore.rules` - Production rules are active (not commented)
- [ ] Check `/firestore.rules` - Emulator rules are commented out
- [ ] Run: `firebase use medlearn-dev`
- [ ] Run: `firebase deploy --only firestore:rules`
- [ ] Verify in Firebase Console that rules were published
- [ ] Check Netlify environment variables - `VITE_USE_FIREBASE_EMULATORS` is NOT set or is `false`

---

## Environment Variables

### Local Development (`.env.local`)

For local testing with emulators:
```env
VITE_USE_FIREBASE_EMULATORS=true
```

For local testing with production Firebase:
```env
VITE_USE_FIREBASE_EMULATORS=false
# OR simply remove/comment out the variable
```

### Netlify (Staging/Production)

**CRITICAL**: Ensure `VITE_USE_FIREBASE_EMULATORS` is either:
- Not set at all ✅ (recommended)
- Set to `false` ✅

**NEVER** set to `true` on Netlify, or the app will try to connect to non-existent emulators!

---

## Common Issues & Solutions

### Issue: "No posts showing up on staging site"
**Cause**: Firestore rules still in emulator mode
**Solution**: Switch to production mode and deploy rules

### Issue: "Can't create posts/comments on staging"
**Cause**: Firestore rules still in emulator mode, or not deployed
**Solution**: Switch to production mode, deploy rules with Firebase CLI

### Issue: "App shows 'Permission denied' errors"
**Cause**: Rules too restrictive or user not authenticated properly
**Solution**: Check Firebase Console Auth, verify user is signed in

### Issue: "Comments count shows but comments don't display"
**Cause**: Rules blocking read access to comments collection
**Solution**: Ensure production rules allow `allow read: if true;` for comments

### Issue: "Local emulators not working"
**Cause**: Rules in production mode
**Solution**: Switch to emulator mode, restart emulators

---

## Quick Reference Commands

```bash
# Check current Firebase project
firebase use

# Set Firebase project
firebase use medlearn-dev

# Deploy only Firestore rules (fast)
firebase deploy --only firestore:rules

# Check Firebase Console
open https://console.firebase.google.com/project/medlearn-dev/firestore/rules

# Start local emulators
firebase emulators:start

# View Netlify environment variables
netlify env:list
```

---

## Important Notes

1. **Firestore rules are global** - They apply to ALL clients connecting to Firebase (local dev, staging, production)

2. **Always deploy rules changes** - Unlike code changes that need Netlify deployment, Firestore rules need Firebase CLI deployment

3. **Test locally first** - Use emulator mode to test rule changes before deploying to production

4. **Monitor Firebase Console** - Check the Rules tab in Firebase Console to see active rules

5. **Keep this guide updated** - If you modify rules structure, update this documentation

---

**Last Updated**: November 20, 2025
**Firebase Project**: `medlearn-dev`
**Maintainer**: Refer to CLAUDE.md for AI assistant instructions
