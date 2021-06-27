import "./App.css";
import { auth } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// import components
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">{user ? <ChatRoom /> : <SignIn />}</header>
    </div>
  );
}

export default App;
