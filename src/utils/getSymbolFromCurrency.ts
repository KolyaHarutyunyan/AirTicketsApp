import { ETicketCurrency } from "../enums/ticket.enum";

export const getSymbolFromCurrency = (currency: ETicketCurrency) => {
  switch (currency) {
    case ETicketCurrency.RUB:
      return "₽";
    case ETicketCurrency.USD:
      return "$";
    case ETicketCurrency.EUR:
      return "€";
    default:
      return "";
  }
};
