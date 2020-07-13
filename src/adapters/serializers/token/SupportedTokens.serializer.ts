import { Token } from '@valueObjects';
import { EthereumNetwork } from '@types';

export class SupportedTokensSerializer {
    public static toDomain({ network }: { network: string }) {
        return { network: EthereumNetwork.of(network) };
    }

    public static toDTO(
        tokens: Token[]
    ): Array<{
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        imageSource: string;
    }> {
        return tokens.map(
            ({ name, symbol, address, decimals, imageSource }) => ({
                name,
                symbol,
                address: address.value,
                decimals,
                imageSource
            })
        );
    }
}
