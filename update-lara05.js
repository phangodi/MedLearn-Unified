// One-time script to update lara05 to super admin
// Run with: node update-lara05.js

const admin = require('firebase-admin');
const serviceAccount = require('./medlearn-dev-firebase-adminsdk.json'); // You'll need this file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function updateLara05() {
  try {
    // Find lara05 user by email
    const usersRef = db.collection('users');
    const snapshot = await usersRef.where('email', '==', 'lara05@me.com').get();

    if (snapshot.empty) {
      console.log('No user found with email lara05@me.com');
      return;
    }

    const userDoc = snapshot.docs[0];
    console.log('Found user:', userDoc.id);

    // Update to super admin
    await userDoc.ref.update({
      role: 'superadmin',
      isAdmin: true,
      permissions: {
        canPin: true,
        canDelete: true,
        canEdit: true,
        canPromoteUsers: true,
        canManageAdmins: true,
      }
    });

    console.log('✅ Successfully updated lara05@me.com to super admin!');
    console.log('New role: superadmin');
    console.log('isAdmin: true');
  } catch (error) {
    console.error('Error updating user:', error);
  } finally {
    process.exit(0);
  }
}

updateLara05();
