"use strict";
class Parlament {
    constructor(name) {
        this.name = name;
        this.mailingSystems = [];
        this.news = [];
    }
    attach(mailingSystem) {
        this.mailingSystems.push(mailingSystem);
        return this;
    }
    detach(mailingSystem) {
        this.mailingSystems = this.mailingSystems.filter((ms) => ms !== mailingSystem);
        return this;
    }
    notify() {
        this.mailingSystems.forEach((ms) => ms.update(this));
    }
    writeLatestNews(news) {
        news.forEach((n) => this.news.push(n));
        this.notify();
        this.news.length = 0;
    }
}
//  конкретный наблюдатель за субъектом
class EmailSpam {
    update(parlament) {
        console.log(`Отправлено на почту: ${parlament.name}`, {
            data: parlament.news,
        });
    }
}
class TV {
    update(parlament) {
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
