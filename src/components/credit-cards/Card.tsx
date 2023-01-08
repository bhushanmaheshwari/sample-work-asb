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

const CardComponent: FC<{
  item: CreditCardModel;
  onToggleCreditCard: () => void;
}> = (props) => {
  return (
    <Card onClick={props.onToggleCreditCard}>
      <CardHeader>
        <CardIcon>{props.item.cardType}</CardIcon>
        <CardTitle id={`title-${props.item.id}`}>
          {props.item.cardNumber}
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div>
          Expiry : <b>{props.item.expiry}</b>
        </div>
        <div>
          CVC : <b>{props.item.cvc}</b>
        </div>
      </CardBody>
      <CardFooter>{props.item.archived ? "Archived" : "Active"}</CardFooter>
    </Card>
  );
};

export default CardComponent;
