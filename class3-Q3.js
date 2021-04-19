function Animal(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
}

Animal.prototype.introduce = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.
    My species is ${this.species} in ${this.legs}`;
};

function Shark(name, age, status) {
    Animal.call(this, name, age);
    this.legs = 0;
    this.species = 'shark';
}
Shark.prototype = new Animal();
Shark.prototype.constructor = Shark;

function Cat(name, age, status) {
    Animal.call(this, name, age);
    this.legs = 4;
    this.species = 'cat';
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
Cat.prototype.introduce = function() {

    return `Hello, my name is ${this.name} and I am ${this.age} years old.
    My species is ${this.species} with ${this.legs} legs. meow meow !`;
};

function Dog(name, age, status, master) {
    Animal.call(this, name, age, status);
    this.master = 'my master';
    this.legs = 4;
    this.species = 'dog';
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
Dog.prototype.greetMaster = function() {
    return `  Hello ${this.master}!`;
}
const dog = new Dog('dog', 20, 'young')
const cat = new Cat('cat1', 18, 'teenage')
const shark = new Shark('shark2', 9, "baby");
console.log(shark.introduce());
console.log(cat.introduce());
console.log(dog.introduce() + dog.greetMaster());;