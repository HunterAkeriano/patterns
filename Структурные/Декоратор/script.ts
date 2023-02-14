interface Parlaments{
   president?: string;
   addPresident(name:string): string; 
}


// декоратор
abstract class BaseDecorator implements Parlaments{
   president?: string;
   protected falsy: Parlaments;
   constructor(falsy: Parlaments){
      this.falsy = falsy;
   }
  public addPresident(name: string): string {
      return this.falsy.addPresident(name).toLowerCase();
  }
}

class FalsePresident extends BaseDecorator{
   president?: string;
   protected falsy: Parlaments;
   public addPresident(name: string): string {
      return this.falsy.addPresident(name).toLowerCase() + ' фальшивый президент';
  }
}


// обычный класс
class Country implements Parlaments{
   president: string = 'Ваассаба';
   addPresident(name: string): string {
      return `Новый президент: ${name}`
   } 
}

// функция которая возвращает президента
function ReturnPres(name:string, president:Parlaments){
   return president.addPresident(name);
}


const niggeria = new Country();

console.log(ReturnPres("Букашка", niggeria));

// фальсификация выборов
const falsePresident = new FalsePresident(niggeria);
console.log(ReturnPres("Дима", falsePresident))


