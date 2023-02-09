"use strict";
class VAZ {
    constructor() {
        this.typefuel = 'Бензин';
    }
    addFuel(typefuel) {
        this.typefuel = typefuel;
    }
}
class Skoda {
    constructor() {
        this.typefuel = 'Солярка';
    }
    typeFuel(typefuel) {
        this.typefuel = typefuel;
        return this.typefuel;
    }
}
class AdapterSkoda {
    constructor(car) {
        this.car = new Skoda();
        this.car = car;
    }
    addFuel() {
        this.car.typefuel = 'Бензин';
    }
}
// просто экземпляры классов
const vaz = new VAZ();
const skoda = new Skoda();
const turboSkoda = new AdapterSkoda(skoda);
turboSkoda.addFuel();
vaz.typefuel;
console.log(skoda.typefuel);
console.log(vaz.typefuel);
