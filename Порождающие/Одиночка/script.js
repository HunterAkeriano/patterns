"use strict";
class Govermant {
    static getInstance() {
        if (!Govermant.Instance) {
            Govermant.Instance = new Govermant();
        }
        return Govermant.Instance;
    }
    President(name) {
        return `Новый президент: ${name}`;
    }
}
// создаю точку входа в одиночку
let newInstanse = Govermant.getInstance();
let president = ['Зеленский', "Порошенко", "Аррестович"];
// просто фанфункция выбора президента
function elections(name) {
    let randomPresident = Math.floor(Math.random() * name.length);
    return newInstanse.President(name[randomPresident]);
}
console.log(elections(president));
