import { Layout, Card } from "antd";
import { TicketCurrency } from "../TicketCurrency";
import { TicketTransfers } from "../TicketTransfers";

export const AppSider = () => {
  return (
    <Layout.Sider width="25%" className="!bg-primary text-secondary mr-4">
      <Card className="w-full sticky top-4">
        <TicketCurrency />
        <TicketTransfers />
      </Card>
    </Layout.Sider>
  );
};
