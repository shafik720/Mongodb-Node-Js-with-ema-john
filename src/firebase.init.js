// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1oDyTd_qApZscieN3gmE4fTxn6As8ONA",
  authDomain: "fir-with-ema-john-pr-1.firebaseapp.com",
  projectId: "fir-with-ema-john-pr-1",
  storageBucket: "fir-with-ema-john-pr-1.appspot.com",
  messagingSenderId: "833723276367",
  appId: "1:833723276367:web:dcdb235003563c568c5e3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;