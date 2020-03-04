import { Service } from '@core';
import { Token } from '@valueObjects';
import { EthereumNetwork } from '@types';

interface ISupportedTokensServiceProps {
    network: EthereumNetwork;
}

export interface ISupportedTokensService
    extends Service<ISupportedTokensServiceProps, Token[]> {}
