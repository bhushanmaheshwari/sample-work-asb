import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./HomePage.module.css";

const HomePage: FC = () => {
  return (
    <div className={classes["home-container"]}>
      This is home page. See <Link to="/cards"> cards Page</Link>
    </div>
  );
};

export default HomePage;
