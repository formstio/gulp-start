
const buttonOpened = document.querySelector ('.header__button--shop-cart');
const buttonClose = document.querySelector('.shopping-cart__close');
const actionBurger = document.querySelector('.shopping-cart');

export const actionModal = function () {
    actionBurger.classList.remove('shopping-cart--active');
    buttonClose.removeEventListener('click', actionModal);
};

buttonOpened.addEventListener('click', function () {
    actionBurger.classList.add('shopping-cart--active');
    buttonClose.addEventListener('click', actionModal);
});


const orderButton = document.querySelector ('#order-button');
const closeModal = document.querySelector ('.modal__close');
const modalDone = document.querySelector ('.modal--hidden-done');
const nextBay = document.querySelector ('.modal__continue');

export const addProduct = function () {
    modalDone.classList.remove('modal--hidden-done--open');
    closeModal.removeEventListener('click', addProduct);
    nextBay.removeEventListener('click', addProduct);
};

orderButton.addEventListener('click', function () {
    modalDone.classList.add('modal--hidden-done--open');
    closeModal.addEventListener('click', addProduct);
    nextBay.addEventListener('click', addProduct);
});

const addToCart = document.querySelectorAll ('.product__button');
const modalAddCart = document.querySelector ('.modal--hidden');


export const addProductCart = function () {
    modalAddCart.classList.remove('modal--hidden--open');
    closeModal.removeEventListener('click', addProductCart);
};

addToCart.forEach(addToCart => {
    addToCart.addEventListener('click', function () {
        modalAddCart.classList.add('modal--hidden--open');
        closeModal.addEventListener('click', addProductCart);
    });
});

