import { UniqueEntityID } from './UniqueEntityID';

export abstract class AbstractEntity<T> {
    constructor(protected props: T, readonly _id: UniqueEntityID) {}

    public equals(object?: AbstractEntity<T>): boolean {
        if (object === null || object === undefined) {
            return false;
        }

        if (this === object) {
            return true;
        }
        // check if both are same class entity
        if (this.constructor !== object.constructor) {
            return false;
        }

        return this._id.equals(object._id);
    }
}
