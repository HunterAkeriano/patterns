// фасад
// просто трактор который может изменять либо мощность либо цвет
// через простое указание настроек ему
class Tractor{
   private color: Color;
   private power: Power;
   constructor(color: Color, power: Power){
      this.color = color || new Color();
      this.power = power || new Power();
   }


   public addColor( ){
      let color = `Ваш новый цвет: ${this.color.addColor()}`;
      return color;
   }
   public addPower(){
      let powers = `Ваша новая мощность: ${this.power.addPower()}`
      return powers;
   }
}

class Color{
   returnColor(){
      return `ваш цвет перекрашен в заводской`
   }
   addColor(){
      return `Синий`
   }
}
class Power{
   returnPower( ){
      return `ваша мощность была возобновлена`
   }
   addPower(){
      return 450;
   }
}

const color = new Color();
const powers = new Power();

const tractors = new Tractor(color, powers);
console.log(tractors.addColor());
console.log(tractors.addPower());
