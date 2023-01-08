import { FC } from "react";
import NewCardComponent from "../components/new-card/NewCard";
import classes from "./HomePage.module.css";

const HomePage: FC = () => {
  return (
    <div className={classes["home-container"]}>
      <NewCardComponent />
    </div>
  );
};

export default HomePage;
