"use strict";
class OneTractor {
    isStart() {
        return `Трактор запущен`;
    }
    unStart() {
        return `Трактор заглушен`;
    }
}
class Buksir {
    constructor(tractor) {
        this.tractor = tractor;
    }
    isStart(pogoda, fuel) {
        if (this.createStart(pogoda, fuel)) {
            return this.tractor.isStart();
        }
        return this.tractor.unStart();
    }
    createStart(pogoda, fuel) {
        return pogoda == 'Тёплая' && fuel >= 20;
    }
    unStart() {
        return this.tractor.unStart();
    }
}
const oneTractor = new Buksir(new OneTractor());
console.log(oneTractor.isStart("Тёплая", 19));
console.log(oneTractor.isStart("Тёплая", 21));
