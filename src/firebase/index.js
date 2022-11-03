// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJqW4bv02V1W15cexlyOTdlOf3gnJ5OlQ",
  authDomain: "vue3-firebase-auth-ee6fe.firebaseapp.com",
  projectId: "vue3-firebase-auth-ee6fe",
  storageBucket: "vue3-firebase-auth-ee6fe.appspot.com",
  messagingSenderId: "969195197340",
  appId: "1:969195197340:web:8cc02f9ad7812f7d732e59",
  measurementId: "G-68JY4YY8RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
