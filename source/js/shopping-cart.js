import {getStorage, addToStorage, removeFromStorage} from './localstorage.js';
import './modals.js';


// const orderButton = document.querySelector('#order-button');
// orderButton.addEventListener('click', () => {
//     const data = getStorage('cart');
    // createOrder('https://zsa-studio.ru/order.php', data);
// })


const editAmountProducts = (clone, product, operation = 'plus') => {
    const input = clone.querySelector('.shopping-cart__input').value;
    const amountEl = document.querySelector('.shopping-cart__amount > span');
    const amountCartEl = document.querySelector('.header__button--shop-cart > span');
    const totalEl = document.querySelector('.shopping-cart__total-amount > span');
    const delEl = clone.querySelector('.shopping-cart__delete');

    const totalPrice = Number(totalEl.textContent.replace(/\D/g, ''));


    if (operation === 'plus') {
        totalEl.textContent = totalPrice + Number(product.price);
        clone.querySelector('.shopping-cart__input').value = Number(input) + 1;
        amountEl.textContent = Number(amountEl.textContent) + 1;
        amountCartEl.textContent = Number(amountCartEl.textContent) + 1;
    } else {

        if (Number(input) > 1) {
            totalEl.textContent = totalPrice - Number(product.price);
            clone.querySelector('.shopping-cart__input').value = Number(input) - 1;
            amountEl.textContent = Number(amountEl.textContent) - 1;
            amountCartEl.textContent = Number(amountCartEl.textContent) - 1;
        }
    }
}

export const renderCart = () => {
    const data = getStorage('cart');

    if(!data?.length) {
        return;
    };

    const countsData = data.reduce((acc, curr) => {
        const id = curr.id;

        if (acc[id]) {
            acc[id]++;
        } else {
            acc[id] = 1;
        }
        return acc;
    }, {});

    const uniqueData = [...new Set(data.map(JSON.stringify))].map(JSON.parse).sort((a, b) => a.id - b.id);

    const target = document.querySelector('.shopping-cart__list-wrapper');
    const tamplate = document.querySelector('.shopping-cart__template').content.querySelector('.shopping-cart__item');

    const fragment = document.createDocumentFragment();

    target.innerHTML = '';

    uniqueData.forEach(product => {
        const clone = tamplate.cloneNode(true);

        clone.querySelector('.shopping-cart__input').value = countsData[product.id] || 0;
        clone.querySelector('.shopping-cart__image').src = product.image;
        clone.querySelector('.shopping-cart__name').textContent = product.name;
        clone.querySelector('.shopping-cart__price').textContent = `${product.price} ₽`;

        clone.querySelector('.shopping-cart__minus').addEventListener('click', () => {
            removeFromStorage('cart', product.id);


            editAmountProducts(clone, product, 'minus');
        });

        clone.querySelector('.shopping-cart__plus').addEventListener('click', () => {
            addToStorage('cart', product);

            editAmountProducts(clone, product, 'plus');
        });

        clone.querySelector('.shopping-cart__delete').addEventListener('click', () => {
            removeFromStorage('cart', product.id);
            clone.remove();
        });

        fragment.append(clone);
    });

    target.append(fragment);

    const amountEl = document.querySelector('.shopping-cart__amount > span');
    amountEl.textContent = data.length;

    const amountCartEl = document.querySelector('.header__button--shop-cart > span');
    amountCartEl.textContent = data.length;

    const totalEl = document.querySelector('.shopping-cart__total-amount > span');
    totalEl.textContent = data.reduce((acc, curr) => acc + Number(curr.price), 0);

};

renderCart();
