
const buttonOpened = document.querySelector ('.header__button--burger');
const buttonClose = document.querySelector('.header__close');
const actionBurger = document.querySelector('.header__nav');

// const buttonOpenProductBig = document.querySelector('.product__button');
// const buttonCloseProduct = document.querySelector('.modal__close');
// const buttonCloseNext = document.querySelector('.modal__continue');
// const buttonProductMedium = document.querySelectorAll('.product__button--medium');
// const openModalProduct = document.querySelector('.modal--hidden');
// const closeModalProduct = document.querySelector('.modal--hidden');

export const closeModal = function () {
    actionBurger.classList.remove('header__nav--showed');
    buttonClose.removeEventListener('click', 'closeModal');
};

buttonOpened.addEventListener('click', function () {
    actionBurger.classList.add('header__nav--showed');
    buttonClose.addEventListener('click', closeModal);
});

//
//
// export const closeProduct = function () {
//     closeModalProduct.classList.remove('modal--hidden--open');
//     buttonCloseProduct.removeEventListener('click', closeProduct);
//     buttonCloseNext.removeEventListener('click', closeProduct);
// };
//
// buttonOpenProductBig.addEventListener('click', function () {
//     openModalProduct.classList.add('modal--hidden--open');
//     buttonCloseProduct.addEventListener('click', closeProduct);
//     buttonCloseNext.addEventListener('click', closeProduct);
// });
//
//
// buttonProductMedium.forEach(
//     (buttonProductMedium) => {
//         buttonProductMedium.addEventListener('click', () => {
//             openModalProduct.classList.add('modal--hidden--open');
//             buttonCloseProduct.addEventListener('click', closeProduct);
//             buttonCloseNext.addEventListener('click', closeProduct);
//         });
//     });
