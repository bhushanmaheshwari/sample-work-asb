// copied

import VISA_ICON from "./../assets/images/visa.png";
import AMERICAN_EXPRESS_ICON from "./../assets/images/amex.png";
import MASTER_CARD_ICON from "./../assets/images/masterCard.png";
import DISCOVER_ICON from "./../assets/images/discover.png";
import DINERS_CLUB_ICON from "./../assets/images/diners.png";
import JCB_ICON from "./../assets/images/JCB.png";

const CARDICON: any = {
  VISA: VISA_ICON,
  MASTERCARD: MASTER_CARD_ICON,
  DISCOVER: DISCOVER_ICON,
  AMERICAN_EXPRESS: AMERICAN_EXPRESS_ICON,
  DINERS_CLUB: DINERS_CLUB_ICON,
  JCB: JCB_ICON,
};

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
export const findCardType = (cardNumber: string): string => {
  for (const card in regexPattern) {
    if (cardNumber.replace(/[^\d]/g, "").match(regexPattern[card])) return card;
  }
  return "";
};

export default CARDICON;
