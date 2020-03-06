import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';

export class TokenAllowanceSerializer {
    public static toDomain({
        walletAddress,
        tokenAddress,
        contractAddress,
        network
    }: {
        walletAddress: string;
        tokenAddress: string;
        contractAddress: string;
        network: string;
    }) {
        return {
            walletAddress: EthereumAddress.create({ value: walletAddress }),
            tokenAddress: EthereumAddress.create({ value: tokenAddress }),
            contractAddress: EthereumAddress.create({ value: contractAddress }),
            network: network as EthereumNetwork
        };
    }

    public static toDTO(allowance: string) {
        return { allowance };
    }
}
