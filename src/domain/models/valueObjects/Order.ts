import { ValueObject } from '@core';

interface IOrderProps {
    order: string[];
    provider: string;
    margin: string;
    amounts: {
        minUnit: number;
        maxUnit: number;
        min: string;
        max: string;
    };
    rates: {
        min: number;
        max: number;
    };
}

export class Order extends ValueObject<IOrderProps> {
    public static create(props: IOrderProps): Order {
        return new Order(props);
    }

    private constructor(props: IOrderProps) {
        super(props);
    }

    get order(): string[] {
        return this.props.order;
    }

    get provider(): string {
        return this.props.provider;
    }

    get margin(): string {
        return this.props.margin;
    }

    get amounts() {
        return this.props.amounts;
    }

    get rates() {
        return this.props.rates;
    }
}
