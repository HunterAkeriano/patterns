// Facde
class Tractor{
   private startEngine: StartEngine;
   private driveEngagement: DriveEngagement;
   constructor(startEngine: StartEngine, driveEngagement: DriveEngagement){
      this.startEngine = startEngine || new DriveEngagement();
      this.driveEngagement = driveEngagement || new DriveEngagement();
   }

   launch(){
      let start = this.startEngine.start();
      let fuel = this.startEngine.fuel();
      let turns = this.startEngine.turns();
      let engagement = this.driveEngagement.included();
      let result = `Двигатель: ${start}\n
      Подача топлива: ${fuel}\n
      Обороты двигателя на данный момент: ${turns}\n
      Передний привод: ${engagement}`;
      return result;
   }
}


class StartEngine{
   private engine:string = "Заглушенный"; 
   private fuels: string = 'Нет подачи';
   private turn: number = 0;
   start(){
      this.engine = 'Запущенный'
      return  this.engine;
   }
   fuel(){
      this.fuels = 'Подача есть';
      return this.fuels;
   }
   turns(){
      this.turn = 1200;
      return this.turn;
   }
}
class DriveEngagement{
   private engagement:string = 'Выключенный';
   
   included(){
      this.engagement = 'Включенный';
      return this.engagement;
   }
}

let startEngine = new StartEngine();
let engagements = new DriveEngagement();

let tractor = new Tractor(startEngine,engagements);

console.log(tractor.launch());