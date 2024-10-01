// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfLMKwE54Sea5JRq-qTGBfx2WXSuqQHyA",
  authDomain: "job-task-d6aa7.firebaseapp.com",
  projectId: "job-task-d6aa7",
  storageBucket: "job-task-d6aa7.appspot.com",
  messagingSenderId: "844317908081",
  appId: "1:844317908081:web:a9b7981b6bc66d41504fd0",
  measurementId: "G-W8KRES2JJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);

// Initialize Google and Facebook providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, firestore };
