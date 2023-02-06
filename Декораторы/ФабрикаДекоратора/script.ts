interface CarUsers{
    car: string;
    getCar(): string;
}
// сама фабрика
@setCar('Lamborgini')
class User implements CarUsers{
    car:string;
    getCar(){
        return this.car;
    }
}

// явно задаю что в каре не храниться ничего
function noneCar(target:Function){
    target.prototype.car = null;
}

// фабрика которая возвращает функцию нонеКар
function setCar(car:string){
    return (target:Function)=>{
         target.prototype.car = car;
    }
}
console.log(new User().getCar())