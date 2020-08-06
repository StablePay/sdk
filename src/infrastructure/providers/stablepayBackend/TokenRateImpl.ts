import axios from 'axios';
import { ITokenRateService } from '@services';
import { Rate } from '@valueObjects';
import { EthereumNetwork } from '@types';
import { API_URL_V1 } from '@src/utils';

interface ITokenRateImplProps {
    symbol: string;
    network: EthereumNetwork;
}

export class TokenRateImpl implements ITokenRateService {
    public async execute(props: ITokenRateImplProps): Promise<Rate> {
        const response = await axios.get(
            `${API_URL_V1}/tokens/${props.symbol}/rate?network=${props.network}`
        );
        const { expected, slippage } = response.data;
        return new Rate({
            expected,
            slippage
        });
    }
}
