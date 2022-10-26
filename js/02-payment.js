/*
 * Порахувати загальну суму покупок в корзині
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

for (const price of cart) {
    console.log('price: ', price);

    total += price;    

    console.log('total на кожній ітерації: ',  total);
}
console.log('total: ', total);

// Додати такс

