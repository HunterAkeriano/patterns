interface Context {
	changeState(state: State): void;
	paints(): void;
}
abstract class State {
	protected state?: State;
	setNextState(state: State): State {
		this.state = state;

		return this.state;
	}
	nextState(): State | undefined {
		return this.state;
	}
	abstract paints(): void;
}

class ColorTractor implements Context {
	constructor(private state?: State) {}
	paints(): void {
		if (this.state) {
			this.state.paints();
			this.state = this.state.nextState();
		} else {
			console.log('Трактор в заводской красске');
		}
	}

	changeState(state: State): void {
		this.state = state;
	}
}
class Red extends State {
	override paints(): void {
		console.log('Трактор окрашен в красный');
	}
}
class Blue extends State {
	override paints(): void {
		console.log('Трактор окрашен в синий');
	}
}

// передаю в обьект изменение цвета
const colorTractor = new ColorTractor( new Blue());
colorTractor.paints();