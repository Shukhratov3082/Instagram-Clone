import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAbtvxhDvrZpv1hocFYu731elarHKDdZcE",
  authDomain: "instagram-clone-2f079.firebaseapp.com",
  projectId: "instagram-clone-2f079",
  storageBucket: "instagram-clone-2f079.appspot.com",
  messagingSenderId: "108141348931",
  appId: "1:108141348931:web:3428fdf884a171c439ecf6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
