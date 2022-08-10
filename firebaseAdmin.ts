import admin from 'firebase-admin'

const serviceAccount = require("./firebase-admin-secrets.json");

if(admin.app.length < 1) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  })  
}

export const verifyIdToken = async (token: string) => {
  return admin.auth().verifyIdToken(token).catch(err => {throw err})
}

export default admin.firestore();