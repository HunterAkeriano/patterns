interface MyTractor{
   getFuel(fuel:string):void;
}

class Mediator implements MyTractor{
   private ReFuel: ReFuel;
   private noneFuel: NoneFuel;
   constructor(one: ReFuel, two: NoneFuel){
      this.ReFuel = one;
      this.ReFuel.setMediator(this);
      this.noneFuel = two;
      this.noneFuel.setMediator(this);
   }

   getFuel(fuel:string){
      if(fuel == 'заправлен'){
         console.log("У трактора полный бак");
      }else{
         console.log("К сожалению в тракторе нет солярки")
      }
   }
}

class Tractor {
   protected mediator: MyTractor | undefined;
   constructor (mediator?: MyTractor) {
      this.mediator = mediator;
   }
   public setMediator(mediator: MyTractor): void {
      this.mediator = mediator;
   }
}

class ReFuel extends Tractor{
   public fueling():void{
      console.log('Трактор заправлен');
      this.mediator!.getFuel('заправлен');
   }
}
class NoneFuel extends Tractor{
   public none():void{
      console.log('Трактор не заправлен');
      this.mediator!.getFuel('не заправлен');
   }
}

const refuiling = new ReFuel();
const nonefueling = new NoneFuel();
const mediator = new Mediator(refuiling, nonefueling);

refuiling.fueling();


