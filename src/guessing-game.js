class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.fullMin = min;
        this.fullMax = max;
    }

    guess() {
        return Math.ceil((this.fullMin + this.fullMax) / 2);
    }

    lower() {
        this.setRange(this.fullMin , Math.ceil((this.fullMin + this.fullMax) / 2));
    }

    greater() {
        this.setRange(Math.ceil((this.fullMin + this.fullMax) / 2) , this.fullMax);
    }
}

module.exports = GuessingGame;
