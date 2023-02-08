"use strict";
class Fabrics {
    getPower() {
        return this.power;
    }
    addPower(power) {
        return this.power = power;
    }
    getModel() {
        return this.model;
    }
    addModel(model) {
        return this.model = model;
    }
    getShift() {
        return this.shift;
    }
    addShift(shift) {
        return this.shift = shift;
    }
    assembly() {
        return `Ваз модели: ${this.model}\n
        Имеет мощность: ${this.power}\n
        На ${this.shift} приводе`;
    }
}
class AssemblyCar {
    constructor() {
        this.car = new Fabrics();
    }
    getAssembly() {
        return this.car.assembly();
    }
    addPowerCar(power) {
        return this.car.addPower(power);
    }
    addShiftCar(shift) {
        return this.car.addShift(shift);
    }
    addModelCar(model) {
        return this.car.addModel(model);
    }
}
class ResultCar {
    static assembly(car) {
        car.addModelCar(2101);
        car.addPowerCar(80);
        car.addShiftCar('Задний');
        return car.getAssembly();
    }
}
function cars() {
    const assemb = new AssemblyCar();
    const result = ResultCar.assembly(assemb);
    console.log(result);
}
cars();
