// copied
const regexPattern: any = {
  MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
  VISA: /^4[0-9]{2,}$/,
  AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
  DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
  DINERS_CLUB: /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/,
  JCB: /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/,
};

//copied
const findCardType = (cardNumber: string): string => {
  for (const card in regexPattern) {
    if (cardNumber.replace(/[^\d]/g, "").match(regexPattern[card])) return card;
  }
  return "";
};

//copied
const validateCardNumber = (cardNumber: string): boolean => {
  for (const card in regexPattern) {
    if (cardNumber.replace(/[^\d]/g, "").match(regexPattern[card])) {
      if (cardNumber) {
        return cardNumber &&
          /^[1-6]{1}[0-9]{14,15}$/i.test(
            cardNumber.replace(/[^\d]/g, "").trim()
          )
          ? true
          : false;
      }
    }
  }
  return false;
};

const validateCvc = (cvc: string): boolean => {
  if (isNaN(Number(cvc))) return false;
  return cvc && cvc.length === 3 ? true : false;
};

const validateExpiry = (expiry: string): boolean => {
  //copied
  const genericRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/i;

  if (genericRegex.test(expiry.trim())) {
    const enteredExpiryArr = expiry.split("/");
    if (enteredExpiryArr.length !== 2) return false;

    const year = Number("20" + enteredExpiryArr[1]);
    const month = Number(enteredExpiryArr[0]);
    if (isNaN(year) || isNaN(month)) return false;

    const enteredExpiryDate = new Date(year, month, 0);
    if (isNaN(enteredExpiryDate.getTime())) return false;

    if (enteredExpiryDate > new Date()) return true;
  }

  return false;
};

export { findCardType, validateCardNumber, validateCvc, validateExpiry };
