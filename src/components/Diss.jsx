import { useTonConnect } from "../hooks/useTonConnect";
import { useFaucetDissContract } from "../hooks/useFaucetDissContract";
import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Button,
  Ellipsis,
} from "./styled/styled";

export function Diss() {
  const { connected } = useTonConnect();
  const { mint, dissWalletAddress, balance } = useFaucetDissContract();

  return (
    <Card title="Jetton">
      <FlexBoxCol>
        <h3>Faucet Jetton</h3>
        <FlexBoxRow>
          Wallet
          <Ellipsis>{dissWalletAddress}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Balance
          <div>{balance ?? "Loading..."}</div>
        </FlexBoxRow>
        <Button
          disabled={!connected}
          onClick={async () => {
            mint();
          }}
        >
          Get jettons from faucet
        </Button>
      </FlexBoxCol>
    </Card>
  );
}
