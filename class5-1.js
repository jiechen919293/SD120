class Vehicle {
    constructor(engine, cost, wheels) {
        this.engine = engine;
        this.cost = cost;
        this.wheels = wheels;
        this.steeringWheel = true;
    }
}
class Motocycle extends Vehicle {
    constructor(engine, cost, brand) {
        super(engine, cost, 2);
        this.brand = brand;
    }
}
class Car extends Vehicle {
    constructor(cost, brand, passengers) {
        super('large', cost, 4);
        this.brand = brand;
        this.passengers = passengers;
    }
}

const car1 = new car(10000, 'BENZ', 2)
const car2 = new car(20000, 'tokyo', 4)
const motocycle1 = new Motocycle('small', 30000, 'BENZ3')
const motocycle2 = new Motocycle('xs', 40000, 'BENZ4')
const vehicle1 = new Vehicle('all', 5555, 8)