class Tractor{
    status: string = 'Заглушен';
    fuel: number = 0;
}

abstract class Command{
    tractor: Tractor;
    constructor(tractor: Tractor){
        this.tractor = tractor;
    }
    abstract engine():void;
    abstract fuel(): void;
}

class Started extends Command{
    constructor(tractor: Tractor){
        super(tractor);
    }
    engine(): void {
        this.tractor.status = 'Запущен';
    }
    fuel(): void {
        this.tractor.fuel = 80;
    }
    
}

class Outs extends Command{
    constructor(tractor: Tractor){
        super(tractor);
    }
    engine(): void {
        this.tractor.status = 'Заглушен';
    }
    fuel(): void {
        this.tractor.fuel = 0;
    }
    
}


class Driver{
    tractor: Tractor;
    started: Started;
    out: Outs;
    constructor(){
        this.tractor = new Tractor();
        this.started = new Started(this.tractor);
        this.out = new Outs(this.tractor);
    }
    info(){
        let resultStr = `Состояние трактора: ${this.tractor.status}\n
        топливо: ${this.tractor.fuel}`
        return resultStr;
    }
}

const dreiverTractor = new Driver();
// завожу трактор
dreiverTractor.started.engine();
dreiverTractor.started.fuel();
console.log(dreiverTractor.info())

// глушу его
dreiverTractor.out.engine();
dreiverTractor.out.fuel();
console.log(dreiverTractor.info())