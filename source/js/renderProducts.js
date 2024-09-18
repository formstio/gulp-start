
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
        const productItem = itemEl.querySelector('.product');
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

        if(isBig) {
            productItem.classList.add('product--big');
            itemEl.classList.add('best-selling__product--big');
        } else {
            itemEl.classList.add('product');
        }

        if(status?.length) {
            itemEl.classList.add(`product--${status}`);
        }

        fragment.appendChild(itemEl);
    });




    target.innerHTML = '';
    target.append(fragment);

};
