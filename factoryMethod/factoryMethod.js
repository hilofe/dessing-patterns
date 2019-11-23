import BMW from './models';

class BMWFactory {
  create(type) {
    switch (type) {
      case 'X6':
        return new BMW(type, 1000, 2019);
      case 'X5':
        return new BMW(type, 500, 2017);
      default:
        return new BMW('X100', 20000, 1998);
    }
  }
}

export default BMWFactory;
