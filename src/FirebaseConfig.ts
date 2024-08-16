import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXI--fmdXnXm0uaxmGGjx3EE2ic9T7uwY",
  authDomain: "chatter-blog-1-project.firebaseapp.com",
  projectId: "chatter-blog-1-project",
  storageBucket: "chatter-blog-1-project.appspot.com",
  messagingSenderId: "604234446388",
  appId: "1:604234446388:web:ddaae7fefe77b4cdc83c61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
