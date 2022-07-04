import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA_0r6dZmekNqOQwY1DcwytwSfaTw-xO8",
  authDomain: "coin-footprint.firebaseapp.com",
  projectId: "coin-footprint",
  storageBucket: "coin-footprint.appspot.com",
  messagingSenderId: "686778146371",
  appId: "1:686778146371:web:45b443c763722d2b3a7ef6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      window.alert(error);
    });
};
