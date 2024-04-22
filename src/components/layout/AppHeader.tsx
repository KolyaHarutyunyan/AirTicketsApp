import { Layout } from "antd";
import Logo from "../../assets/images/logo.png";

export const AppHeader = () => {
  return (
    <Layout.Header className="text-center text-secondary h-32 bg-primary flex items-center justify-center">
      <div className="w-16 h-16 rounded-full">
        <img src={Logo} alt="logo" />
      </div>
    </Layout.Header>
  );
};
