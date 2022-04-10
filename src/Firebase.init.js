// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBVNmjXBLOO7tXcisVutsmldZhipzcjvI",
    authDomain: "simple-authentication-cbe04.firebaseapp.com",
    projectId: "simple-authentication-cbe04",
    storageBucket: "simple-authentication-cbe04.appspot.com",
    messagingSenderId: "850495293789",
    appId: "1:850495293789:web:d0131b1d34722d5a9ac0b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;