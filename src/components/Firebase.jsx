// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEL1kgRmIA-KQ_y1PZYGkaP2Kl6brZJpM",
  authDomain: "trelloboard-abebb.firebaseapp.com",
  projectId: "trelloboard-abebb",
  storageBucket: "trelloboard-abebb.appspot.com",
  messagingSenderId: "681139437303",
  appId: "1:681139437303:web:11ace2b4d7006184bb5df2",
  measurementId: "G-L4VFKV8KHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider };
