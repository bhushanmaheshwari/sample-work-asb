import { FC, FormEvent } from "react";
import { FormContainer, FormControl, FormActions } from "./NewCard.styles";

const NewCardComponent: FC = () => {
  const onSubmitHandler = (e: FormEvent) => {};

  const onCardNumberChangeHandler = (e: any) => {};
  const onCvcChangeHandler = (e: any) => {};
  const onExpiryChangeHandler = (e: any) => {};

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

        <FormActions>
          <button>Add Credit/Debit Card</button>
          <button type="button">Cancel</button>
        </FormActions>
      </form>
    </FormContainer>
  );
};

export default NewCardComponent;
