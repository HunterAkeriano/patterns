"use strict";
class CareTaker {
    constructor() {
        this.mementos = [];
        /**
         * указатель на текущий снимок, -1 означает что история пуста
         */
        this.current = -1;
    }
    save(memento) {
        this.mementos.push(memento);
        this.current++;
    }
    undo() {
        if (this.current >= 0) {
            this.current--;
            return this.mementos[this.current];
        }
        return undefined;
    }
    redo() {
        if (this.current < this.mementos.length - 1) {
            this.current++;
            return this.mementos[this.current];
        }
        return undefined;
    }
}
class TextEditor {
    constructor() {
        this.text = 'Просто текст';
        this.careTaker = new CareTaker();
        this.careTaker.save(new TextMemento(this.text));
    }
    changeText(text) {
        this.text = text;
        this.careTaker.save(new TextMemento(this.text));
    }
    getText() {
        return this.text;
    }
    undo() {
        const memento = this.careTaker.undo();
        if (memento) {
            this.text = memento.getText();
        }
    }
    redo() {
        const memento = this.careTaker.redo();
        if (memento) {
            this.text = memento.getText();
        }
    }
}
class TextMemento {
    constructor(text) {
        this.text = '';
        this.text = text;
    }
    getText() {
        return this.text;
    }
}
const textEditor = new TextEditor();
textEditor.changeText('МТЗ 820');
textEditor.changeText('ЮМЗ');
console.log(textEditor.getText());
console.log('\n2 раза отменить\n');
textEditor.undo();
textEditor.undo();
console.log(textEditor.getText());
console.log('\nповторить\n');
textEditor.undo();
console.log(textEditor.getText());
console.log('\nповторить\n');
textEditor.redo();
console.log(textEditor.getText());
