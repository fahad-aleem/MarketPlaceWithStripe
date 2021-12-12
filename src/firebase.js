import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCXZU9sFSXxBnPnTUU1s51nJrA87ljUQ8k",
  authDomain: "shopeact-web.firebaseapp.com",
  projectId: "shopeact-web",
  storageBucket: "shopeact-web.appspot.com",
  messagingSenderId: "677267299763",
  appId: "1:677267299763:web:980ebd4a4bd85d2d107fc6",
  measurementId: "G-FN30TXN1JT",
});

const db = getFirestore(firebaseApp);

export default db;
