interface CarUsers{
    car: string;
    getCar(): string;
}

@NewModelCar
class User implements CarUsers{
    car:string = 'Vaz2101'
    getCar(){
        return this.car;
    }
}


function NewModelCar<T extends {new(...args: any[]):{}}>(constructor: T){
    return  class extends constructor{
       car = 'BMW M3'
    }
}
console.log(new User().getCar())