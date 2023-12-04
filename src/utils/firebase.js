// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbdmNniCcBN-DpEy7YODaX6dwylL4UkIA",
  authDomain: "netflix-gpt-eb903.firebaseapp.com",
  projectId: "netflix-gpt-eb903",
  storageBucket: "netflix-gpt-eb903.appspot.com",
  messagingSenderId: "234769585552",
  appId: "1:234769585552:web:9b55ab7056179d759d0f15",
  measurementId: "G-93DKFQ5YTV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
