// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATYtLCEhXj1is9wT3vIcRjfuPidoEy54I",
  authDomain: "sip-station.firebaseapp.com",
  projectId: "sip-station",
  storageBucket: "sip-station.appspot.com",
  messagingSenderId: "257321904989",
  appId: "1:257321904989:web:6830428b3b8a98940716b4",
  measurementId: "G-0FB0J6XEJF",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);


const providerGoogle = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, providerGoogle)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      const uid = result.user.uid;

      const userRef = doc(db, "users", uid)
      const payload = {
        name: name,
        email: email,
        profilePic: profilePic
      };
      setDoc(userRef, payload);

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => console.log(error));
};
