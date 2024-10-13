import { addToStorage } from './localstorage.js';
import { renderCart } from './shopping-cart.js';
import {addProduct} from './modals.js';

export default (products, template, target, isTargetList = false, templateClass = '') => {

    const fragment = document.createDocumentFragment();

    let productEl = template.querySelector('.best-selling__product');

    if (isTargetList) {
        const node = document.createElement('li');
        node.innerHTML = productEl.innerHTML;

        Array.prototype.forEach.call(productEl.attributes, attr => {
            node.setAttribute(attr.name, attr.value);
        });
        node.classList.add(templateClass);

        productEl = node;
    }

    products.forEach(product => {
        const itemEl = productEl.cloneNode(true);
        const imageEl = itemEl.querySelector('.product__image');
        const nameEl = itemEl.querySelector('.product__name');
        const priceEl = itemEl.querySelector('.product__new');
        const oldPriceEl = itemEl.querySelector('.product__old');
        const buttonEl = itemEl.querySelector('.product__button');
        const {id, isBig, status, image, name, price, oldPrice} = product;

        itemEl.dataset.productId = id;
        imageEl.src = image;
        nameEl.textContent = name;
        priceEl.textContent = `${price} ₽`;
        oldPriceEl.textContent = `${oldPrice} ₽`;

        if (isBig) {
            itemEl.classList.add('best-selling__product--big');
            itemEl.querySelector('.product').classList.add('product--big');
            buttonEl.classList.add('product__button--big');
            itemEl.classList.remove('best-selling__product--medium');
            buttonEl.classList.remove('product__button--medium');
        }

        const addCart = document.querySelector ('.modal--hidden');
        const closeModal = document.querySelector ('.modal__close');
        const nextBay = document.querySelector ('.modal__continue');

        const addProductCart = function () {
            addCart.classList.remove('modal--hidden--open');
            closeModal.removeEventListener('click', addProductCart);
            nextBay.removeEventListener('click', addProductCart);
        };

        buttonEl.addEventListener('click', function () {
            addCart.classList.add('modal--hidden--open');
            closeModal.addEventListener('click', addProductCart);
            nextBay.addEventListener('click', addProductCart);
        });

        buttonEl.addEventListener('click', () => {
            addToStorage('cart', product);
            renderCart();
        });


        if(status?.length) {
            itemEl.querySelector('.product').classList.add(`product--${status}`);
        }

        fragment.appendChild(itemEl);
    });




    target.innerHTML = '';
    target.append(fragment);

};
