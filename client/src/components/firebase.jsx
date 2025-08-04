// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASF_jhFMA11xL8Wnln7y0c_3dSGjUzM0g",
  authDomain: "login-509c5.firebaseapp.com",
  projectId: "login-509c5",
  storageBucket: "login-509c5.firebasestorage.app",
  messagingSenderId: "865666639334",
  appId: "1:865666639334:web:d613647c31526d0355e227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;