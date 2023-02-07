enum Car{
    BMW = 1,
    VAZ = 2,
    ZAZ = 3
}



class Creator{
    static create(car:Car){
        if(car === 1){
            return new Bmw();
        }else if(car === 2){
            return new Vaz();
        }
        else if(car === 3){
            return new Zaz();
        }
    }
}

class Bmw{
    name:string = 'BMW';
    myName(){
        return `Вы создали: ${this.name}`;
    }
}


class Vaz{
    name:string = 'Vaz';
    myName(){
        return `Вы создали: ${this.name}`;
    }
}

class Zaz{
    name:string = 'Zaz';
    myName(){
        return `Вы создали: ${this.name}`;
    }
}

const autoCreator = Creator.create(2);
console.log(autoCreator!.myName());