import { Layout } from "antd";
import { AppHeader } from "./components/layout/AppHeader";
import { AppMain } from "./components/layout/AppMain";

function App() {
  return (
    <Layout>
      <AppHeader />
      <AppMain />
    </Layout>
  );
}

export default App;
