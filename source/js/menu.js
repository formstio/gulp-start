
const buttonOpened = document.querySelector ('.header__button--burger');
const buttonClose = document.querySelector('.header__close');
const actionBurger = document.querySelector('.header__nav');

export const closeModal = function () {
    actionBurger.classList.remove('header__nav--showed');
    buttonClose.removeEventListener('click', 'closeModal');
};

buttonOpened.addEventListener('click', function () {
    actionBurger.classList.add('header__nav--showed');
    buttonClose.addEventListener('click', closeModal);
});

