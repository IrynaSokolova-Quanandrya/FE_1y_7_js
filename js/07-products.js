import products from './data/proucts.js';

/*
 * Створюємо карточку продукту
 * 
 */

{
  /*
<article class="product">
  <h2 class="product__name">Назва</h2>
  <p class="product__descr">Опис</p>
  <p product__pridct>Ціна: 1111 кредитів</p>
</article>
*/
}

const createArticle = function({name, description, price}){
  console.log(name, description, price);

  const articleEl = document.createElement('article');
  articleEl.classList = 'product';

  const productName = document.createElement('h2');
  productName.classList = 'product__name';
  productName.textContent = name;

  const producDescr = document.createElement('p');
  producDescr.classList= 'product__descr';
  producDescr.textContent = description;

  const productPridict = document.createElement('p');
  productPridict.classList = 'product__pridict';
  productPridict.textContent = `Ціна: ${price} кредитів`;

    articleEl.append(productName, producDescr, productPridict);

    return articleEl;
}

// console.log(createArticle(products[0]));

const elements = products.map(createArticle)

const containerEl = document.querySelector('.js-products')

containerEl.append(...elements);

console.log(containerEl);
// console.log();

/*
 * Пишемо функцію для створення карточки продукту
 */

// const productsContainerEl = document.querySelector('.js-products');

// const makeProductCard = ({ name, description, price }) => {
//   const productEl = document.createElement('article');
//   productEl.classList.add('product');

//   const nameEl = document.createElement('h2');
//   nameEl.textContent = name;
//   nameEl.classList.add('product__name');

//   const descrEl = document.createElement('p');
//   descrEl.textContent = description;
//   descrEl.classList.add('product__descr');

//   const priceEl = document.createElement('p');
//   priceEl.textContent = `Цена: ${price} кредитов`;
//   priceEl.classList.add('product__price');

//   productEl.append(nameEl, descrEl, priceEl);

//   return productEl;
// };

// const elements = products.map(makeProductCard);

// console.log(elements);
// productsContainerEl.append(...elements);
