import { Layout, Typography } from "antd";
import { AppSider } from "./AppSider";
import { AppContent } from "./AppContent";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export const AppMain = () => {
  const windowWidth = useWindowWidth();

  return (
    <Layout className="px-20 min-h-[calc(100vh-128px)] bg-primary">
      {windowWidth >= 1280 ? (
        <>
          <AppSider />
          <AppContent />
        </>
      ) : (
        <Typography className="text-center text-lg">
          Сайт оптимизирован для экранов шире 1280 пикселей. Спасибо!
        </Typography>
      )}
    </Layout>
  );
};
