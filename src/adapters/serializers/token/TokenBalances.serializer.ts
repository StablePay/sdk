import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork, TokenBalancesArray } from '@types';

export class TokenBalancesSerializer {
    public static toDomain({
        walletAddress,
        tokenAddresses,
        network
    }: {
        walletAddress: string;
        tokenAddresses: string[];
        network: string;
    }) {
        return {
            walletAddress: EthereumAddress.of(walletAddress),
            tokenAddresses: tokenAddresses.map(tokenAddress => EthereumAddress.of(tokenAddress)),
            network: EthereumNetwork.of(network)
        };
    }

    public static toDTO(tokenBalances: TokenBalancesArray) {
        return tokenBalances.map( tokenBalance =>
            ({ token: tokenBalance.token.value, balance:  tokenBalance.balance})
        );
    }
}
