import { Service } from '@core';
import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';

interface ITokenAllowanceServiceProps {
    walletAddress: EthereumAddress;
    tokenAddress: EthereumAddress;
    spenderAddress: EthereumAddress;
    network: EthereumNetwork;
}

export interface ITokenAllowanceService
    extends Service<ITokenAllowanceServiceProps, string> {}
