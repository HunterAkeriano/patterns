"use strict";
class Tractor {
    constructor(collection) {
        this.position = 0;
        this.collection = collection;
    }
    current() {
        return this.collection.getItems()[this.position];
    }
    next() {
        const item = this.collection.getItems()[this.position];
        ++this.position;
        return item;
    }
    valid() {
        return this.position < this.collection.getCount();
    }
    resetPosition() {
        this.position = 0;
    }
}
class ModelTractor {
    constructor() {
        this.items = [];
    }
    getItems() {
        return this.items;
    }
    getCount() {
        return this.items.length;
    }
    addItem(item) {
        this.items.push(item);
    }
    getIterator() {
        return new Tractor(this);
    }
}
const listTractors = new ModelTractor();
listTractors.addItem('МТЗ 920');
listTractors.addItem('Лексион 5140');
listTractors.addItem('ЮМЗ 6А');
function research(filter) {
    let naming = "";
    while (resarch.valid()) {
        const element = resarch.next();
        const items = element.split(' ');
        for (const item of items) {
            if (item == filter) {
                naming = element;
            }
        }
    }
    resarch.resetPosition();
    return naming;
}
const resarch = listTractors.getIterator();
console.log(`По вашему запросу: 'МТЗ', найдено: \n
 ${research("МТЗ")}.\n
 По запросу: "ЮМЗ" найденно: \n
 ${research("ЮМЗ")}`);
