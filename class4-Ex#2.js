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

// this is the Ex2 part
function Player(name, hand) {
    this.name = name;
    this.hand = hand;
}
Player.prototype.score = function() {
    let scoreSum = 0;
    for (let i = 0; i < this.hand.length; i++) {
        if (this.hand[i].suit === 'Hearts' || this.hand[i].suit === 'Diamonds') {
            scoreSum += this.hand[i].rank;
        } else {
            scoreSum -= this.hand[i].rank;
        }
    }
    return scoreSum;
}

function Game(players, deck) {
    Deck.call(this);
    this.players = players;
    this.deck = deck;
}

Game.prototype = Object.create(Deck.prototype);
Game.prototype.constructor = Game;

Game.prototype.scoresToString = function() {
    for (let i = 0; i < this.players.length; i++) {
        console.log(this.players[i].name + ':' + this.players[i].score())
    }
}

Game.prototype.play = function() {
    // figure out how to take turns going through each player, 
    // having them draw a card, 
    while (this.deck.length > 0) {

        for (let i = 0; i < this.players.length; i++) {
            this.players[i].card.push(this.deck[i]);
        }
        this.deck.draw(this.players.length);
    };
    // determining when you have ran out of cards 
    // printing out the scores and the winner
    this.scoresToString()
    let winner = ['', 0];
    this.players.forEach(player => {

        if (player.score() > winner[1]) {
            winner[0] = player.name;
            winner[1] = player.score();
        } else {
            return;
        }

    });
    console.log(`winner is${winner[0]}with score of ${winner[1]}`);
}





const card1 = new Card('Hearts', 12)
const card2 = new Card('Spades', 5)
const player1 = new Player('aaa', [card1, card2])
player1.score();