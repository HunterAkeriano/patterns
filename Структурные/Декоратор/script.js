"use strict";
class FalsePresident {
    constructor(falsy) {
        this.falsy = falsy;
    }
    addPresident(name) {
        return this.falsy.addPresident(name).toLowerCase() + ' фальшивый президент';
    }
}
class Country {
    constructor() {
        this.president = 'Ваассаба';
    }
    addPresident(name) {
        return `Новый президент: ${name}`;
    }
}
const niggeria = new Country();
function ReturnPres(name, president) {
    return president.addPresident(name);
}
console.log(ReturnPres("Букашка", niggeria));
const falsePresident = new FalsePresident(niggeria);
console.log(ReturnPres("Дима", falsePresident));
