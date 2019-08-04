
//Задача №1
function convert(){
let data = +prompt("Введите число");
let mass = {};
if (data<=-999 || data <= 999){
    var st = String(data);
    m = st.split("");
    mass.units = m[0];
    mass.decades = m[1];
    mass.hundreds = m[2];
    console.log(mass);
}
else{
    console.log("Введено число с большим количеством знаков");
    console.log(mass);
};
}
convert();

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
    putProduct: function(item){
        this.goodList[item] = Object.assign({}, tovar[item]);
        }
    }
for (var i = 0; i<tovar.length; i++){
    basket.putProduct(i);
    if (i%2 !== 0){
        basket.goodList[i].count = 2;
    }
    else {
        basket.goodList[i].count = 1
    }
}
console.log(basket.countTotalPrice());
console.log(basket.countTotalNumber());
