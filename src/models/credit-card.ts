class CreditCardModel {
  id: string;
  cardNumber: string;
  cvc: string;
  expiry: string;
  color: string;
  cardType: string;
  archived: boolean;

  constructor(
    cardNumber: string,
    cvc: string,
    expiry: string,
    cardType: string,
    color: string
  ) {
    this.id = Math.random().toString();
    this.cardNumber = cardNumber;
    this.cvc = cvc;
    this.expiry = expiry;
    this.color = color;
    this.cardType = cardType;
    this.archived = false;
  }
}

export default CreditCardModel;
