interface Memento {
	getText(): string;
   }
   
   class CareTaker {
	private mementos: Memento[] = [];
	/**
	 * указатель на текущий снимок, -1 означает что история пуста
	 */
	private current = -1;
   
	constructor(private originator: TextEditor) {}
   
	save(): void {
	 this.mementos.push(this.originator.save());
	 this.current++;
	}
   
	undo(): void {
	 if (this.current > 0) {
	  this.current--;
	  this.originator.restore(this.mementos[this.current]);
	 }
	}
   
	redo(): void {
	 if (this.current < this.mementos.length - 1) {
	  this.current++;
	  this.originator.restore(this.mementos[this.current]);
	 }
	}
   }
   
   class TextEditor {
	private text = 'Просто текст';
   
	constructor() {}
   
	changeText(text: string): void {
	 this.text = text;
	}
   
	getText(): string {
	 return this.text;
	}
   
	save() {
	 return new TextMemento(this.text);
	}
   
	restore(memento: Memento) {
	 this.text = memento.getText();
	}
   }
   
   class TextMemento implements Memento {
	private text = '';
   
	constructor(text: string) {
	 this.text = text;
	}
   
	getText(): string {
	 return this.text;
	}
   }
   
   const textEditor = new TextEditor();
   const careTaker = new CareTaker(textEditor);
   
   careTaker.save();
   textEditor.changeText('МТЗ 820');
   careTaker.save();
   textEditor.changeText('ЮМЗ');
   console.log(textEditor.getText());
   console.log('\n2 раза отменить\n');
   
   careTaker.undo();
   careTaker.undo();
   console.log(textEditor.getText());
   
   console.log('повторить');
   
   careTaker.undo();
   
   console.log(textEditor.getText());
   
   console.log('повторить');
   
   careTaker.redo();
   
   console.log(textEditor.getText())