"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// сама фабрика
let User = class User {
    getCar() {
        return this.car;
    }
};
User = __decorate([
    setCar('Lamborgini')
], User);
// явно задаю что в каре не храниться ничего
function noneCar(target) {
    target.prototype.car = null;
}
// фабрика которая возвращает функцию нонеКар
function setCar(car) {
    return (target) => {
        target.prototype.car = car;
    };
}
console.log(new User().getCar());
