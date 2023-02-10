"use strict";
// компонировщик
class Platoon {
    constructor() {
        this.solderies = [];
    }
    addSolderies(people) {
        this.solderies.push(people);
    }
    getQuantity() {
        return this.solderies.reduce((acc, curr) => acc + curr.getQuantity(), 0);
    }
    QuantityRang() {
        return this.solderies.reduce((acc, curr) => acc + curr.QuantityRang(), 0);
    }
}
// конкретный взвод
class Tankers {
    constructor(quantity) {
        this.quantity = quantity;
        this.quantityRang = 5;
        this.quantity = quantity;
    }
    getQuantity() {
        return this.quantity;
    }
    QuantityRang() {
        return this.quantity;
    }
}
// конкретный взвод
class Stormtroopers {
    constructor(quantity) {
        this.quantity = quantity;
        this.quantityRang = 5;
        this.quantity = quantity;
    }
    getQuantity() {
        return this.quantity;
    }
    QuantityRang() {
        return this.quantity;
    }
}
// конкретный взвод
class RadioOperators {
    constructor(quantity) {
        this.quantity = quantity;
        this.quantityRang = 5;
        this.quantity = quantity;
    }
    getQuantity() {
        return this.quantity;
    }
    QuantityRang() {
        return this.quantity;
    }
}
// конкретная композиция
const myTankers = new Platoon();
myTankers.addSolderies(new Tankers(20));
myTankers.addSolderies(new Tankers(5));
myTankers.addSolderies(new Tankers(15));
console.log(`Состав армии состоит из первой бригады танкистов: ${myTankers.getQuantity()} человек`);
const myArmy = new Platoon();
myArmy.addSolderies(new Stormtroopers(11));
myArmy.addSolderies(new Stormtroopers(4));
myArmy.addSolderies(new Stormtroopers(5));
console.log(`Состав армии состоит из второй бригады танкистов: ${myArmy.getQuantity()} человек`);
