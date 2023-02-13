"use strict";
class Tractor {
    stepStart(tractor) {
        this.startEngine = tractor;
        return this.startEngine;
    }
}
class MTZ extends Tractor {
    fuel(litrs) {
        var _a;
        if (litrs <= 80) {
            console.log('Вы заливаете топливо в МТЗ');
            return;
        }
        (_a = this.startEngine) === null || _a === void 0 ? void 0 : _a.fuel(litrs);
    }
}
class YMZ extends Tractor {
    fuel(litrs) {
        var _a;
        if (litrs >= 90) {
            console.log('Вы заливаете топливо в ЮМЗ');
            return;
        }
        (_a = this.startEngine) === null || _a === void 0 ? void 0 : _a.fuel(litrs);
    }
}
class Class extends Tractor {
    fuel(litrs) {
        var _a;
        if (litrs >= 500) {
            console.log('Вы заливаете топливо в CLASS');
            return;
        }
        (_a = this.startEngine) === null || _a === void 0 ? void 0 : _a.fuel(litrs);
    }
}
class Default extends Tractor {
    fuel(litrs) {
        var _a;
        if (litrs == 0) {
            console.log('Трактор сгорел');
            return;
        }
        (_a = this.startEngine) === null || _a === void 0 ? void 0 : _a.fuel(litrs);
    }
}
const fuelTractor = new Class();
fuelTractor
    .stepStart(new YMZ())
    .stepStart(new MTZ())
    .stepStart(new Default());
fuelTractor.fuel(90);
