import products from './products.js';
import renderProducts from './renderProducts.js';


const productsList = document.querySelector('.products__list');
const productsTemplate = document.querySelector('#product').content;

renderProducts(products, productsTemplate, productsList, true, 'products__list');