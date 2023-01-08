import { FC } from "react";
import CreditCardModel from "../../models/credit-card";
import {
  Card,
  CardHeader,
  CardIcon,
  CardTitle,
  CardBody,
  CardFooter,
} from "./Card.styles";

const CardComponent: FC<{ item: CreditCardModel }> = (props) => {
  return (
    <Card>
      <CardHeader>
        <CardIcon>{props.item.cardType}</CardIcon>
        <CardTitle id={`title-${props.item.id}`}></CardTitle>
      </CardHeader>
      <CardBody>
        <div>
          Expiry : <b>{props.item.expiry}</b>
        </div>
        <div>
          CVC : <b>{props.item.cvc}</b>
        </div>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default CardComponent;
