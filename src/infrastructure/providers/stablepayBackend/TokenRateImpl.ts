import axios from 'axios';
import { ITokenRateService } from '@services';
import { Rate } from '@valueObjects';
import { EthereumNetwork } from '@types';

interface ITokenRateImplProps {
    symbol: string;
    network: EthereumNetwork;
}

export class TokenRateImpl implements ITokenRateService {
    public async execute(props: ITokenRateImplProps): Promise<Rate> {
        const response = await axios.get(
            `https://api.stablepay.io/api/tokens/${props.symbol}/rate?network=${props.network}`
        );
        const { expected, slippage } = response.data;
        return new Rate({
            expected,
            slippage
        });
    }
}
