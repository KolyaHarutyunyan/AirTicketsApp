import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CurrencyContextProvider from "./contexts/currency.context.tsx";
import TransfersContextProvider from "./contexts/transfers.context.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CurrencyContextProvider>
      <TransfersContextProvider>
        <App />
      </TransfersContextProvider>
    </CurrencyContextProvider>
  </React.StrictMode>
);
