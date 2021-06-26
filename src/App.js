import './App.css';
import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

import {useAuthState} from "react-firebase-hooks/auth"
import {useCollectionData} from "react-firebase-hooks/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyALh33Rlq_HE5dpbgfGPmgaReOzufDR8gs",
  authDomain: "test-2e208.firebaseapp.com",
  projectId: "test-2e208",
  storageBucket: "test-2e208.appspot.com",
  messagingSenderId: "749220235486",
  appId: "1:749220235486:web:d0133f00805b7bb2dd9a4f",
  measurementId: "G-H7JDR60QV8"
};

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();


const SignIn = ()=>{

  const signInWithGoogle =  ()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle} > Login In </button>
  )

}

const signOut = ()=>{
  
  const logout = ()=>{
    
  }

  return (
    <button onClick={logout} > Logout.</button>
  )

}

const ChatRoom = ()=>{
  return (
    <div> chat room</div>
  )

}


function App() {

const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        {user ?  <ChatRoom/> : <SignIn /> } 
      </header>
    </div>
  );
}

export default App;
