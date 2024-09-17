
const buttonOpened = document.querySelector ('.header__button--burger');
const buttonClose = document.querySelector('.header__close');
const openBurger = document.querySelector('.header__nav');
const closeBurger = document.querySelector('.header__nav');

const buttonOpenProductBig = document.querySelector('.product__button--big');
const buttonCloseProduct = document.querySelector('.modal__close');
const buttonCloseNext = document.querySelector('.modal__continue');
const buttonProductMedium = document.querySelectorAll('.product__button--medium');
const openModalProduct = document.querySelector('.modal--hidden');
const closeModalProduct = document.querySelector('.modal--hidden');

const closeModal = function () {
    closeBurger.classList.remove('header__nav--showed');
    buttonClose.removeEventListener('click', 'closeModal');
};

buttonOpened.addEventListener('click', function () {
    openBurger.classList.add('header__nav--showed');
    buttonClose.addEventListener('click', closeModal);
});



const closeProduct = function () {
    closeModalProduct.classList.remove('modal--hidden--open');
    buttonCloseProduct.removeEventListener('click', closeProduct);
    buttonCloseNext.removeEventListener('click', closeProduct);
};

buttonOpenProductBig.addEventListener('click', function () {
    openModalProduct.classList.add('modal--hidden--open');
    buttonCloseProduct.addEventListener('click', closeProduct);
    buttonCloseNext.addEventListener('click', closeProduct);
});


buttonProductMedium.forEach(
    (buttonProductMedium) => {
        buttonProductMedium.addEventListener('click', () => {
        openModalProduct.classList.add('modal--hidden--open');
        buttonCloseProduct.addEventListener('click', closeProduct);
        buttonCloseNext.addEventListener('click', closeProduct);
    });
});
