// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDfFPUNsWsJXIIROuv1GlwR03E8qEk4gY",
  authDomain: "test-blog-214ed.firebaseapp.com",
  projectId: "test-blog-214ed",
  storageBucket: "test-blog-214ed.appspot.com",
  messagingSenderId: "707260339727",
  appId: "1:707260339727:web:99bd4e8e3b26a07c34357a",
  measurementId: "G-4CWJED4V59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);