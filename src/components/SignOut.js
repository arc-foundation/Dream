import { auth } from "../config/firebase";

const SignOut = () => {
  const logout = () => {
    auth.signOut();
  };

  return <button onClick={logout}> Logout</button>;
};

export default SignOut;
