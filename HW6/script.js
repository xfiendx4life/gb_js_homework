'use strict';

class Product {
    constructor(name, price, quantity = 1) {
        this.price = price;
        this.name = name;
        this.quantity = quantity;
        // дополнительные поля для каталога, например
        this.picUrl = [`${name}0.jpg`, `${name}1.jpg`, `${name}2.jpg`];
        this.smallPicUrl = `img/${name}0-small.jpg`
        this.description = '';
        this.feedback = ''

    }

    // Сделал метод для удобства, чтобы выводить
    stringify() {
        return JSON.stringify(this)
    }

}

const cart =  {
    init(...items) {
        this.items = []
        for (let item of items) {
            this.items.push(item)
        }
        window.addEventListener('DOMContentLoaded', (event) => this.renderCart())
    },


    countBasketPrice() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },

    countItems() {
        return this.items.length
    },

    renderCart() {
        let parent = document.getElementsByClassName('cart')[0];
        let status = this.countItems();
        let statusP = parent.querySelector('p');
        if (statusP === null) {
            statusP = document.createElement('p');
            parent.appendChild(statusP);
            parent.appendChild(this.renderClearButton())
        } else if(parent.querySelector('ul') !== null) parent.querySelector('ul').remove();
        let text;
        if (status > 0) {
            text = `В корзине: ${status} товаров на сумму ${this.countBasketPrice()} рублей`;
            parent.style.backgroundColor = "#7FFF94";
            parent.appendChild(this.renderCartList())
        } else {
            text = 'Корзина пуста';
            parent.style.backgroundColor = "grey";
        }
        statusP.innerText = text;
    },

    renderCartList() {
        const ul = document.createElement('ul');
        for(const item of this.items) {
            let li = document.createElement('li');
            li.innerText = `${item.name}-(${item.quantity} шт.) - ${item.quantity * item.price} ₽`;
            ul.appendChild(li);
        }
        return ul;
    },

    renderClearButton() {
        const but = document.createElement('button');
        but.className = 'clear-button';
        but.innerText = 'Clear';
        return but;
    },

    addToCart(item) {
        for (let prod of this.items) {
            if (prod.name === item.name) {
                prod.quantity += item.quantity;
                this.renderCart();
                return
            }
        }
        this.items.push(Object.assign({}, item));
        this.renderCart();
    },

    clearCart() {
        this.items = [];
        this.renderCart();
    }

}

cart.init(new Product('2', 122, 3), new Product('1', 113, 1));

const catalog = {
    cart : null,
    cat : [],
    modal: {
        product: null,
        domElement: null,
    },
    init(cart) {
        this.cart = cart;
        window.addEventListener('DOMContentLoaded', (event) => this.renderCatalog(this.generateCatalog()));
        document.addEventListener('click', (event) => this.ClickEvent(event));
    },

    ClickEvent(event) {
        const targetClass = event.target.className;
        if (event.target.tagName === 'BUTTON') {
            if (targetClass === 'clear-button') this.cart.clearCart();
            else this.addToCart(this.getItemByName(event.target.dataset.item_name));
        } else if(targetClass === 'small-prod') {
            this.openModal(event.target.dataset.item_name)
        } else if(targetClass === 'close') {
            this.modal.domElement.remove();
        } else if(event.target.classList.contains('arrow')) {
            this.changePicture(event.target.classList.contains('right'));
        }
        

    },

    changePicture(isRight) {
        let img = this.modal.domElement.querySelector('.product');
        const picName = img.getAttribute('src').split('/')[1]
        let newUrl;
        if(isRight) newUrl = (this.modal.product.picUrl.indexOf(picName) + 1) % 3;
        else newUrl = (this.modal.product.picUrl.indexOf(picName) + 2) % 3;
        img.setAttribute('src', `img/${this.modal.product.picUrl[newUrl]}`);
    },

    openModal(name) {
        this.modal.product = this.cat.find((element) => element.name === name);
        this.renderModal();
    },

    renderModal() {
        const parent = document.querySelector('body');
        const modal = document.createElement('div');
        modal.className = 'modal';
        parent.appendChild(modal);

        const cl = document.createElement('img');
        cl.setAttribute('src', 'img/close.png');
        modal.appendChild(cl);
        cl.className = 'close';

        const wr = document.createElement('div');
        wr.className = 'wrapper';
        modal.appendChild(wr);

        const left = document.createElement('img');
        left.setAttribute('src', 'img/left.png');
        wr.appendChild(left);
        left.classList.add('arrow', 'left');

        const product = document.createElement('img');
        product.setAttribute('src', `img/${this.modal.product.picUrl[0]}`);
        wr.appendChild(product);
        product.className = 'product';

        const right = document.createElement('img');
        right.setAttribute('src', 'img/right.png');
        wr.appendChild(right);
        right.classList.add('arrow', 'right');

        this.modal.domElement = modal;
    },

    getItemByName(name) {
        return this.cat.find(element => element.name === name);
    },

    addToCart(prod) {
        this.cart.addToCart(prod);
    },

    generateCatalog() {
        const a = new Product('soap', 100, 1);
        a.description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci.";

        const b = new Product('bread', 80, 1);
        b.description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci.";

        const c = new Product('milk', 78, 1);
        c.description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci.";

        this.cat.push(a, b, c);
    },

    renderCatalog() {
        const parent = document.getElementById('catalog');
        const h2 = document.createElement('h2');
        h2.innerText = 'Каталог';
        parent.appendChild(h2);
        for (let i = 0; i < this.cat.length; i++) {
            const div = document.createElement('div');
            div.className = 'item-card';
            parent.appendChild(div);
            const h = document.createElement('h3');
            h.innerText = `${this.cat[i].name} - ${this.cat[i].price} ₽`;
            div.appendChild(h);

            const img = document.createElement('img');
            img.setAttribute('src', this.cat[i].smallPicUrl);
            img.setAttribute('data-item_name', this.cat[i].name);
            img.className = 'small-prod';
            div.appendChild(img);

            const p = document.createElement('p');
            p.innerText = this.cat[i].description;
            div.appendChild(p);
            
            const b = document.createElement('button');
            b.innerHTML = 'Buy';
            b.className = 'buy';
            b.setAttribute('data-item_name', this.cat[i].name);
            div.appendChild(b);
            
        }
    },

        
}

catalog.init(cart);
