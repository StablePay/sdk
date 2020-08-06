import { EthereumNetwork } from "@src/domain/models/types";
import { ApplicationError, ErrorType } from "@src/core";

export const API_URL = 'https://api.stablepay.io/api';
export const API_URL_V1 = `${API_URL}/v1`;

const ERC20_HELPER_CONTRACT_KEY = 'ERC20_HELPER';

const internalAddressesMap = new Map();
internalAddressesMap.set(
    EthereumNetwork.Ropsten.name,
    {
        ERC20_HELPER: '0x8857A17629E5EdCe7042Cf99F2b286E36a5D55Ec'
    }
);
/*
TODO Change it after deploying contract on mainnet
internalAddressesMap.set(
    EthereumNetwork.Mainnet.name,
    {
        ERC20_HELPER: '0x0'
    }
);
*/

const getContractAddress = (network:EthereumNetwork, contractName: string ): string | undefined => {
    const newtowkContracts = internalAddressesMap.get(network.name);
    return newtowkContracts[contractName] as string | undefined;
}

export const getErc20HelperAddress = (network:EthereumNetwork) => {
    const contractAddress = getContractAddress(network, ERC20_HELPER_CONTRACT_KEY);
    if(contractAddress === undefined) {
        throw new ApplicationError(ErrorType.Validation, `Contract not deployed on ${network.name} network.`);
    }
    return internalAddressesMap.get(network.name);
}