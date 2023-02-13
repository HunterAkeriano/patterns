interface  Iteration<Type> {
    current(): Type;
    next(): Type;
    valid(): boolean;
    resetPosition(): void;
 }
 
 interface Aggregator {
    getIterator():  Iteration<string>;
 }
 

//  конкретный итератор
 class Tractor implements  Iteration<string> {
    private collection: ModelTractor;
    private position: number = 0;
 
    constructor(collection: ModelTractor, ) {
       this.collection = collection;
    }
 
    public current(): string {
       return this.collection.getItems()[this.position];
    }
    public next(): string {
       const item = this.collection.getItems()[this.position];
       ++ this.position ;      
       return item;
    }
    
    public valid(): boolean {
       return this.position < this.collection.getCount();
    }
 
    public resetPosition(): void {
       this.position = 0;
    }
 }
 
//  коллекция
 class ModelTractor implements Aggregator {
    private items: string[] = [];
 
    public getItems(): string[] {
       return this.items;
    }
 
    public getCount(): number {
       return this.items.length;
    }
 
    public addItem(item: string): void {
       this.items.push(item);
    }
 
    public getIterator():  Iteration<string> {
       return new Tractor(this);
    }   
 }
 
//  сохраняем данные в колекцию
 const listTractors = new ModelTractor();
 listTractors.addItem('МТЗ 920');
 listTractors.addItem('Лексион 5140');
 listTractors.addItem('ЮМЗ 6А');

 function research(filter:string) {
    let naming = "";
    while (resarch.valid()) {
       const element = resarch.next();
          const items = element.split(' ');
          for (const item of items) {
             if (item == filter) {
                naming = element;
             }
          }
    } 
    resarch.resetPosition();
    return naming;
 }
 const resarch = listTractors.getIterator();

 console.log(`По вашему запросу: 'МТЗ', найдено: \n
 ${research("МТЗ")}.\n
 По запросу: "ЮМЗ" найденно: \n
 ${research("ЮМЗ")}`)
 