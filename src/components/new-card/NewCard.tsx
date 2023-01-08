import { FC, FormEvent, useContext, useReducer } from "react";
import { useNavigate } from "react-router";
import CreditCardModel from "../../models/credit-card";
import CARDICON, { findCardType } from "../../models/credit-card-type";
import { AppContext } from "../../store/app-context";
import ColorPickerComponent from "../ui/ColorPicker";
import {
  FormContainer,
  FormControl,
  FormActions,
  FormCardIcon,
} from "./NewCard.styles";

enum ActionType {
  CARD_NUMBER = "card_number",
  CVC = "cvc",
  EXPIRY = "expiry",
  CARD_TYPE = "card_type",
  COLOR = "color",
  RESET = "reset",
}

const reducer = (
  state: CreditCardModel,
  action: { type: ActionType; data: string }
) => {
  switch (action.type) {
    case ActionType.CARD_NUMBER:
      return { ...state, cardNumber: action.data };
    case ActionType.CVC:
      return { ...state, cvc: action.data };
    case ActionType.EXPIRY:
      return { ...state, expiry: action.data };
    case ActionType.CARD_TYPE:
      return { ...state, cardType: action.data };
    case ActionType.COLOR:
      return { ...state, color: action.data };
    case ActionType.RESET:
      return new CreditCardModel("", "", "", "", "");
    default:
      return state;
  }
};

const NewCardComponent: FC = () => {
  const appCtx = useContext(AppContext);
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(
    reducer,
    new CreditCardModel("", "", "", "", "")
  );

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(state);
    appCtx.addCreditCard(state);
    navigate("/cards");
  };

  const onCancelClickHandler = () => {
    dispatch({ type: ActionType.RESET, data: "" });
  };

  const onCardNumberChangeHandler = (e: any) => {
    const val = e.target.value;
    const cardType: string = findCardType(val);

    dispatch({ type: ActionType.CARD_TYPE, data: cardType });
    dispatch({ type: ActionType.CARD_NUMBER, data: val });
  };

  const onCvcChangeHandler = (e: any) => {
    const val = e.target.value;
    dispatch({ type: ActionType.CVC, data: val });
  };

  const onExpiryChangeHandler = (e: any) => {
    const val = e.target.value;
    dispatch({ type: ActionType.EXPIRY, data: val });
  };

  const onColorSelectHandler = (color: string) => {
    dispatch({ type: ActionType.COLOR, data: color });
  };

  return (
    <FormContainer>
      <form onSubmit={onSubmitHandler}>
        <FormControl>
          <label>Card Number</label>
          <input
            type="text"
            id="txtCardNumber"
            placeholder="Enter your credit/debit card number"
            onChange={onCardNumberChangeHandler}
            onBlur={onCardNumberChangeHandler}
          />
          {state.cardType && (
            <FormCardIcon>
              <img src={CARDICON[state.cardType]} alt={state.cardType} />
            </FormCardIcon>
          )}
        </FormControl>
        <FormControl>
          <label>CVC</label>
          <input
            type="text"
            id="txtCardNumber"
            placeholder="Enter your 3-digit security code"
            onChange={onCvcChangeHandler}
            onBlur={onCvcChangeHandler}
          />
        </FormControl>
        <FormControl>
          <label>Expiry</label>
          <input
            type="text"
            id="txtCardNumber"
            placeholder="Enter expiry date in MM/YY format"
            onChange={onExpiryChangeHandler}
            onBlur={onExpiryChangeHandler}
          />
        </FormControl>

        <FormControl>
          <label>Pick Your Color</label>
          <ColorPickerComponent onColorSelect={onColorSelectHandler} />
        </FormControl>

        <FormActions>
          <button>Add Credit/Debit Card</button>
          <button onClick={onCancelClickHandler} type="button">
            Cancel
          </button>
        </FormActions>
      </form>
    </FormContainer>
  );
};

export default NewCardComponent;
