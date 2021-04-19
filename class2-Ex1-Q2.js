function Dice(obj1, obj2) {
    this.allDice = [obj1, obj2];
    this.currentTotal = 0;
    this.doublesCount = 0;
}
Dice.prototype.roll = function(allDice) {
    const die0 = this.allDice[0].roll();
    const die1 = this.allDice[1].roll();
    if (die1 === die0) {
        this.doublesCount++;
    }
}
Dice.prototype.average = function() {
    return this.allDice[0].average() + this.allDice[0].average() / 2;
}

// average() - A function that will return the calculated average of all the die rolls.
// roll() - A function that rolls die1 and die2 and returns the total.

function Die(num) {
    this.sides = num;
    this.rolls = [];
    this.value = 0;
}
Die.prototype.roll = function(num) { //roll the die
    const number = getRandomInt(1, this.sides);
    this.rolls.push(number);
    this.value = number;
    return number;
}
Die.prototype.average = function() {
    let total = 0;
    this.rolls.forEach(roll => {
        total += roll;
    });
    return total / this.rolls.length;
}
Die.prototype.printAll = function() {
    for (const roll of this.rolls) {
        console.log(roll);
    }
}

function getRandomInt(min, max) {
    // Don't worry about how this works, just trust that it
    // generates an integer between min and max.
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const dieA = new Die(6);
const dieB = new Die(6);
const dice = new Dice(dieA, dieB);
dice.roll();
dice.roll();
dice.roll();
dice.roll();
console.log(dice.doublesCount);
console.log(dice.average());
console.log(dieA);
console.log(dieB);