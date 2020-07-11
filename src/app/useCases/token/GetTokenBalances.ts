import { UseCase } from '@core';
import { ITokenBalancesService } from '@services';
import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork, TokenBalancesArray } from '@types';

interface IGetTokenBalancesProps {
    walletAddress: EthereumAddress;
    tokenAddresses: EthereumAddress[];
    network: EthereumNetwork;
}

export class GetTokenBalances implements UseCase<IGetTokenBalancesProps, TokenBalancesArray> {
    public constructor(private tokenBalanceImpl: ITokenBalancesService) {}

    public async execute(props: IGetTokenBalancesProps): Promise<TokenBalancesArray> {
        return await this.tokenBalanceImpl.execute(props);
    }
}
