"use strict";
const car = {
    name: 'VAZ',
    model: 2101,
    power: 89
};
// decorator
function NewPower(obj) {
    obj.power += 10;
    return obj;
}
// получаем новую мощность автомобиля
console.log(NewPower(car).power);
