import { ValueObject, ApplicationError, ErrorType } from '@core';
import { isEthereumAddress } from '@utils';

interface IEthereumAddressProps {
    value: string;
}

export class EthereumAddress extends ValueObject<IEthereumAddressProps> {
    public static create(props: IEthereumAddressProps): EthereumAddress {
        return new EthereumAddress(props);
    }

    constructor(props: IEthereumAddressProps) {
        super(props);

        this.validate(props);
    }

    private validate(props: IEthereumAddressProps) {
        const { value } = props;
        if (!isEthereumAddress(value))
            throw new ApplicationError(
                ErrorType.Validation,
                `'${value}' is not a valid Ethereum Address`
            );
    }

    get value(): string {
        return this.props.value;
    }
}
