import admin from 'firebase-admin'
import { getAuth } from 'firebase-admin/auth'

// @ts-ignore
const firebaseApp = global.firebaseApp ?? admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  })
  
    
})

// @ts-ignore
global.firebaseApp = firebaseApp


export const firebaseAuth = getAuth(firebaseApp)