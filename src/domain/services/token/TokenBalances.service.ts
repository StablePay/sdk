import { Service } from '@core';
import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';

interface ITokenBalancesServiceProps {
    walletAddress: EthereumAddress;
    tokenAddresses: EthereumAddress[];
    network: EthereumNetwork;
}

export interface ITokenBalancesService
    extends Service<ITokenBalancesServiceProps, Array<{token: EthereumAddress, balance: string}>> {}
