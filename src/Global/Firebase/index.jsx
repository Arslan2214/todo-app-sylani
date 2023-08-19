// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
