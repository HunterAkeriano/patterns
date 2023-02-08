interface Car {
  model: string;
  year: number;
  getManufacturer(): string;
 }
 
 abstract class CarFactoryMethod {
  private car: Car | undefined;
 
  abstract createCar(): Car;
 
  private getCar(): Car {
   if (!this.car) {
    this.car = this.createCar();
   }
 
   return this.car;
  }
 
  run(): void {
   const car = this.getCar();
 
   console.log(`${car.getManufacturer()} is running`);
  }
 
  carInfo(): void {
   const car = this.createCar();
 
   // использование конкретного продукта внутри фабричного метода
   // здесь может быть более сложная логика упирающаяся в продукт
   console.log(`Car model: ${car.model} and year: ${car.year}`);
  }
 }
 
 // Конкретные классы продукт
 class BMW implements Car {
  model: string;
  year: number;
 
  constructor(model: string, year: number) {
   this.model = model;
   this.year = year;
  }
     name!: string;
     out(): string {
         throw new Error("Method not implemented.");
     }
 
  getManufacturer(): string {
   return 'BMW';
  }
 }
 
 class Audi implements Car {
  model: string;
  year: number;
 
  constructor(model: string, year: number) {
   this.model = model;
   this.year = year;
  }
     name!: string;
     out(): string {
         throw new Error("Method not implemented.");
     }
 
  getManufacturer(): string {
   return 'Audi';
  }
 }
 
 // Конкретные классы фабрик наследуются от абстрактного класса фабричного метода
 
 class BMWX5FactoryMethod extends CarFactoryMethod {
  createCar(): Car {
   return new BMW('X5', 2019);
  }
 }
 
 class AudiA6FactoryMethod extends CarFactoryMethod {
  createCar(): Car {
   return new Audi('A6', 2018);
  }
 }