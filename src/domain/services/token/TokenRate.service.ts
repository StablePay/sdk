import { Service } from '@core';
import { Rate } from '@valueObjects';
import { EthereumNetwork } from '@types';

interface ITokenRateServiceProps {
    symbol: string;
    network: EthereumNetwork;
}

export interface ITokenRateService
    extends Service<ITokenRateServiceProps, Rate> {}
