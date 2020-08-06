import { UseCase } from '@core';
import { ITokenAllowancesService } from '@services';
import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork, TokenAllowancesArray } from '@types';

interface IGetTokenAllowancesProps {
    walletAddress: EthereumAddress;
    tokenAddresses: EthereumAddress[];
    spenderAddress: EthereumAddress;
    network: EthereumNetwork;
}

export class GetTokenAllowances
    implements UseCase<IGetTokenAllowancesProps, TokenAllowancesArray> {
    public constructor(private tokenAllowancesService: ITokenAllowancesService) {}

    public async execute(props: IGetTokenAllowancesProps): Promise<TokenAllowancesArray> {
        return await this.tokenAllowancesService.execute(props);
    }
}
