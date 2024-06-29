// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA_GOG6cgLpjOAR9W9cglf5HChulSHMek",
  authDomain: "cloudent-81740.firebaseapp.com",
  projectId: "cloudent-81740",
  storageBucket: "cloudent-81740.appspot.com",
  messagingSenderId: "534171088458",
  appId: "1:534171088458:web:dcf8a214bacd416a0098b3",
  measurementId: "G-DLBYTKGXH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);