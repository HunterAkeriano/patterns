"use strict";
class Tracotrs {
    constructor(sharedState) {
        this.sharedState = sharedState;
    }
    operation(uniqueState) {
        console.log(`unique (${JSON.stringify(uniqueState)}) сосотяние.`);
    }
}
class TractorsFactory {
    constructor(Traktor) {
        this.tractor = {};
        for (const state of Traktor) {
            this.tractor[this.getKey(state)] = new Tracotrs(state);
        }
    }
    getKey(state) {
        return state.join('_');
    }
    getTractor(sharedState) {
        const key = this.getKey(sharedState);
        if (!(key in this.tractor)) {
            console.log('Создатель тракторов: Я не могу создать один трактор.');
            this.tractor[key] = new Tracotrs(sharedState);
        }
        else {
            console.log('Создатель тракторов: Я создал такой трактор');
        }
        return this.tractor[key];
    }
    listTractor() {
        const count = Object.keys(this.tractor).length;
        console.log(`\nСоздатель тракторов: Я могу ${count} разработать такой:`);
        for (const key in this.tractor) {
            console.log(key);
        }
    }
}
const factory = new TractorsFactory([
    ['МТЗ', '920', 'Синий'],
    ['ЮМЗ', '6А', 'Зелёный'],
    // ...
]);
factory.listTractor();
function addPhone(ff, brand, model, color) {
    console.log('Трактор сохранён в моей памяти.');
    const mtz = ff.getTractor([brand, model, color]);
}
addPhone(factory, 'МТЗ', '820', 'Синий');
addPhone(factory, 'ЮМЗ', '6А', 'Красный');
factory.listTractor();
