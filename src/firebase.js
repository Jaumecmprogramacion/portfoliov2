// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCScirzn_prykHIqOIVLqykFHebPS6YlQE",
  authDomain: "portfolio-eceda.firebaseapp.com",
  projectId: "portfolio-eceda",
  storageBucket: "portfolio-eceda.appspot.com",
  messagingSenderId: "212091992598",
  appId: "1:212091992598:web:89b505905ba97222381337",
  measurementId: "G-KVVJL95G59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export db, collection, and addDoc
export { db, collection, addDoc };
