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
    putProduct(prod, count){
        let idx = this.goodList.findIndex(function(el){
            return el.name === prod.name;
        });
        if(idx === -1){
            basket.goodList.push(Object.assign({}, prod));
            this.goodList[this.goodList.length-1].count = count;
        }
        else{
            basket.goodList[idx].count += count;
        }     
    },
    countTotalNumber(){
        let result = 0;
        basket.goodList.forEach(function(el){
            result += el.count;
        });
        return result;
    },
    countTotalPrice(){
        let result = 0;
        basket.goodList.forEach(function(el){
            result += el.price * el.count;
        });
        return result;
    },

}
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
var x = basket.countTotalNumber();
var y = basket.countTotalPrice();
console.log(basket.goodList);
console.log(x);
console.log(y);
