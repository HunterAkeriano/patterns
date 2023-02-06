"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class User {
    constructor() {
        this.car = 'Vaz2101';
    }
    getCar() {
        return this.car;
    }
}
__decorate([
    newCar('Vaz2101')
], User.prototype, "car", void 0);
function newCar(car) {
    return (target, propertyKey) => {
        let value;
        const setter = function (newValue) {
            if (newValue !== value) {
                value = newValue;
            }
            else {
                console.log(`Автомобиль уже есть в списке`);
            }
        };
        const getter = function () {
            return value;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
const newCars = new User();
console.log(newCars.car = 'Vaz2101');
