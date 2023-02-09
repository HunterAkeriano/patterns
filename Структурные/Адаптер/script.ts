interface myVaz{
    typefuel?: string;
    addFuel(typeFuel:string): void;
}


class VAZ implements myVaz{
    typefuel: string = 'Бензин';
     addFuel(typefuel:string){
        this.typefuel = typefuel;
     }
 }
 
 class Skoda{
     typefuel: string  = 'Солярка';
     typeFuel(typefuel: string){
        this.typefuel = typefuel;
        return this.typefuel;
     }
 }
 
 class AdapterSkoda implements myVaz{
    public car: Skoda = new Skoda();
    constructor(car:Skoda){
        this.car = car;
    }
    addFuel() {
        this.car.typefuel = 'Бензин';
    }
 }
 
 // просто экземпляры классов
 const vaz = new VAZ();
 const skoda = new Skoda(); 
 
 
 
 const turboSkoda:AdapterSkoda  = new AdapterSkoda (skoda);
 turboSkoda.addFuel();
 vaz.typefuel;
console.log(skoda.typefuel)
console.log( vaz.typefuel)