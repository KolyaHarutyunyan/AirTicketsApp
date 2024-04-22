import { ETicketTransfers } from "../enums/ticket.enum";

export const makeTransferFromStop = (stop: number): ETicketTransfers => {
  switch (stop) {
    case 0:
      return ETicketTransfers.NO_TRANSFERS;
    case 1:
      return ETicketTransfers.ONE_TRANSFER;
    case 2:
      return ETicketTransfers.TWO_TRANSFERS;
    case 3:
      return ETicketTransfers.THREE_TRANSFERS;
    default:
      return ETicketTransfers.NA;
  }
};
