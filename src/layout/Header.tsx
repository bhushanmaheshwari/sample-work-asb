import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/auth-context";
import { Header, HeaderNav, ProfilePicture } from "./Header.styles";

const HeaderComponent: FC = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const profilePicture = authCtx.userProfilePicture;

  const loginHandler = () => {
    authCtx.login();
  };

  return (
    <Header>
      <HeaderNav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cards">Wallet</Link>
        </li>
      </HeaderNav>
      <HeaderNav>
        <li>
          {isLoggedIn ? (
            <ProfilePicture>
              <img
                src={profilePicture}
                alt="Logged in user"
                referrerPolicy="no-referrer"
              ></img>
            </ProfilePicture>
          ) : (
            <button type="button" onClick={loginHandler}>
              Sign in with Google
            </button>
          )}
        </li>
      </HeaderNav>
    </Header>
  );
};

export default HeaderComponent;
