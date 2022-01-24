// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyATYtLCEhXj1is9wT3vIcRjfuPidoEy54I",
  authDomain: "sip-station.firebaseapp.com",
  projectId: "sip-station",
  storageBucket: "sip-station.appspot.com",
  messagingSenderId: "257321904989",
  appId: "1:257321904989:web:6830428b3b8a98940716b4",
  measurementId: "G-0FB0J6XEJF"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)