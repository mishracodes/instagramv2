// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc42vIA2k2gmy3nOksFSzfMNtkeDsct_E",
  authDomain: "v2instagram.firebaseapp.com",
  projectId: "v2instagram",
  storageBucket: "v2instagram.appspot.com",
  messagingSenderId: "92795804268",
  appId: "1:92795804268:web:d3bcc1c2e0fad236d51649",
  measurementId: "G-CEYEHW3R1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {storage};
export default db;