import { UseCase } from '@core';
import { ISupportedTokensService } from '@services';
import { Token } from '@valueObjects';
import { EthereumNetwork } from '@types';

interface IGetSupportedTokensProps {
    network: EthereumNetwork;
}

export class GetSupportedTokens
    implements UseCase<IGetSupportedTokensProps, Token[]> {
    public constructor(private supportedTokensImpl: ISupportedTokensService) {}

    public async execute(props: IGetSupportedTokensProps): Promise<Token[]> {
        return await this.supportedTokensImpl.execute(props);
    }
}
