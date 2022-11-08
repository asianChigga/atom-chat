// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh3xAXmPiPDKTk4L5zQcKui0BucjFDyyM",
  authDomain: "practice-a68c9.firebaseapp.com",
  projectId: "practice-a68c9",
  storageBucket: "practice-a68c9.appspot.com",
  messagingSenderId: "214712824275",
  appId: "1:214712824275:web:9504d675d2a47d29c5bf26",
  measurementId: "G-S5XQM58MNM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
