class BMWPrototype {
  constructor({ color, option1, option2 }) {
    this.color = color;
    this.option1 = option1;
    this.option2 = option2;
  }

  create() {
    return new BMWPrototype(this.color, this.option1, this.option2);
  }
}

export default BMWPrototype;
