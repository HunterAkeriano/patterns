interface FabriscCar{
    assembly(coleso: string, motor: string, shift: string): string;
    painting(color: string): string;
    repair(details: string): string;
}

class Vaz implements FabriscCar{
    assembly(coleso: string, motor: string, shift: string):string {
        return `Заменены: ${coleso}, ${motor}, ${shift}`;
    }
    painting(color: string): string {
        return `Машина окрашена в: ${color}`;
    }
    repair(details: string): string{
        return `отрементированое: ${details}`;
    }
    
}

class Jetta implements FabriscCar{
    assembly(coleso: string, motor: string, shift: string):string {
        if(coleso.length > motor.length){
            return `Замен: ${coleso}, ${motor}`};
        return `Заменено только: ${shift}`;    
    }
    painting(color: string): string {
       if(color.length > 3){
        return `Машина окрашена в красный цвет`;
       }
       return `Машина окрашена в голубой цвет`;
    }
    repair(details: string): string{
        return `отрементированое: ${details}`;
    }
    
}

class Factory{
    constructor(public factory: FabriscCar){}

    upAssembly(){
        return this.factory.assembly('Круглое', "4-х цилиндровый", "Задний");
    }
}

class NewFactory extends Factory{
    constructor(factory: FabriscCar ){
        super(factory);
    }

    newCar(){
        if(1 > 4){
          return  this.factory.assembly('Квадратное', "1-цилиндр", "передний");
        }
        return this.factory.painting('Белое');
    }
}

const myCar = new Factory(new Vaz());
console.log(myCar.upAssembly())
