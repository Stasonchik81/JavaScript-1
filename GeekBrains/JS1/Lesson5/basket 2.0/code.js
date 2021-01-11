// Создание списка товаров
// let allProducts = [];
// for (let i = 0; i<5; i++){
//     allProducts.push({name: prompt("Введите название прдукта"), price: +prompt("Введите цену")});
// }
let allProducts = [{name: "молоко", price: 38},
{name: "кефир", price: 23},
{name: "йогурт", price: 12},
{name: "яблоки", price: 26},
{name: "помидоры", price: 28},
{name: "огурцы", price: 21},
{name: "пряники", price: 16},
{name: "лимонад", price: 10}]


// Наполнение корзины в автомате____

allProducts.forEach(function(el,ind) 
{
    if (ind % 2 === 0){
        el.count = 1;
        basket.putProduct(el, el.count);
    }
    else {
        el.count = 2;
        basket.putProduct(el, el.count);
    }
});
let all_count = basket.countTotalNumber();
let all_price = basket.countTotalPrice();
renderer.renderProduct(basket.goodList);