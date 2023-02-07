"use strict";
const myPrototype = {
    model: 21099,
};
class Creator {
    static createCar(obj) {
        if (obj.model == 2101) {
            return new OldCar();
        }
        else if (obj.model == 21099) {
            return new NewCar();
        }
        return new NoneCar();
    }
}
class OldCar {
    constructor() {
        this.model = 2101;
        this.name = 'Жигуль';
        this.power = 90;
        this.shift = "back";
    }
    infoCar() {
        return `
            Название автомобиля: ${this.name}, \n
            Модель автомобиля: ${this.model}, \n
            Мощность двигателя: ${this.power}, \n
            Привод: ${this.shift} \n

        `;
    }
}
class NewCar {
    constructor() {
        this.model = 21099;
        this.name = 'Vaz';
        this.power = 120;
        this.shift = "font";
    }
    infoCar() {
        return `
            Название автомобиля: ${this.name}, \n
            Модель автомобиля: ${this.model}, \n
            Мощность двигателя: ${this.power}, \n
            Привод: ${this.shift} \n

        `;
    }
}
class NoneCar {
    constructor() {
        this.model = 0;
        this.name = 'Вы не указали';
        this.power = 0;
        this.shift = "Вы не указали";
    }
    infoCar() {
        return `
            Название автомобиля: ${this.name}, \n
            Модель автомобиля: ${this.model}, \n
            Мощность двигателя: ${this.power}, \n
            Привод: ${this.shift} \n

        `;
    }
}
const resultCar = Creator.createCar(myPrototype);
console.log(resultCar.infoCar());
