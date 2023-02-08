interface MyCar{
    getAssembly():string,
    addPowerCar(power:number):number,
    addShiftCar(shift:string):string,
    addModelCar(model:number):number,

}



class Fabrics{
    private power!:number;
    private model!: number;
    private shift!: string;

    public getPower(){
        return this.power;
    }
    public addPower(power:number):number{
        return this.power = power;
    }
    public getModel(){
        return  this.model;
    }
    public addModel(model:number):number{
        return this.model = model;
    }
    public getShift(){
        return this.shift;
    }
    public addShift(shift: string):string{
        return this.shift = shift;
    }
    assembly(){
        return `Ваз модели: ${this.model}\n
        Имеет мощность: ${this.power}\n
        На ${this.shift} приводе`
    }
}




class AssemblyCar implements MyCar{
    private car  = new Fabrics();
    
    getAssembly(): string {
        return this.car.assembly();
    }
    addPowerCar(power: number): number {
        return this.car.addPower(power);
    }
    addShiftCar(shift: string): string {
        return this.car.addShift(shift);
    }
    addModelCar(model: number): number {
        return this.car.addModel(model);
    }
}

class ResultCar{
    static assembly(car: MyCar){
        car.addModelCar(2101);
        car.addPowerCar(80);
        car.addShiftCar('Задний');
        return car.getAssembly();
    }
}

function cars(){
    const assemb:AssemblyCar = new AssemblyCar();
    const result = ResultCar.assembly(assemb);
    console.log(result);
}
cars();