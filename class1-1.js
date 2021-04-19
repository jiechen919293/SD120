function getRandomInt(min, max) {
    // Don't worry about how this works, just trust that it
    // generates an integer between min and max.
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
const dice = {
    get currentTotal() {
        return this.allDice[0].value + this.allDice[1].value
    },
    doublesCount: 0,
    allDice: [{
        sides: 6,
        rolls: [],
        value: 0,
        roll() { //roll the die
            const number = getRandomInt(1, this.sides);
            this.rolls.push(number);
            this.value = number;
            return number;
        },
        average() {
            let total = 0;
            this.rolls.forEach(roll => {
                total += roll;
            });
            return total / this.rolls.length;
        }
    }],
    roll() {
        const die0 = this.allDice[0].roll();
        const die1 = this.allDice[0].roll();

    },
    average() {

    }
}
dice.roll();
dice, average();
dice.currentTotal;
console.log(dice.allDice[0].value);