import { FC, useContext } from "react";
import CreditCardModel from "../../models/credit-card";
import { AppContext } from "../../store/app-context";
import CardComponent from "./Card";
import { Cards } from "./Cards.styles";

const CardsComponent: FC = () => {
  const appCtx = useContext(AppContext);

  const onToggleCreditCardHandler = (id: string) => {
    appCtx.toggleCreditCard(id);
  };

  return (
    <Cards>
      {appCtx.items.map((card: CreditCardModel) => {
        return (
          <CardComponent
            onToggleCreditCard={onToggleCreditCardHandler.bind(null, card.id)}
            item={card}
            key={card.id}
          />
        );
      })}
    </Cards>
  );
};

export default CardsComponent;
