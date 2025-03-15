// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuetQmXE5FpWmIN7ct0xi-AhbrPQIfzdc",
  authDomain: "lumora-web-temp.firebaseapp.com",
  projectId: "lumora-web-temp",
  storageBucket: "lumora-web-temp.firebasestorage.app",
  messagingSenderId: "258257083678",
  appId: "1:258257083678:web:4f94aad4b11f46d3d9bd0f",
  measurementId: "G-SFGERFMRG4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const functions = getFunctions(app);
