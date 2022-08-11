import admin from 'firebase-admin'

const serviceAccount = require("./firebase-admin-secrets.json");
const adminApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
})


export const verifyIdToken = async (token: string) => {
  return adminApp.auth().verifyIdToken(token).catch(err => {throw err})
}

export default adminApp.firestore();