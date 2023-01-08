import { createContext, FC, useState } from "react";
import firebaseApp from "../firebase/initialize";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  signOut,
} from "firebase/auth";

type AuthContextObj = {
  userName: string;
  userProfilePicture: string;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextObj>({
  userName: "",
  userProfilePicture: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider: FC<{ children: any }> = (props) => {
  const [userName, setUserName] = useState("");
  const [userProfilePicture, setUserProfilePicture] = useState("");

  const isLoggedIn = !!userName;

  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  const loginHandler = () => {
    signInWithPopup(auth, provider).then((data: UserCredential) => {
      setUserName(data?.user?.displayName || "");
      setUserProfilePicture(data?.user?.photoURL || "");
    });
  };

  const logoutHandler = () => {
    signOut(auth).then(() => {
      setUserName("");
      setUserProfilePicture("");
    });
  };

  const contextValue: AuthContextObj = {
    userName,
    userProfilePicture,
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
