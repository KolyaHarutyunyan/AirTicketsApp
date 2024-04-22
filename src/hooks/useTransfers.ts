import { useContext } from "react";
import { TransfersContext } from "../contexts/transfers.context";

export const useTransfers = () => useContext(TransfersContext);
