import { ValueObject } from '@core/ValueObject';

interface IMyStringObj {
    value: string;
    id: number;
}

const stringObj = {
    value: 'my string',
    id: 100
}

// NOTE: need test class to check abstract methods
class TestStringValueObject extends ValueObject<IMyStringObj> {}


describe('Value Object', () => {
    it('should create a ValueObject', () => {
        const valObj = new TestStringValueObject(stringObj);

        expect(valObj).toBeDefined();
        expect(valObj.props).toEqual(stringObj);
    });

    it('should be an immutable valueObject', () => {
        const mutableObj = { ...stringObj };
        const valObj = new TestStringValueObject(mutableObj);
        mutableObj.id = 300;

        expect(valObj).toBeDefined();
        expect(valObj.props).toEqual(stringObj);
        expect(valObj.props.id).not.toEqual(mutableObj.id);
    });

    it('should equal an equivalent valueObject', () => {
        const valObj1 = new TestStringValueObject(stringObj);
        const valObj2 = new TestStringValueObject(stringObj);

        expect(valObj1.equals(valObj2)).toBe(true);
    });

    it('should NOT be equal for different valueObjects', () => {
        const secondObj = { ...stringObj, id: 300 };
        const valObj1 = new TestStringValueObject(stringObj);
        const valObj2 = new TestStringValueObject(secondObj);

        expect(valObj1.equals(valObj2)).toBe(false);
    });
});