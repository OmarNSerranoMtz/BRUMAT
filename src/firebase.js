// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBemyYoYoQx5CGeaIyhsGi4k6wy_W0LYrs",
  authDomain: "brumat-737ab.firebaseapp.com",
  projectId: "brumat-737ab",
  storageBucket: "brumat-737ab.appspot.com",
  messagingSenderId: "926960895904",
  appId: "1:926960895904:web:086c53c40f5a3a6c15c6c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
