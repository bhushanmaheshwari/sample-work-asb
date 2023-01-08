import { FC, useContext } from "react";
import CreditCardModel from "../../models/credit-card";
import CARDICON from "../../models/credit-card-type";
import { AuthContext } from "../../store/auth-context";
import {
  Card,
  CardHeader,
  CardIcon,
  CardTitle,
  CardBody,
  CardFooter,
  Archived,
} from "./Card.styles";

const CardComponent: FC<{
  item: CreditCardModel;
  onToggleCreditCard: () => void;
}> = (props) => {
  const authCtx = useContext(AuthContext);

  const username = authCtx.userName;

  return (
    <Card
      colorCode={props.item.color}
      archived={props.item.archived}
      onClick={props.onToggleCreditCard}
    >
      <CardHeader>
        <CardIcon>
          <img src={CARDICON[props.item.cardType]} alt={props.item.cardType} />
        </CardIcon>
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
      <CardFooter>
        <div>{username}</div>
        <div>{props.item.archived && <Archived>Archived</Archived>}</div>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
