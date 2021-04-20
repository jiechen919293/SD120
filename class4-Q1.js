function Deck() {
    this.cards = [];

    const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    for (let i = 0; i < suits.length; i++) {
        for (let rank = 1; rank <= 13; rank++) {
            this.cards.push(new Card(suits[i], rank));
        }
    }
}

Deck.prototype.count = function() {
    return this.cards.length;
};

Deck.prototype.shuffle = function() {
    this.cards.sort(() => Math.random() - 0.5);
};

Deck.prototype.draw = function(n) {
    return this.cards.splice(0, n);
};

function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.faceCard = this.rank > 10;
}

Card.prototype.toString = function() {
    let rank;

    switch (this.rank) {
        case 1:
            rank = "Ace";
            break;
        case 11:
            rank = "Jack";
            break;
        case 12:
            rank = "Queen";
            break;
        case 13:
            rank = "King";
            break;
    }

    return `${rank} of ${this.suit}`;
};

const deck = new Deck();

deck.shuffle();

console.log(deck);