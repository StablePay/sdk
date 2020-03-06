import { UseCase } from '@core';
import { ITokenAllowanceService } from '@services';
import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';

interface IGetTokenAllowanceProps {
    walletAddress: EthereumAddress;
    tokenAddress: EthereumAddress;
    contractAddress: EthereumAddress;
    network: EthereumNetwork;
}

export class GetTokenAllowance
    implements UseCase<IGetTokenAllowanceProps, string> {
    public constructor(private tokenAllowanceImpl: ITokenAllowanceService) {}

    public async execute(props: IGetTokenAllowanceProps): Promise<string> {
        return await this.tokenAllowanceImpl.execute(props);
    }
}
