interface Car{
    name: string;
    model: number;
    year: number;
    getManufacturer(): string;
}


abstract class CarFactoryMethod{
    private car: Car | undefined;
    abstract carCreate():Car;

    private getCar(): Car {
        if (!this.car) {
         this.car = this.carCreate();
        }
      
        return this.car;
    }
    run(): void {
        const car = this.getCar();
      
        console.log(`${car.getManufacturer()} запущен`);
    }
}

class VAZ implements Car{
    name: string;
    model: number;
    year: number;

    constructor(name:string, model: number, year: number) {
        this.name = name;
        this.model = model;
        this.year = year;
       }

    getManufacturer(): string {
       return 'VAZ';
    }
    
}
class ZAZ implements Car{
    name: string;
    model: number;
    year: number;

    constructor(name:string, model: number, year: number) {
        this.name = name;
        this.model = model;
        this.year = year;
       }

    getManufacturer(): string {
       return 'ZAZ';
    }
    
}


class NewVaz extends CarFactoryMethod{
    carCreate(): Car {
        return new VAZ('ВАЗ', 2101, 1979);
    }
}

class NewZaz extends CarFactoryMethod{
    carCreate(): Car {
        return new ZAZ('Заз', 2312, 2002);
    }
}

console.log(new NewVaz().carCreate())