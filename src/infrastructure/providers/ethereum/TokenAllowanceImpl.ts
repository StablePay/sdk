import { ITokenAllowanceService } from '@services';
import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';
import { getContract } from '@frameworks/ethers';
import { erc20 } from '@frameworks/ethereum/contracts';

interface ITokenAllowanceImplProps {
    walletAddress: EthereumAddress;
    tokenAddress: EthereumAddress;
    contractAddress: EthereumAddress;
    network: EthereumNetwork;
}

export class TokenAllowanceImpl implements ITokenAllowanceService {
    public async execute(props: ITokenAllowanceImplProps): Promise<string> {
        const { walletAddress, tokenAddress, contractAddress, network } = props;
        const erc20Contract = getContract(
            tokenAddress.value,
            erc20.abi,
            network.toString()
        );
        const allowance = await erc20Contract.allowance(
            walletAddress.value,
            contractAddress.value
        );

        return allowance.toString();
    }
}
