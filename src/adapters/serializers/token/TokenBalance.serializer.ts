import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';

export class TokenBalanceSerializer {
    public static toDomain({
        walletAddress,
        tokenAddress,
        network
    }: {
        walletAddress: string;
        tokenAddress: string;
        network: string;
    }) {
        return {
            walletAddress: EthereumAddress.of(walletAddress),
            tokenAddress: EthereumAddress.of(tokenAddress),
            network: EthereumNetwork.of(network)
        };
    }

    public static toDTO(balance: string) {
        return { balance };
    }
}
