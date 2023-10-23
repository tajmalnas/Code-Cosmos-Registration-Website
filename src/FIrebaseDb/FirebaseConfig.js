// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHeZmEaHN85TKrYvBJ6nuy6qnRSIZQ1Kg",
  authDomain: "codecsosmos.firebaseapp.com",
  projectId: "codecsosmos",
  storageBucket: "codecsosmos.appspot.com",
  messagingSenderId: "927377908343",
  appId: "1:927377908343:web:0b0704a0b6aaa7faf7dc72"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);