import { Service } from '@core';
import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';

interface ITokenAllowancesServiceProps {
    walletAddress: EthereumAddress;
    tokenAddresses: EthereumAddress[];
    spenderAddress: EthereumAddress;
    network: EthereumNetwork;
}

export interface ITokenAllowancesService
    extends Service<ITokenAllowancesServiceProps, Array<{token: EthereumAddress, allowance: string}>> {}
