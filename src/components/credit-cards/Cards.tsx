import { FC } from "react";
import CardComponent from "./Card";
import { Cards } from "./Cards.styles";

const CardsComponent: FC = () => {
  const temp_cards = [1, 1, 1, 1];
  return (
    <Cards>
      {temp_cards.map((card) => {
        return <CardComponent />;
      })}
    </Cards>
  );
};

export default CardsComponent;
