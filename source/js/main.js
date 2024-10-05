import {fetchApi} from './api.js';
import renderProducts from './renderProducts.js';
import './shopping-cart.js';
import './modals.js';
import {closeModal} from './menu.js';





const productsList = document.querySelector('.best-selling__wrapper');
const productsTemplate = document.querySelector('#product').content;

const parseApi = await fetchApi('https://zsa-studio.ru/catalog.php');
renderProducts(parseApi, productsTemplate, productsList, false, 'best-selling__product');