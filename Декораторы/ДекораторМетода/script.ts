interface CarUsers{
    car: string;
    getCar(): string;
}

class User implements CarUsers{
    car:string = 'Vaz2101';

    @Input
    getCar(){
        return this.car;
    }
}

function Input(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[])=>any>
){
    descriptor.value = ()=>{
     return `my car: BMW`
    }
}


console.log(new User().getCar())