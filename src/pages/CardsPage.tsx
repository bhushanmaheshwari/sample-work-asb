import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./CardsPage.module.css";

const CardsPage: FC = () => {
  return (
    <div className={classes["cards-container"]}>
      This is cards page. go back to <Link to="/"> Home Page</Link>
    </div>
  );
};

export default CardsPage;
