// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA09SW2RFslGpUtgFbVyrYwaFHWWv6nLTk",
  authDomain: "router-firebase-integrat-ddcb6.firebaseapp.com",
  projectId: "router-firebase-integrat-ddcb6",
  storageBucket: "router-firebase-integrat-ddcb6.appspot.com",
  messagingSenderId: "491666207925",
  appId: "1:491666207925:web:7b2c21313b5bff2dbd3afc",
  measurementId: "G-15EE762CXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;