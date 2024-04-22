import React, { useState } from "react";
import { ETicketCurrency } from "../enums/ticket.enum";
import type { PropsWithChildren } from "react";

interface ICurrencyContext {
  currency: ETicketCurrency;
  handleCurrencyChange: (arg: ETicketCurrency) => void;
}

export const CurrencyContext = React.createContext({} as ICurrencyContext);

const CurrencyContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currency, setCurrency] = useState(ETicketCurrency.RUB);

  const handleCurrencyChange = (selectedCurrency: ETicketCurrency) =>
    setCurrency(selectedCurrency);

  return (
    <CurrencyContext.Provider value={{ currency, handleCurrencyChange }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
