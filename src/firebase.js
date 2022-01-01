// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZXQdZqtFZHypjMBNEz35CupjlS1AzcJI",
  authDomain: "react-firebase-app-bd90c.firebaseapp.com",
  projectId: "react-firebase-app-bd90c",
  storageBucket: "react-firebase-app-bd90c.appspot.com",
  messagingSenderId: "621208738422",
  appId: "1:621208738422:web:1e415a058eaadfa7d01d57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
