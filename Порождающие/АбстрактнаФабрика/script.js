"use strict";
class FactoryCar {
    createCar() {
        return new Car();
    }
    createEngine() {
        return new Engine();
    }
}
class Car {
    constructor() {
        this.name = 'Vaz';
        this.model = 2101;
    }
    out() {
        return `Your car us ${this.name} ${this.model}`;
    }
}
class Engine {
    constructor() {
        this.name = 'ЯМЗ';
        this.model = 236;
    }
    out() {
        return `Your engine us ${this.name} ${this.model}`;
    }
}
function myResultCar(factory) {
    const cars = factory.createCar();
    const engine = factory.createEngine();
    console.log(cars.out());
    console.log(engine.out());
}
myResultCar(new FactoryCar());
