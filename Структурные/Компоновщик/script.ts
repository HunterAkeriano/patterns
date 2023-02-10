interface Army{
    getQuantity():number;
    QuantityRang():number;
}

// компонировщик
class Platoon implements Army{
    private solderies: Army[] = [];

    addSolderies(people: Army){
        this.solderies.push(people);
    }
    getQuantity(){
        return this.solderies.reduce((acc, curr) => acc + curr.getQuantity(), 0);
    }
    QuantityRang(): number {
        return this.solderies.reduce((acc, curr) => acc + curr. QuantityRang(), 0);
    }
}

// конкретный взвод
class Tankers implements Army{
    public quantityRang: number = 5;
    constructor(private quantity:number){
        this.quantity = quantity;
    }

    getQuantity(): number {
        return this.quantity
    }
    QuantityRang(): number {
        return this.quantity;
    }

}
// конкретный взвод
class Stormtroopers implements Army{

    public quantityRang: number = 5;
    constructor(private quantity:number){
        this.quantity = quantity;
    }

    getQuantity(): number {
        return this.quantity
    }
    QuantityRang(): number {
        return this.quantity;
    }
}
// конкретный взвод
class RadioOperators implements Army{

    public quantityRang: number = 5;
    constructor(private quantity:number){
        this.quantity = quantity;
    }

    getQuantity(): number {
        return this.quantity
    }
    QuantityRang(): number {
        return this.quantity;
    }

}

// конкретная композиция
const myTankers = new Platoon();
myTankers.addSolderies(new Tankers(20));
myTankers.addSolderies(new Tankers(5));
myTankers.addSolderies(new Tankers(15));


console.log(`Состав армии состоит из первой бригады танкистов: ${myTankers.getQuantity()} человек`);

const myArmy = new Platoon();
myArmy.addSolderies(new Stormtroopers(11));
myArmy.addSolderies(new Stormtroopers(4));
myArmy.addSolderies(new Stormtroopers(5));
console.log(`Состав армии состоит из второй бригады танкистов: ${myArmy.getQuantity()} человек`);

