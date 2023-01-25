import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "quizapp-a275d.firebaseapp.com",
  projectId: "quizapp-a275d",
  storageBucket: "quizapp-a275d.appspot.com",
  messagingSenderId: "930362720150",
  appId: "1:930362720150:web:c5b952c8af60bf01a3a7b7",
  measurementId: "G-2DN34H8HQC",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
};
