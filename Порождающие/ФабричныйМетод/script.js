"use strict";
class CarFactoryMethod {
    getNewName() {
        if (20 > 10) {
            return this.name = 'BMW';
        }
    }
}
class VAZ {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    getManufacturer() {
        return 'VAZ';
    }
}
class ZAZ {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    getManufacturer() {
        return 'ZAZ';
    }
}
class NewVaz extends CarFactoryMethod {
    carCreate() {
        return new VAZ('ВАЗ', 2101, 1979);
    }
}
class NewZaz extends CarFactoryMethod {
    carCreate() {
        return new VAZ('Заз', 2312, 2002);
    }
}
console.log(new NewVaz().carCreate());
