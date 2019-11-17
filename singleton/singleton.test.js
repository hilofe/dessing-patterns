import Singleton from './singleton';

describe('Singleton', () => {
    it('Object should be referred to the same instance', () => {
        const obj1 = new Singleton();
        const obj2 = new Singleton();

        expect(obj1 === obj2).toBeTruthy();
    });

    it('Changed value is available from any insatnce', () => {
        const obj1 = new Singleton();
        const obj2 = new Singleton();

        obj1.increaseValue();
        obj1.increaseValue();
        obj1.increaseValue();

        const finalValue = obj2.getValue();

        expect(finalValue).toEqual(3);
    });

    it('Values from two objects should be the same', () => {
        const obj1 = new Singleton();
        const obj2 = new Singleton();


        expect(obj1.getValue() === obj2.getValue()).toBeTruthy();

        obj1.increaseValue();
        obj2.increaseValue();
        obj2.increaseValue();

        expect(obj1.getValue() === obj2.getValue()).toBeTruthy();
    });
})



