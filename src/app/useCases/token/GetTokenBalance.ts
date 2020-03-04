import { UseCase } from '@core';
import { ITokenBalanceService } from '@services';
import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';

interface IGetTokenBalanceProps {
    walletAddress: EthereumAddress;
    tokenAddress: EthereumAddress;
    network: EthereumNetwork;
}

export class GetTokenBalance implements UseCase<IGetTokenBalanceProps, string> {
    public constructor(private tokenBalanceImpl: ITokenBalanceService) {}

    public async execute(props: IGetTokenBalanceProps): Promise<string> {
        return await this.tokenBalanceImpl.execute(props);
    }
}
