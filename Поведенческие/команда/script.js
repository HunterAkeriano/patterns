"use strict";
class Tractor {
    constructor() {
        this.status = 'Заглушен';
        this.fuel = 0;
    }
}
class Command {
    constructor(tractor) {
        this.tractor = tractor;
    }
}
class Started extends Command {
    constructor(tractor) {
        super(tractor);
    }
    engine() {
        this.tractor.status = 'Запущен';
    }
    fuel() {
        this.tractor.fuel = 80;
    }
}
class Outs extends Command {
    constructor(tractor) {
        super(tractor);
    }
    engine() {
        this.tractor.status = 'Заглушен';
    }
    fuel() {
        this.tractor.fuel = 0;
    }
}
class Driver {
    constructor() {
        this.tractor = new Tractor();
        this.started = new Started(this.tractor);
        this.out = new Outs(this.tractor);
    }
    info() {
        let resultStr = `Состояние трактора: ${this.tractor.status}\n
        топливо: ${this.tractor.fuel}`;
        return resultStr;
    }
}
const dreiverTractor = new Driver();
// завожу трактор
dreiverTractor.started.engine();
dreiverTractor.started.fuel();
console.log(dreiverTractor.info());
// глушу его
dreiverTractor.out.engine();
dreiverTractor.out.fuel();
console.log(dreiverTractor.info());
