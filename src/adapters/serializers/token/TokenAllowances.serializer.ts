import { EthereumAddress } from '@valueObjects';
import { EthereumNetwork, TokenAllowancesArray } from '@types';

export class TokenAllowancesSerializer {
    public static toDomain({
        walletAddress,
        tokenAddresses,
        spenderAddress,
        network
    }: {
        walletAddress: string;
        tokenAddresses: string[];
        spenderAddress: string;
        network: string;
    }) {
        return {
            walletAddress: EthereumAddress.of(walletAddress),
            tokenAddresses: tokenAddresses.map(tokenAddress => EthereumAddress.of(tokenAddress)),
            spenderAddress: EthereumAddress.of(spenderAddress),
            network: EthereumNetwork.of(network),
        };
    }

    public static toDTO(tokenAllowances: TokenAllowancesArray) {
        return tokenAllowances.map( tokenAllowance =>
            ({ token: tokenAllowance.token.value, allowance: tokenAllowance.allowance})
        );
    }
}
