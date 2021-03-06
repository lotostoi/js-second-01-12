'use strict';

const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';

const url = [
    //ссылка на товары
    'https://raw.githubusercontent.com/malashenok/JS_advanced/master/online-store-api/response/catalogData.json',
];

//Класс каталога
class Catalog {
    constructor (container, items) {
        this.container = container;
        this.items = items;
    }

    _render () {
        let block = document.querySelector (this.container);
        let htmlStr = '';
        this.items.forEach (item => {
            let prod = new CatalogItem(item);
            htmlStr += prod.render();
        })
        block.innerHTML = htmlStr;
    }

    render () {
        this._render ();
    }
}

//Класс товара
class CatalogItem {
    constructor (obj) {
        this.id_product = obj.id_product;
		this.name = obj.product_name;
		this.price = obj.price;
		this.img = image;
    }
    /**
     * Метод формирует HTML для товара
     * @returns {string} HTML содержимое элемента в виде строки
     **/
    render () {
		return `<div class="product-item" data-id="${this.id_product}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
					<h3>${this.name}</h3>
					<p>${this.price} руб.</p>
					<button class="buy-btn" 
					data-id="${this.id_product}"
					data-name="${this.name}"
					data-image="${this.img}"
					data-price="${this.price}">Купить</button>
				</div>
            </div>`;
    }
}

//Класс корзины
class Cart {

    constructor() {
        this.items = [];
        this.totalSum = 0;
    }

    /**
     * Метод добавляет товар в корзину
     *  @param {CatalogItem} 
     **/
    addItem(item) {

        if (this.items[item.dataset.id] == undefined) {
            this.items[item.dataset.id] = {
                name: item.dataset.name,
                img: cartImage,
                price: item.dataset.price,
                quantity: 1,
            }
        } else {
            this.items[item.dataset.id].quantity++;
        }
    }

    /**
     * Метод удаляет товар из корзины, или уменьшает его
     * количество на единицу
     * @param {Item} item
     **/
    removeItem(item) {

        if (this.items[item.dataset.id].quantity == 1) {
            delete this.items[item.dataset.id];
        } else {
            this.items[item.dataset.id].quantity--;
        }
    }

    /**
     * Метод считает суммарную стоимость товаров в корзине
     * возвращает HTML с суммой в виде строки 
     * @returns {string}
     **/
    getTotalSum() {
        this.totalSum = this.items.reduce((sum, current) =>
            sum + current.price * current.quantity, 0);
        return `<div class="total-sum">
                    <h3>Всего: ${this.totalSum} руб.</h3>
                </div>`;
    }
    /**
     * Метод формирует содержимое корзины
     * возвращает HTML в виде строки 
     * @returns {string}
     **/
    createCartHTML() {
        return this.items.reduce((str, current, index) =>
            str + `<div class="cart-item" data-id="${index}">
                        <div class="product-bio">
                           <img src="${current.img}" alt="Some image">
                            <div class="product-desc">
                                <p class="product-title">${current.name}</p>
                                <p class="product-quantity">Quantity: ${current.quantity}</p>
                                <p class="product-single-price">${current.price}</p>
                            </div>
                        </div>
                        <div class="right-block">
                            <p class="product-price">${current.quantity * current.price}</p>
                            <button class="del-btn" data-id="${index}">&times;</button>
                        </div>
                    </div>`, '');
    }
}

//кнопка скрытия и показа корзины
document.querySelector('.btn-cart').addEventListener('click', () => {
    document.querySelector('.cart-block').classList.toggle('invisible');
});

//кнопки удаления товара (добавляется один раз)
document.querySelector('.cart-block').addEventListener('click', (evt) => {
    if (evt.target.classList.contains('del-btn')) {
        removeProduct(evt.target);
    }
})

//кнопки покупки товара (добавляется один раз)
document.querySelector('.products').addEventListener('click', (evt) => {
    if (evt.target.classList.contains('buy-btn')) {
        addProduct(evt.target);
    }
})

//Добавление товаров в корзину
function addProduct(product) {
    userCart.addItem(product);
    renderCart();
}

//удаление товаров из корзины
function removeProduct(product) {
    userCart.removeItem(product);
    renderCart();
}

//Рендер корзины
function renderCart() {
    document.querySelector(`.cart-block`).innerHTML = userCart.createCartHTML() + userCart.getTotalSum();
}


//глобальные сущности корзины и каталога
let userCart = new Cart();
let catalog = null;

//callback
function makeCallBackRequest(url) {
    let xhr = new XMLHttpRequest();
    let arr = [];

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            arr = JSON.parse(xhr.responseText);
            catalog = new Catalog('.products', arr);
            catalog.render();
        }
    }
    xhr.open('GET', url, true);
    xhr.send();
}

function async(callback) {
    setTimeout(() => {
        callback(url[0])
    }, 0);
}


//Вызов callback
//async(makeCallBackRequest);

//функция с Promise
function makePromiseRequest(url) {
    return new Promise(res => {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                res(xhr.responseText);
            }
        }
        xhr.open('GET', url, true);
        xhr.send();
    });
}

//Вызов Promise
// makePromiseRequest(url[0])
//     .then(dJson =>
//         JSON.parse(dJson)
//     )
//     .then(arr => {
//         catalog = new Catalog('.products', arr);
//     })
//     .then(() => {
//         catalog.render();
//     }) 


//функция с fetch
function fetchRequest(url) {
    return fetch(url);
}

//вызов fetch
fetchRequest(url[0])
     .then (dJson => dJson.json())
     .then(arr => {
            catalog = new Catalog('.products', arr);
    })
     .then(() => {
         catalog.render();
     })