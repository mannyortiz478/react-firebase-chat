// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHYLIZX1AbRe2TmPl4TzHChVw3vvW1dEY",
  authDomain: "react-firebase-chat-superchat.firebaseapp.com",
  projectId: "react-firebase-chat-superchat",
  storageBucket: "react-firebase-chat-superchat.appspot.com",
  messagingSenderId: "1097195962576",
  appId: "1:1097195962576:web:6f93896aefb137be025ed5",
  measurementId: "G-YFBXF5YKK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)