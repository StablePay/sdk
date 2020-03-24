import { Service } from '@core';
import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';

interface ITokenBalanceServiceProps {
    walletAddress: EthereumAddress;
    tokenAddress: EthereumAddress;
    network: EthereumNetwork;
}

export interface ITokenBalanceService
    extends Service<ITokenBalanceServiceProps, string> {}
