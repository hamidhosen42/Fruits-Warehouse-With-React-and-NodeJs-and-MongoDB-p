// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPG8wV8pdbKbzpLH1Qxn5oCDsWE5fwbD0",
  authDomain: "genius-car-service-client-jwt.firebaseapp.com",
  projectId: "genius-car-service-client-jwt",
  storageBucket: "genius-car-service-client-jwt.appspot.com",
  messagingSenderId: "375649583084",
  appId: "1:375649583084:web:26bb054495a7692e118ac9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
