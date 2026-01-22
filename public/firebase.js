// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnOSzI7H1G2l4onrPv_v95qg5bJ7PzA_Q",
  authDomain: "bill-booking-slot.firebaseapp.com",
  projectId: "bill-booking-slot",
  storageBucket: "bill-booking-slot.firebasestorage.app",
  messagingSenderId: "527942471394",
  appId: "1:527942471394:web:0b17b9387df6111f8c98bb",
  measurementId: "G-3GPXKP5E0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);