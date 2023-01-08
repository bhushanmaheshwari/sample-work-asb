import { FC, Fragment, useContext } from "react";
import { useNavigate } from "react-router";
import CreditCardModel from "../../models/credit-card";
import { AppContext } from "../../store/app-context";
import CardComponent from "./Card";
import { Cards, AddCard } from "./Cards.styles";

const CardsComponent: FC = () => {
  const appCtx = useContext(AppContext);
  const navigate = useNavigate();

  const onToggleCreditCardHandler = (id: string) => {
    appCtx.toggleCreditCard(id);
  };

  const addCardHandler = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <Cards>
        {appCtx.items
          .sort((x, y) => Number(x.archived) - Number(y.archived))
          .map((card: CreditCardModel) => {
            return (
              <CardComponent
                onToggleCreditCard={onToggleCreditCardHandler.bind(
                  null,
                  card.id
                )}
                item={card}
                key={card.id}
              />
            );
          })}
      </Cards>
      <AddCard onClick={addCardHandler}>Add credit/debit card</AddCard>
    </Fragment>
  );
};

export default CardsComponent;
