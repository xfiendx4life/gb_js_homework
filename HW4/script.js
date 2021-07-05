'use strict';

// Задание 1
function getObject(n) {
    return  {
        units: n % 10,
        tens: parseInt(n / 10) % 10,
        hundreds: parseInt(n / 100),
    }
}


// Задание 2
// структура корзины
// Я позволил себе описать струткру корзины и товара в виде классов, а не
// конкретных объектов, если это не подходит для выполнения задания,
// то я могу переделать с объектами


class Product {
    constructor(name, price, quantity) {
        this.price = price;
        this.name = name;
        this.quantity = quantity;
        // дополнительные поля для каталога, например
        this.picUrl = '';
        this.description = '';
        this.feedback = ''

    }

    // Сделал метод для удобства, чтобы выводить
    stringify() {
        return JSON.stringify(this)
    }

}

class Basket {
    constructor(...items) {
        this.items = []
        for(let item of items) {
            this.items.push(item)
        }
    }

    countBasketPrice() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }

}

// const tp1 = new Product('1', 123, 2);
// const tp2 = new Product('2', 122, 4);
// const testBasket = new Basket(tp1, tp2)
// console.log(testBasket.countBasketPrice());
// console.log(testBasket.items);
