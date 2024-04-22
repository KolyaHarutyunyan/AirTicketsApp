import React, { useState } from "react";
import { ETicketTransfers } from "../enums/ticket.enum";
import type { PropsWithChildren } from "react";

interface ITransfersContext {
  transfers: ETicketTransfers[];
  handleTransfersChange: (arg: ETicketTransfers[]) => void;
}

export const TransfersContext = React.createContext({} as ITransfersContext);

const defaultCheckedTransfers = [
  ETicketTransfers.NO_TRANSFERS,
  ETicketTransfers.ONE_TRANSFER,
  ETicketTransfers.TWO_TRANSFERS,
];

const TransfersContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [transfers, setTransfers] = useState<ETicketTransfers[]>(
    defaultCheckedTransfers
  );

  const handleTransfersChange = (checkedTransfers: ETicketTransfers[]) =>
    setTransfers(checkedTransfers);

  return (
    <TransfersContext.Provider value={{ transfers, handleTransfersChange }}>
      {children}
    </TransfersContext.Provider>
  );
};

export default TransfersContextProvider;
