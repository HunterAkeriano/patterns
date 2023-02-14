"use strict";
class Engine {
    engine(visitor) {
        visitor.getReultEngine(this);
    }
}
class Shift {
    engine(visitor) {
        visitor.getReultShift(this);
    }
}
class GetStatus {
    getReultEngine(element) {
        console.log(`Двигатель в норме`);
    }
    getReultShift(element) {
        console.log(`Задний мост в норме`);
    }
}
class Automatic {
    getReultEngine(element) {
        console.log(`Двигатель в плавающих оборотах`);
    }
    getReultShift(element) {
        console.log(`Задний мост в автоматическом режиме блокировки`);
    }
}
function resultTractor(tractor, visitor) {
    for (const component of tractor) {
        component.engine(visitor);
    }
}
const components = [new Engine(), new Shift(),];
const getStatus = new GetStatus();
resultTractor(components, getStatus);
const auto = new Automatic();
resultTractor(components, auto);
