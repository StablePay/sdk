# SDK

[StablePay](https://www.stablepay.io/) is a decentralized cryptocurrency payment platform powered by smart-contracts in the ethereum network that allows anyone to receive easily and securely an asset-backed stablecoin through their site, mitigating the risk of high volatility in the cryptocurrency market.

**Library and docs are still in development.**

## Usage

Enable cryptocurrency payments and donations in your site by either:

-   Using the StablePayJS Library by installing our NPM Package in your **Javascript App**. (Read how to install [Here](https://www.npmjs.com/package/@stablepay/sdk))
-   Using the Widget Component Library by installing our NPM Package in your **Javascript App**. (Read how to install [Here](https://www.npmjs.com/package/@stablepay/widget))
-   Using our Embeddable Widget in your site using **HTML/JavaScript**. (Read our [Docs](https://stablepay.gitbook.io/stablepay/) for more information)
-   Directly calling the **Smart Contract**. (Read our [Docs](https://stablepay.gitbook.io/stablepay/) for more information)

## Installing

Using npm:

```
npm install @stablepay/sdk
```

Using yarn:

```
yarn add @stablepay/sdk
```

## Example

```js
import StablePayJS from '@stablepay/sdk';

const config = {
    ethereumNetwork: 'ropsten',
    backendUrl: 'https://ropsten.api.stablepay.io/api',
    stablepayContractAddress: '0x494ff097f8d4E9C3b2316E3cEC49623bE98B5125',
    signature: 'secret'
};

const stablepay = StablePayJS(config);
const {
    supportedTokens,
    tokenAllowance,
    tokenBalance,
    tokenMetadata,
    tokenRate
} = stablepay;
```

## Acknowledgments

-   Grant by [MakerDao](https://makerdao.com/en/)
