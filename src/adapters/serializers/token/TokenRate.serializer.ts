import { Rate } from '@valueObjects';
import { EthereumNetwork } from '@types';

export class TokenRateSerializer {
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
        rate: Rate
    ): {
        expected: string;
        slippage: string;
    } {
        const { expected, slippage } = rate;
        return { expected, slippage };
    }
}
