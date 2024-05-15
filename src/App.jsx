import { Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { Diss } from "./components/Diss";
import { TransferTon } from "./components/TransferTon";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import HomeLayout from "./layout/HomeLayout";



function App() {
  const { network } = useTonConnect();

  return (
    <Routes>
      <Route path="/" element={ <HomeLayout /> } >
        <Route index element={<Counter/>}/>
      </Route>
    </Routes>
  );
}

export default App;
