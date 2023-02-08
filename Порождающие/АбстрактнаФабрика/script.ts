interface factory{
    createCar(): Car;
    createEngine(): OldCar;
}

class FactoryCar implements factory{
    public createCar():Car{
        return new Car();
    }
    public createEngine(): OldCar{
        return new OldCar();
    }
}

class FactoryNewCar implements factory{
    public createCar():Car{
        return new Car();
    }
    public createEngine(): OldCar{
        return new OldCar();
    }
}


interface MyCar{
    name: string,
    model: number,
    out():string
}
class Car implements MyCar{
    name:string  = 'Vaz';
    model = 2101;
    out(){
        return `Your car us ${this.name} ${this.model}`;
    }
}
class OldCar implements MyCar{
    name:string  = 'ЯМЗ';
    model = 236;
    out(){
        return `Your engine us ${this.name} ${this.model}`;
    }
}

function AbstractFactory(factory: factory){
    const cars = factory.createCar();
    const engine = factory.createEngine();
    console.log(cars.out());
    console.log(engine.out());
}

AbstractFactory(new FactoryCar());