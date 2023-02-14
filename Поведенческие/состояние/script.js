"use strict";
class State {
    setNextState(state) {
        this.state = state;
        return this.state;
    }
    nextState() {
        return this.state;
    }
}
class ColorTractor {
    constructor(state) {
        this.state = state;
    }
    paints() {
        if (this.state) {
            this.state.paints();
            this.state = this.state.nextState();
        }
        else {
            console.log('Трактор в заводской красске');
        }
    }
    changeState(state) {
        this.state = state;
    }
}
class Red extends State {
    paints() {
        console.log('Трактор окрашен в красный');
    }
}
class Blue extends State {
    paints() {
        console.log('Трактор окрашен в синий');
    }
}
// const state = new DarkMode();
const colorTractor = new ColorTractor(new Blue());
colorTractor.paints();
