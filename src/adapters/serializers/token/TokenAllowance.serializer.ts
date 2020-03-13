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
            walletAddress: EthereumAddress.of(walletAddress),
            tokenAddress: EthereumAddress.of(tokenAddress),
            contractAddress: EthereumAddress.of(contractAddress),
            network: network as EthereumNetwork
        };
    }

    public static toDTO(allowance: string) {
        return { allowance };
    }
}
