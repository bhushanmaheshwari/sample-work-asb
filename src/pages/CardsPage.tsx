import { FC } from "react";
import CardsComponent from "../components/credit-cards/Cards";
import classes from "./CardsPage.module.css";

const CardsPage: FC = () => {
  return (
    <div className={classes["cards-container"]}>
      <CardsComponent />
    </div>
  );
};

export default CardsPage;
