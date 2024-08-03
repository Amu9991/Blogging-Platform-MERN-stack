// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogsite-master.firebaseapp.com",
  projectId: "blogsite-master",
  storageBucket: "blogsite-master.appspot.com",
  messagingSenderId: "586402403613",
  appId: "1:586402403613:web:366ae8bb4b969e139efdf4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
