// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { MainProvider } from "./context/MainContext";
// this manifest is used temporarily for development purposes
const manifestUrl =
  "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";

// const queryClient = new QueryClient({
//   defaultOptions: { queries: { refetchOnWindowFocus: false } },
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    {/* <QueryClientProvider client={queryClient}> */ }
      <Router>
        <Routes>
        <Route path="/*" element={
          <MainProvider>
            <App />
          </MainProvider>
        } />
        </Routes>
      </Router>
    {/* </QueryClientProvider> */}
  </TonConnectUIProvider>
);