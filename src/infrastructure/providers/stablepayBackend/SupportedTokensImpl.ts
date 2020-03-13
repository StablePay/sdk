import axios from 'axios';
import _ from 'lodash';
import { ISupportedTokensService } from '@services';
import { Token, EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';

interface ISupportedTokensImplProps {
    network: EthereumNetwork;
}

export class SupportedTokensImpl implements ISupportedTokensService {
    public async execute(props: ISupportedTokensImplProps): Promise<Token[]> {
        const response = await axios.get(
            `https://api.stablepay.io/api/tokens?network=${props.network}`
        );
        const tokens = _.map(
            response.data,
            ({ name, symbol, address, decimals, icon }) =>
                new Token({
                    name,
                    symbol,
                    address: EthereumAddress.of(address),
                    decimals,
                    imageSource: icon
                })
        );
        return tokens;
    }
}
