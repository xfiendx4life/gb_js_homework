'use strict';
// Задание 1
function chessBoardCreator() {
    let tab = document.createElement("table");
    tab.className = 'board';
    let b = document.getElementsByClassName('chess');
    b[0].appendChild(tab);
    const alph = 'ABCDEFGH';
    for (let i = 0; i <= 8; i++) {
        let row = document.createElement('tr');
        tab.appendChild(row);
        for (let j = 0; j <= 8; j++) {
            let col = document.createElement('td');
            row.appendChild(col);
            if (i === 0) {
                if (j === 0) {
                    col.style.border = 'none';
                    continue;
                }
                col.className = 'board-head';
                col.innerHTML = alph[j - 1];
            } else if (j === 0 && i !== 0) {
                col.innerHTML = i;
                col.style.border = 'none';
            } else if ((i + j) % 2 === 0) {
                col.className = 'black';
            } else {
                col.className = 'white';
            }
        }
    }
}

// Задание 2
class Product {
    constructor(name, price, quantity = 0) {
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
        for (let item of items) {
            this.items.push(item)
        }
    }

    countBasketPrice() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }

    countItems() {
        return this.items.length
    }

    renderCart() {
        let parent = document.getElementsByClassName('cart')[0];
        let status = this.countItems();
        let statusP = document.createElement('p');
        parent.appendChild(statusP);
        let text;
        if (status > 0) {
            text = `В корзине: ${status} товаров на сумму ${this.countBasketPrice()} рублей`;
            parent.style.backgroundColor = "#7FFF94";
        } else {
            text = 'Корзина пуста';
        }
        statusP.innerText = text;
    }

}

//Задание 3
function generateCatalog() {
    let cat = [];
    const a = new Product('soap', 100);
    a.description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci.";

    const b = new Product('bread', 80);
    b.description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci.";

    const c = new Product('milk', 78);
    c.description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci.";

    cat.push(a, b, c);

    return cat
}

function renderCatalog(data) {
    const parent = document.getElementById('catalog');
    const h2 = document.createElement('h2');
    h2.innerText = 'Каталог';
    parent.appendChild(h2);
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement('div');
        div.className = 'item-card';
        parent.appendChild(div);
        const h = document.createElement('h3');
        h.innerText = `${data[i].name} - ${data[i].price} ₽`;
        div.appendChild(h);
        const p = document.createElement('p');
        p.innerText = data[i].description;
        div.appendChild(p);
    }
}

function showCatalog() {
    renderCatalog(generateCatalog())
}