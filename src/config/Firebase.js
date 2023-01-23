import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBQf0F-8NRqzg2oab1FMvmK8Bn-xc5JjAE",
  authDomain: "money-rho.firebaseapp.com",
  projectId: "money-rho",
  storageBucket: "money-rho.appspot.com",
  messagingSenderId: "938660963697",
  appId: "1:938660963697:web:e5fa66340855ca0f9c82d0",
  measurementId: "G-69T8P0P0VD",
  databaseURL:
    "https://money-rho-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);
// export const databaseRef =
