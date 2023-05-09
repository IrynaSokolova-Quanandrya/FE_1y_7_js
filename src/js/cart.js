/*
Створити простий інтернет-магазин з можливістю додавання 
товарів у кошик, оформлення замовлення та оплати.

Технічні вимоги:

1. Товар зберігається в db.json
2. На головній сторінці має бути відображений список всіх товарів, 
    де можна переглянути їхні зображення та назви.
3. Після кліку на товар користувач може переглянути детальну 
    інформацію про товар (назва, опис, ціна, зображення).
4. Можливість додавання товарів до кошика. Кошик повинен 
    відображати всі додані товари з їхніми назвами та цінами.
5. Після оформлення замовлення користувач повинен бути 
    перенаправлений на сторінку з оплатою. Для цього необхідно 
    заповнити форму з інформацією про замовлення (ім'я, електронна 
    адреса, адреса доставки тощо).
8. Після успішної оплати користувач повинен отримати повідомлення 
    про успішне оформлення замовлення.
*/
const productsList = document.querySelector('.products-js');


getAllProducts()
.then(products=> {
    const items = products.map(createProductsItem);
    productsList.insertAdjacentHTML("beforeend", ...items);
})

async function getAllProducts() {
    const res = await fetch('http://localhost:3000/products');
    const productData =  await res.json();

    return productData;
}

function createProductsItem({image, name}) {
    return `<li class="item">
                <img width="250" src="${image}" alt="${name}">
                <p class="name">${name}</p>
                <button type="button">Додати в кошик</button>
            </li>
            `   
}

