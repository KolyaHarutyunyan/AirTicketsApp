import { useCallback } from "react";
import { Typography, Checkbox, Button } from "antd";
import { useTransfers } from "../hooks/useTransfers";
import { ETicketTransfers } from "../enums/ticket.enum";
import type { CheckboxProps } from "antd";

const plainOptions = [
  ETicketTransfers.NO_TRANSFERS,
  ETicketTransfers.ONE_TRANSFER,
  ETicketTransfers.TWO_TRANSFERS,
  ETicketTransfers.THREE_TRANSFERS,
];

export const TicketTransfers = () => {
  const { transfers, handleTransfersChange } = useTransfers();

  const checkAll = plainOptions.length === transfers.length;

  const onChange = useCallback(
    (checkedTransfers: ETicketTransfers[]) => {
      handleTransfersChange(checkedTransfers);
    },
    [handleTransfersChange]
  );

  const onCheckAllChange: CheckboxProps["onChange"] = useCallback(
    (e: { target: { checked: boolean } }) => {
      handleTransfersChange(e.target.checked ? plainOptions : []);
    },
    [handleTransfersChange]
  );

  return (
    <>
      <Typography className="mb-2 font-medium">КОЛИЧЕСТВО ПЕРЕСАДОК</Typography>
      <div className="flex flex-col">
        <Checkbox
          onChange={onCheckAllChange}
          checked={checkAll}
          className="hover:bg-blue-2 p-2 rounded-md"
        >
          Все
        </Checkbox>
        <Checkbox.Group
          className="flex-col"
          onChange={onChange}
          value={transfers}
        >
          {plainOptions.map((option) => (
            <div
              key={option}
              className="group flex items-center hover:bg-blue-2 rounded-md px-2"
            >
              <Checkbox value={option} className="w-full py-2">
                {option}
              </Checkbox>
              <Button
                className="opacity-0 group-hover:opacity-100 border-none bg-[inherit] text-blue-1 text-xs"
                onClick={() => handleTransfersChange([option])}
              >
                ТОЛЬКО
              </Button>
            </div>
          ))}
        </Checkbox.Group>
      </div>
    </>
  );
};
