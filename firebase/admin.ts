import admin from 'firebase-admin'
import { initializeApp, getApps } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'


const serviceAccount = require("./firebase-admin-secrets.json");

function createApp() {
  if(!getApps().length) {
    return initializeApp(
      {
        credential: admin.credential.cert(serviceAccount),
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      }
    )
  } 
}
const app = createApp();
const auth = getAuth(app);
const db = getFirestore(app);

export const verifyIdToken = async (token: string) => {
  return auth.verifyIdToken(token).catch(err => {throw err})
}

export {
  app,
  db,
  auth
}