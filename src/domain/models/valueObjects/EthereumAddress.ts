import { ValueObject, ApplicationError, ErrorType } from '@core';
import { isEthereumAddress } from '@utils';

interface IEthereumAddressProps {
    value: string;
}

export class EthereumAddress extends ValueObject<IEthereumAddressProps> {
    public static of(address: string): EthereumAddress {
        const props = { value: address };
        return new EthereumAddress(props);
    }

    private constructor(props: IEthereumAddressProps) {
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
