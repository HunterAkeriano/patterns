"use strict";
class Lanos {
    constructor(name, model, shift) {
        this.name = name;
        this.model = model;
        this.shift = shift;
        this.name = name;
        this.model = model;
        this.shift = shift;
    }
    getResult() {
        return `Имя авто: ${this.name},\n
        Модель авто: ${this.model},\n
        Привод: ${this.shift}`;
    }
    clone() {
        return new Lanos(this.name, this.model, this.shift);
    }
}
const myProto = new Lanos('Ланос', 1234, "Задний");
console.log(myProto);
console.log(myProto.clone());
