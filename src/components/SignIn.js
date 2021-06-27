import firebase from "firebase";
import { auth } from "../config/firebase";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}> Login In </button>;
};

export default SignIn;
