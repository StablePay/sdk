import { isEqual } from 'lodash';

interface IValueObjectProps {
    [index: string]: any;
}

export abstract class ValueObject<T extends IValueObjectProps> {
    protected readonly properties: T;

    constructor(props: T) {
        this.properties = Object.freeze({ ...props });
    }

    // NOTE: type checks saves doing null and undefined
    public equals(vo: ValueObject<T>): boolean {
        return isEqual(this.props, vo.props);
    }

    get props() {
        return this.properties;
    }
}
