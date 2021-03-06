import { ITokenAllowanceService } from '@services';
import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';
import { getContract } from '@frameworks/ethers';
import { erc20 } from '@frameworks/ethereum/contracts';
import { ApplicationError, ErrorType } from '@src/core';

export interface ITokenAllowanceImplProps {
    walletAddress: EthereumAddress;
    tokenAddress: EthereumAddress;
    spenderAddress: EthereumAddress;
    network: EthereumNetwork;
}

export class TokenAllowanceImpl implements ITokenAllowanceService {
    public async execute(props: ITokenAllowanceImplProps): Promise<string> {
        const { walletAddress, tokenAddress, spenderAddress, network } = props;
        const erc20Contract = getContract(
            tokenAddress.value,
            erc20.abi,
            network.toString()
        );
        const allowance = await erc20Contract.allowance(
            walletAddress.value,
            spenderAddress.value
        );

        if (!allowance) {
            throw new ApplicationError(ErrorType.Internal ,'TokenAllowanceImpl.execute Expected a valid allowance value');
        }

        return allowance.toString();
    }
}
