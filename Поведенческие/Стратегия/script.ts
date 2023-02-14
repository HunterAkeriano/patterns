interface PaymentStrategy {
	// объявляет операции, общие для всех поддерживаемых версий некоторого алгоритма.
	pay(amount: number): void;
}

// Конкретные Стратегии реализуют алгоритм, следуя базовому интерфейс
class Card implements PaymentStrategy {
	pay(amount: number): void {
		console.log(`Сумма к оплате через карту: ${amount}`);
	}
}
class Valuta implements PaymentStrategy {
	pay(amount: number): void {
		console.log(`Сумма к оплате в гривнах: ${amount}`);
	}
}


type Item = {
	price: number;
	name: string;
};
type Items = Array<Item>;

class Shopping {
	private paymentStrategy!: PaymentStrategy;
	private items: Items = [];

	PaymentStrategy(paymentStrategy: PaymentStrategy) {
		this.paymentStrategy = paymentStrategy;
	}

	addProduct(item: Item) {
		this.items.push(item);
	}

	sum() {
		return this.items.reduce((acc, curr) => acc + curr.price, 0);
	}

	pay() {
		this.paymentStrategy.pay(this.sum());
	}
}

const shopping = new Shopping();

const card =  new Card();
const valute = new Valuta();
shopping.addProduct({ name: 'МТЗ 920', price: 500000 });
shopping.addProduct({ name: 'Глушитель к трактору', price: 920 });



// оплата картой
shopping.PaymentStrategy(card);
shopping.pay();

// оплата наличкой:
shopping.PaymentStrategy(valute);
shopping.pay();