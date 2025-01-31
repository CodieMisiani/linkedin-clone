// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);