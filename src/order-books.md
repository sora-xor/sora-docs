# Order books

::: info

If you are new to order books and want to understand their basic mechanisms, we highly recommend watching the following video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Kl4-VJ2K8Ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

:::

## Use-case

An order book is a fundamental component of a decentralized exchange (DEX) that facilitates trading digital assets between buyers and sellers in a transparent and efficient manner. It serves as a virtual meta ledger that records all the buy and sell orders placed by participants in the market.

By leveraging the power of blockchain technology, order books on decentralized exchanges offer several advantages:

- **Better price understanding**: Buyers and sellers will be able to see actual offers, enabling them to make more informed decisions about the true market value of assets. This can lead to more efficient trading.
- **Improved liquidity**: Buyers and sellers will have greater control over the prices at which they trade. This helps attract more market participants, leading to increased liquidity and a more dynamic market.
- **Additional liquidity source for the Liquidity Proxy**: Traders will have an alternative option to use the Liquidity Proxy, which can positively impact trading outcomes.
- **Reduced slippage**: In XYK markets, large trades can cause significant price changes due to the trade size impacting the market price. With order books, traders can place limit orders at the desired price, reducing the risk of slippage.
- **More trading options**: Traders will have access to various trading mechanisms, including market orders, limit orders, stop orders, and more. This can lead to more sophisticated trading strategies and better risk management.
- **Alternative market for NFT trading**: NFTs can have their own order book, where users can place buy and sell orders. While it may not be the optimal mechanism for NFT trading due to their uniqueness and the need for customized volume and price steps (auction models or peer-to-peer mechanisms where buyers and sellers can directly negotiate the price of NFTs are traditionally considered more suitable), the order book mechanism can be more relevant for NFT trading compared to Pool XYK.
- **Other benefits inherited from DEX characteristics**:
  - _Permissionless accessibility_: DEXs allow anyone to participate in trading digital assets without a centralized intermediary. This promotes financial inclusion and provides access to a global user base, regardless of geographical location.
  - _Enhanced ownership and control_: All assets remain under the ownership and control of users.
  - _Transparency_: Users can verify authenticity, ownership history, and transaction data, fostering trust and reducing the risk of fraud or manipulation by a centralized intermediary.
  - _Decentralization benefits_: Reduced risks of hacks, downtime, or data breaches associated with centralized platforms.
  - _Community-driven development_: Users can create order books themselves, contribute to liquidity, set their own trading parameters, and influence development using decentralized governance tools. This fosters innovation, competition, and a vibrant ecosystem.

While order books on decentralized exchanges offer numerous benefits, it's important to consider their limitations:

- **Scalability**: Blockchains have limitations in processing transaction volumes.
- **Order book management**: In centralized systems, the exchange operator can manage the order book and ensure its efficient operation. In decentralized order book implementations, management is left to users, which can lead to errors, inefficiencies, and potential manipulation.

## Step-by-step instructions

In this section, you will discover how to execute different operations associated with the order book and all its entities on the SORA blockchain.

### Operations with orders

We suggest performing order operations such as placing a limit order or canceling a limit order directly in Polkaswap. You can find examples of these actions in a [dedicated guide](./polkaswap-order-book-trading).

### Operations with order books

Executing operations related to order books, such as creating a new order book, removing an existing one, updating its details, or altering its status, necessitates completion through on-chain governance and is subject to community voting. This democratic process mirrors existing practices employed in other scenarios.

For instance, suppose you wish to create a new trading pair for the order book. Firstly, you'll need to obtain the calldata. To do so, navigate to `polkadot.js` (or dotapps.io) and access the `Developer` -> `Extrinsics` tab. Locate the [`orderbook.createOrderbook`](https://sora-xor.github.io/sora2-network/order_book/pallet/enum.Call.html#variant.create_orderbook) extrinsic and populate it with your desired parameters (refer to the [template](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.mof.sora.org#/extrinsics/decode/0x3900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) provided).

Once you've filled in the extrinsic, copy its encoded calldata. Then, refer to the official [Governance documentation](https://wiki.polkadot.network/docs/maintain-guides-democracy). We recommend creating a preimage with the copied calldata. Upon completion, you can either initiate a public proposal or directly contact the council team to expedite your proposal's placement into the external queue. Depending on the circumstances, a technical proposal may accelerate the process further.

## Development

If you are proficient in RUST and Substrate, we invite you to explore our codebase dedicated to order books. By following [this link](https://github.com/sora-xor/sora2-network/tree/master/pallets/order-book), you will have access to the source code, allowing you to delve deeper into the implementation details and functionalities of order books within SORA.

For more transparency on the development of order books, we recommend exploring the corresponding [GitHub milestone](https://github.com/sora-xor/sora2-network/milestone/4). This will provide you with additional insights into the progress and advancements in order book implementation.

### Data model

You can review the list below to gain a deeper understanding of the data models for each component that can be built using this API:

- [Calls](https://sora-xor.github.io/sora2-network/order_book/pallet/enum.Call.html)
- [Errors](https://sora-xor.github.io/sora2-network/order_book/pallet/enum.Error.html#variants)
- [Events](https://sora-xor.github.io/sora2-network/order_book/pallet/enum.Event.html#variants)
- [Storages](https://sora-xor.github.io/sora2-network/order_book/pallet/index.html#types)
- [More info](https://sora-xor.github.io/sora2-network/order_book/index.html#reexport.UserOrders)

### Integration Example

Here is a code snippet written in JS:

::: code-group

```ts [ts]
import { api } from "@sora-substrate/util";
import { PriceVariant } from "@sora-substrate/liquidity-proxy";

import { delay, withConnectedAccount } from "./util";

async function main(): Promise<void> {
  await withConnectedAccount(async () => {
    const xor =
      "0x0200000000000000000000000000000000000000000000000000000000000000";
    const val =
      "0x0200040000000000000000000000000000000000000000000000000000000000";
    const account = "cnVkoGs3rEMqLqY27c2nfVXJRGdzNJk2ns78DcqtppaSRe8qm";

    const orderBooks = await api.orderBook.getOrderBooks();
    console.log("orderBooks", orderBooks);

    await api.orderBook.getUserOrderBooks(account);

    api.orderBook
      .subscribeOnUserLimitOrdersIds(val, xor, account)
      .subscribe((ids) => {
        console.log("ids", ids);
      });

    const order = await api.orderBook.getLimitOrder(val, xor, 16);
    console.log("order", order);

    api.orderBook.subscribeOnAggregatedAsks(val, xor).subscribe((asks) => {
      console.log("asks", asks);
    });

    api.orderBook.subscribeOnAggregatedBids(val, xor).subscribe((bids) => {
      console.log("bids", bids);
    });

    const price = "1100000000000000000";
    const amount = "100000000000000000000";
    const side: PriceVariant = PriceVariant.Buy;

    await api.orderBook.placeLimitOrder(val, xor, price, amount, side);

    await delay(100000);
  });
}

main()
  .catch(console.error)
  .finally(() => process.exit());
```

:::

These code samples demonstrate various functionalities, from managing storage subscriptions to executing extrinsics.
