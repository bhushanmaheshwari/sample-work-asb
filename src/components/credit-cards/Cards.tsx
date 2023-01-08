import { FC, useContext } from "react";
import CreditCardModel from "../../models/credit-card";
import { AppContext } from "../../store/app-context";
import CardComponent from "./Card";
import { Cards } from "./Cards.styles";

const CardsComponent: FC = () => {
  const appCtx = useContext(AppContext);

  return (
    <Cards>
      {appCtx.items.map((card: CreditCardModel) => {
        return <CardComponent item={card} key={card.id} />;
      })}
    </Cards>
  );
};

export default CardsComponent;
