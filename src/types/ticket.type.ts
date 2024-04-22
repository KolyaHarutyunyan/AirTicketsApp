import {
  ETicketCarrier,
  ETicketDestination,
  ETicketOrigin,
} from "../enums/ticket.enum";

export type TTicket = {
  origin: ETicketOrigin;
  origin_name: string;
  destination: ETicketDestination;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: ETicketCarrier;
  stops: number;
  price: number;
};
