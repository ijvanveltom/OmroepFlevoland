import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmbSkqd4JLcXvL0AuNS75IeAVtCwsNH0U",
  authDomain: "task-manager-68c54.firebaseapp.com",
  projectId: "task-manager-68c54",
  storageBucket: "task-manager-68c54.appspot.com",
  messagingSenderId: "979144228712",
  appId: "1:979144228712:web:5748b4ef3eb9567e8fe0dd",
  //measurementId: "G-KK0D6C9B2E"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}