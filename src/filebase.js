// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfD-7EFqt7Cu5Kw9K0HQh2ZP0OTXyUTYs",
  authDomain: "blog-9116c.firebaseapp.com",
  projectId: "blog-9116c",
  storageBucket: "blog-9116c.appspot.com",
  messagingSenderId: "107446659515",
  appId: "1:107446659515:web:d964705707e0b90cf3fc9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
