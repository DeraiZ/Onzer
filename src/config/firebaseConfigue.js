import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEkIFh1palr2irEk-XFUxN3pOEwxQWnSY",
    authDomain: "onzer-385aa.firebaseapp.com",
    projectId: "onzer-385aa",
    storageBucket: "onzer-385aa.appspot.com",
    messagingSenderId: "773339044034",
    appId: "1:773339044034:web:3c458e6c561eebe0ee435b",
    measurementId: "G-28QMRT7FQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)