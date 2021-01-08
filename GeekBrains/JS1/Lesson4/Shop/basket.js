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


let basket = {
    goodList: [],
    putProduct(allProducts){
        allProducts.forEach(function(el,ind) 
        {
            if (ind % 2 === 0){
                el.count = 1;
                basket.goodList.push(Object.assign({}, el));
            }
            else {
                el.count = 2;
                basket.goodList.push(Object.assign({}, el));
            }
        });     
    },
    countTotalNumber(goodList){
        result = 0;
        goodList.forEach(function(el,ind){
            result += el.count;
        });
        return result;
    },
    countTotalPrice(goodList){
        result = 0;
        goodList.forEach(function(el){
            result += el.price;
        });
    },

}
basket.putProduct(allProducts);
var x = basket.countTotalNumber(basket.goodList);
var y = basket.countTotalPrice(basket.goodList);
console.log(basket.goodList);
console.log(x);
//console.log(y);
/*
console.log(countBasketPrice(basket));
function countBasketPrice(basket){
    let totalPrice = 0;
    basket.forEach(function(el){
        totalPrice += el.price;
     });
     return totalPrice;
}
*/