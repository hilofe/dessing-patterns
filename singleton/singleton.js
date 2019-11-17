class Singleton {
    static value = 0;
    static instance = null;

    constructor() {
            if(!Singleton.instance) {
                Singleton.instance = this;
            }

            return Singleton.instance;
    }

    getValue() {
        return Singleton.value;
    }

    increaseValue() {
        Singleton.value += 1;
    }
}

export default Singleton;
