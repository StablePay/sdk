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
            walletAddress: EthereumAddress.create({ value: walletAddress }),
            tokenAddress: EthereumAddress.create({ value: tokenAddress }),
            network: network as EthereumNetwork
        };
    }

    public static toDTO(balance: string) {
        return { balance };
    }
}
