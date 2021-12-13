import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAXaEj4cL3OliplsYazVyC0sKhlwNBggr8",
  authDomain: "mobilesarena02.firebaseapp.com",
  projectId: "mobilesarena02",
  storageBucket: "mobilesarena02.appspot.com",
  messagingSenderId: "368679191695",
  appId: "1:368679191695:web:443a589b6a2f09af4b1cfa",
  measurementId: "G-P4K1PFS2T5",
});

const db = getFirestore(firebaseApp);

export default db;
export { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
