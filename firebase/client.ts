// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1iYQ5Hl3U4AOXTp7uHgcIKOkutb5wJWU",
  authDomain: "prepwise-e1ec8.firebaseapp.com",
  projectId: "prepwise-e1ec8",
  storageBucket: "prepwise-e1ec8.firebasestorage.app",
  messagingSenderId: "656984663683",
  appId: "1:656984663683:web:ac0945e8b32ec16fb39db6",
  measurementId: "G-WTYPQRMLN9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);