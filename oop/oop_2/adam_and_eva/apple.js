class Apple {
    constructor(weight = 10) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    getEaten() {
        if (this.weight > 0) {
            this.weight--;
        }
    }
}
