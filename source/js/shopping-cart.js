import {getStorage, addToStorage, removeFromStorage} from './localstorage.js';

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
        } else {
            const cart = JSON.parse(localStorage.getItem('cart'));
            const index = cart.findIndex(item => item.id === product.id);
            if (index !== -1) {
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                clone.remove();
            }
        }
        renderCart();
    }
}

export const renderCart = () => {
    const data = getStorage('cart');

    if(!data?.length) {
        const target = document.querySelector('.shopping-cart__list-wrapper');
        target.innerHTML = '';
        const cartEmpty = document.querySelector('.shopping-cart__cart-empty');
        cartEmpty.classList.remove('shopping-cart__cart-empty');
        cartEmpty.classList.add('shopping-cart__cart-empty--hidden');
        target.append(cartEmpty);
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

        function removeCartFromLocalstorage() {
            const cart = JSON.parse(localStorage.getItem('cart'));
            if (cart && cart.length === 0) {
                localStorage.removeItem('cart');
                document.querySelector('.shopping-cart__amount > span').textContent = '0';
                document.querySelector('.shopping-cart__total-amount > span').textContent = '0';
                document.querySelector('.header__count').textContent = '0';
                document.querySelector('.header__count').classList.remove('header__count-red');
            }
        }
        clone.querySelector('.shopping-cart__delete').addEventListener('click', () => {
            const productId = product.id;
            const cart = JSON.parse(localStorage.getItem('cart'));
            const newCart = cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(newCart));
            clone.remove();
            removeCartFromLocalstorage();
            renderCart();
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

    const cartIndex = document.querySelector('.header__count');
    const cart = document.querySelector('.header');

    function updateCartIndex() {
        const cartCount = cart.children.length;
        if (cartCount > 0) {
            cartIndex.classList.add('header__count-red');
        } else {
            cartIndex.classList.remove('header__count-red');
        }
    }

    updateCartIndex();

};

renderCart();
