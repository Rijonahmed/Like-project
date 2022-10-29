// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0ouO3nYbdvE_fV-D11xPPH0St96gjTAo",
  authDomain: "like-project-a8b35.firebaseapp.com",
  projectId: "like-project-a8b35",
  storageBucket: "like-project-a8b35.appspot.com",
  messagingSenderId: "152571149047",
  appId: "1:152571149047:web:25791210cac2a0563ef1f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;