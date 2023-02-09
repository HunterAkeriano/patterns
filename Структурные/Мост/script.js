"use strict";
class Vaz {
    assembly(coleso, motor, shift) {
        return `Заменены: ${coleso}, ${motor}, ${shift}`;
    }
    painting(color) {
        return `Машина окрашена в: ${color}`;
    }
    repair(details) {
        return `отрементированое: ${details}`;
    }
}
class Jetta {
    assembly(coleso, motor, shift) {
        if (coleso.length > motor.length) {
            return `Замен: ${coleso}, ${motor}`;
        }
        ;
        return `Заменено только: ${shift}`;
    }
    painting(color) {
        if (color.length > 3) {
            return `Машина окрашена в красный цвет`;
        }
        return `Машина окрашена в голубой цвет`;
    }
    repair(details) {
        return `отрементированое: ${details}`;
    }
}
class Factory {
    constructor(factory) {
        this.factory = factory;
    }
    upCar() {
        return this.factory.assembly('Круглое', "4-х цилиндровый", "Задний");
    }
}
class NewFactory extends Factory {
    constructor(factory) {
        super(factory);
    }
    newCar() {
        if (1 > 4) {
            this.factory.assembly('Квадратное', "1-цилиндр", "передний");
        }
        return this.factory.painting('Белое');
    }
}
const myCar = new Factory(new Vaz());
console.log(myCar.upCar());
