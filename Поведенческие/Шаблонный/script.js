"use strict";
class Tractor {
    started() {
        this.getStarted();
        this.offTrailer();
        this.onTrailer();
    }
    getStarted() {
        console.log('Трактор заведён');
    }
    getSustem() {
        console.log('Трактор работает без перебоев');
    }
}
class Trailer extends Tractor {
    offTrailer() {
        console.log(`Прицеп отключен`);
    }
    onTrailer() {
        console.log(`Прицеп подключен`);
    }
}
class Plow extends Tractor {
    offTrailer() {
        console.log(`Плуг отключен`);
    }
    onTrailer() {
        console.log(`Плуг подключен`);
    }
}
function startTractor(tractor) {
    tractor.started();
}
// подключаем прицем
startTractor(new Trailer());
// подключаем плуг
startTractor(new Plow());
