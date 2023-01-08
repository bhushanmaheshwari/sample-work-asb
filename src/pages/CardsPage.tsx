import { FC } from "react";
import CardsComponent from "../components/credit-cards/Cards";
import BannerComponent from "./../components/ui/Banner";
import classes from "./CardsPage.module.css";

const CardsPage: FC = () => {
  window.scroll(0, 0);
  const titleText = "Manage your wallet!";
  const subtitleText =
    "By clicking on a card you can archive/activate that card.";
  return (
    <div className={classes["cards-container"]}>
      <BannerComponent title={titleText} subtitle={subtitleText} />
      <CardsComponent />
    </div>
  );
};

export default CardsPage;
