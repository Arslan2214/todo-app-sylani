// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";    // App Intializing
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";    // Auth Import
import { getFirestore } from "firebase/firestore";    // Firestore Import

// ------------- Auth Starts --------------
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD221u9S2Anac62A88POEBW_AYaCHy8Krg",
  authDomain: "todo-app-d3ef1.firebaseapp.com",
  projectId: "todo-app-d3ef1",
  storageBucket: "todo-app-d3ef1.appspot.com",
  messagingSenderId: "226193734928",
  appId: "1:226193734928:web:074ef08e587ccd1a4bf995",
  measurementId: "G-2KBRQR09BH",
};
// ------------- Auth Ends --------------

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Exports
export const db = getFirestore(app);
export const auth = getAuth(app);