// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp, } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Firestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_Eub_0yK8fx_ZuWvLTFu6S2bgVoYeB7M",
  authDomain: "mern-4dbe9.firebaseapp.com",
  projectId: "mern-4dbe9",
  storageBucket: "mern-4dbe9.appspot.com",
  messagingSenderId: "455005923505",
  appId: "1:455005923505:web:e91b064422d11f2222da90"
  
  
};

// Initialize Firebase
const app =  !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage,firebaseConfig};