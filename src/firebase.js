import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Firebase configuration (replace with your own Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyB-nWV7lVglljmOKUhP0DCsQTMMXwCu-QM",
  authDomain: "linked-in-clone-98073.firebaseapp.com",
  projectId: "linked-in-clone-98073",
  storageBucket: "linked-in-clone-98073.firebasestorage.app",
  messagingSenderId: "554881334520",
  appId: "1:554881334520:web:b7854ec5eea7e48daa8f0d",
  measurementId: "G-R34XLR3VSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export the services for use in other files
export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
