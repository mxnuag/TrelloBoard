import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
