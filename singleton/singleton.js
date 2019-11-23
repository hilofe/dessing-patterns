class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.value = 0;
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  increaseValue() {
    Singleton.value++;
  }

  getValue() {
    return Singleton.value;
  }
}

export default Singleton;
