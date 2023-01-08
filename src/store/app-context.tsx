import { createContext, FC, useState } from "react";
import CreditCardModel from "../models/credit-card";

type AppContextObject = {
  items: CreditCardModel[];
  addCreditCard: (item: CreditCardModel) => void;
  toggleCreditCard: (id: string) => void;
};

export const AppContext = createContext<AppContextObject>({
  items: [],
  addCreditCard: (item: CreditCardModel) => {},
  toggleCreditCard: (id: string) => {},
});

const AppContextProvider: FC<{ children: any }> = (props) => {
  const [creditCards, setCreditCards] = useState<CreditCardModel[]>([]);

  const addCreditCardHandler = (item: CreditCardModel) => {
    setCreditCards((prevCreditCards) => prevCreditCards.concat(item));
  };

  const toggleCreditCardHandler = (id: string) => {
    setCreditCards((prevCreditCards) => {
      const newCards = prevCreditCards.map((card) => {
        const newCard = Object.assign({}, card);
        if (newCard.id === id) {
          newCard.archived = !newCard.archived;
        }
        return newCard;
      });
      return newCards;
    });
  };

  const contextValue: AppContextObject = {
    items: creditCards,
    addCreditCard: addCreditCardHandler,
    toggleCreditCard: toggleCreditCardHandler,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
