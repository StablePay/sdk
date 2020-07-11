import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';

export class TokenAllowanceSerializer {
    public static toDomain({
        walletAddress,
        tokenAddress,
        spenderAddress,
        network
    }: {
        walletAddress: string;
        tokenAddress: string;
        spenderAddress: string;
        network: string;
    }) {
        return {
            walletAddress: EthereumAddress.of(walletAddress),
            tokenAddress: EthereumAddress.of(tokenAddress),
            spenderAddress: EthereumAddress.of(spenderAddress),
            network: EthereumNetwork.of(network),
        };
    }

    public static toDTO(allowance: string) {
        return { allowance };
    }
}
