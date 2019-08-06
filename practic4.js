
//Задача №1
let data = prompt("Введите число");
function convertNumber(data){
if (data > 999 || data < 1 || isNaN(data)){
    console.log("Ошибка ввода, введите число от 1 до 999");
    return {};
}
    let hundreds = (data - data % 100) / 100;
    let decades = (data % 100 - data % 10) / 10;
    let units = data % 10;
    return {
       "hundreds" : hundreds,
        "decades" : decades,
        "units" : units
    };
}
var res = convertNumber(data);
console.log(res);

//Задача №2
let tovar = [{name: 'apples', price: 100}, {name: 'pears', price: 300}, {name: 'oranges', price: 150}, {name: 'grape', price: 200}];
let basket = {
   goodList: [],
   countTotalPrice: function(){
        let totalCost = 0;
        this.goodList.forEach(function(item){
            totalCost += item.price * item.count;
        })
       return totalCost;
    },
    countTotalNumber: function(){
        let totalCount = 0;
        this.goodList.forEach(function(item){
            totalCount += item.count;
        })
        return totalCount;
    },
    putProduct (product, count){
        let ind = this.goodList.findIndex(function(element){
            return element.name === product.name;
        });
        if (ind === -1) {
            this.goodList.push(Object.assign({}, product));
            this.goodList[this.goodList.length - 1].count = count;
        }
        else {
            this.goodList[ind].count += count;
        }
    }
};
for (var i = 0; i<tovar.length; i++){
    if (i%2 !== 0){
        basket.putProduct(tovar[i], 2);
    }
    else {
        basket.putProduct(tovar[i], 1);
    }
}
console.log(basket.countTotalPrice());
console.log(basket.countTotalNumber());
