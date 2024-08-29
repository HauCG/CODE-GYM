class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    talking() {
        console.log("hello");
    }

    getWeightAfterEatingApple() {
        this.weight++;
    }

    eatingApple(apple) {
        if (apple.getWeight() > 0) {
            apple.getEaten();
            this.getWeightAfterEatingApple();
        }
    }

    checkAppleWeight(apple) {
        console.log(apple.getWeight());
    }
}