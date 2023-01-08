import { createContext, FC, useState } from "react";
import CreditCardModel from "../models/credit-card";

type AppContextObject = {
  items: CreditCardModel[];
  addCreditCard: (item: CreditCardModel) => void;
};

export const AppContext = createContext<AppContextObject>({
  items: [],
  addCreditCard: (item: CreditCardModel) => {},
});

const AppContextProvider: FC<{ children: any }> = (props) => {
  const [creditCards, setCreditCards] = useState<CreditCardModel[]>([]);

  const addCreditCardHandler = (item: CreditCardModel) => {
    setCreditCards((prevCreditCards) => prevCreditCards.concat(item));
  };

  const contextValue: AppContextObject = {
    items: creditCards,
    addCreditCard: addCreditCardHandler,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
