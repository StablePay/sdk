import { UseCase } from '@core';
import { ITokenMetadataService } from '@services';
import { Token } from '@valueObjects';
import { EthereumNetwork } from '@types';

interface IGetTokenMetadataProps {
    symbol: string;
    network: EthereumNetwork;
}

export class GetTokenMetadata
    implements UseCase<IGetTokenMetadataProps, Token> {
    public constructor(private tokenMetadataImpl: ITokenMetadataService) {}

    public async execute(props: IGetTokenMetadataProps): Promise<Token> {
        return await this.tokenMetadataImpl.execute(props);
    }
}
