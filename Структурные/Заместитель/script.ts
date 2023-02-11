interface Tractor{
    isStart(pogoda?:string, fuel?:number):string;
    unStart():string;
}


class OneTractor implements Tractor{
    isStart(): string {
        return `Трактор запущен`;
    }
    unStart(): string {
        return `Трактор заглушен`;
    }
}

class Buksir implements Tractor{
    private tractor!: OneTractor;
    constructor(tractor: OneTractor){
        this.tractor = tractor;
    }

    isStart(pogoda:string, fuel:number): string {
        if(this.createStart(pogoda, fuel)){
            return this.tractor.isStart();
        }
        return this.tractor.unStart();
    }
    createStart(pogoda: string, fuel: number){
        return pogoda == 'Тёплая' && fuel >= 20;
    }

   

    unStart(): string {
        return this.tractor.unStart();
    }
}

const oneTractor = new Buksir(new OneTractor());
console.log(oneTractor.isStart("Тёплая", 19)); 
console.log(oneTractor.isStart("Тёплая", 21)); 
