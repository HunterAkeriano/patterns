interface UserCar {
    name: string,
    model: number,
    power: number
}


const car: UserCar = { 
    name: 'VAZ',
    model: 2101,
    power: 89
}

// decorator
function NewPower(obj:UserCar){
    obj.power += 10;
    return obj;
}
// получаем новую мощность автомобиля
console.log(NewPower(car).power);
