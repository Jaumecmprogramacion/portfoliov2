import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCScirzn_prykHIqOIVLqykFHebPS6YlQE",
    authDomain: "portfolio-eceda.firebaseapp.com",
    projectId: "portfolio-eceda",
    storageBucket: "portfolio-eceda.firebasestorage.app",
    messagingSenderId: "212091992598",
    appId: "1:212091992598:web:89b505905ba97222381337",
    measurementId: "G-KVVJL95G59"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };