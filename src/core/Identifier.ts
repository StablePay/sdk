export class Identifier<T> {
    constructor(private value: T) {}

    public equals(id?: Identifier<T>): boolean {
        if (id === null || id === undefined) {
            return false;
        }
        if (!(id instanceof this.constructor)) {
            return false;
        }
        return id.value === this.value;
    }

    public toString() {
        return String(this.value);
    }

    public toValue(): T {
        return this.value;
    }
}
