// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnYDsartHzpaOF5K_Tpr3Le8ILJoYFnlc",
  authDomain: "fir-day002.firebaseapp.com",
  projectId: "fir-day002",
  storageBucket: "fir-day002.firebasestorage.app",
  messagingSenderId: "822353661276",
  appId: "1:822353661276:web:dd41b6310d032cf60ec599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)