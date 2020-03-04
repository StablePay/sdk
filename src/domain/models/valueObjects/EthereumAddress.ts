import { ValueObject, ApplicationError, ErrorType } from '@core';
import { isEthereumAddress } from '@utils';

interface IEthereumAddressProps {
    value: string;
}

export class EthereumAddress extends ValueObject<IEthereumAddressProps> {
    public static create(props: IEthereumAddressProps): EthereumAddress {
        this.validate(props);
        return new EthereumAddress(props);
    }

    private static validate(props: IEthereumAddressProps) {
        const { value } = props;
        if (!isEthereumAddress(value))
            throw new ApplicationError(
                ErrorType.Validation,
                `'${value}' is not a valid Ethereum Address`
            );
    }

    constructor(props: IEthereumAddressProps) {
        super(props);
    }

    get value(): string {
        return this.props.value;
    }
}
