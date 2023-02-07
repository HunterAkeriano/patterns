interface PrototypeVaz{
    model: number,
    name: string,
    power: number,
    shift: string
}

const myPrototype = {
    model: 21099,
}



class Creator{
    static createCar(obj: {model:number}){
        if(obj.model == 2101){
            return new OldCar();
        }else if(obj.model == 21099){
            return new NewCar();
        }
        return new NoneCar();
    }

}

class OldCar implements PrototypeVaz{
    model:number = 2101;
    name: string ='Жигуль';
    power:number = 90;
    shift:string = "back";
    infoCar(){
        return `
            Название автомобиля: ${this.name}, \n
            Модель автомобиля: ${this.model}, \n
            Мощность двигателя: ${this.power}, \n
            Привод: ${this.shift} \n

        `
    }

}

class NewCar implements PrototypeVaz{
    model:number = 21099;
    name: string ='Vaz';
    power:number = 120;
    shift:string = "font";
    infoCar(){
        return `
            Название автомобиля: ${this.name}, \n
            Модель автомобиля: ${this.model}, \n
            Мощность двигателя: ${this.power}, \n
            Привод: ${this.shift} \n

        `
    }

}

class NoneCar implements PrototypeVaz{
    model:number = 0;
    name: string ='Вы не указали';
    power:number = 0;
    shift:string = "Вы не указали";
    infoCar(){
        return `
            Название автомобиля: ${this.name}, \n
            Модель автомобиля: ${this.model}, \n
            Мощность двигателя: ${this.power}, \n
            Привод: ${this.shift} \n

        `
    }

}

const resultCar = Creator.createCar(myPrototype);
console.log(resultCar.infoCar());