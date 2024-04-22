import { useCallback } from "react";
import { Typography, Radio } from "antd";
import { useCurrency } from "../hooks/useCurrency";
import { ETicketCurrency } from "../enums/ticket.enum";
import type { RadioChangeEvent } from "antd";

export const TicketCurrency = () => {
  const { currency, handleCurrencyChange } = useCurrency();

  const onChange = useCallback(
    (e: RadioChangeEvent) => {
      handleCurrencyChange(e.target.value);
    },
    [handleCurrencyChange]
  );

  return (
    <div className="currency-radio mb-6">
      <Typography className="mb-2 font-medium">ВАЛЮТА</Typography>
      <Radio.Group value={currency} onChange={onChange}>
        <Radio.Button value={ETicketCurrency.RUB}>
          {ETicketCurrency.RUB}
        </Radio.Button>
        <Radio.Button value={ETicketCurrency.USD}>
          {ETicketCurrency.USD}
        </Radio.Button>
        <Radio.Button value={ETicketCurrency.EUR}>
          {ETicketCurrency.EUR}
        </Radio.Button>
      </Radio.Group>
    </div>
  );
};
