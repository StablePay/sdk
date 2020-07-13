import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';
import { getContract } from '@frameworks/ethers';
import { erc20Helper } from '@frameworks/ethereum/contracts';
import { getErc20HelperAddress } from '@src/utils';
import { ITokenAllowancesService } from '@src/domain/services/token/TokenAllowances.service';

interface ITokenAllowancesImplProps {
    walletAddress: EthereumAddress;
    tokenAddresses: EthereumAddress[];
    spenderAddress: EthereumAddress;
    network: EthereumNetwork;
}

export class TokenAllowancesImpl implements ITokenAllowancesService {
    public async execute(props: ITokenAllowancesImplProps): Promise<Array<{token: EthereumAddress, allowance: string}>> {
        const { walletAddress, tokenAddresses, spenderAddress, network } = props;
        const erc20HelperContract = getContract(
            getErc20HelperAddress(network),
            erc20Helper.abi,
            network.toString()
        );
        
        const result = await erc20HelperContract.getAllowances(
            tokenAddresses.map( tokenAddress => tokenAddress.value),
            walletAddress.value,
            spenderAddress.value,
        );

        return tokenAddresses.map( (token, index) => ({
            allowance: result[index].toString(),
            token: token,
        }));
    }
}
