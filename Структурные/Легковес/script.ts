class Tracotrs {
   constructor(private sharedState: any) {}

   public operation(uniqueState): void {
       console.log(`unique (${JSON.stringify(uniqueState)}) сосотяние.`);
   }
}

class TractorsFactory {
   private tractor: {[key: string]: Tracotrs} = <any>{};

   constructor(Traktor: string[][]) {
       for (const state of Traktor) {
           this.tractor[this.getKey(state)] = new Tracotrs(state);
       }
   }

   private getKey(state: string[]): string {
       return state.join('_');
   }

   public getTractor(sharedState: string[]): Tracotrs {
       const key = this.getKey(sharedState);

       if (!(key in this.tractor)) {
           console.log('Создатель тракторов: Я не могу создать один трактор.');
           this.tractor[key] = new Tracotrs(sharedState);
       } else {
           console.log('Создатель тракторов: Я создал такой трактор');
       }

       return this.tractor[key];
   }

   public listTractor(): void {
       const count = Object.keys(this.tractor).length;
       console.log(`\nСоздатель тракторов: Я могу ${count} разработать такой:`);
       for (const key in this.tractor) {
           console.log(key);
       }
   }
}

const factory = new TractorsFactory([
   ['МТЗ', '920', 'Синий'],
   ['ЮМЗ', '6А', 'Зелёный'],
   
   // ...
]);
factory.listTractor();

function newTractor(  ff: TractorsFactory, brand: string, model: string, color: string) {
   console.log('Трактор сохранён в моей памяти.');
   const mtz = ff.getTractor([brand, model, color]);
}

newTractor(factory, 'МТЗ', '820', 'Синий');
newTractor(factory, 'ЮМЗ', '6А', 'Красный');


factory.listTractor();