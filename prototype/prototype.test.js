import BMWPrototype from './prototype';

describe('Prototype', () => {
  it('Changes should be appeared for instance', () => {
    const factory = new BMWPrototype({
      color: 'white',
      option1: true,
      option2: false
    });

    const car1 = factory.create();
    const car2 = factory.create();

    car1.color = 'red';
    car2.color = 'blue';

    expect(car1.color !== car2.color).toBeTruthy();
    expect(car1 !== car2).toBeTruthy();
  });
});
