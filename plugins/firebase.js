// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuzF8ocSBROC254ycuSxdfoQkOPGqjSWg",
  authDomain: "dalahast.firebaseapp.com",
  projectId: "dalahast",
  storageBucket: "dalahast.appspot.com",
  messagingSenderId: "633882869772",
  appId: "1:633882869772:web:c114620201d4fd3cca2e29",
  measurementId: "G-ZP84X6GL43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics