// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA48PXDH2OadowgqGN9X9wq-5G5FgiHzB8",
  authDomain: "fruits-warehouse-client-site.firebaseapp.com",
  projectId: "fruits-warehouse-client-site",
  storageBucket: "fruits-warehouse-client-site.appspot.com",
  messagingSenderId: "416865617613",
  appId: "1:416865617613:web:4f580e70bdf01180ad4b84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;