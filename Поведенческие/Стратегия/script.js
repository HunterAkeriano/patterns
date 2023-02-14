"use strict";
class Card {
    pay(amount) {
        console.log(`Сумма к оплате через карту: ${amount}`);
    }
}
class Valuta {
    pay(amount) {
        console.log(`Сумма к оплате в гривнах: ${amount}`);
    }
}
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    setPaymentStrategy(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    addProduct(item) {
        this.items.push(item);
    }
    sum() {
        return this.items.reduce((acc, curr) => acc + curr.price, 0);
    }
    pay() {
        this.paymentStrategy.pay(this.sum());
    }
}
const shopping = new ShoppingCart();
const card = new Card();
const valute = new Valuta();
shopping.addProduct({ name: 'МТЗ 920', price: 500000 });
shopping.addProduct({ name: 'Глушитель', price: 920 });
// оплата картой
shopping.setPaymentStrategy(card);
shopping.pay();
// оплата наличкой:
shopping.setPaymentStrategy(valute);
shopping.pay();
