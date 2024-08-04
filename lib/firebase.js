// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDZRWEqNj8tmNzUc0I6XjEQ5Xb2RPgPx8o",
    authDomain: "pantry-manager-45acb.firebaseapp.com",
    projectId: "pantry-manager-45acb",
    storageBucket: "pantry-manager-45acb.appspot.com",
    messagingSenderId: "523701056366",
    appId: "1:523701056366:web:b82c96ad11c31f5962c77f",
    measurementId: "G-S60WMV54RW"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
