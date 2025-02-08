// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Or getDatabase() for Realtime DB
const firebaseConfig = {
    apiKey: "AIzaSyD6-fYQG6n6KA5tjUkBx4eSqq7J_7wdtk0",
    authDomain: "ai-for-optometry.firebaseapp.com",
    projectId: "ai-for-optometry",
    storageBucket: "ai-for-optometry.appspot.com",
    messagingSenderId: "762510496091",
    appId: "1:762510496091:web:a869e864bd7a91f56dca7e"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);  // Use this for Firestore, or getDatabase(app) for Realtime DB

export { auth, db };