import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "REAL_KEY",
  authDomain: "REAL_PROJECT.firebaseapp.com",
  projectId: "REAL_PROJECT_ID",
  storageBucket: "REAL_PROJECT.appspot.com",
  messagingSenderId: "REAL_ID",
  appId: "REAL_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);