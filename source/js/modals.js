
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




// const orderButton = document.querySelector ('#order-button');
// const closeModal = document.querySelector ('.modal__close');
// const nextBay = document.querySelector ('.modal__continue');
// const modal = document.querySelector ('.modal');
//
// export const addProduct = function () {
//     modal.classList.remove('modal_cart_order-done');
//     closeModal.removeEventListener('click', addProduct);
//     nextBay.removeEventListener('click', addProduct);
// };
//
// orderButton.addEventListener('click', function () {
//     modal.classList.add('modal--hidden--open');
//     closeModal.addEventListener('click', addProduct);
//     nextBay.addEventListener('click', addProduct);
// })

