/* eslint-disable no-unused-vars */
import { fromNano } from "ton";
import {Contract} from "ton-core"

export default class DissWallet{
  async getBalance(provider) {
    const { stack } = await provider.get("get_wallet_data", []);
    return fromNano(stack.readBigNumber());
  }

  constructor ( address, init )
      {
            this.address = address;
            this.init= init
      }
}
