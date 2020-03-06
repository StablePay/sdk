import { ethers } from 'ethers';
import { UncheckedJsonRpcSigner } from './signer';

export const getEthersProvider = (provider: ethers.providers.AsyncSendable) => {
    return new ethers.providers.Web3Provider(provider);
};

export const getEthersDefaultProvider = (network: string) => {
    return ethers.getDefaultProvider(network);
};

export const signMessage = (
    provider: ethers.providers.Web3Provider,
    message: string
) => {
    return new UncheckedJsonRpcSigner(
        getEthersProvider(provider).getSigner()
    ).signMessage(message);
};

export const getContract = (
    address: string,
    contractABI: Array<
        | string
        | ethers.utils.FunctionFragment
        | ethers.utils.EventFragment
        | ethers.utils.ParamType
    >,
    network: string,
    provider?: ethers.providers.Web3Provider
) => {
    return new ethers.Contract(
        address,
        contractABI,
        provider
            ? new UncheckedJsonRpcSigner(
                  getEthersProvider(provider).getSigner()
              )
            : getEthersDefaultProvider(network)
    );
};

export { UncheckedJsonRpcSigner } from './signer';
