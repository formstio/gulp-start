import products from './products.js';
import renderProducts from './renderProducts.js';


const productsList = document.querySelector('.best-selling__wrapper');
const productsTemplate = document.querySelector('#product').content;

renderProducts(products, productsTemplate, productsList, false, 'best-selling__product');