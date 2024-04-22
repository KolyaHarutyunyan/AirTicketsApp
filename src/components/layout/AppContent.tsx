import { useEffect, useMemo, useState } from "react";
import { Layout, List, Spin } from "antd";
import { TicketItem } from "../TicketItem";
import { useTransfers } from "../../hooks/useTransfers";
import { fakeFetchTickets } from "../../api";
import { makeTransferFromStop } from "../../utils";
import type { TTicket } from "../../types/ticket.type";

export const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState<TTicket[]>([]);

  const { transfers } = useTransfers();

  useEffect(() => {
    (async function preload() {
      setLoading(true);
      const tickets = await fakeFetchTickets();
      setTickets(tickets as TTicket[]);
      setLoading(false);
    })();
  }, []);

  const ticketsDataSource = useMemo(
    () =>
      tickets
        .sort((ta, tb) => ta.price - tb.price)
        .filter((t) => transfers.includes(makeTransferFromStop(t.stops))),
    [tickets, transfers]
  );

  if (loading) {
    return <Spin fullscreen />;
  }

  return (
    <Layout.Content className="text-center text-secondary bg-primary">
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={ticketsDataSource}
        renderItem={(item) => <TicketItem item={item} />}
        locale={{ emptyText: "Билеты не найдены" }}
      />
    </Layout.Content>
  );
};
