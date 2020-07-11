import { ITokenBalancesService } from '@services';
import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';
import { getContract } from '@frameworks/ethers';
import { erc20Helper } from '@frameworks/ethereum/contracts';
import { getErc20HelperAddress } from '@src/utils';

interface ITokenBalancesImplProps {
    walletAddress: EthereumAddress;
    tokenAddresses: EthereumAddress[];
    network: EthereumNetwork;
}

export class TokenBalancesImpl implements ITokenBalancesService {
    public async execute(props: ITokenBalancesImplProps): Promise<Array<{token: EthereumAddress, balance: string}>> {
        const { walletAddress, tokenAddresses, network } = props;
        const erc20HelperContract = getContract(
            getErc20HelperAddress(network),
            erc20Helper.abi,
            network.toString()
        );
        
        const result = await erc20HelperContract.getBalancesOf(
            tokenAddresses.map( tokenAddress => tokenAddress.value),
            walletAddress.value
        );

        return tokenAddresses.map( (token, index) => ({
            balance: result[index].toString(),
            token: token,
        }));
    }
}
