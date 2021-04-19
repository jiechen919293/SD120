let sumall = 0;
const dice = {
    allDice: [{
            sides: 6,
            rolls: [],
            value: 0,
            roll() {

            },
            average() {

            }

        }

    ],
    currentTotal: function() {
        return sumall += this.doublesCount
    },
    get doublesCount() {
        return die1.value + die2.value;
    },
    roll() {
        die1.roll();
        die2.roll();
        return die1.value + die2.value
    },
    average() {
        let total = 0;
        let averageNum = 0
        for (item of rolls) {
            total += rolls.item;
            averageNum = round(total / this.rolls.length);
        }
    }

};


function getRandomInt(min, max) {
    // Don't worry about how this works, just trust that it
    // generates an integer between min and max.
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
const die1 = new die(6, [1, 2, 3, 4, 5, 6]);
const die2 = new die();