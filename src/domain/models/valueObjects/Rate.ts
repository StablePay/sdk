import { ValueObject } from '@core';

interface IRateProps {
    expected: string;
    slippage: string;
}

export class Rate extends ValueObject<IRateProps> {
    public static create(props: IRateProps): Rate {
        return new Rate(props);
    }

    constructor(props: IRateProps) {
        super(props);
    }

    get expected(): string {
        return this.props.expected;
    }

    get slippage(): string {
        return this.props.slippage;
    }
}
