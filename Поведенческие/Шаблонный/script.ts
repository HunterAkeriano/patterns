abstract class Tractor {

    public started(): void {
        this.getStarted();
        this.offTrailer();
        this.onTrailer();
    }

    protected getStarted(){
        console.log('Трактор заведён');
    }
    protected getSustem() {
       console.log('Трактор работает без перебоев'); 
    }

    protected abstract offTrailer(): void;
    protected abstract onTrailer(): void;
}

class Trailer extends Tractor {
    protected offTrailer(){
		console.log(`Прицеп отключен`); 
    }

    protected onTrailer() {
		console.log(`Прицеп подключен`);  
    }
}

class Plow extends Tractor {
	protected offTrailer(){
		console.log(`Плуг отключен`); 
    }

    protected onTrailer() {
		console.log(`Плуг подключен`);  
    }
}

function startTractor(tractor: Tractor) {
    tractor.started();
}

// подключаем прицем
startTractor(new Trailer());
// подключаем плуг

startTractor(new Plow());