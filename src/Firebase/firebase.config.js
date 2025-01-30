// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9suHGEofyZ2Ostn0G5hWxv_NI7bYi5sc",
  authDomain: "coffee-store-espresso-em-40e22.firebaseapp.com",
  projectId: "coffee-store-espresso-em-40e22",
  storageBucket: "coffee-store-espresso-em-40e22.firebasestorage.app",
  messagingSenderId: "892648682499",
  appId: "1:892648682499:web:fb8a77c1972739491a0a36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);