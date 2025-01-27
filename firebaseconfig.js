// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
//import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';
import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// const provider = new GoogleAuthProvider();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP_EuJz4b4Z5dF1se7VAvRVbYeyeoehjk",
  authDomain: "first-firebase-prj-c41ac.firebaseapp.com",
  projectId: "first-firebase-prj-c41ac",
  storageBucket: "first-firebase-prj-c41ac.firebasestorage.app",
  messagingSenderId: "1096907115442",
  appId: "1:1096907115442:web:74aabbb614f13088fa72ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);