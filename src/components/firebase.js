// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm5rw3p_le0iklQb2VXdTL1IhFZ_8TqgA",
  authDomain: "omroepflevoland2.firebaseapp.com",
  projectId: "omroepflevoland2",
  storageBucket: "omroepflevoland2.appspot.com",
  messagingSenderId: "806396406155",
  appId: "1:806396406155:web:bb7902126232368deae78e",
  measurementId: "G-QK4WSHCWH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}