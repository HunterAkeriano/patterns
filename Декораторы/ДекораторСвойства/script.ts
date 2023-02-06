interface CarUsers{
    car: string;
    getCar(): string;
}

class User implements CarUsers{
    car:string = 'Vaz2101';

    getCar(){
        return this.car;
    }
}

function newCar(car:string){
    return(
        target: Object,
        propertyKey: string | symbol
    ) =>{
        let value:string;
        const setter = function (newValue:string){
            if(newValue !== value){
                value = newValue;
            }else{
                console.log(`Автомобиль уже есть в списке`)
            }
        }
        const getter = function(){
            return value;
        }

        Object.defineProperty(target, propertyKey, {
             set: setter,
              get: getter
            })
    }
}

const newCars = new User();
console.log(newCars.car = 'Vaz2101')