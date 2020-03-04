import { ValueObject } from '@core';
import { EthereumAddress } from '@valueObjects';

interface ITokenProps {
    name: string;
    symbol: string;
    address: EthereumAddress;
    decimals: number;
    imageSource: string;
}

export class Token extends ValueObject<ITokenProps> {
    public static create(props: ITokenProps): Token {
        return new Token(props);
    }

    constructor(props: ITokenProps) {
        super(props);
    }

    get name(): string {
        return this.props.name;
    }

    get symbol(): string {
        return this.props.symbol;
    }

    get address(): EthereumAddress {
        return this.props.address;
    }

    get decimals(): number {
        return this.props.decimals;
    }

    get imageSource(): string {
        return this.props.imageSource;
    }
}
