// const corolla = {
//     color: "blue",
//     brand: "Toyota",
//     price: 10000,
//     drive: function() {
//         console.log(`"The ${this.color} car goes VROOOOoooom"`);
//     },
// };

// const accord = {
//     color: "red",
//     brand: "Honda",
//     price: 11000,
//     drive: function() {
//         console.log(`"The ${this.color} car goes VROOOOoooom"`);
//     },
// };

// const sonata = new Object();
// sonata["color"] = "black";
// sonata["brand"] = "Hyundai";
// sonata["price"] = 81000;
// sonata["drive"] = function() {
//     console.log(`"The ${this.color} car goes VROOOOoooom"`);
// };

// const sentra = new Object();
// sentra["color"] = "white";
// sentra["brand"] = "Nissan";
// sentra["price"] = 11000;
// sentra["drive"] = function() {
//     console.log(`"The ${this.color} car goes VROOOOoooom"`);
// };


// function changeColor(newColor, car) {
//     car['color'] = newColor;
// };

// changeColor("green", corolla);
// changeColor("black", accord);
// changeColor("violet", sonata);
// changeColor("orange", sentra);

// const cars = [corolla, accord, sonata, sentra];

// for (let car of cars) {
//     car.drive();
// }

// constractor
function carCreator(color, brand, price) {
    const newcar = Object.create(carFunctionStore);
    newcar.color = color;
    newcar.brand = brand;
    newcar.price = price;
    return newcar;
}
const carFunctionStore = {
    print: function() {
        console.log(`"The ${this.color} ${this.brand} car goes ${this.price}"`);
    },
    drive: function() {
        console.log(`"The ${this.color} car goes VROOOOoooom"`);
    },
    changeColor: function(newColor) {
        this.color = newColor;
    }
}
const car1 = carCreator("green", 'corolla', 10000);
const car2 = carCreator("black", 'accord', 18000);
const car3 = carCreator("violet", 'sonata', 20000);
const car4 = carCreator("orange", 'sentra', 30000);
car2.print();
car2.changeColor('red');
car2.print();