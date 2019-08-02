//задача №1
let a = [
 [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
 [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
 [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];
let b = [];
for (var i = 0; i<a.length; i++){
    b[i]=a[i].slice();
    for (var j = 0; j<a[i].length; j++){
        b[i][j]=Object.assign({}, a[i][j]);
    }
}
// Задача №2
let goods = [{name: 'apples', price: 100, count: 2}, {name: 'pears', price: 300, count: 3}, {name: 'oranges', price: 150, count: 4}];
function countBasketPrice (goods){
    let totalCost = 0;
    goods.forEach(function(item){
        totalCost += item.price * item.count;
    });
    return totalCost;
}
countBasketPrice(goods);
console.log(countBasketPrice(goods));

//Задача №3 ( Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.)
for (let i = 0; i<10; console.log(i++)){}

//Задача №4 (Нарисовать пирамиду из 20 рядов с помощью console.log, как показано на рисунке:)
let symb = "";
for (i=0; i<20; i++){
    symb += '*';
    console.log(symb);
}
