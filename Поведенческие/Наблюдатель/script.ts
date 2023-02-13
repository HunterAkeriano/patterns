interface NewsObserver {
		update(subject: Parlament): void;
}
class Parlament {
	private mailingSystems: NewsObserver[] = [];
	public news: string[] = [];
	constructor(public name: string) {}
	attach(mailingSystem: NewsObserver): this {
		this.mailingSystems.push(mailingSystem);
		return this;
	}
	detach(mailingSystem: NewsObserver): this {
		this.mailingSystems = this.mailingSystems.filter((ms) => ms !== mailingSystem);
		return this;
	}
	notify(): void {
		this.mailingSystems.forEach((ms) => ms.update(this));
	}
	writeLatestNews(news: string[]) {
		news.forEach((n) => this.news.push(n));
		this.notify();
		this.news.length = 0;
	}
}

//  конкретный наблюдатель за субъектом

class EmailSpam implements NewsObserver {
	update(parlament: Parlament): void {
		console.log(`Отправлено на почту: ${parlament.name}`, {
			data: parlament.news,
		});
	}
}

class TV implements NewsObserver {
	update(parlament: Parlament): void {
		console.log(`Отправлено на ${parlament.name} телеканал`, {
			data: parlament.news,
		});
	}
}

// создание конкретных субъектов

const GMAIL = new Parlament('Уганда');
const CNN = new Parlament('ЮАР');


// привязка наблюдателей к субъектам

GMAIL.attach(new EmailSpam());
CNN.attach(new TV());

GMAIL.writeLatestNews([
	'В Зимбабве переворот',
	'Поставка оружия через порты закрыта',
]);

CNN.writeLatestNews([
	'В Африке обнаружены 20 источников пресной воды',
	'Смертность от КОВИД уменьшилась в 50 раз',
]);
