interface Memento {}
class CareTaker<T extends Memento> {
	private mementos: T[] = [];
	/**
	 * указатель на текущий снимок, -1 означает что история пуста
	 */
	private current = -1;

	save(memento: T) {
		this.mementos.push(memento);
		this.current++;
	}

	undo(): T | undefined {
		if (this.current >= 0) {
			this.current--;
			return this.mementos[this.current];
		}
		return undefined;
	}

	redo(): T | undefined {
		if (this.current < this.mementos.length - 1) {
			this.current++;
			return this.mementos[this.current];
		}
		return undefined;
	}
}

class TextEditor {
	private text = 'Просто текст';
	private careTaker: CareTaker<TextMemento>;

	constructor() {
		this.careTaker = new CareTaker();
		this.careTaker.save(new TextMemento(this.text));
	}

	changeText(text: string): void {
		this.text = text;
		this.careTaker.save(new TextMemento(this.text));
	}

	getText(): string {
		return this.text;
	}

	undo(): void {
		const memento = this.careTaker.undo();
		if (memento) {
			this.text = memento.getText();
		}
	}

	redo(): void {
		const memento = this.careTaker.redo();
		if (memento) {
			this.text = memento.getText();
		}
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

textEditor.changeText('МТЗ 820');
textEditor.changeText('ЮМЗ');
console.log(textEditor.getText());
console.log('\n2 раза отменить\n');
textEditor.undo();
textEditor.undo();

console.log(textEditor.getText());

console.log('повторить');

textEditor.undo();

console.log(textEditor.getText());

console.log('повторить');

textEditor.redo();

console.log(textEditor.getText());