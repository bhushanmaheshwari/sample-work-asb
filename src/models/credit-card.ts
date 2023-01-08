class CreditCardModel {
  id: string;
  cardNumber: string;
  cvc: string;
  expiry: string;
  color: string; // later
  cardType: string; // later
  archived: boolean; //later

  constructor(
    cardNumber: string,
    cvc: string,
    expiry: string,
    color?: string,
    cardType?: string
  ) {
    this.id = Math.random.toString();
    this.cardNumber = cardNumber;
    this.cvc = cvc;
    this.expiry = expiry;
    this.color = color || "#ccc";
    this.cardType = cardType || "VISA";
    this.archived = false;
  }
}

export default CreditCardModel;
