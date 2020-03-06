import { ITokenBalanceService } from '@services';
import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';
import { getContract } from '@frameworks/ethers';
import { erc20 } from '@frameworks/ethereum/contracts';

interface ITokenBalanceImplProps {
    walletAddress: EthereumAddress;
    tokenAddress: EthereumAddress;
    network: EthereumNetwork;
}

export class TokenBalanceImpl implements ITokenBalanceService {
    public async execute(props: ITokenBalanceImplProps): Promise<string> {
        const { walletAddress, tokenAddress, network } = props;
        const erc20Contract = getContract(
            tokenAddress.value,
            erc20.abi,
            network.toString()
        );
        const balance = await erc20Contract.balanceOf(walletAddress.value);
        return balance.toString();
    }
}
