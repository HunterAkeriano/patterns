"use strict";
class Mediator {
    constructor(one, two) {
        this.ReFuel = one;
        this.ReFuel.setMediator(this);
        this.noneFuel = two;
        this.noneFuel.setMediator(this);
    }
    getFuel(fuel) {
        if (fuel == 'заправлен') {
            console.log("У трактора полный бак");
        }
        else {
            console.log("К сожалению в тракторе нет солярки");
        }
    }
}
class Tractor {
    constructor(mediator) {
        this.mediator = mediator;
    }
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class ReFuel extends Tractor {
    fueling() {
        console.log('Трактор заправлен');
        this.mediator.getFuel('заправлен');
    }
}
class NoneFuel extends Tractor {
    none() {
        console.log('Трактор не заправлен');
        this.mediator.getFuel('не заправлен');
    }
}
const refuiling = new ReFuel();
const nonefueling = new NoneFuel();
const mediator = new Mediator(refuiling, nonefueling);
refuiling.fueling();
