import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
import FaucetDiss from "../contract/faucetDiss";
import { Address } from "ton-core";
import DissWallet from "../contract/faucetDissWallet";
import { useQuery } from "@tanstack/react-query";

export function useFaucetDissContract() {
  const { wallet, sender } = useTonConnect();
  const { client } = useTonClient();

  const dissContract = useAsyncInitialize(async () => {
    if (!client || !wallet) return;
    const contract = new FaucetDiss(
      Address.parse("EQB8StgTQXidy32a8xfu7j4HMoWYV0b0cFM8nXsP2cza_b7Y") // replace with your address from tutorial 2 step 8
    );
    return client?.open(contract);
  }, [client, wallet]);

  const dwContract = useAsyncInitialize(async () => {
    if (!dissContract || !client) return;
    const dissWalletAddress = await dissContract?.getWalletAddress(
      Address.parse(wallet)
    );
    return client?.open(
      new DissWallet(Address.parse(dissWalletAddress))
    );
  }, [dissContract, client]);

  const { data, isFetching } = useQuery(
    ["diss"],
    async () => {
      if (!dwContract) return null;

      return (await dwContract.getBalance()).toString();
    },
    { refetchInterval: 3000 }
  );

  return {
    mint: () => {
      dissContract?.sendMintFromFaucet(sender, Address.parse(wallet));
    },
    dissWalletAddress: dwContract?.address.toString(),
    balance: isFetching ? null : data,
  };
}
