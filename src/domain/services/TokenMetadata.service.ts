import { Service } from '@core';
import { Token } from '@valueObjects';
import { EthereumNetwork } from '@types';

interface ITokenMetadataServiceProps {
    symbol: string;
    network: EthereumNetwork;
}

export interface ITokenMetadataService
    extends Service<ITokenMetadataServiceProps, Token> {}
