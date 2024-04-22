import { useEffect, useState } from "react";
import { List, Card, Button, Statistic, Typography } from "antd";
import { useCurrency } from "../hooks/useCurrency";
import {
  calculatePriceByCurrency,
  makeTransferFromStop,
  getSymbolFromCurrency,
  formatDate,
} from "../utils";
import TurkishAirlines from "../assets/images/turkish-airlines-old-logo.png";
import DepartureArrivalPlane from "../assets/images/departure-arrival-plane.png";
import type { TTicket } from "../types/ticket.type";

interface ITicketItemProps {
  item: TTicket;
}

export const TicketItem: React.FC<ITicketItemProps> = ({ item }) => {
  const [ticketPrice, setTicketPrice] = useState(item.price);

  const { currency } = useCurrency();

  useEffect(() => {
    const calculatedPrice = calculatePriceByCurrency(item.price, currency);
    setTicketPrice(calculatedPrice);
  }, [currency, item.price]);

  return (
    <List.Item>
      <Card>
        <div className="flex">
          <div className="min-w-[25%] border-r mr-6 pr-5">
            <div className="w-full h-12 mb-2">
              <img
                src={TurkishAirlines}
                alt="turkish-airlines"
                className="object-contain w-full h-full"
              />
            </div>
            <Button
              type="primary"
              size="large"
              className="max-w-44 w-full h-16 bg-orange-1 hover:!bg-orange-2"
            >
              {`Купить за ${Math.round(ticketPrice)} ${getSymbolFromCurrency(
                currency
              )}`}
            </Button>
          </div>
          <div className="flex justify-between items-start w-full">
            <div className="text-left max-w-44 w-full">
              <Statistic value={item.departure_time} />
              <Typography>{`${item.origin}, ${item.origin_name}`}</Typography>
              <Typography className="capitalize opacity-60">
                {formatDate(item.departure_date)}
              </Typography>
            </div>
            <div className="mt-2 opacity-60">
              <Typography>{makeTransferFromStop(item.stops)}</Typography>
              <div className="w-64 h-10">
                <img
                  src={DepartureArrivalPlane}
                  alt="departure-arrival-plane"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-left  min-w-44 flex flex-col items-end">
              <Statistic value={item.arrival_time} />
              <Typography>{`${item.destination}, ${item.destination_name}`}</Typography>
              <Typography className="capitalize opacity-60">
                {formatDate(item.arrival_date)}
              </Typography>
            </div>
          </div>
        </div>
      </Card>
    </List.Item>
  );
};
