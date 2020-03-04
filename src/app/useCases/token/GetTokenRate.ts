import { UseCase } from '@core';
import { ITokenRateService } from '@services';
import { Rate } from '@valueObjects';
import { EthereumNetwork } from '@types';

interface IGetTokenRateProps {
    symbol: string;
    network: EthereumNetwork;
}

export class GetTokenRate implements UseCase<IGetTokenRateProps, Rate> {
    public constructor(private tokenRateImpl: ITokenRateService) {}

    public async execute(props: IGetTokenRateProps): Promise<Rate> {
        return await this.tokenRateImpl.execute(props);
    }
}
