abstract class Tractor{
    protected startEngine?: Tractor;

    stepStart(tractor: Tractor):Tractor{
        this.startEngine = tractor;

        return this.startEngine;
    }
    abstract fuel(litrs: number):void;
}

class MTZ extends Tractor{
    fuel(litrs: number): void {
        if(litrs <= 80){
            console.log('Вы заливаете топливо в МТЗ');
            return;
        }
        this.startEngine?.fuel(litrs);
    }
}

class YMZ extends Tractor{
    fuel(litrs: number): void {
        if(litrs >= 90){
            console.log('Вы заливаете топливо в ЮМЗ');
            return;
        }
        this.startEngine?.fuel(litrs);
    }
}

class Class extends Tractor{
    fuel(litrs: number): void {
        if(litrs >= 500){
            console.log('Вы заливаете топливо в CLASS');
            return;
        }
        this.startEngine?.fuel(litrs);
    }
}
class Default extends Tractor{
    fuel(litrs: number): void {
        if(litrs == 0){
            console.log('Трактор сгорел');
            return;
        }
        this.startEngine?.fuel(litrs);
    }
}


const fuelTractor = new Default();
fuelTractor
    .stepStart(new YMZ())
    .stepStart(new MTZ())
    .stepStart(new Class());

fuelTractor.fuel(90);