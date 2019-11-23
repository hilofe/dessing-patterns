import BMW from './models';
import BMWFactory from './factoryMethod';

describe('Factory Method ', () => {
  it('Instance of Fabric should be belong to Model', () => {
    const factory = new BMWFactory();

    const X6 = factory.create('X6');
    const X5 = factory.create('X6');

    expect(X5 instanceof BMW).toBeTruthy();
    expect(X6 instanceof BMW).toBeTruthy();
  });
});
