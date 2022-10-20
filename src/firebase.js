// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBd0lVIYkonps6kzAMvKt_SPLQEySiJOHo",
  authDomain: "login-auth-reactjs-5ac2f.firebaseapp.com",
  projectId: "login-auth-reactjs-5ac2f",
  storageBucket: "login-auth-reactjs-5ac2f.appspot.com",
  messagingSenderId: "343038306596",
  appId: "1:343038306596:web:77fa46c13654ccc82d2bb1",
  measurementId: "G-V9KBZ0JVQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
