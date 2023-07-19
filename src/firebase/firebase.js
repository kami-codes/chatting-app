import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDX8XJe04Zehx-5hSZZLubJ0PA7z5UpgXg",
  authDomain: "chating-app-25af0.firebaseapp.com",
  projectId: "chating-app-25af0",
  storageBucket: "chating-app-25af0.appspot.com",
  messagingSenderId: "343373483395",
  appId: "1:343373483395:web:435edcd230fedb3833bab6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();