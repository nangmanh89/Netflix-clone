import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPFIVsCp79P9mwTggNr5fxRKEuHNJo9T0",
  authDomain: "react-netflix-clone-bb214.firebaseapp.com",
  projectId: "react-netflix-clone-bb214",
  storageBucket: "react-netflix-clone-bb214.appspot.com",
  messagingSenderId: "1072741238940",
  appId: "1:1072741238940:web:a2d3562f41b4cc8eccc559",
  measurementId: "G-7ZKXT88JPX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
