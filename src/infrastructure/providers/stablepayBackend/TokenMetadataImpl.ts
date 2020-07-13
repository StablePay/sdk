import axios from 'axios';
import { ITokenMetadataService } from '@services';
import { Token, EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';
import { API_URL_V1 } from '@src/utils';

interface ITokenMetadataImplProps {
    symbol: string;
    network: EthereumNetwork;
}

export class TokenMetadataImpl implements ITokenMetadataService {
    public async execute(props: ITokenMetadataImplProps): Promise<Token> {
        const response = await axios.get(`${API_URL_V1}/tokens/${props.symbol}?network=${props.network}`);
        const { name, symbol, address, decimals, imageSource } = response.data;
        return new Token({
            name,
            symbol,
            address: EthereumAddress.of(address),
            decimals,
            imageSource
        });
    }
}
