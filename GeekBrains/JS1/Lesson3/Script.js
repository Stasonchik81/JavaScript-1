//Задание №1
/*
let a = [[{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age:11}], 
[{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age:22}], 
[{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age:19}]];

var b = new Array(a.length);
for (let i = 0; i < b.length; i++){
    b[i] = new Array();
    for (let j = 0; j < a[i].length; j++){
        b[i].push(Object.assign({}, a[i][j]));
    }
    console.log(b[i]);
}
a[0][0].name = 'Garry';
console.log(a[0][0]);
console.log(b[0][0]);
*/
// Задание №2

var basket = new Array();
function Product(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
for (let i = 0; i<3; i++){
    let product = new Product(prompt("Введите название прдукта"), +prompt("Введите цену"), +prompt("Введите количество"));
    basket.push(product);
}
console.log(countBasketPrice(basket));
function countBasketPrice(basket){
    let totalPrice = 0;
    basket.forEach(function(el){
        totalPrice += el.price * el.count;
     });
     return totalPrice;
}

// Задание №3
/*
for(let i = 0; i<=9; console.log(i), i++){ 
}
*/
// Задание №4

function repeat (myString){
    for (i = 1; i<=20; i++){
        console.log(myString.repeat(i));
    }
}
let myString = '*';
repeat(myString);


 
