// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFOD-x-7IYRJeBxkWDani4ph-TlGXI3RE",
  authDomain: "piwo-2026.firebaseapp.com",
  projectId: "piwo-2026",
  storageBucket: "piwo-2026.firebasestorage.app",
  messagingSenderId: "978592898126",
  appId: "1:978592898126:web:bbbd4750be3145018cb71f",
  measurementId: "G-4ZNMCD8WFS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
