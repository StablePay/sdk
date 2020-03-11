import { AbstractEntity } from '../../src/core/Entity';
import { UniqueEntityID  } from '../../src/core/UniqueEntityID';

// NOTE: we need a test entity to test the abstract methods
class TestEntity extends AbstractEntity<string> {

}


// tslint:disable-next-line: max-classes-per-file
class OtherTestEntity extends AbstractEntity<string> {

}

describe('Entity Abstract class test', () => {
    describe('equal True', () => {
        it('should Equal to true with same entity', () => {
            const UID = new UniqueEntityID("100");
            const entity1 = new TestEntity('test', UID);
    
            expect(entity1.equals(entity1)).toBe(true);
    
        });
    
        it('should Equal to true with equal value entity with strings UID', () => {
            const UID = new UniqueEntityID("100");
            const entity1 = new TestEntity('test', UID);
            const entity2 = new TestEntity('test', UID);
    
            expect(entity1.equals(entity2)).toBe(true);
    
        });
    
        it('should Equal to true with equal value entity with numbers UID', () => {
            const UID = new UniqueEntityID(100);
            const entity1 = new TestEntity('test', UID);
            const entity2 = new TestEntity('test', UID);
    
            expect(entity1.equals(entity2)).toBe(true);
    
        });

        it('should Equal to true with equal value entity even with different props', () => {
            const UID = new UniqueEntityID(100);
            const entity1 = new TestEntity('test1', UID);
            const entity2 = new TestEntity('test2', UID);
    
            expect(entity1.equals(entity2)).toBe(true);
    
        });
    });
    
    describe('should NOT be Equal', () => {
        it('should NOT be equal if UID is different', () => {
            const UID1 = new UniqueEntityID("100");
            const UID2 = new UniqueEntityID("200");
            const entity1 = new TestEntity('test', UID1);
            const entity2 = new TestEntity('test', UID2);
    
            expect(entity1.equals(entity2)).toBe(false);
    
        });

        it('should NOT be equal if other is undefined', () => {
            const UID = new UniqueEntityID(100);
            const entity1 = new TestEntity('test', UID);
    
            expect(entity1.equals(undefined)).toBe(false);
        });

        it('should NOT be equal if Entities are different', () => {
            const UID = new UniqueEntityID(100);
            const entity1 = new TestEntity('test', UID);
            const entity2 = new OtherTestEntity('test', UID);
    
            expect(entity1.equals(entity2)).toBe(false);
        });
    });
});


