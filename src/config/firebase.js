import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALh33Rlq_HE5dpbgfGPmgaReOzufDR8gs",
  authDomain: "test-2e208.firebaseapp.com",
  projectId: "test-2e208",
  storageBucket: "test-2e208.appspot.com",
  messagingSenderId: "749220235486",
  appId: "1:749220235486:web:d0133f00805b7bb2dd9a4f",
  measurementId: "G-H7JDR60QV8",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
