// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5vMT8MtXg0QLPQ_Ih-e4-uyq3oqM9C08",
  authDomain: "new-projects-d729d.firebaseapp.com",
  projectId: "new-projects-d729d",
  storageBucket: "new-projects-d729d.appspot.com",
  messagingSenderId: "522779230187",
  appId: "1:522779230187:web:e88cc87721c4d080efa3ae"
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
