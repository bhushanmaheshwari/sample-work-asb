import { FC, useContext } from "react";
import NewCardComponent from "../components/new-card/NewCard";
import { AppContext } from "../store/app-context";
import { AuthContext } from "../store/auth-context";
import BannerComponent from "./../components/ui/Banner";
import classes from "./HomePage.module.css";

const HomePage: FC = () => {
  window.scroll(0, 0);

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const appCtx = useContext(AppContext);
  const cardCount = appCtx.items.length;

  const titleText = `Welcome, ${isLoggedIn ? authCtx.userName : "Guest"}!`;
  const subtitleText =
    cardCount > 0
      ? `You have added ${cardCount} card${
          cardCount > 1 ? "s" : ""
        } to your wallet, and you can add as many!`
      : "Simply start adding cards to your wallet.";
  return (
    <div className={classes["home-container"]}>
      <BannerComponent title={titleText} subtitle={subtitleText} />
      <NewCardComponent />
    </div>
  );
};

export default HomePage;
