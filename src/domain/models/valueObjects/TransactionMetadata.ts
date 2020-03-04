import { ValueObject } from '@core';
import { TransactionType } from '@types';
import { EthereumAddress } from '@valueObjects';

interface ITransactionMetadataProps {
    type: TransactionType;
    receiver: {
        name: string;
        address: EthereumAddress;
    };
    targetToken: {
        symbol: string;
        address: EthereumAddress;
    };
    amount: {
        total: number;
        options?: number[];
        currency: string;
        sign: string;
    };
    callbackURL: string;
    postAction?: {
        action: string;
        data: object;
    };
}

export class TransactionMetadata extends ValueObject<
    ITransactionMetadataProps
> {
    public static create(
        props: ITransactionMetadataProps
    ): TransactionMetadata {
        return new TransactionMetadata(props);
    }

    constructor(props: ITransactionMetadataProps) {
        super(props);
    }

    get type() {
        return this.props.type;
    }

    get receiver() {
        return this.props.receiver;
    }

    get targetToken() {
        return this.props.targetToken;
    }

    get amount() {
        return this.props.amount;
    }

    get callbackURL() {
        return this.props.callbackURL;
    }

    get postAction() {
        return this.props.postAction;
    }
}
