import { Token } from '@valueObjects';
import { EthereumNetwork } from '@types';

export class TokenMetadataSerializer {
    public static toDomain({
        symbol,
        network
    }: {
        symbol: string;
        network: string;
    }) {
        return { symbol, network: network as EthereumNetwork };
    }

    public static toDTO(
        token: Token
    ): {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        imageSource: string;
    } {
        const { name, symbol, address, decimals, imageSource } = token;
        return { name, symbol, address: address.value, decimals, imageSource };
    }
}
